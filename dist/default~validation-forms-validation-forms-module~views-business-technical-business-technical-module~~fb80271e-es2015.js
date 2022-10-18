(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~validation-forms-validation-forms-module~views-business-technical-business-technical-module~~fb80271e"],{

/***/ "/IZ/":
/*!****************************************************************************!*\
  !*** ./src/app/views/forms/validation-forms/validation-forms.component.ts ***!
  \****************************************************************************/
/*! exports provided: confirmPasswordValidator, ValidationFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsComponent", function() { return ValidationFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_validation_forms_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./validation-forms.component.html */ "8Sh0");
/* harmony import */ var _validation_forms_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation-forms.component.scss */ "jyzX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-forms.service */ "9LDj");






/** passwords must match - custom validator */
const confirmPasswordValidator = (control) => {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
    return password && confirm && password.value === confirm.value
        ? null
        : { passwordMismatch: true };
};
let ValidationFormsComponent = class ValidationFormsComponent {
    constructor(fb, vf) {
        this.fb = fb;
        this.vf = vf;
        this.submitted = false;
        this.formErrors = this.vf.errorMessages;
        this.createForm();
    }
    createForm() {
        this.simpleForm = this.fb.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            username: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.vf.formRules.usernameMin),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.vf.formRules.nonEmpty),
                ],
            ],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.vf.formRules.passwordMin),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.vf.formRules.passwordPattern),
                ],
            ],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accept: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]],
        }, { validators: confirmPasswordValidator });
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
};
ValidationFormsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"] }
];
ValidationFormsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_validation_forms_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"]],
        styles: [_validation_forms_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"]])
], ValidationFormsComponent);



/***/ }),

/***/ "8Sh0":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forms/validation-forms/validation-forms.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col md=\"12\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Form Validation\r\n        </c-card-header>\r\n        <c-card-body>Angular Form Validation\r\n          <hr>\r\n          <c-row>\r\n            <c-col md=\"6\" >\r\n              <h6>Simple Form</h6>\r\n              <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\r\n                <c-form-group>\r\n                  <label class=\"col-form-label\" for=\"firstName\">First name</label>\r\n                  <input cInput\r\n                         id=\"firstName\"\r\n                         formControlName=\"firstName\"\r\n                         placeholder=\"First name\"\r\n                         autocomplete=\"given-name\"\r\n                         required\r\n                         [autofocus]=\"true\"\r\n                         [ngClass]=\"{ 'is-invalid': (submitted || f.firstName.touched) && f.firstName.invalid, 'is-valid': f.lastName.touched && f.firstName.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['firstName'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['firstName'].errors.required\">First Name is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n                <c-form-group>\r\n                  <label class=\"col-form-label\" for=\"lastName\">Last name</label>\r\n                  <input cInput\r\n                         id=\"lastName\"\r\n                         formControlName=\"lastName\"\r\n                         placeholder=\"Last name\"\r\n                         autocomplete=\"family-name\"\r\n                         required\r\n                         [ngClass]=\"{ 'is-invalid':  (submitted || f.lastName.touched) && f.lastName.invalid, 'is-valid': f.lastName.touched && f.lastName.valid }\" />\r\n                  <div *ngIf=\"submitted && f['lastName'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['lastName'].errors.required\">Last Name is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n                <c-form-group>\r\n                  <label class=\"col-form-label\" for=\"username\">Username</label>\r\n                  <input cInput\r\n                         id=\"username\"\r\n                         formControlName=\"username\"\r\n                         placeholder=\"Username\"\r\n                         autocomplete=\"username\"\r\n                         required\r\n                         [ngClass]=\"{ 'is-invalid': (submitted || f.username.touched) && f.username.errors, 'is-valid': f.username.touched && !f.username.errors }\" />\r\n                  <div *ngIf=\"submitted && f['username'].errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['username'].errors.required\">Username is required</div>\r\n                    <div *ngIf=\"f['username'].errors.minlength\">{{formErrors.username.minLength}}</div>\r\n                    <div *ngIf=\"f['username'].errors.pattern\">{{formErrors.username.pattern}}</div>\r\n                  </div>\r\n                </c-form-group>\r\n                <c-form-group>\r\n                  <label class=\"col-form-label\" for=\"email\">Email</label>\r\n                  <input cInput\r\n                         id=\"email\"\r\n                         type=\"email\"\r\n                         formControlName=\"email\"\r\n                         placeholder=\"Email\"\r\n                         autocomplete=\"email\"\r\n                         required\r\n                         [ngClass]=\"{ 'is-invalid': (submitted || f.email.touched) && f.email.invalid, 'is-valid': f.email.touched && f.email.valid }\" />\r\n                  <div *ngIf=\"submitted && f['email'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['email'].errors.required\">Email is required</div>\r\n                    <div *ngIf=\"f['email'].errors.email\">{{formErrors.email.email}}</div>\r\n                  </div>\r\n                </c-form-group>\r\n                <c-row>\r\n                  <c-form-group cCol md=\"6\" >\r\n                    <label class=\"col-form-label\" for=\"password\">Password</label>\r\n                    <input cInput\r\n                           id=\"password\"\r\n                           type=\"password\"\r\n                           formControlName=\"password\"\r\n                           placeholder=\"Password\"\r\n                           autocomplete=\"new-password\"\r\n                           required\r\n                           [ngClass]=\"{ 'is-invalid': (submitted || f.password.touched) && f.password.invalid, 'is-valid': f.password.touched && f.password.valid }\" />\r\n                    <div *ngIf=\"submitted && f['password'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['password'].errors.required\">Password is required</div>\r\n                      <div *ngIf=\"f['password'].errors.minlength\">{{formErrors.password.minLength}}</div>\r\n                      <div *ngIf=\"f['password'].errors.pattern\">{{formErrors.password.pattern}}</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                  <c-form-group cCol md=\"6\" >\r\n                    <label class=\"col-form-label\" for=\"confirmPassword\">Confirm password</label>\r\n                    <input cInput\r\n                           id=\"confirmPassword\"\r\n                           type=\"password\"\r\n                           formControlName=\"confirmPassword\"\r\n                           placeholder=\"Confirm password\"\r\n                           autocomplete=\"new-password\"\r\n                           required\r\n                           [ngClass]=\"{ 'is-invalid': submitted && simpleForm.errors, 'is-valid': f.confirmPassword.touched && !simpleForm.errors }\" />\r\n                    <div *ngIf=\"submitted && simpleForm.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"simpleForm.errors['passwordMismatch']\">{{formErrors.confirmPassword.passwordMismatch}}</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                </c-row>\r\n                <c-form-group>\r\n                  <c-form-check variant=\"checkbox\" custom>\r\n                    <input cInput custom\r\n                           type=\"checkbox\"\r\n                           id=\"accept\"\r\n                           formControlName=\"accept\"\r\n                           required\r\n                           [ngClass]=\"{ 'is-invalid': submitted && f.accept.invalid, 'is-valid': f.accept.valid }\" />\r\n                    <label cLabel custom for=\"accept\">I accept the terms of use</label>\r\n                    <c-form-feedback *ngIf=\"submitted && f['accept'].invalid\" [valid]=\"false\">\r\n                      <div *ngIf=\"f['accept'].errors.required\">You have to accept our Terms and Conditions</div>\r\n                    </c-form-feedback>\r\n                  </c-form-check>\r\n                </c-form-group>\r\n                <c-form-group>\r\n                  <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\" [disabled]=\"simpleForm.pristine || simpleForm.invalid\" [tabindex]=\"'0'\">Submit</button>\r\n                  <button cButton color=\"success\" class=\"mfe-1\" [disabled]=\"simpleForm.valid\" (click)=\"onValidate()\" [tabindex]=\"'0'\">Validate</button>\r\n                  <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\" [tabindex]=\"'0'\">Reset</button>\r\n                </c-form-group>\r\n              </form>\r\n            </c-col>\r\n            <c-col md=\"6\">\r\n              <c-card class=\"bg-dark\" [ngClass]=\"{ 'bg-info' : simpleForm.valid }\">\r\n                <c-card-body>\r\n                  <pre class=\"text-white\">Value: <code>{{ simpleForm.value | json }}</code></pre>\r\n                  <ul>\r\n                    <li>\r\n                      Status: {{ simpleForm.status }}\r\n                    </li>\r\n                    <li>\r\n                      Errors: {{ simpleForm.errors | json }}\r\n                    </li>\r\n                    <li>\r\n                      Valid: {{ simpleForm.valid }}\r\n                    </li>\r\n                    <li>\r\n                      Pristine: {{ simpleForm.pristine }}\r\n                    </li>\r\n                  </ul>\r\n                </c-card-body>\r\n              </c-card>\r\n             </c-col>\r\n          </c-row>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n");

/***/ }),

/***/ "9LDj":
/*!**************************************************************************!*\
  !*** ./src/app/views/forms/validation-forms/validation-forms.service.ts ***!
  \**************************************************************************/
/*! exports provided: ValidationFormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsService", function() { return ValidationFormsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");


let ValidationFormsService = class ValidationFormsService {
    constructor() {
        this.formRules = {
            nonEmpty: '^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$',
            usernameMin: 5,
            passwordMin: 6,
            passwordPattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
        };
        this.formErrors = {
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            accept: false,
        };
        this.errorMessages = {
            firstName: {
                required: 'First name is required',
            },
            lastName: {
                required: 'Last name is required',
            },
            username: {
                required: 'Username is required',
                minLength: `'Username must be ${this.formRules.usernameMin} characters or more`,
                pattern: 'Must contain letters and/or numbers, no trailing spaces'
            },
            email: {
                required: 'required',
                email: 'Invalid email address',
            },
            password: {
                required: 'Password is required',
                pattern: 'Password must contain: numbers, uppercase and lowercase letters',
                minLength: `Password must be at least ${this.formRules.passwordMin} characters`
            },
            confirmPassword: {
                required: 'Password confirmation is required',
                passwordMismatch: 'Passwords must match'
            },
            accept: {
                requiredTrue: 'You have to accept our Terms and Conditions'
            },
        };
    }
};
ValidationFormsService.ctorParameters = () => [];
ValidationFormsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ValidationFormsService);



/***/ }),

/***/ "jloh":
/*!*********************************************************************************!*\
  !*** ./src/app/views/forms/validation-forms/validation-forms-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ValidationFormsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationFormsRoutingModule", function() { return ValidationFormsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _validation_forms_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation-forms.component */ "/IZ/");




const routes = [
    {
        path: '',
        component: _validation_forms_component__WEBPACK_IMPORTED_MODULE_3__["ValidationFormsComponent"],
        data: {
            title: 'Form Validation',
        },
    },
];
let ValidationFormsRoutingModule = class ValidationFormsRoutingModule {
};
ValidationFormsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ValidationFormsRoutingModule);



/***/ }),

/***/ "jyzX":
/*!******************************************************************************!*\
  !*** ./src/app/views/forms/validation-forms/validation-forms.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn:disabled {\n  cursor: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmFsaWRhdGlvbi1mb3Jtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJ2YWxpZGF0aW9uLWZvcm1zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjpkaXNhYmxlZCB7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=default~validation-forms-validation-forms-module~views-business-technical-business-technical-module~~fb80271e-es2015.js.map