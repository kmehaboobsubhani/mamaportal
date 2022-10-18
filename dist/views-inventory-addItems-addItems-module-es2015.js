(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-inventory-addItems-addItems-module"],{

/***/ "2Mhk":
/*!*********************************************************************!*\
  !*** ./src/app/views/inventory/addItems/addItems-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: AddItemsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemsRoutingModule", function() { return AddItemsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _addItems_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addItems.component */ "LAnG");




const routes = [
    {
        path: '',
        component: _addItems_component__WEBPACK_IMPORTED_MODULE_3__["AddItemsComponent"],
        data: {
            title: 'Add Items',
        },
    },
];
let AddItemsRoutingModule = class AddItemsRoutingModule {
};
AddItemsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddItemsRoutingModule);



/***/ }),

/***/ "3sf3":
/*!**********************************************************************!*\
  !*** ./src/app/views/inventory/addItems/validation-forms.service.ts ***!
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

/***/ "5A2S":
/*!*************************************************************!*\
  !*** ./src/app/views/inventory/addItems/addItems.module.ts ***!
  \*************************************************************/
/*! exports provided: AddItemsInitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemsInitModule", function() { return AddItemsInitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _pascalhonegger_ng_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pascalhonegger/ng-datatable */ "j9sh");
/* harmony import */ var _addItems_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./addItems.component */ "LAnG");
/* harmony import */ var _addItems_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addItems-routing.module */ "2Mhk");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _forms_validation_forms_validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../forms/validation-forms/validation-forms-routing.module */ "jloh");












let AddItemsInitModule = class AddItemsInitModule {
};
AddItemsInitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _addItems_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddItemsRoutingModule"],
            _pascalhonegger_ng_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
            _pascalhonegger_ng_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["FormModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _addItems_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddItemsRoutingModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["SwitchModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["TabsetModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _forms_validation_forms_validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_11__["ValidationFormsRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["GridModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["FormModule"],
        ],
        declarations: [_addItems_component__WEBPACK_IMPORTED_MODULE_5__["AddItemsComponent"]],
    })
], AddItemsInitModule);



/***/ }),

/***/ "LAnG":
/*!****************************************************************!*\
  !*** ./src/app/views/inventory/addItems/addItems.component.ts ***!
  \****************************************************************/
/*! exports provided: confirmPasswordValidator, AddItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function() { return confirmPasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemsComponent", function() { return AddItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_addItems_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./addItems.component.html */ "QLJM");
/* harmony import */ var _addItems_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addItems.component.css */ "NdiW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation-forms.service */ "3sf3");
/* harmony import */ var _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../Common/common-data.service */ "4qVP");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../service/data.service */ "AwSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");









/** passwords must match - custom validator */
const confirmPasswordValidator = (control) => {
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
    return password && confirm && password.value === confirm.value
        ? null
        : { passwordMismatch: true };
};
let AddItemsComponent = class AddItemsComponent {
    constructor(fb, vf, service, commonData, router) {
        this.fb = fb;
        this.vf = vf;
        this.service = service;
        this.commonData = commonData;
        this.router = router;
        this.addItems = {};
        this.showErrorMessage = false;
        this._lorem = [];
        this._tabs = [
            { header: 'Merchant Info', panel: this.lorem[0], icon: 'cil-user' },
            { header: 'Payment Info', panel: this.lorem[1], icon: 'cil-mobile' },
            { header: 'Payment Gateway', panel: this.lorem[1], icon: 'cil-credit-card' },
        ];
        this.submitted = false;
        this.formErrors = this.vf.errorMessages;
        this.createForm();
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
    onTabChange(e) {
        console.log('onTabChange', e);
    }
    createForm() {
        this.simpleForm = this.fb.group({
            active: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            costPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            gst: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            itemId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            merchantId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            sellPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            threshold: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
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
        return this.simpleForm.status === 'VALID';
    }
    onAddItems(addItems) {
        this.showErrorMessage = false;
        debugger;
        addItems.merchantId = this.commonData.merchantId;
        this.service.AddItems(addItems).subscribe((resp) => {
            console.log("login Reponse:::" + JSON.stringify(resp));
            if (resp && resp.status == 200) {
                this.showErrorMessage = true;
            }
        });
    }
    onSubmit() {
        debugger;
        if (this.onValidate()) {
            this.showErrorMessage = true;
        }
    }
};
AddItemsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] },
    { type: _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__["CommonDataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
AddItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_addItems_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"]],
        styles: [_addItems_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"], _service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], AddItemsComponent);



/***/ }),

/***/ "NdiW":
/*!*****************************************************************!*\
  !*** ./src/app/views/inventory/addItems/addItems.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRJdGVtcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "QLJM":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory/addItems/addItems.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <form [formGroup]=\"entryForm\" novalidate>\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <c-col md=\"12\">\r\n          <c-row>\r\n            <c-form-group cCol md=\"4\">\r\n        <div class=\"float-left\">\r\n          <h3 class=\"text-info\">Add Item</h3>\r\n        </div>\r\n      </c-form-group>\r\n      <c-form-group cCol md=\"4\">\r\n        <div  *ngIf=\"showErrorMessage\">\r\n           <h3   style=\"color :seagreen;  font-weight:1000; text-align: center;\">Item Added successfully</h3> \r\n          <!-- <c-badge font-weight:1000 color=\"success\">Item Added successfully</c-badge>  -->\r\n        </div>\r\n      </c-form-group>\r\n      <c-form-group cCol md=\"4\">\r\n        <div class=\"float-right\">\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/items']\"><i class=\"fa fa-arrow-left\"></i> Back to Item List</a>\r\n        </div>\r\n      </c-form-group>\r\n      </c-row>\r\n      </c-col>\r\n      </div>\r\n      <div class=\"card-body\">\r\n\r\n        <ng-container>\r\n          <c-col md=\"12\">\r\n            <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\r\n              <c-row>\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"name\">Name :</h4>\r\n                  <input cInput id=\"name\" formControlName=\"name\" placeholder=\"Name\" autocomplete=\"given-name\" required\r\n                    [autofocus]=\"true\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.name.touched) && f.name.invalid, 'is-valid': f.category.touched && f.name.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['name'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['name'].errors.required\">name is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"category\">Category :</h4>\r\n                  <input cInput id=\"category\" formControlName=\"category\" placeholder=\"category\" autocomplete=\"given-name\" required\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.category.touched) && f.category.errors, 'is-valid': f.description.touched && !f.category.errors }\" />\r\n                  <div *ngIf=\"submitted && f['category'].errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['category'].errors.required\">category is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"description\">Description :</h4>\r\n                  <input cInput id=\"description\" formControlName=\"description\" placeholder=\"description\"\r\n                    autocomplete=\"family-name\" required\r\n                    [ngClass]=\"{ 'is-invalid':  (submitted || f.description.touched) && f.description.invalid, 'is-valid': f.itemId.touched && f.description.valid }\" />\r\n                  <div *ngIf=\"submitted && f['description'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['description'].errors.required\">description is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n              </c-row>\r\n              <c-row>\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"itemId\">ItemId :</h4>\r\n                  <input cInput id=\"itemId\" formControlName=\"itemId\" placeholder=\"item Id\" autocomplete=\"given-name\"\r\n                    required [autofocus]=\"true\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.itemId.touched) && f.itemId.invalid, 'is-valid': f.gst.touched && f.itemId.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['itemId'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['itemId'].errors.required\">itemId is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"gst\">Gst Number :</h4>\r\n                  <input cInput id=\"gst\" formControlName=\"gst\" placeholder=\"gstNumber\" autocomplete=\"given-name\"\r\n                    required [autofocus]=\"true\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.gst.touched) && f.gst.invalid, 'is-valid': f.discount.touched && f.gst.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['gst'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['gst'].errors.required\">gst Number is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"discount\">Discount :</h4>\r\n                  <input cInput id=\"discount\" formControlName=\"discount\" placeholder=\"discount\"\r\n                    autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.discount.touched) && f.discount.invalid, 'is-valid': f.costPrice.touched && f.discount.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['discount'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['discount'].errors.required\">discount is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n              </c-row>\r\n              <c-row>\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"costPrice\">CostPrice :</h4>\r\n                  <input cInput id=\"costPrice\" formControlName=\"costPrice\" placeholder=\"costPrice\"\r\n                    autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.costPrice.touched) && f.costPrice.invalid, 'is-valid': f.sellPrice.touched && f.costPrice.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['costPrice'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['costPrice'].errors.required\">costPrice is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"sellPrice\">SellPrice :</h4>\r\n                  <input cInput id=\"sellPrice\" formControlName=\"sellPrice\" placeholder=\"sellPrice\"\r\n                    autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.sellPrice.touched) && f.sellPrice.invalid, 'is-valid': f.threshold.touched && f.sellPrice.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['sellPrice'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['sellPrice'].errors.required\">sellPrice is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"threshold\">Threshold :</h4>\r\n                  <input cInput id=\"threshold\" formControlName=\"threshold\" placeholder=\"threshold\"\r\n                    autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.threshold.touched) && f.threshold.invalid, 'is-valid': f.active.touched && f.threshold.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['threshold'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['threshold'].errors.required\">threshold is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n              </c-row>\r\n              <c-row>\r\n\r\n                <c-form-group cCol md=\"4\">\r\n                  <h4 class=\"col-form-label\" for=\"active\">Active :</h4>\r\n                  <input cInput id=\"active\" formControlName=\"active\" placeholder=\"active\"\r\n                    autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.active.touched) && f.active.invalid, 'is-valid': f.active.touched && f.active.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['active'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['active'].errors.required\">active is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n              </c-row>\r\n\r\n              <c-form-group>\r\n                <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\" (click)=\"onAddItems(simpleForm.value)\"\r\n                   >Submit</button>\r\n                <button cButton color=\"success\" class=\"mfe-1\"  (click)=\"onValidate()\"\r\n                  >Validate</button>\r\n                <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\" [tabindex]=\"'0'\">Clear</button>\r\n              </c-form-group>\r\n            </form>\r\n          </c-col>\r\n        </ng-container>\r\n\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=views-inventory-addItems-addItems-module-es2015.js.map