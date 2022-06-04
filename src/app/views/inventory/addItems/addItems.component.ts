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
  } from '@angular/forms';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { ValidatorFn, ValidationErrors } from '@angular/forms';
  import { ValidationFormsService } from './validation-forms.service';
  import { CommonDataService } from '../../../Common/common-data.service';
  import { DataService } from '../../../service/data.service';
  import { Router } from '@angular/router';
  import { AddItems } from './addItem';
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
    templateUrl: './addItems.component.html',
    styleUrls: ['./addItems.component.css'],
    providers: [ValidationFormsService],
  })

  export class AddItemsComponent implements OnDestroy, OnInit {
    addItems:any = {};
    entryForm: FormGroup;
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
      { header: 'Merchant Info', panel: this.lorem[0], icon: 'cil-user' },
      { header: 'Payment Info', panel: this.lorem[1], icon: 'cil-mobile' },
      { header: 'Payment Gateway', panel: this.lorem[1], icon: 'cil-credit-card' },
      
      //{ header: 'Certificates', panel: this.lorem[3], icon: 'cil-envelope-closed' },
    ];
  
    public get tabs() {
      // const tabs = this._tabs.map((item) => Object.assign(Object.create(null), item));
      // console.log('tabs:', tabs);
      // return tabs;
      return this._tabs;
    }
  
    public get tabs2() {
      // const tabs = this._tabs.map((item) => Object.assign(Object.create(null), item));
      // console.log('tabs:', tabs);
      // return tabs;
      return this._tabs.filter((tab) => !tab.disabled);
    }
  
    simpleForm: FormGroup;
    submitted = false;
    formErrors: any;
  
    constructor(private fb: FormBuilder, public vf: ValidationFormsService, private service: DataService, private commonData: CommonDataService,private router: Router, ) {
      this.formErrors = this.vf.errorMessages;
      this.createForm();
    }
  
    ngOnInit() {
  
    }
  
    ngOnDestroy(): void {
      // clearInterval(this.interval);
    }
  
  
  
    onTabChange(e) {
      console.log('onTabChange', e);
    }
  
    createForm() {
      this.simpleForm = this.fb.group(
        {         
          active : ['', [Validators.required]],
          category : ['', [Validators.required]],
          costPrice : ['', [Validators.required]],
          description : ['', [Validators.required]],
          discount : ['', [Validators.required]],
          gst : ['', [Validators.required]],
          itemId: ['', [Validators.required]],
          merchantId : ['', [Validators.required]],
          name : ['', [Validators.required]],
          sellPrice : ['', [Validators.required]],
          threshold : ['', [Validators.required]],
        },
      );
    }
  
    // convenience getter for easy access to form fields
    get f() {
      return this.simpleForm.controls;
    }
  
    onReset() {
      this.submitted = false;
      this.simpleForm.reset();
    }
  
    onValidate() {
      this.submitted = true;
  
      // stop here if form is invalid
      return this.simpleForm.status === 'VALID';
    }
  
    onAddItems(addItems : AddItems){
      debugger;
      this.service.AddItems(addItems).subscribe((resp: any) => {
        console.log("login Reponse:::" + JSON.stringify(resp));
        if(resp && resp.statusCode == 200) {
            console.log("Sucess")
            alert('SUCCESS!');
        }    
      });
    }
  
    onSubmit() {
      debugger;
      //console.warn(this.onValidate(), this.simpleForm.value);
      if (this.onValidate()) {
        console.warn(this.simpleForm.value);
        alert('SUCCESS!');
      }
    }
  }
  




  