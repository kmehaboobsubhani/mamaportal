import { Component } from '@angular/core';
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
  selector: 'app-business-technical',
  templateUrl: './business-technical.component.html',
  styleUrls: ['./business-technical.component.css'],
  providers: [ValidationFormsService],
})
export class BusinessTechnicalComponent {
  simpleForm: FormGroup;
  submitted = false;
  formErrors: any;
  showModal: boolean;
  registerForm: FormGroup;
  entryForm: FormGroup;
  private _tabs: any[] = [
    
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

  constructor(private fb: FormBuilder, public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;
    this.createForm();
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

  createForm() {
    this.simpleForm = this.fb.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(this.vf.formRules.usernameMin),
            Validators.pattern(this.vf.formRules.nonEmpty),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(this.vf.formRules.passwordMin),
            Validators.pattern(this.vf.formRules.passwordPattern),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        accept: [false, [Validators.requiredTrue]],
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

  onSubmit() {
    console.warn(this.onValidate(), this.simpleForm.value);

    if (this.onValidate()) {
      // TODO: Use EventEmitter with form value
      console.warn(this.simpleForm.value);
      alert('SUCCESS!');
    }
  }

  onSubmits() {
    console.warn(this.onValidate(), this.simpleForm.value);

    if (this.onValidate()) {
      // TODO: Use EventEmitter with form value
      console.warn(this.simpleForm.value);
      alert('SUCCESS!');
    }
  }
}
