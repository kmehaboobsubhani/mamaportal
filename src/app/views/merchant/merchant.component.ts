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

import { ValidatorFn, ValidationErrors } from '@angular/forms';
import { ValidationFormsService } from './validation-forms.service';
import { CommonDataService } from '../../Common/common-data.service';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { Customer } from './customer';
import { ViewEncapsulation } from '@angular/core';
import { createAutoCorrectedDatePipe } from 'text-mask-addons';
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
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css'],
  providers: [ValidationFormsService],
})
export class MerchantComponent implements OnDestroy, OnInit, OnChanges {

  public dateModel = '';
  public dateMask = {
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    pipe: createAutoCorrectedDatePipe('mm/dd/yyyy'),
    placeholder: 'Please enter a date',
    keepCharPositions: true,
  };

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2022, 9, 15);

  bsValue: Date = new Date();
  bsRangeValue: any = [new Date(2020, 7, 4), new Date(2020, 7, 20)];

  customer:any = {};
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
    { header: 'Payment Gateway', panel: this.lorem[2], icon: 'cil-credit-card' },
    
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
    this.setTab = 0;
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    // clearInterval(this.interval);
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
        merchantName: ['', [Validators.required]],
        loginId: [
          '',
          [
            Validators.required,
            Validators.minLength(this.vf.formRules.loginIdMin),
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
        primaryName: ['', [Validators.required]],
        primaryPhone: ['', [Validators.required]],
        primaryEmail: ['', [Validators.required]],
        
        secondaryContact: ['', [Validators.required]],
        secondaryName: ['', [Validators.required]],
        secondaryPhone: ['', [Validators.required]],
        secondaryEmail: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],


        date:['', [Validators.required]],
        modeofPayment:['', [Validators.required]],
        details:['', [Validators.required]],
        amount:['', [Validators.required]],


        paymentgateway:['', [Validators.required]],
        user:['', [Validators.required]],
        password:['', [Validators.required]],
        testapikey:['', [Validators.required]],
        productionapikey:['', [Validators.required]],
        callbackUrl:['', [Validators.required]],
        paymentNotificationUrl:['', [Validators.required]],
        successNotificationUrl:['', [Validators.required]],
        acceptNotificationUrl:['', [Validators.required]],
        remarksNotificationUrl:['', [Validators.required]],

      },
      { validators: confirmPasswordValidator }
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

  onSaveMerchant(customer : Customer){
    debugger;
    this.service.saveCustomers(customer).subscribe((resp: any) => {
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
