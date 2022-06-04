import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
  FormGroupName,
  FormArray
} from '@angular/forms';

import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { ValidationFormsService } from './validation-forms.service';
import { CommonDataService } from '../../Common/common-data.service';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { Business } from './business';
/** passwords must match - custom validator */
export const confirmPasswordValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirmPassword');
  return password && confirm && password.value === confirm.value
    ? null
    : { passwordMismatch: true };
};

@Component({
  selector: 'app-tabs',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  //providers: [ValidationFormsService],
})
export class ConfigurationComponent implements OnDestroy, OnInit, OnChanges {
  customer:any = {};
  simpleForm: FormGroup;
  lessonForm: FormGroup;
  submitted = false;
  formErrors: any;
  msg:string;
  showModal: boolean;
  registerForm: FormGroup;
  bodyText: string;
  ica:any = {};
  private fieldArray: Array<any> = [];
    private newAttribute: any = {};

    private icaArray: Array<any> = [];
    private newicaAttribute: any = {};

  private _setTab: number;
  get setTab() {
    return this._setTab;
  }
  set setTab(value: number) {
    this._setTab = value || 0;
  }
  private interval;

  private _lorem: string[] = [
      ];
  public get lorem() {
    return [...this._lorem];
  }
  private _tabs: any[] = [
    { header: 'Technical Configuration', panel: this.lorem[0], icon: 'cil-user' },
    { header: 'Business Configuration', panel: this.lorem[1], icon: 'cil-home' },
    { header: 'General Configuration', panel: this.lorem[2], icon: 'cil-mobile' }
    
    ,
  ];
  public get tabs() {
    return this._tabs;
  }
  public get tabs2() {
    return this._tabs.filter((tab) => !tab.disabled);
  }

  //FormArray

  form = this.fb.group({
    lessons: this.fb.array([])
});

  constructor(private fb: FormBuilder, public vf: ValidationFormsService, private service: DataService, private commonData: CommonDataService,private router: Router, ) {
    this.formErrors = this.vf.errorMessages;
    this.createForm();
    this.addLesson();
    this.setTab = 0;
  }

  //FormArray

  get lessons() {
    return this.form.controls["lessons"] as FormArray;
  }

  addLesson() {
      this.lessonForm = this.fb.group({
        asn: ['', [Validators.required]],
        iid: ['', [Validators.required]],
        itp: ['', [Validators.required]],
        spn: ['', [Validators.required]],
      });
      this.lessons.push(this.lessonForm);
    }

    deleteLesson(lessonIndex: number) {
      this.lessons.removeAt(lessonIndex);
    }

  ngOnInit() {

  }

  ngOnDestroy(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes, this.setTab);
  }

  onTabChange(e) {
    console.log('onTabChange', e);
  }

  createForm() {
    this.simpleForm = this.fb.group(
      {
        cid: ['', [Validators.required]],
        crc: ['', [Validators.required]],
        ica: ['', [Validators.required]],

         asn: ['', [Validators.required]],
         iid: ['', [Validators.required]],
         itp: ['', [Validators.required]],
         spn: ['', [Validators.required]],
        imx: ['', [Validators.required]],
        key: ['', [Validators.required]],
        mid: ['', [Validators.required]],
        qmx: ['', [Validators.required]],

        loginId: [
          '',
          [
            Validators.required,
            Validators.minLength(this.vf.formRules.usernameMin),
            Validators.pattern(this.vf.formRules.nonEmpty),
          ],
        ],
        merchantId: ['', [Validators.required]],
        companyName: ['', [Validators.required]],
        billingPlan: ['', [Validators.required]],
        panNo: ['', [Validators.required]],
        gstNo: ['', [Validators.required]],
        phone: ['', [Validators.required]],       
        address: ['', [Validators.required]],
        country: ['', [Validators.required]],
        pincode: ['', [Validators.required]],        
        primaryContact: ['', [Validators.required]],
        secondaryContact: ['', [Validators.required]],
        // email: ['', [Validators.required, Validators.email]],

        keys: ['', [Validators.required]],
        mids: ['', [Validators.required]],
        nss: ['', [Validators.required]],
        nse: ['', [Validators.required]],
        cdf: ['', [Validators.required]],
        bdf: ['', [Validators.required]],
        mff: ['', [Validators.required]],
        mcf: ['', [Validators.required]],
        mtp: ['', [Validators.required]],
        mlc: ['', [Validators.required]],
        mhc: ['', [Validators.required]],
        dsf: ['', [Validators.required]],
        dsc: ['', [Validators.required]],
        gps: ['', [Validators.required]],
        gsm: ['', [Validators.required]],
        wfi: ['', [Validators.required]],
        psf: ['', [Validators.required]],
        nmc: ['', [Validators.required]],
        ssc: ['', [Validators.required]],
        mrp: ['', [Validators.required]],
        sec: ['', [Validators.required]],
        dec: ['', [Validators.required]],
        mec: ['', [Validators.required]],
        tsf: ['', [Validators.required]],
        asl: ['', [Validators.required]],
        bst: ['', [Validators.required]],
        dfc: ['', [Validators.required]],
        wsn: ['', [Validators.required]],
        wpd: ['', [Validators.required]],
        pid: ['', [Validators.required]],
        mac: ['', [Validators.required]],




      },
      { validators: confirmPasswordValidator }
    );
  }

  get f() {
    return this.simpleForm.controls;
  }

  onReset() {
    this.submitted = false;
    this.simpleForm.reset();
  }

  onValidate() {
    this.submitted = true;
    return this.simpleForm.status === 'VALID';
  }

  onSaveBusiness(business : Business){
    console.log(business);
    debugger;
    this.service.saveBusiness(business).subscribe((resp: any) => {
      console.log("login Reponse:::" + JSON.stringify(resp));
      if(resp && resp.statusCode == 200) {
          console.log("Sucess")
          alert('SUCCESS!');
      }    
    });
  }

  onSaveTech(business : Business){
    debugger;
    this.service.saveTech(business).subscribe((resp: any) => {
      console.log("login Reponse:::" + JSON.stringify(resp));
      if(resp && resp.statusCode == 200) {
          console.log("Sucess")
          alert('SUCCESS!');
      }    
    });
  }

  onSubmit() {
    debugger;
    if (this.onValidate()) {
      console.warn(this.simpleForm.value);
      alert('SUCCESS!');
    }
  }

  showing() { 
    debugger;
    this.showModal = true;
  }
 
  hide()
  {
    debugger;
    this.showModal = false;
  }

    addFieldValue() {
      debugger;
        this.fieldArray.push(this.newAttribute)
        console.log( this.fieldArray)
        this.newAttribute = {};
        console.log( this.fieldArray)
    }

    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }


    icaFieldValue(icaArray) {
      debugger;
      this.icaArray.push(this.newicaAttribute)
      this.newicaAttribute = {};
  }


}

