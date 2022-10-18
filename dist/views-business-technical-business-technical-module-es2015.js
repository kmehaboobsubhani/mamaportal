(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-business-technical-business-technical-module"],{

/***/ "6B9z":
/*!**********************************************************************!*\
  !*** ./src/app/views/business-technical/validation-forms.service.ts ***!
  \**********************************************************************/
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

/***/ "B0Ci":
/*!*******************************************************************************!*\
  !*** ./src/app/views/business-technical/business-technical-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: BusinessTechnicalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessTechnicalRoutingModule", function() { return BusinessTechnicalRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _business_technical_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./business-technical.component */ "aToQ");




const routes = [
    {
        path: '',
        component: _business_technical_component__WEBPACK_IMPORTED_MODULE_3__["BusinessTechnicalComponent"],
        data: {
            title: 'BusinessTechnical',
        }
    },
];
let BusinessTechnicalRoutingModule = class BusinessTechnicalRoutingModule {
};
BusinessTechnicalRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BusinessTechnicalRoutingModule);



/***/ }),

/***/ "Uxuf":
/*!***************************************************************************!*\
  !*** ./src/app/views/business-technical/business-technical.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .card-body {\r\n    flex: 1 1 auto;\r\n    min-height: 1px;\r\n    padding: 1.25rem;\r\n    margin-bottom: 280px;\r\n  }\r\n  \r\n  ::ng-deep .nav-tabs-boxed .tab-content {\r\n    padding: 0.75rem 1.25rem;\r\n    border: 1px solid;\r\n    border-radius: 0 0.25rem 0.25rem 0.25rem;\r\n    color: #768192;\r\n    background-color: #fff;\r\n    border-color: #d8dbe0;\r\n  }\r\n  \r\n  ::ng-deep .card-style {\r\n    border: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1c2luZXNzLXRlY2huaWNhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoiYnVzaW5lc3MtdGVjaG5pY2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmNhcmQtYm9keSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyODBweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5uYXYtdGFicy1ib3hlZCAudGFiLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuMjVyZW0gMC4yNXJlbSAwLjI1cmVtO1xyXG4gICAgY29sb3I6ICM3NjgxOTI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDhkYmUwO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLmNhcmQtc3R5bGUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "YO5H":
/*!***********************************************************************!*\
  !*** ./src/app/views/business-technical/business-technical-module.ts ***!
  \***********************************************************************/
/*! exports provided: BusinessTechnicalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessTechnicalModule", function() { return BusinessTechnicalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _business_technical_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./business-technical-routing.module */ "B0Ci");
/* harmony import */ var _business_technical_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business-technical.component */ "aToQ");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _forms_validation_forms_validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forms/validation-forms/validation-forms-routing.module */ "jloh");










let BusinessTechnicalModule = class BusinessTechnicalModule {
};
BusinessTechnicalModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _business_technical_routing_module__WEBPACK_IMPORTED_MODULE_5__["BusinessTechnicalRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["SwitchModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["TabsetModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _forms_validation_forms_validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_9__["ValidationFormsRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["FormModule"],
        ],
        declarations: [_business_technical_component__WEBPACK_IMPORTED_MODULE_6__["BusinessTechnicalComponent"]],
    })
], BusinessTechnicalModule);



/***/ }),

/***/ "aToQ":
/*!**************************************************************************!*\
  !*** ./src/app/views/business-technical/business-technical.component.ts ***!
  \**************************************************************************/
/*! exports provided: confirmPasswordValidator, BusinessTechnicalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessTechnicalComponent", function() { return BusinessTechnicalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_business_technical_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./business-technical.component.html */ "eHe1");
/* harmony import */ var _business_technical_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business-technical.component.css */ "Uxuf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-forms.service */ "6B9z");






/** passwords must match - custom validator */
const confirmPasswordValidator = (control) => {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
    return password && confirm && password.value === confirm.value
        ? null
        : { passwordMismatch: true };
};
let BusinessTechnicalComponent = class BusinessTechnicalComponent {
    constructor(fb, vf) {
        this.fb = fb;
        this.vf = vf;
        this.submitted = false;
        this._tabs = [
        //{ header: 'Certificates', panel: this.lorem[3], icon: 'cil-envelope-closed' },
        ];
        this.formErrors = this.vf.errorMessages;
        this.createForm();
    }
    get tabs() {
        // const tabs = this._tabs.map((item) => Object.assign(Object.create(null), item));
        // console.log('tabs:', tabs);
        // return tabs;
        return this._tabs;
    }
    get tabs2() {
        // const tabs = this._tabs.map((item) => Object.assign(Object.create(null), item));
        // console.log('tabs:', tabs);
        // return tabs;
        return this._tabs.filter((tab) => !tab.disabled);
    }
    showing() {
        debugger;
        this.showModal = true;
    }
    hide() {
        debugger;
        this.showModal = false;
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
    onSubmits() {
        console.warn(this.onValidate(), this.simpleForm.value);
        if (this.onValidate()) {
            // TODO: Use EventEmitter with form value
            console.warn(this.simpleForm.value);
            alert('SUCCESS!');
        }
    }
};
BusinessTechnicalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"] }
];
BusinessTechnicalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-business-technical',
        template: _raw_loader_business_technical_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"]],
        styles: [_business_technical_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"]])
], BusinessTechnicalComponent);



/***/ }),

/***/ "eHe1":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/business-technical/business-technical.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col md=\"100\">\r\n      <c-card>\r\n        <c-card-body>\r\n          <!--          <c-tabset [activeTab]=\"setTab\" (activeTabChange)=\"setTab=$event\" boxed=\"true\" [variant]=\"'pills'\">-->\r\n          <!--          <c-tabset [(activeTab)]=\"setTab\" (activeTabChange)=\"onTabChange($event)\">-->\r\n          <!--          <c-tabset variant=\"pills\" boxed=\"true\">-->\r\n          <c-tabset boxed=\"true\" [activeTab]=\"'0'\">\r\n            <c-tablist>\r\n              <c-tab *ngFor=\"let tab of tabs2\">\r\n                <c-icon [name]=\"tab.icon\" class=\"pb-1\"></c-icon>\r\n                {{tab.header}}\r\n              </c-tab>\r\n            </c-tablist>\r\n            <c-tab-content>\r\n              <c-tab-pane *ngFor=\"let tab of tabs2; let i = index\">\r\n                <ng-container *ngIf=\"i===0\">\r\n                  <div class=\"fade-in\">\r\n                    <c-row>\r\n                      <c-col md=\"12\">\r\n                        <c-card class=\"card-style\">\r\n\r\n                          <c-card-body>\r\n\r\n                            <c-row>\r\n                              <c-col md=\"16\">\r\n                                <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\"\r\n                                  class=\"needs-validation\">\r\n                                  <c-form-group>\r\n                                    <label class=\"col-form-label\" for=\"firstName\">Machine Type</label>\r\n                                    <input cInput id=\"firstName\" formControlName=\"firstName\" placeholder=\"Machine Type\"\r\n                                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                                      [ngClass]=\"{ 'is-invalid': (submitted || f.firstName.touched) && f.firstName.invalid, 'is-valid': f.lastName.touched && f.firstName.valid  }\" />\r\n                                    <div *ngIf=\"submitted && f['firstName'].invalid\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f['firstName'].errors.required\">Machine Type is required</div>\r\n                                    </div>\r\n                                  </c-form-group>\r\n                                  <c-form-group>\r\n                                    <label class=\"col-form-label\" for=\"lastName\">Address</label>\r\n                                    <input cInput id=\"lastName\" formControlName=\"lastName\" placeholder=\"Address\"\r\n                                      autocomplete=\"family-name\" required\r\n                                      [ngClass]=\"{ 'is-invalid':  (submitted || f.lastName.touched) && f.lastName.invalid, 'is-valid': f.lastName.touched && f.lastName.valid }\" />\r\n                                    <div *ngIf=\"submitted && f['lastName'].invalid\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f['lastName'].errors.required\">Address is required</div>\r\n                                    </div>\r\n                                  </c-form-group>\r\n                                  <c-form-group>\r\n                                    <label class=\"col-form-label\" for=\"username\">Lattitude</label>\r\n                                    <input cInput id=\"username\" formControlName=\"username\" placeholder=\"Lattitude\"\r\n                                      autocomplete=\"username\" required\r\n                                      [ngClass]=\"{ 'is-invalid': (submitted || f.username.touched) && f.username.errors, 'is-valid': f.username.touched && !f.username.errors }\" />\r\n                                    <div *ngIf=\"submitted && f['username'].errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f['username'].errors.required\">Lattitude is required</div>\r\n                                      <div *ngIf=\"f['username'].errors.minlength\">{{formErrors.username.minLength}}\r\n                                      </div>\r\n                                      <div *ngIf=\"f['username'].errors.pattern\">{{formErrors.username.pattern}}</div>\r\n                                    </div>\r\n                                  </c-form-group>\r\n                                  <c-form-group>\r\n                                    <label class=\"col-form-label\" for=\"email\">Longitude</label>\r\n                                    <input cInput id=\"email\" type=\"email\" formControlName=\"email\" placeholder=\"Longitude\"\r\n                                      autocomplete=\"email\" required\r\n                                      [ngClass]=\"{ 'is-invalid': (submitted || f.email.touched) && f.email.invalid, 'is-valid': f.email.touched && f.email.valid }\" />\r\n                                    <div *ngIf=\"submitted && f['email'].invalid\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f['email'].errors.required\">Longitude is required</div>\r\n                                      <div *ngIf=\"f['email'].errors.email\">{{formErrors.email.email}}</div>\r\n                                    </div>\r\n                                  </c-form-group>\r\n                                  <c-form-group>\r\n                                    <label class=\"col-form-label\" for=\"firstName\">Phone number</label>\r\n                                    <input cInput id=\"firstName\" formControlName=\"firstName\" placeholder=\"Phone number\"\r\n                                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                                      [ngClass]=\"{ 'is-invalid': (submitted || f.firstName.touched) && f.firstName.invalid, 'is-valid': f.lastName.touched && f.firstName.valid  }\" />\r\n                                    <div *ngIf=\"submitted && f['firstName'].invalid\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f['firstName'].errors.required\">Phone number is required</div>\r\n                                    </div>\r\n                                  </c-form-group>\r\n                                  <c-row>\r\n                                    <c-form-group cCol md=\"6\">\r\n                                      <label class=\"col-form-label\" for=\"password\">Password</label>\r\n                                      <input cInput id=\"password\" type=\"password\" formControlName=\"password\"\r\n                                        placeholder=\"Password\" autocomplete=\"new-password\" required\r\n                                        [ngClass]=\"{ 'is-invalid': (submitted || f.password.touched) && f.password.invalid, 'is-valid': f.password.touched && f.password.valid }\" />\r\n                                      <div *ngIf=\"submitted && f['password'].invalid\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"f['password'].errors.required\">Password is required</div>\r\n                                        <div *ngIf=\"f['password'].errors.minlength\">{{formErrors.password.minLength}}\r\n                                        </div>\r\n                                        <div *ngIf=\"f['password'].errors.pattern\">{{formErrors.password.pattern}}</div>\r\n                                      </div>\r\n                                    </c-form-group>\r\n                                    <c-form-group cCol md=\"6\">\r\n                                      <label class=\"col-form-label\" for=\"confirmPassword\">Confirm password</label>\r\n                                      <input cInput id=\"confirmPassword\" type=\"password\"\r\n                                        formControlName=\"confirmPassword\" placeholder=\"Confirm password\"\r\n                                        autocomplete=\"new-password\" required\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && simpleForm.errors, 'is-valid': f.confirmPassword.touched && !simpleForm.errors }\" />\r\n                                      <div *ngIf=\"submitted && simpleForm.errors\" class=\"invalid-feedback\">\r\n                                        <div *ngIf=\"simpleForm.errors['passwordMismatch']\">\r\n                                          {{formErrors.confirmPassword.passwordMismatch}}</div>\r\n                                      </div>\r\n                                    </c-form-group>\r\n                                  </c-row>\r\n                                  <c-form-group>\r\n                                    <c-form-check variant=\"checkbox\" custom>\r\n                                      <input cInput custom type=\"checkbox\" id=\"accept\" formControlName=\"accept\" required\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.accept.invalid, 'is-valid': f.accept.valid }\" />\r\n                                      <label cLabel custom for=\"accept\">I accept the terms of use</label>\r\n                                      <c-form-feedback *ngIf=\"submitted && f['accept'].invalid\" [valid]=\"false\">\r\n                                        <div *ngIf=\"f['accept'].errors.required\">You have to accept our Terms and\r\n                                          Conditions</div>\r\n                                      </c-form-feedback>\r\n                                    </c-form-check>\r\n                                  </c-form-group>\r\n                                  <c-form-group>\r\n                                    <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\"\r\n                                      [disabled]=\"simpleForm.pristine || simpleForm.invalid\"\r\n                                      [tabindex]=\"'0'\">Submit</button>\r\n                                    <button cButton color=\"success\" class=\"mfe-1\" [disabled]=\"simpleForm.valid\"\r\n                                      (click)=\"onValidate()\" [tabindex]=\"'0'\">Validate</button>\r\n                                    <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\"\r\n                                      [tabindex]=\"'0'\">Reset</button>\r\n                                  </c-form-group>\r\n                                </form>\r\n                              </c-col>\r\n\r\n                            </c-row>\r\n                          </c-card-body>\r\n                        </c-card>\r\n                      </c-col>\r\n                    </c-row>\r\n                  </div>\r\n\r\n                </ng-container>\r\n                <ng-container *ngIf=\"i===1\">\r\n                  <div class=\"fade-in\">\r\n                    <c-row>\r\n                      <c-col md=\"12\">\r\n                        <c-card class=\"card-style\">\r\n\r\n                          <c-card-body>\r\n\r\n                            <c-row>\r\n                              <c-col md=\"16\">\r\n                                <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\"\r\n                                  class=\"needs-validation\">\r\n                                  <c-form-group>\r\n                                    <label class=\"col-form-label\" for=\"firstName\">Wifi Name</label>\r\n                                    <input cInput id=\"firstName\" formControlName=\"firstName\" placeholder=\"Wifi Name\"\r\n                                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                                      [ngClass]=\"{ 'is-invalid': (submitted || f.firstName.touched) && f.firstName.invalid, 'is-valid': f.lastName.touched && f.firstName.valid  }\" />\r\n                                    <div *ngIf=\"submitted && f['firstName'].invalid\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f['firstName'].errors.required\">Wifi name is required</div>\r\n                                    </div>\r\n                                  </c-form-group>\r\n                                  <c-form-group>\r\n                                    <label class=\"col-form-label\" for=\"lastName\">Controller board</label>\r\n                                    <input cInput id=\"lastName\" formControlName=\"lastName\"\r\n                                      placeholder=\"Controller board\" autocomplete=\"family-name\" required\r\n                                      [ngClass]=\"{ 'is-invalid':  (submitted || f.lastName.touched) && f.lastName.invalid, 'is-valid': f.lastName.touched && f.lastName.valid }\" />\r\n                                    <div *ngIf=\"submitted && f['lastName'].invalid\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f['lastName'].errors.required\">Controller board is required</div>\r\n                                    </div>\r\n                                  </c-form-group>\r\n                                  <c-form-group>\r\n                                    <label class=\"col-form-label\" for=\"username\">UPI</label>\r\n                                    <input cInput id=\"username\" formControlName=\"username\" placeholder=\"UPI\"\r\n                                      autocomplete=\"username\" required\r\n                                      [ngClass]=\"{ 'is-invalid': (submitted || f.username.touched) && f.username.errors, 'is-valid': f.username.touched && !f.username.errors }\" />\r\n                                    <div *ngIf=\"submitted && f['username'].errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f['username'].errors.required\">UPI is required</div>\r\n                                      <div *ngIf=\"f['username'].errors.minlength\">{{formErrors.username.minLength}}\r\n                                      </div>\r\n                                      <div *ngIf=\"f['username'].errors.pattern\">{{formErrors.username.pattern}}</div>\r\n                                    </div>\r\n                                  </c-form-group>\r\n\r\n\r\n                                  <c-form-group>\r\n                                    <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\"\r\n                                      [disabled]=\"simpleForm.pristine || simpleForm.invalid\"\r\n                                      [tabindex]=\"'0'\">Submit</button>\r\n                                    <button cButton color=\"success\" class=\"mfe-1\" [disabled]=\"simpleForm.valid\"\r\n                                      (click)=\"onValidate()\" [tabindex]=\"'0'\">Validate</button>\r\n                                    <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\"\r\n                                      [tabindex]=\"'0'\">Reset</button>\r\n                                  </c-form-group>\r\n\r\n                                </form>\r\n                              </c-col>\r\n\r\n                            </c-row>\r\n                          </c-card-body>\r\n                        </c-card>\r\n                      </c-col>\r\n                    </c-row>\r\n                  </div>\r\n\r\n                </ng-container>\r\n              </c-tab-pane>\r\n            </c-tab-content>\r\n          </c-tabset>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n\r\n\r\n\r\n<div [style.display]=\"showModal ? 'block' : 'none'\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Register</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmits()\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group\">\r\n                <label>FirstName</label>\r\n                <input type=\"text\" formControlName=\"firstname\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.firstname.errors }\" />\r\n                <div *ngIf=\"submitted && f.firstname.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.firstname.errors.required\">FirstName is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group\">\r\n                <label>Email</label>\r\n                <input type=\"text\" formControlName=\"email\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\" />\r\n                <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.email.errors.required\">Email is required</div>\r\n                  <div *ngIf=\"f.email.errors.email\">Email must be a valid email address</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group\">\r\n                <label>Mobile</label>\r\n                <input type=\"text\" formControlName=\"mobile\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.mobile.errors }\" />\r\n                <div *ngIf=\"submitted && f.mobile.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.mobile.errors\">Mobile must be Valid and at least 10 digits</div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input type=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                  <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"hide()\">Close</button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=views-business-technical-business-technical-module-es2015.js.map