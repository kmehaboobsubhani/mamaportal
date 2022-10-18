(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-merchant-merchant-module"],{

/***/ "/0Kx":
/*!******************************************************!*\
  !*** ./src/app/views/merchant/merchant.component.ts ***!
  \******************************************************/
/*! exports provided: confirmPasswordValidator, MerchantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantComponent", function() { return MerchantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_merchant_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./merchant.component.html */ "TCTB");
/* harmony import */ var _merchant_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./merchant.component.css */ "MGyX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-forms.service */ "GqoY");
/* harmony import */ var _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Common/common-data.service */ "4qVP");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/data.service */ "AwSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var text_mask_addons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! text-mask-addons */ "l+2V");
/* harmony import */ var text_mask_addons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(text_mask_addons__WEBPACK_IMPORTED_MODULE_9__);










/** passwords must match - custom validator */
const confirmPasswordValidator = (control) => {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
    return password && confirm && password.value === confirm.value
        ? null
        : { passwordMismatch: true };
};
let MerchantComponent = class MerchantComponent {
    constructor(fb, vf, service, commonData, router) {
        this.fb = fb;
        this.vf = vf;
        this.service = service;
        this.commonData = commonData;
        this.router = router;
        this.dateModel = '';
        this.dateMask = {
            mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
            pipe: Object(text_mask_addons__WEBPACK_IMPORTED_MODULE_9__["createAutoCorrectedDatePipe"])('mm/dd/yyyy'),
            placeholder: 'Please enter a date',
            keepCharPositions: true,
        };
        this.minDate = new Date(2017, 5, 10);
        this.maxDate = new Date(2022, 9, 15);
        this.bsValue = new Date();
        this.bsRangeValue = [new Date(2020, 7, 4), new Date(2020, 7, 20)];
        this.customer = {};
        this._lorem = [];
        this._tabs = [
            { header: 'Merchant Info', panel: this.lorem[0], icon: 'cil-user' },
            { header: 'Payment Info', panel: this.lorem[1], icon: 'cil-mobile' },
            { header: 'Payment Gateway', panel: this.lorem[2], icon: 'cil-credit-card' },
        ];
        this.submitted = false;
        this.formErrors = this.vf.errorMessages;
        this.createForm();
        this.setTab = 0;
    }
    get setTab() {
        return this._setTab;
    }
    set setTab(value) {
        this._setTab = value || 0;
    }
    get lorem() {
        return [...this._lorem];
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
    ngOnInit() {
    }
    ngOnDestroy() {
        // clearInterval(this.interval);
    }
    ngOnChanges(changes) {
        console.log('ngOnChanges', changes, this.setTab);
    }
    onTabChange(e) {
        console.log('onTabChange', e);
    }
    createForm() {
        this.simpleForm = this.fb.group({
            merchantName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            loginId: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.vf.formRules.loginIdMin),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.vf.formRules.nonEmpty),
                ],
            ],
            merchantId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            billingPlan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            panNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            gstNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            primaryContact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            primaryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            primaryPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            primaryEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            secondaryContact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            secondaryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            secondaryPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            secondaryEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            modeofPayment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            details: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            paymentgateway: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            user: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            testapikey: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            productionapikey: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            callbackUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            paymentNotificationUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            successNotificationUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            acceptNotificationUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remarksNotificationUrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
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
    onSaveMerchant(customer) {
        debugger;
        this.service.saveCustomers(customer).subscribe((resp) => {
            console.log("login Reponse:::" + JSON.stringify(resp));
            if (resp && resp.statusCode == 200) {
                console.log("Sucess");
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
};
MerchantComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__["CommonDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
MerchantComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_merchant_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"]],
        styles: [_merchant_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"], _service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], MerchantComponent);



/***/ }),

/***/ "GqoY":
/*!************************************************************!*\
  !*** ./src/app/views/merchant/validation-forms.service.ts ***!
  \************************************************************/
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
            loginIdMin: 5,
            passwordMin: 6,
            passwordPattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
        };
        this.formErrors = {
            firstName: '',
            lastName: '',
            loginId: '',
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
            loginId: {
                required: 'loginId is required',
                minLength: `'loginId must be ${this.formRules.loginIdMin} characters or more`,
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

/***/ "MGyX":
/*!*******************************************************!*\
  !*** ./src/app/views/merchant/merchant.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .card-body {\r\n  flex: 1 1 auto;\r\n  min-height: 1px;\r\n  padding: 1.25rem;\r\n  margin-bottom: 280px;\r\n}\r\n\r\n::ng-deep .nav-tabs-boxed .tab-content {\r\n  padding: 0.75rem 1.25rem;\r\n  border: 1px solid;\r\n  border-radius: 0 0.25rem 0.25rem 0.25rem;\r\n  color: #768192;\r\n  background-color: #fff;\r\n  border-color: #d8dbe0;\r\n}\r\n\r\n::ng-deep .card-style {\r\n  border: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lcmNoYW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJtZXJjaGFudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5jYXJkLWJvZHkge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDFweDtcclxuICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDI4MHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5hdi10YWJzLWJveGVkIC50YWItY29udGVudCB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMC4yNXJlbSAwLjI1cmVtIDAuMjVyZW07XHJcbiAgY29sb3I6ICM3NjgxOTI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICNkOGRiZTA7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2FyZC1zdHlsZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "TCTB":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/merchant/merchant.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col>\r\n      <c-card>\r\n        <c-card-body>\r\n          <c-tabset  fill=\"fill\" variant=\"pills\" boxed=\"true\" [activeTab]=\"'0'\">\r\n            <c-tablist>\r\n              <c-tab *ngFor=\"let tab of tabs2\">\r\n                <c-icon [name]=\"tab.icon\" class=\"pb-1\"></c-icon>\r\n                {{tab.header}}\r\n              </c-tab>\r\n            </c-tablist>\r\n            <c-tab-content>\r\n              <c-tab-pane *ngFor=\"let tab of tabs2; let i = index\">\r\n\r\n                <ng-container *ngIf=\"i===0\">\r\n                  <c-col md=\"12\" >\r\n                    <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\r\n                      <c-row>\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"merchantName\">Merchant Name :</h6>\r\n                        <input cInput\r\n                               id=\"merchantName\"\r\n                               formControlName=\"merchantName\"\r\n                               placeholder=\"Merchant name\"\r\n                               autocomplete=\"given-name\"\r\n                               required\r\n                               [autofocus]=\"true\"\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.merchantName.touched) && f.merchantName.invalid, 'is-valid': f.loginId.touched && f.merchantName.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['merchantName'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['merchantName'].errors.required\">Merchant Short Name is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"loginId\">loginId :</h6>\r\n                        <input cInput\r\n                               id=\"loginId\"\r\n                               formControlName=\"loginId\"\r\n                               placeholder=\"loginId\"\r\n                               autocomplete=\"loginId\"\r\n                               required\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.loginId.touched) && f.loginId.errors, 'is-valid': f.merchantId.touched && !f.loginId.errors }\" />\r\n                          <div *ngIf=\"submitted && f['loginId'].errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['loginId'].errors.required\">LoginId is required</div>\r\n                          <div *ngIf=\"f['loginId'].errors.minlength\">{{formErrors.loginId.minLength}}</div>\r\n                          <div *ngIf=\"f['loginId'].errors.pattern\">{{formErrors.loginId.pattern}}</div>\r\n                        </div>\r\n                      </c-form-group>\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"file-input\">company Reg Certificate Attachment :</h6>\r\n                        <c-col md=\"9\">\r\n                          <input cInput type=\"file\" id=\"file-input\" accept=\"pdf\" name=\"file-input\">\r\n                        </c-col>\r\n                      </c-form-group>\r\n                      <!-- <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"merchantId\">merchantId :</h6>\r\n                        <input cInput\r\n                               id=\"merchantId\"\r\n                               formControlName=\"merchantId\"\r\n                               placeholder=\"merchantId\"\r\n                               autocomplete=\"family-name\"\r\n                               required\r\n                               [ngClass]=\"{ 'is-invalid':  (submitted || f.merchantId.touched) && f.merchantId.invalid, 'is-valid': f.panNo.touched && f.merchantId.valid }\" />\r\n                        <div *ngIf=\"submitted && f['merchantId'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['merchantId'].errors.required\">MerchantId is required</div>\r\n                        </div>\r\n                      </c-form-group> -->\r\n                    </c-row>\r\n                    <c-row>\r\n                      <c-form-group cCol md=\"3\">\r\n                        <h6 class=\"col-form-label\" for=\"panNo\">Pan Number :</h6>\r\n                        <input cInput\r\n                               id=\"panNo\"\r\n                               formControlName=\"panNo\"\r\n                               placeholder=\"Pan Number\"\r\n                               autocomplete=\"given-name\"\r\n                               required\r\n                               [autofocus]=\"true\"\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.panNo.touched) && f.panNo.invalid, 'is-valid': f.gstNo.touched && f.panNo.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['panNo'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['panNo'].errors.required\">Pan Number is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n\r\n                      <c-form-group cCol md=\"3\">\r\n                        <h6 class=\"col-form-label\" for=\"file-input\">Pan File Attachment :</h6>\r\n                        <c-col md=\"9\">\r\n                          <input cInput type=\"file\" id=\"file-input\" accept=\"pdf\" name=\"file-input\">\r\n                        </c-col>\r\n                      </c-form-group>\r\n\r\n                      <c-form-group cCol md=\"3\">\r\n                        <h6 class=\"col-form-label\" for=\"gstNo\">Gst Number :</h6>\r\n                        <input cInput\r\n                               id=\"gstNo\"\r\n                               formControlName=\"gstNo\"\r\n                               placeholder=\"Gst Number\"\r\n                               autocomplete=\"given-name\"\r\n                               required\r\n                               [autofocus]=\"true\"\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.gstNo.touched) && f.gstNo.invalid, 'is-valid': f.billingPlan.touched && f.gstNo.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['gstNo'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['gstNo'].errors.required\">Gst Number is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n      \r\n                      <c-form-group cCol md=\"3\">\r\n                        <h6 class=\"col-form-label\" for=\"file-input\">Gst File Attachment :</h6>\r\n                        <c-col md=\"9\">\r\n                          <input cInput type=\"file\" id=\"file-input\" name=\"file-input\">\r\n                        </c-col>\r\n                      </c-form-group>\r\n                    </c-row>\r\n                    <c-row>\r\n                      \r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"billingPlan\">Billing Plan :</h6>\r\n                               <select  cSelect name=\"billingPlan\"\r\n                               id=\"billingPlan\"\r\n                               formControlName=\"billingPlan\"\r\n                               placeholder=\"Billing Plan\"\r\n                               autocomplete=\"given-name\"\r\n                               required\r\n                               [autofocus]=\"true\"\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.billingPlan.touched) && f.billingPlan.invalid, 'is-valid': f.phone.touched && f.billingPlan.valid  }\"                              \r\n                               >\r\n                                <option value=\"1\">Basic</option>\r\n                                <option value=\"2\">Standard</option>\r\n                                <option value=\"3\">Enterprise</option>\r\n                                <option value=\"3\">custom</option>\r\n                              </select>\r\n                               <div *ngIf=\"submitted && f['billingPlan'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['billingPlan'].errors.required\">Billing Plan is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"phone\">Merchant Phone Number :</h6>\r\n                        <input cInput\r\n                              id=\"phone\"\r\n                              formControlName=\"phone\"\r\n                              placeholder=\"Phone Number\"\r\n                              autocomplete=\"given-name\"\r\n                              required\r\n                              [autofocus]=\"true\"\r\n                              [ngClass]=\"{ 'is-invalid': (submitted || f.phone.touched) && f.phone.invalid, 'is-valid': f.address.touched && f.phone.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['phone'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['phone'].errors.required\">Merchant Phone Number is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n\r\n                       <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"phone\">Merchant Email :</h6>\r\n                        <input cInput\r\n                               id=\"email\"\r\n                               type=\"email\"\r\n                               formControlName=\"email\"\r\n                               placeholder=\"Email\"\r\n                               autocomplete=\"email\"\r\n                               required\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.email.touched) && f.email.invalid, 'is-valid': f.email.touched && f.email.valid }\" />\r\n                        <div *ngIf=\"submitted && f['email'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['email'].errors.required\">Merchant Email is required</div>\r\n                          <div *ngIf=\"f['email'].errors.email\">{{formErrors.email.email}}</div>\r\n                        </div>\r\n                      </c-form-group> \r\n\r\n                    </c-row>\r\n                    <c-row>\r\n                    <c-form-group cCol md=\"4\">\r\n                      <h6 class=\"col-form-label\" for=\"address\">Address :</h6>\r\n                      <input cInput\r\n                            id=\"address\"\r\n                            formControlName=\"address\"\r\n                            placeholder=\"enter street name\"\r\n                            autocomplete=\"given-name\"\r\n                            required\r\n                            [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.address.touched) && f.address.invalid, 'is-valid': f.country.touched && f.address.valid  }\" />\r\n                      <div *ngIf=\"submitted && f['address'].invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f['address'].errors.required\">Address is required</div>\r\n                      </div>\r\n                    </c-form-group>\r\n\r\n                    <c-form-group cCol md=\"4\">\r\n                      <h6 class=\"col-form-label\" for=\"city\">City :</h6>\r\n                      <input cInput\r\n                            id=\"city\"\r\n                            formControlName=\"city\"\r\n                            placeholder=\"city\"\r\n                            autocomplete=\"given-name\"\r\n                            required\r\n                            [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.city.touched) && f.city.invalid, 'is-valid': f.country.touched && f.city.valid  }\" />\r\n                      <div *ngIf=\"submitted && f['city'].invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f['city'].errors.required\">city is required</div>\r\n                      </div>\r\n                    </c-form-group>\r\n\r\n                    <c-form-group cCol md=\"4\">\r\n                      <h6 class=\"col-form-label\" for=\"state\">State :</h6>\r\n                      <input cInput\r\n                            id=\"state\"\r\n                            formControlName=\"state\"\r\n                            placeholder=\"state\"\r\n                            autocomplete=\"given-name\"\r\n                            required\r\n                            [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.state.touched) && f.state.invalid, 'is-valid': f.country.touched && f.state.valid  }\" />\r\n                      <div *ngIf=\"submitted && f['state'].invalid\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f['state'].errors.required\">state is required</div>\r\n                      </div>\r\n                    </c-form-group>\r\n\r\n                    </c-row>\r\n                    <c-row>\r\n                      <c-form-group cCol md=\"3\">\r\n                        <h6 class=\"col-form-label\" for=\"country\">country :</h6>\r\n                        <input cInput\r\n                               id=\"country\"\r\n                               formControlName=\"country\"\r\n                               placeholder=\"country\"\r\n                               autocomplete=\"given-name\"\r\n                               required\r\n                               [autofocus]=\"true\"\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.country.touched) && f.country.invalid, 'is-valid': f.pincode.touched && f.country.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['country'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['country'].errors.required\">country is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n      \r\n                      <c-form-group cCol md=\"3\">\r\n                        <h6 class=\"col-form-label\" for=\"pincode\">pincode :</h6>\r\n                        <input cInput\r\n                               id=\"pincode\"\r\n                               formControlName=\"pincode\"\r\n                               placeholder=\"pincode\"\r\n                               autocomplete=\"given-name\"\r\n                               required\r\n                               [autofocus]=\"true\"\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.pincode.touched) && f.pincode.invalid, 'is-valid': f.primaryContact.touched && f.pincode.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['pincode'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['pincode'].errors.required\">pincode is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n                    </c-row>\r\n                    <c-row>\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"primaryName\">primaryName :</h6>\r\n                        <input cInput\r\n                              id=\"primaryName\"\r\n                              formControlName=\"primaryName\"\r\n                              placeholder=\"primaryName\"\r\n                              autocomplete=\"given-name\"\r\n                              required\r\n                              [autofocus]=\"true\"\r\n                              [ngClass]=\"{ 'is-invalid': (submitted || f.primaryName.touched) && f.primaryName.invalid, 'is-valid': f.primaryPhone.touched && f.primaryName.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['primaryName'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['primaryName'].errors.required\">primaryName is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n\r\n\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"primaryPhone\">primaryPhone :</h6>\r\n                        <input cInput\r\n                              id=\"primaryPhone\"\r\n                              formControlName=\"primaryPhone\"\r\n                              placeholder=\"primaryPhone\"\r\n                              autocomplete=\"given-name\"\r\n                              required\r\n                              [autofocus]=\"true\"\r\n                              [ngClass]=\"{ 'is-invalid': (submitted || f.primaryPhone.touched) && f.primaryPhone.invalid, 'is-valid': f.primaryEmail.touched && f.primaryPhone.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['primaryPhone'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['primaryPhone'].errors.required\">primaryPhone is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"primaryEmail\">primaryEmail :</h6>\r\n                        <input cInput\r\n                              id=\"primaryEmail\"\r\n                              formControlName=\"primaryEmail\"\r\n                              placeholder=\"primaryEmail\"\r\n                              autocomplete=\"given-name\"\r\n                              required\r\n                              [autofocus]=\"true\"\r\n                              [ngClass]=\"{ 'is-invalid': (submitted || f.primaryEmail.touched) && f.primaryEmail.invalid, 'is-valid': f.secondaryContact.touched && f.primaryEmail.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['primaryEmail'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['primaryEmail'].errors.required\">primaryEmail is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n\r\n                    </c-row>\r\n\r\n                    <c-row>\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"secondaryName\">secondaryName:</h6>\r\n                        <input cInput\r\n                               id=\"secondaryName\"\r\n                               formControlName=\"secondaryName\"\r\n                               placeholder=\"secondaryName\"\r\n                               autocomplete=\"given-name\"\r\n                               required\r\n                               [autofocus]=\"true\"\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.secondaryName.touched) && f.secondaryName.invalid, 'is-valid': f.secondaryName.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['secondaryName'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['secondaryName'].errors.required\">secondaryName is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"secondaryPhone\">secondaryPhone:</h6>\r\n                        <input cInput\r\n                               id=\"secondaryPhone\"\r\n                               formControlName=\"secondaryPhone\"\r\n                               placeholder=\"secondaryPhone\"\r\n                               autocomplete=\"given-name\"\r\n                               required\r\n                               [autofocus]=\"true\"\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.secondaryPhone.touched) && f.secondaryPhone.invalid, 'is-valid': f.secondaryPhone.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['secondaryPhone'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['secondaryPhone'].errors.required\">secondaryPhone is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n\r\n                      <c-form-group cCol md=\"4\">\r\n                        <h6 class=\"col-form-label\" for=\"secondaryEmail\">secondaryEmail:</h6>\r\n                        <input cInput\r\n                               id=\"secondaryEmail\"\r\n                               formControlName=\"secondaryEmail\"\r\n                               placeholder=\"secondaryEmail\"\r\n                               autocomplete=\"given-name\"\r\n                               required\r\n                               [autofocus]=\"true\"\r\n                               [ngClass]=\"{ 'is-invalid': (submitted || f.secondaryEmail.touched) && f.secondaryEmail.invalid, 'is-valid': f.secondaryEmail.valid  }\" />\r\n                        <div *ngIf=\"submitted && f['secondaryEmail'].invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f['secondaryEmail'].errors.required\">secondaryEmail is required</div>\r\n                        </div>\r\n                      </c-form-group>\r\n\r\n                    </c-row>\r\n\r\n                      <c-form-group>\r\n                        <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\" (click)=\"onSaveMerchant(simpleForm.value)\" [disabled]=\"simpleForm.valid\" [tabindex]=\"'0'\" >Submit</button>\r\n                        <button cButton color=\"success\" class=\"mfe-1\" [disabled]=\"simpleForm.valid\" (click)=\"onValidate()\" [tabindex]=\"'0'\">Validate</button>\r\n                        <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\" [tabindex]=\"'0'\">Clear</button>\r\n                      </c-form-group>\r\n                    </form>\r\n                  </c-col>\r\n                  </ng-container>\r\n      \r\n                  <ng-container *ngIf=\"i===1\">\r\n                    <c-col md=\"12\" >\r\n                      <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\r\n                        <c-row>                         \r\n                          <c-form-group cCol md=\"4\">\r\n                            <h6 class=\"col-form-label\" for=\"date\">Date :</h6>\r\n                            <input cInput\r\n                                   id=\"date-input\" \r\n                                   type=\"date\" \r\n                                   name=\"date-input\" \r\n                                   placeholder=\"date\"\r\n                                   formControlName=\"date\"\r\n                                   autocomplete=\"given-name\"\r\n                                   required\r\n                                   [autofocus]=\"true\"\r\n                                   [ngClass]=\"{ 'is-invalid': (submitted || f.date.touched) && f.date.invalid, 'is-valid': f.loginId.touched && f.date.valid  }\" />\r\n                            <div *ngIf=\"submitted && f['date'].invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['date'].errors.required\">date is required</div>\r\n                            </div>\r\n                          </c-form-group>\r\n                          <c-form-group cCol md=\"4\">\r\n                            <h6 class=\"col-form-label\" for=\"modeofPayment\">mode of Payment :</h6>\r\n                                   <select  cSelect name=\"modeofPayment\"\r\n                                   id=\"modeofPayment\"\r\n                                   formControlName=\"modeofPayment\"\r\n                                   placeholder=\"Billing Plan\"\r\n                                   autocomplete=\"given-name\"\r\n                                   required\r\n                                   [autofocus]=\"true\"\r\n                                   [ngClass]=\"{ 'is-invalid': (submitted || f.modeofPayment.touched) && f.modeofPayment.invalid, 'is-valid': f.phone.touched && f.modeofPayment.valid  }\"                              \r\n                                   >\r\n                                    <option value=\"1\">Card</option>\r\n                                    <option value=\"2\">OnlineTransfer</option>\r\n                                    <option value=\"3\">Cash</option>\r\n                                  </select>\r\n                                   <div *ngIf=\"submitted && f['modeofPayment'].invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['modeofPayment'].errors.required\">ModeofPayment is required</div>\r\n                            </div>\r\n                          </c-form-group>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h6 class=\"col-form-label\" for=\"details\">Details :</h6>\r\n                          <input cInput\r\n                                 id=\"details\"\r\n                                 formControlName=\"details\"\r\n                                 placeholder=\"details\"\r\n                                 autocomplete=\"family-name\"\r\n                                 required\r\n                                 [ngClass]=\"{ 'is-invalid':  (submitted || f.details.touched) && f.details.invalid, 'is-valid': f.panNo.touched && f.details.valid }\" />\r\n                          <div *ngIf=\"submitted && f['details'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['details'].errors.required\">details is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h6 class=\"col-form-label\" for=\"amount\">Amount :</h6>\r\n                          <input cInput\r\n                                 id=\"amount\"\r\n                                 formControlName=\"amount\"\r\n                                 placeholder=\"amount\"\r\n                                 autocomplete=\"given-name\"\r\n                                 required\r\n                                 [autofocus]=\"true\"\r\n                                 [ngClass]=\"{ 'is-invalid': (submitted || f.amount.touched) && f.amount.invalid, 'is-valid': f.gstNo.touched && f.amount.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['amount'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['amount'].errors.required\">Billing Plan is required</div>\r\n                          </div>\r\n                        </c-form-group>                                \r\n                      </c-row>\r\n                        <c-form-group>\r\n                          <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\" (click)=\"onSaveMerchant(simpleForm.value)\" [disabled]=\"simpleForm.valid\" [tabindex]=\"'0'\" >Save</button>\r\n                          <button cButton color=\"success\" class=\"mfe-1\" [disabled]=\"simpleForm.valid\" (click)=\"onValidate()\" [tabindex]=\"'0'\">Validate</button>\r\n                          <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\" [tabindex]=\"'0'\">Clear</button>\r\n                        </c-form-group>\r\n                      </form>\r\n                    </c-col>\r\n                    </ng-container>\r\n      \r\n                    <ng-container *ngIf=\"i===2\">\r\n                      <c-col md=\"12\" >\r\n                        <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\r\n                          <c-row>\r\n                            <c-form-group cCol md=\"4\">\r\n                              <h6 class=\"col-form-label\" for=\"paymentgateway\">Payment Gateway :</h6>\r\n                                     <select  cSelect name=\"paymentgateway\"\r\n                                     id=\"paymentgateway\"\r\n                                     formControlName=\"paymentgateway\"\r\n                                     placeholder=\"paymentgateway\"\r\n                                     autocomplete=\"given-name\"\r\n                                     required\r\n                                     [autofocus]=\"true\"\r\n                                     [ngClass]=\"{ 'is-invalid': (submitted || f.paymentgateway.touched) && f.paymentgateway.invalid, 'is-valid': f.phone.touched && f.paymentgateway.valid  }\">\r\n                                      <option value=\"1\">Paytm</option>\r\n                                      <option value=\"2\">RazorPay</option>\r\n                                      <option value=\"3\">PayU</option>\r\n                                    </select>\r\n                                     <div *ngIf=\"submitted && f['paymentgateway'].invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f['paymentgateway'].errors.required\">paymentgateway is required</div>\r\n                              </div>\r\n                            </c-form-group>\r\n                          <c-form-group cCol md=\"4\">\r\n                            <h6 class=\"col-form-label\" for=\"user\">User :</h6>\r\n                            <input cInput\r\n                                   id=\"user\"\r\n                                   formControlName=\"user\"\r\n                                   placeholder=\"user\"\r\n                                   autocomplete=\"user\"\r\n                                   required\r\n                                   [ngClass]=\"{ 'is-invalid': (submitted || f.user.touched) && f.user.errors, 'is-valid': f.merchantId.touched && !f.user.errors }\" />\r\n                              <div *ngIf=\"submitted && f['user'].errors\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['user'].errors.required\">User is required</div>\r\n                            </div>\r\n                          </c-form-group>\r\n                          <c-form-group cCol md=\"4\">\r\n                            <h6 class=\"col-form-label\" for=\"password\">Password :</h6>\r\n                            <input cInput\r\n                                  type=\"password\"\r\n                                  placeholder=\"Password\"\r\n                                  autocomplete=\"current-password\"\r\n                                  required\r\n                                   id=\"password\"\r\n                                   autocomplete=\"family-name\"\r\n                                   required\r\n                                   [ngClass]=\"{ 'is-invalid':  (submitted || f.password.touched) && f.password.invalid, 'is-valid': f.panNo.touched && f.password.valid }\" />\r\n                            <div *ngIf=\"submitted && f['password'].invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['password'].errors.required\">Password is required</div>\r\n                            </div>\r\n                          </c-form-group>\r\n                        </c-row>\r\n                        <c-row>\r\n                          <c-form-group cCol md=\"6\">\r\n                            <h6 class=\"col-form-label\" for=\"testapikey\">TestApikey :</h6>\r\n                            <input cInput\r\n                                   id=\"testapikey\"\r\n                                   formControlName=\"testapikey\"\r\n                                   placeholder=\"testapikey\"\r\n                                   autocomplete=\"given-name\"\r\n                                   required\r\n                                   [autofocus]=\"true\"\r\n                                   [ngClass]=\"{ 'is-invalid': (submitted || f.testapikey.touched) && f.testapikey.invalid, 'is-valid': f.gstNo.touched && f.testapikey.valid  }\" />\r\n                            <div *ngIf=\"submitted && f['testapikey'].invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['testapikey'].errors.required\">TestApikey is required</div>\r\n                            </div>\r\n                          </c-form-group>\r\n                          <c-form-group cCol md=\"6\">\r\n                            <h6 class=\"col-form-label\" for=\"productionapikey\">ProductionApikey :</h6>\r\n                            <input cInput\r\n                                   id=\"productionapikey\"\r\n                                   formControlName=\"productionapikey\"\r\n                                   placeholder=\"productionapikey\"\r\n                                   autocomplete=\"given-name\"\r\n                                   required\r\n                                   [autofocus]=\"true\"\r\n                                   [ngClass]=\"{ 'is-invalid': (submitted || f.productionapikey.touched) && f.productionapikey.invalid, 'is-valid': f.billingPlan.touched && f.productionapikey.valid  }\" />\r\n                            <div *ngIf=\"submitted && f['productionapikey'].invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['productionapikey'].errors.required\">productionapikey is required</div>\r\n                            </div>\r\n                          </c-form-group>\r\n          \r\n                        </c-row>\r\n                        <c-row>\r\n                          <c-form-group cCol md=\"4\">\r\n                            <h6 class=\"col-form-label\" for=\"callbackUrl\">CallbackUrl :</h6>\r\n                            <input cInput\r\n                                   id=\"callbackUrl\"\r\n                                   formControlName=\"callbackUrl\"\r\n                                   placeholder=\"callbackUrl\"\r\n                                   autocomplete=\"given-name\"\r\n                                   required\r\n                                   [autofocus]=\"true\"\r\n                                   [ngClass]=\"{ 'is-invalid': (submitted || f.callbackUrl.touched) && f.callbackUrl.invalid, 'is-valid': f.phone.touched && f.callbackUrl.valid  }\" />\r\n                            <div *ngIf=\"submitted && f['callbackUrl'].invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['callbackUrl'].errors.required\">CallbackUrl is required</div>\r\n                            </div>\r\n                          </c-form-group>\r\n                          <c-form-group cCol md=\"4\">\r\n                            <h6 class=\"col-form-label\" for=\"paymentNotificationUrl\">paymentNotificationUrl :</h6>\r\n                            <input cInput\r\n                                  id=\"paymentNotificationUrl\"\r\n                                  formControlName=\"paymentNotificationUrl\"\r\n                                  placeholder=\"paymentNotificationUrl\"\r\n                                  autocomplete=\"given-name\"\r\n                                  required\r\n                                  [autofocus]=\"true\"\r\n                                  [ngClass]=\"{ 'is-invalid': (submitted || f.paymentNotificationUrl.touched) && f.paymentNotificationUrl.invalid, 'is-valid': f.address.touched && f.paymentNotificationUrl.valid  }\" />\r\n                            <div *ngIf=\"submitted && f['paymentNotificationUrl'].invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['paymentNotificationUrl'].errors.required\">paymentNotificationUrl is required</div>\r\n                            </div>\r\n                          </c-form-group>\r\n                        </c-row>\r\n                        <c-row>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h6 class=\"col-form-label\" for=\"successNotificationUrl\">SuccessNotificationUrl :</h6>\r\n                          <input cInput\r\n                                id=\"successNotificationUrl\"\r\n                                formControlName=\"successNotificationUrl\"\r\n                                placeholder=\"successNotificationUrl\"\r\n                                autocomplete=\"given-name\"\r\n                                required\r\n                                [autofocus]=\"true\"\r\n                                [ngClass]=\"{ 'is-invalid': (submitted || f.successNotificationUrl.touched) && f.successNotificationUrl.invalid, 'is-valid': f.country.touched && f.successNotificationUrl.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['successNotificationUrl'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['successNotificationUrl'].errors.required\">successNotificationUrl is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        \r\n                          <c-form-group cCol md=\"4\">\r\n                            <h6 class=\"col-form-label\" for=\"acceptNotificationUrl\">AcceptNotificationUrl :</h6>\r\n                            <input cInput\r\n                                   id=\"acceptNotificationUrl\"\r\n                                   formControlName=\"acceptNotificationUrl\"\r\n                                   placeholder=\"acceptNotificationUrl\"\r\n                                   autocomplete=\"given-name\"\r\n                                   required\r\n                                   [autofocus]=\"true\"\r\n                                   [ngClass]=\"{ 'is-invalid': (submitted || f.acceptNotificationUrl.touched) && f.acceptNotificationUrl.invalid, 'is-valid': f.pincode.touched && f.acceptNotificationUrl.valid  }\" />\r\n                            <div *ngIf=\"submitted && f['acceptNotificationUrl'].invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['acceptNotificationUrl'].errors.required\">acceptNotificationUrl is required</div>\r\n                            </div>\r\n                          </c-form-group>          \r\n                          <c-form-group cCol md=\"4\">\r\n                            <h6 class=\"col-form-label\" for=\"remarksNotificationUrl\">RemarksNotificationUrl :</h6>\r\n                            <input cInput\r\n                                   id=\"remarksNotificationUrl\"\r\n                                   formControlName=\"remarksNotificationUrl\"\r\n                                   placeholder=\"remarksNotificationUrl\"\r\n                                   autocomplete=\"given-name\"\r\n                                   required\r\n                                   [autofocus]=\"true\"\r\n                                   [ngClass]=\"{ 'is-invalid': (submitted || f.remarksNotificationUrl.touched) && f.remarksNotificationUrl.invalid, 'is-valid': f.primaryContact.touched && f.remarksNotificationUrl.valid  }\" />\r\n                            <div *ngIf=\"submitted && f['remarksNotificationUrl'].invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"f['remarksNotificationUrl'].errors.required\">remarksNotificationUrl is required</div>\r\n                            </div>\r\n                          </c-form-group>\r\n                        </c-row> \r\n                          <c-form-group>\r\n                            <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\" (click)=\"onSaveMerchant(simpleForm.value)\" [disabled]=\"simpleForm.valid\" [tabindex]=\"'0'\" >Submit</button>\r\n                            <button cButton color=\"success\" class=\"mfe-1\" [disabled]=\"simpleForm.valid\" (click)=\"onValidate()\" [tabindex]=\"'0'\">Validate</button>\r\n                            <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\" [tabindex]=\"'0'\">Clear</button>\r\n                          </c-form-group>\r\n                        </form>\r\n                      </c-col>\r\n                      </ng-container>\r\n\r\n              </c-tab-pane>\r\n            </c-tab-content>\r\n          </c-tabset>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n");

/***/ }),

/***/ "l95u":
/*!***********************************************************!*\
  !*** ./src/app/views/merchant/merchant-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MerchantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantRoutingModule", function() { return MerchantRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _merchant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./merchant.component */ "/0Kx");




const routes = [
    {
        path: '',
        component: _merchant_component__WEBPACK_IMPORTED_MODULE_3__["MerchantComponent"],
        data: {
            title: 'Merchant',
        }
    },
];
let MerchantRoutingModule = class MerchantRoutingModule {
};
MerchantRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MerchantRoutingModule);



/***/ }),

/***/ "uGy2":
/*!***************************************************!*\
  !*** ./src/app/views/merchant/merchant.module.ts ***!
  \***************************************************/
/*! exports provided: MerchantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantModule", function() { return MerchantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _merchant_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./merchant-routing.module */ "l95u");
/* harmony import */ var _merchant_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merchant.component */ "/0Kx");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _forms_validation_forms_validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../forms/validation-forms/validation-forms-routing.module */ "jloh");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "M3cK");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "ienR");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");










// Timepicker

// Datepicker

// Ng2-select

// CoreUI

let MerchantModule = class MerchantModule {
};
MerchantModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _merchant_routing_module__WEBPACK_IMPORTED_MODULE_5__["MerchantRoutingModule"],
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
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_10__["TimepickerModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_11__["BsDatepickerModule"].forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["FormModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["AlertModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["TextMaskModule"],
        ],
        declarations: [_merchant_component__WEBPACK_IMPORTED_MODULE_6__["MerchantComponent"]],
    })
], MerchantModule);



/***/ })

}]);
//# sourceMappingURL=views-merchant-merchant-module-es2015.js.map