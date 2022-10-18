(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-dashboard-dashboard-module"],{

/***/ "+NEK":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .c-chart-brand {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQUoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jLWNoYXJ0LWJyYW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "6dU7":
/*!*****************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "aHM3");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "l70X");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-routing.module */ "jUYC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/widgets.module */ "XVX6");



// import { ChartsModule } from 'ng2-charts';









let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_6__["DashboardRoutingModule"],
            // ChartsModule,
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_4__["ButtonsModule"].forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["CalloutModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["GridModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_9__["IconModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["ProgressModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["ButtonModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["ChartModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_8__["WidgetModule"],
            _widgets_widgets_module__WEBPACK_IMPORTED_MODULE_10__["WidgetsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        ],
        declarations: [
            _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "P3Bu":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-card>\r\n    <c-card-body>\r\n      <c-row>\r\n        <c-col sm=\"6\">\r\n          <h1 class=\"card-title mb-0\">Machine Status</h1>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas cNoZoneBaseChart class=\"chart\"\r\n          [data]=\"statusMachineChart.arbarChartData\" \r\n          [labels]=\"statusMachineChart.arbarChartLabels\" \r\n          [chartType]=\"statusMachineChart.arbarChartType\"\r\n          [options]=\"statusMachineChart.arbarChartOptions\"\r\n          [plugins]=\"statusMachineChart.arbarChartPlugins\"\r\n          [legend]=\"statusMachineChart.arbarChartLegend\"\r\n          [colors]=\"statusMachineChart.pieColor\"\r\n          [plugins]=\"statusMachineChart.pieChartPlugins\"> \r\n        </canvas>\r\n      </div>\r\n      </c-col>\r\n         <c-col sm=\"6\">\r\n          <h1 class=\"card-title mb-0\">Sold Items</h1>\r\n        <div class=\"chart-wrapper\">\r\n          <canvas cNoZoneBaseChart class=\"chart\"\r\n          [data]=\"soldItemsChart.doughnutChartData\" \r\n          [labels]=\"soldItemsChart.doughnutChartLabels\" \r\n          [chartType]=\"soldItemsChart.doughnutChartType\"\r\n          [options]=\"soldItemsChart.doughnutChartOptions\"\r\n          [plugins]=\"soldItemsChart.doughnutChartPlugins\"\r\n          [legend]=\"soldItemsChart.doughnutChartLegend\"\r\n          [colors]=\"soldItemsChart.pieColor\">\r\n        </canvas>\r\n      </div>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n    <c-card-footer>\r\n      <c-row class=\"text-center\">\r\n        <c-col sm=\"2\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          <div>{{active}} Online ({{onlinepercentage | number: '1.2-2'}}%)</div>\r\n          <c-progress size=\"xs\" class=\"mt-2\">\r\n            <c-progress-bar color=\"success\" [value]=onlinepercentage></c-progress-bar>\r\n          </c-progress>\r\n        </c-col>\r\n        <c-col sm=\"2\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          <div>{{inActive}} Offline ({{offlinepercentage | number: '1.2-2'}}%)</div>\r\n          <c-progress size=\"xs\" class=\"mt-2\">\r\n            <c-progress-bar color=\"danger\" [value]=offlinepercentage></c-progress-bar>\r\n          </c-progress>\r\n        </c-col>\r\n        <c-col sm=\"0.5\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          \r\n        </c-col>\r\n      <div *ngIf=\"isbhujiaSev\">\r\n        <c-col sm=\"1.5\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          <div>{{bhujiaSev}} {{bhujiaSevName}} ({{bhujiaSevPercentage | number : '1.2-2'}}%)</div>\r\n          <c-progress size=\"xs\" class=\"mt-2\">\r\n            <c-progress-bar color=\"danger\" [value]=bhujiaSevPercentage></c-progress-bar>\r\n          </c-progress>\r\n        </c-col>\r\n      </div>\r\n\r\n      <div *ngIf=\"ispepsi\">\r\n        <c-col sm=\"1.5\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          <div>{{pepsi}} {{pepsiName}} ({{pepsiPercentage | number : '1.2-2'}}%)</div>\r\n          <c-progress size=\"xs\" class=\"mt-2\">\r\n            <c-progress-bar color=\"success\" [value]=pepsiPercentage></c-progress-bar>\r\n          </c-progress>\r\n        </c-col>\r\n      </div>\r\n\r\n      <div *ngIf=\"ischips\">\r\n        <c-col sm=\"1.5\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          <div>{{chips}} {{chipsName}} ({{chipsPercentage | number : '1.2-2'}}%)</div>\r\n          <c-progress size=\"xs\" class=\"mt-2\">\r\n            <c-progress-bar color=\"warning\" [value]=chipsPercentage></c-progress-bar>\r\n          </c-progress>\r\n        </c-col>\r\n      </div> \r\n\r\n      <div *ngIf=\"issanitaryNapkinSmall\">\r\n        <c-col sm=\"1.5\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          <div>{{sanitaryNapkinSmall}} {{sanitaryNapkinSmallName}} ({{sanitaryNapkinSmallPercentage | number : '1.2-2'}}%)</div>\r\n          <c-progress size=\"xs\" class=\"mt-2\">\r\n            <c-progress-bar color=\"info\" [value]=sanitaryNapkinSmallPercentage></c-progress-bar>\r\n            <!-- <c-progress-bar color=\"secondary\" [value]=sanitaryNapkinSmallPercentage></c-progress-bar> -->\r\n          </c-progress>\r\n        </c-col>\r\n      </div> \r\n\r\n      </c-row>\r\n    </c-card-footer>\r\n  </c-card>\r\n \r\n  <c-card>\r\n    <c-card-body>\r\n      <c-row>\r\n         <c-col sm=\"4\">\r\n          <h1 class=\"card-title mb-0\">Transaction Status</h1>\r\n        </c-col> \r\n        <c-col sm=\"8\" class=\"d-none d-md-block\">\r\n          <form >\r\n            <c-row>\r\n              \r\n            <c-form-group cCol md=\"4\">\r\n              <label for=\"fname\">FromDate : </label>\r\n              <input cInput\r\n                     id=\"date-input\" \r\n                     type=\"date\" \r\n                     name=\"date-input\" \r\n                     placeholder=\"fromDate\"\r\n                     autocomplete=\"given-name\"\r\n                     [(ngModel)]=\"fromDate\"\r\n                     required\r\n                     [autofocus]=\"true\"\r\n                     [ngClass]=\"{ 'is-invalid': (submitted || f.fromDate.touched) && f.fromDate.invalid, 'is-valid': f.toDate.touched && f.fromDate.valid  }\" />\r\n              <div *ngIf=\"submitted && f['fromDate'].invalid\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f['fromDate'].errors.required\">FromDate is required</div>\r\n              </div>\r\n            </c-form-group>\r\n\r\n            <c-form-group cCol md=\"4\">\r\n              <label for=\"fname\">ToDate : </label>\r\n              <input cInput\r\n                     id=\"date-input\" \r\n                     type=\"date\" \r\n                     name=\"date-input\" \r\n                     placeholder=\"toDate\"\r\n                     autocomplete=\"toDate\"\r\n                     [(ngModel)]=\"toDate\"\r\n                     required\r\n                     [autofocus]=\"true\"\r\n                     [ngClass]=\"{ 'is-invalid': (submitted || f.toDate.touched) && f.toDate.invalid, 'is-valid': f.toDate.touched && f.toDate.valid  }\" />\r\n              <div *ngIf=\"submitted && f['toDate'].invalid\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f['toDate'].errors.required\">ToDate is required</div>\r\n              </div>\r\n            </c-form-group>\r\n            \r\n            <c-form-group cCol md=\"4\">\r\n            <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\" (click)=\"onAddTransactionDate(simpleForm.value)\">Submit</button>\r\n            </c-form-group>\r\n          </c-row>\r\n        </form>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row>\r\n         <c-col sm=\"7\">\r\n        <div *ngIf=\"ispieShown\" class=\"chart-wrapper\">\r\n          <canvas  cNoZoneBaseChart class=\"chart\"\r\n          [data]=\"transactionChart.arbarChartData\" \r\n          [labels]=\"transactionChart.arbarChartLabels\" \r\n          [chartType]=\"transactionChart.arbarChartType\"\r\n          [options]=\"transactionChart.arbarChartOptions\"\r\n          [plugins]=\"transactionChart.arbarChartPlugins\"\r\n          [legend]=\"transactionChart.arbarChartLegend\"\r\n          [colors]=\"transactionChart.pieColor\"\r\n          [plugins]=\"transactionChart.pieChartPlugins\">\r\n        </canvas>\r\n      </div>\r\n      <div *ngIf=\"isShown\" id=\"divshow\" class=\"row container-fluid\" style=\"font-size: 33px;\r\n             text-align: center;margin: 30px\">Data not Exist for the Selected Date Range</div>\r\n        </c-col>\r\n         <c-col sm=\"5\">\r\n           <div style=\"margin: 20px;\">\r\n            <h1 >Date Range Selected </h1>\r\n            <h2 >fromDate : {{transactionFromDate}}</h2>\r\n            <h2 >toDate : {{transactionTodate}} </h2>\r\n            <h2 for=\"fname\">Success : {{completed}} </h2>\r\n            <h2 for=\"fname\">Failed  : {{dispenseFailed}} </h2>\r\n          </div> \r\n        </c-col> \r\n      </c-row>\r\n    </c-card-body>\r\n    <c-card-footer>\r\n      <c-row class=\"text-center\">\r\n        <c-col sm=\"12\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          <div>{{completed}} Success ({{completedPercentage | number : '1.2-2'}}%)</div>\r\n          <c-progress size=\"xs\" class=\"mt-2\">\r\n            <c-progress-bar color=\"success\" [value]=completedPercentage></c-progress-bar>\r\n          </c-progress>\r\n        </c-col>\r\n        <c-col sm=\"12\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          <div>{{dispenseFailed}} Failed ({{failedPercentage | number : '1.2-2'}}%)</div>\r\n          <c-progress size=\"xs\" class=\"mt-2\">\r\n            <c-progress-bar color=\"danger\" [value]=failedPercentage></c-progress-bar>\r\n          </c-progress>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-footer>\r\n  </c-card>\r\n\r\n\r\n  <c-card>\r\n    <c-card-body>\r\n      <c-row>\r\n        <c-col sm=\"4\">\r\n          <h1 class=\"card-title mb-0\">Sales Detail</h1>\r\n        </c-col> \r\n        <c-col sm=\"8\" class=\"d-none d-md-block\">\r\n        <form [formGroup]=\"contactForm\" (ngSubmit)=\"submit()\">\r\n          <c-row> \r\n            <c-form-group cCol md=\"4\">\r\n            <select cSelect formControlName=\"country\">\r\n              <option [ngValue]=\"null\" disabled>Select Month Or Year</option>\r\n              <option *ngFor=\"let country of countries\" [ngValue]=\"country.value\">{{country.name}}</option>\r\n            </select>\r\n             </c-form-group>\r\n            <c-form-group cCol md=\"4\">\r\n              <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\" (click)=\"onAddRevenueDate(contactForm.value)\">Submit</button>\r\n            </c-form-group>\r\n          </c-row>\r\n          </form>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row>\r\n        <c-col sm=\"8\">\r\n          <!-- <h4 class=\"card-title mb-0\">Sales Detail</h4> -->\r\n        <div *ngIf=\"isPieHide\" class=\"chart-wrapper\">\r\n          <canvas cNoZoneBaseChart class=\"chart\"\r\n          [data]=\"salesDetailsChart.arbarChartData\" \r\n          [labels]=\"salesDetailsChart.arbarChartLabels\" \r\n          [chartType]=\"salesDetailsChart.arbarChartType\"\r\n          [options]=\"salesDetailsChart.arbarChartOptions\"\r\n          [plugins]=\"salesDetailsChart.arbarChartPlugins\"\r\n          [legend]=\"salesDetailsChart.arbarChartLegend\"\r\n          [colors]=\"salesDetailsChart.pieColor\"\r\n          [plugins]=\"salesDetailsChart.pieChartPlugins\">\r\n        </canvas>\r\n      </div>\r\n      <div *ngIf=\"isHide\" id=\"divhide\" class=\"row container-fluid\" style=\"font-size: 33px;\r\n         text-align: center;margin: 30px\">Data not Exist for the Selected Item</div>\r\n      </c-col>\r\n      <c-col sm=\"4\">\r\n        <div style=\"margin: 20px;\">\r\n          <h1 >{{monthOrYear}} Data Selected </h1>\r\n          <!-- <h2 >fromDate :{{revenueFromDate}}</h2>\r\n          <h2 >toDate :{{revenueTodate}} </h2>\r\n          <h2 >Total Revenue : {{totalRevenue}} ₹ </h2> -->\r\n        </div>\r\n      </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n    <c-card-footer>\r\n      <c-row class=\"text-center\">\r\n        <c-col sm=\"12\" [md]=\"true\" class=\"mb-sm-2 mb-0\">\r\n          <!-- <div class=\"text-muted\">Total Revenue</div> -->\r\n          <div>{{totalRevenue}} Total Revenue ({{revenuePercentage | number : '1.2-2'}}%)</div>\r\n         \r\n        </c-col>\r\n      </c-row>\r\n    </c-card-footer>\r\n  </c-card>         \r\n</div>\r\n");

/***/ }),

/***/ "aHM3":
/*!******************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js ***!
  \******************************************************************************/
/*! exports provided: ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective, ButtonsModule, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonCheckboxDirective", function() { return ButtonCheckboxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioDirective", function() { return ButtonRadioDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonRadioGroupDirective", function() { return ButtonRadioGroupDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsModule", function() { return ButtonsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return RADIO_CONTROL_VALUE_ACCESSOR$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RADIO_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
/** @type {?} */

const CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => ButtonCheckboxDirective)),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
class ButtonCheckboxDirective {
    constructor() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    // view -> model
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toggle(this.trueValue === this.value);
    }
    /**
     * @protected
     * @return {?}
     */
    get trueValue() {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue
            : true;
    }
    /**
     * @protected
     * @return {?}
     */
    get falseValue() {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse
            : false;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    toggle(state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    }
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ButtonCheckboxDirective.ɵfac = function ButtonCheckboxDirective_Factory(t) { return new (t || ButtonCheckboxDirective)(); };
ButtonCheckboxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ButtonCheckboxDirective, selectors: [["", "btnCheckbox", ""]], hostVars: 3, hostBindings: function ButtonCheckboxDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonCheckboxDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-pressed", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.state);
    } }, inputs: { btnCheckboxTrue: "btnCheckboxTrue", btnCheckboxFalse: "btnCheckboxFalse" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CHECKBOX_CONTROL_VALUE_ACCESSOR])] });
ButtonCheckboxDirective.propDecorators = {
    btnCheckboxTrue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    btnCheckboxFalse: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    state: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-pressed',] }],
    onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonCheckboxDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[btnCheckbox]',
                providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return []; }, { btnCheckboxTrue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnCheckboxFalse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-pressed']
        }], 
    // view -> model
    /**
     * @return {?}
     */
    onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => ButtonRadioDirective)),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioDirective {
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} renderer
     * @param {?} group
     */
    constructor(el, cdr, renderer, group) {
        this.el = el;
        this.cdr = cdr;
        this.renderer = renderer;
        this.group = group;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.role = 'radio';
        this._hasFocus = false;
    }
    /**
     * Current value of radio component or group
     * @return {?}
     */
    get value() {
        return this.group ? this.group.value : this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this._value = value;
    }
    /**
     * If `true` — radio button is disabled
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) {
        this.setDisabledState(disabled);
    }
    /**
     * @return {?}
     */
    get controlOrGroupDisabled() {
        return this.disabled || (this.group && this.group.disabled) ? true : undefined;
    }
    /**
     * @return {?}
     */
    get hasDisabledClass() {
        // Although the radio is disabled the active radio should still stand out.
        // The disabled class will prevent this so don't add it on the active radio
        return this.controlOrGroupDisabled && !this.isActive;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.btnRadio === this.value;
    }
    /**
     * @return {?}
     */
    get tabindex() {
        if (this.controlOrGroupDisabled) {
            // Disabled radio buttons should not receive focus
            return undefined;
        }
        else if (this.isActive || this.group == null) {
            return 0;
        }
        else {
            return -1;
        }
    }
    /**
     * @return {?}
     */
    get hasFocus() {
        return this._hasFocus;
    }
    /**
     * @return {?}
     */
    toggleIfAllowed() {
        if (!this.canToggle()) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSpacePressed(event) {
        this.toggleIfAllowed();
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    focus() {
        this.el.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    onFocus() {
        this._hasFocus = true;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this._hasFocus = false;
        this.onTouched();
    }
    /**
     * @return {?}
     */
    canToggle() {
        return !this.controlOrGroupDisabled && (this.uncheckable || this.btnRadio !== this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _onChange(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this.onTouched();
        this.onChange(value);
    }
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        this._disabled = disabled;
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
}
ButtonRadioDirective.ɵfac = function ButtonRadioDirective_Factory(t) { return new (t || ButtonRadioDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                 * @return {?}
                 */() => ButtonRadioGroupDirective)), 8)); };
ButtonRadioDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ButtonRadioDirective, selectors: [["", "btnRadio", ""]], hostVars: 8, hostBindings: function ButtonRadioDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonRadioDirective_click_HostBindingHandler() { return ctx.toggleIfAllowed(); })("keydown.space", function ButtonRadioDirective_keydown_space_HostBindingHandler($event) { return ctx.onSpacePressed($event); })("focus", function ButtonRadioDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function ButtonRadioDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("aria-disabled", ctx.controlOrGroupDisabled)("aria-checked", ctx.isActive)("tabindex", ctx.tabindex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.hasDisabledClass)("active", ctx.isActive);
    } }, inputs: { value: "value", disabled: "disabled", uncheckable: "uncheckable", btnRadio: "btnRadio" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_CONTROL_VALUE_ACCESSOR])] });
/** @nocollapse */
ButtonRadioDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: ButtonRadioGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                     * @return {?}
                     */
                    () => ButtonRadioGroupDirective)),] }] }
];
ButtonRadioDirective.propDecorators = {
    btnRadio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    uncheckable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    controlOrGroupDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-disabled',] }],
    hasDisabledClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.disabled',] }],
    isActive: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.aria-checked',] }],
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    tabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.tabindex',] }],
    toggleIfAllowed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] }],
    onSpacePressed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.space', ['$event'],] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonRadioDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[btnRadio]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ButtonRadioGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                                     * @return {?}
                                     */() => ButtonRadioGroupDirective))]
            }] }]; }, { role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], controlOrGroupDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-disabled']
        }], hasDisabledClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.disabled']
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.aria-checked']
        }], tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
        }], 
    /**
     * @return {?}
     */
    toggleIfAllowed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onSpacePressed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.space', ['$event']]
        }], 
    /**
     * @return {?}
     */
    onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
        }], 
    /**
     * @return {?}
     */
    onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
        }], uncheckable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnRadio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    () => ButtonRadioGroupDirective)),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioGroupDirective {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.role = 'radiogroup';
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
        this.onChange(value);
    }
    /**
     * @return {?}
     */
    get tabindex() {
        if (this._disabled) {
            return null;
        }
        else {
            return 0;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        if (this.radioButtons) {
            this._disabled = disabled;
            this.radioButtons.forEach((/**
             * @param {?} buttons
             * @return {?}
             */
            buttons => {
                buttons.setDisabledState(disabled);
            }));
            this.cdr.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        if (this._disabled) {
            return;
        }
        /** @type {?} */
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio) {
            activeRadio.focus();
        }
        else {
            /** @type {?} */
            const firstEnabled = this.radioButtons.find((/**
             * @param {?} r
             * @return {?}
             */
            r => !r.disabled));
            if (firstEnabled) {
                firstEnabled.focus();
            }
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectNext(event) {
        this.selectInDirection('next');
        event.preventDefault();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectPrevious(event) {
        this.selectInDirection('previous');
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @private
     * @param {?} direction
     * @return {?}
     */
    selectInDirection(direction) {
        if (this._disabled) {
            return;
        }
        /**
         * @param {?} currentIndex
         * @param {?} buttonRadioDirectives
         * @return {?}
         */
        function nextIndex(currentIndex, buttonRadioDirectives) {
            /** @type {?} */
            const step = direction === 'next' ? 1 : -1;
            /** @type {?} */
            let calcIndex = (currentIndex + step) % buttonRadioDirectives.length;
            if (calcIndex < 0) {
                calcIndex = buttonRadioDirectives.length - 1;
            }
            return calcIndex;
        }
        /** @type {?} */
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio) {
            /** @type {?} */
            const buttonRadioDirectives = this.radioButtons.toArray();
            /** @type {?} */
            const currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);
            for (let i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
                if (buttonRadioDirectives[i].canToggle()) {
                    buttonRadioDirectives[i].toggleIfAllowed();
                    buttonRadioDirectives[i].focus();
                    break;
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    getActiveOrFocusedRadio() {
        return this.radioButtons.find((/**
         * @param {?} button
         * @return {?}
         */
        button => button.isActive)) || this.radioButtons.find((/**
         * @param {?} button
         * @return {?}
         */
        button => button.hasFocus));
    }
}
ButtonRadioGroupDirective.ɵfac = function ButtonRadioGroupDirective_Factory(t) { return new (t || ButtonRadioGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ButtonRadioGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ButtonRadioGroupDirective, selectors: [["", "btnRadioGroup", ""]], contentQueries: function ButtonRadioGroupDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, ButtonRadioDirective, 0);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.radioButtons = _t);
    } }, hostVars: 2, hostBindings: function ButtonRadioGroupDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ButtonRadioGroupDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function ButtonRadioGroupDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("keydown.ArrowRight", function ButtonRadioGroupDirective_keydown_ArrowRight_HostBindingHandler($event) { return ctx.selectNext($event); })("keydown.ArrowDown", function ButtonRadioGroupDirective_keydown_ArrowDown_HostBindingHandler($event) { return ctx.selectNext($event); })("keydown.ArrowLeft", function ButtonRadioGroupDirective_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.selectPrevious($event); })("keydown.ArrowUp", function ButtonRadioGroupDirective_keydown_ArrowUp_HostBindingHandler($event) { return ctx.selectPrevious($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.tabindex);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([RADIO_CONTROL_VALUE_ACCESSOR$1])] });
/** @nocollapse */
ButtonRadioGroupDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
];
ButtonRadioGroupDirective.propDecorators = {
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.role',] }],
    radioButtons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
                 * @return {?}
                 */
                () => ButtonRadioDirective)),] }],
    tabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.tabindex',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['focus',] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['blur',] }],
    selectNext: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.ArrowRight', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.ArrowDown', ['$event'],] }],
    selectPrevious: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.ArrowLeft', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['keydown.ArrowUp', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonRadioGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.role']
        }], tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.tabindex']
        }], 
    /**
     * @return {?}
     */
    onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focus']
        }], 
    /**
     * @return {?}
     */
    onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    selectNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowRight', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowDown', ['$event']]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    selectPrevious: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowLeft', ['$event']]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown.ArrowUp', ['$event']]
        }], radioButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(( /**
                             * @return {?}
                             */() => ButtonRadioDirective))]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ButtonsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ButtonsModule, providers: [] };
    }
}
ButtonsModule.ɵfac = function ButtonsModule_Factory(t) { return new (t || ButtonsModule)(); };
ButtonsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ButtonsModule });
ButtonsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ButtonsModule, { declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective], exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-bootstrap-buttons.js.map

/***/ }),

/***/ "jUYC":
/*!*************************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "l70X");




const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        data: {
            title: 'Dashboard',
        },
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardRoutingModule);



/***/ }),

/***/ "l70X":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "P3Bu");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "+NEK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dashboard_charts_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-charts-data */ "YQRL");
/* harmony import */ var _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Common/common-data.service */ "4qVP");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/data.service */ "AwSQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");









let DashboardComponent = class DashboardComponent {
    constructor(chartsData, fb, service, commonData) {
        this.chartsData = chartsData;
        this.fb = fb;
        this.service = service;
        this.commonData = commonData;
        this.radioModel = 'Month';
        this.online = {};
        this.offline = {};
        this.mainChart = {};
        this.chart = [];
        this.brandBoxChart = {};
        this.barChart = {};
        this.doughnutChart = {};
        this.statusMachineChart = {};
        this.salesDetailsChart = {};
        this.soldItemsChart = {};
        this.transactionChart = {};
        this.empList = [];
        this.inputvalue = 39;
        this.submitted = false;
        this.countries = [
            { value: "m", name: "Month" },
            { value: "Y", name: "Year" }
        ];
        this.createForm();
        this.service.getAllStatusOfMachines(this.commonData.merchantId).subscribe((data) => {
            this.data = data;
            this.MachineStatus(data);
            console.log(data);
        }, (error) => (this.error = error));
        this.service.getSoldItemDetails(this.commonData.merchantId).subscribe((data) => {
            this.soldArrayLength = data.length;
            this.soldItems(data);
            console.log(data);
        }, (error) => (this.error = error));
        let dte = new Date();
        dte.setDate(dte.getDate() - 30);
        let currentDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_8__["formatDate"])(new Date(), 'dd-MM-yyyy', 'en');
        var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]("en-US");
        let lastThirtyDaysDate = datePipe.transform(dte, 'dd-MM-yyyy');
        let transaction = {
            "fromDate": lastThirtyDaysDate,
            "merchantId": this.commonData.merchantId,
            "toDate": currentDate,
        };
        this.onAddTransactionDate(transaction);
        let revenue = {
            "flag": "m",
            "merchantId": this.commonData.merchantId,
        };
        this.onAddRevenueDate(revenue);
    }
    onAddTransactionDate(addItems = {}) {
        if (addItems.fromDate == null || addItems.fromDate == '' && addItems.toDate == null || addItems.toDate == '') {
            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]("en-US");
            this.fromDate = datePipe.transform(this.fromDate, 'dd-MM-yyyy');
            this.toDate = datePipe.transform(this.toDate, 'dd-MM-yyyy');
            let spr = {
                "fromDate": this.fromDate + " 00:00:00",
                "merchantId": this.commonData.merchantId,
                "toDate": this.toDate + " 23:59:59",
            };
            this.service.getTransactionCountByStatus(spr).subscribe((resp) => {
                this.transactionArrayLength = resp.length;
                console.log("getTransactionCountByStatus Reponse:::" + JSON.stringify(resp));
                this.transactionFromDate = spr.fromDate;
                this.transactionTodate = spr.toDate;
                this.transactionCount(resp);
                if (resp && resp.status == 200) {
                    console.log(resp);
                    console.log('resp length' + resp.length);
                }
            });
        }
        else {
            var datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]("en-US");
            this.fromDate = datePipe.transform(this.fromDate, 'dd-MM-yyyy');
            this.toDate = datePipe.transform(this.toDate, 'dd-MM-yyyy');
            let spr = {
                "fromDate": addItems.fromDate + " 00:00:00",
                "merchantId": this.commonData.merchantId,
                "toDate": addItems.toDate + " 23:59:59",
            };
            this.service.getTransactionCountByStatus(spr).subscribe((resp) => {
                this.transactionArrayLength = resp.length;
                console.log("getTransactionCountByStatus Reponse:::" + JSON.stringify(resp));
                this.transactionFromDate = spr.fromDate;
                this.transactionTodate = spr.toDate;
                this.transactionCount(resp);
                if (resp && resp.status == 200) {
                    console.log(resp);
                    console.log('resp length' + resp.length);
                }
            });
        }
    }
    onAddRevenueDate(addItems = {}) {
        if (addItems.country == null || addItems.country == '') {
            let revenueDate = {
                "flag": "m",
                "merchantId": this.commonData.merchantId,
            };
            this.service.getTotalMerchantRevenueByDate(revenueDate).subscribe((resp) => {
                console.log("TotalMerchantRevenueByDate Reponse:::" + JSON.stringify(resp));
                this.revenueArrayLength = resp.length;
                this.flag = revenueDate.flag;
                this.merchantRevenue(resp);
                if (resp && resp.status == 200) {
                    console.log(resp);
                }
            });
        }
        else {
            let revenueDate = {
                "flag": addItems.country,
                "merchantId": this.commonData.merchantId,
            };
            this.service.getTotalMerchantRevenueByDate(revenueDate).subscribe((resp) => {
                console.log("TotalMerchantRevenueByDate Reponse:::" + JSON.stringify(resp));
                this.revenueArrayLength = resp.length;
                this.flag = revenueDate.flag;
                this.merchantRevenue(resp);
                if (resp && resp.status == 200) {
                    console.log(resp);
                }
            });
        }
    }
    MachineStatus(data) {
        debugger;
        this.active = 0;
        this.inActive = 0;
        if (data.inActiveCount == null || data.inActiveCount == 0 || data.inActiveCount == NaN) {
            data.inActiveCount = 0;
        }
        this.active = data.activeCount;
        this.inActive = data.inActiveCount;
        this.onlinepercentage = (data.activeCount) / (data.activeCount + data.inActiveCount) * 100;
        this.offlinepercentage = (data.inActiveCount) / (data.activeCount + data.inActiveCount) * 100;
        this.statusMachineChart.arbarChartLabels = [['Online'], ['Offline']];
        this.statusMachineChart.arbarChartType = 'pie';
        this.statusMachineChart.arbarChartLegend = true;
        this.statusMachineChart.arbarChartData = [data.activeCount, data.inActiveCount];
        this.statusMachineChart.arbarChartOptions = {};
        this.statusMachineChart.pieChartPlugins = [];
        this.statusMachineChart.pieColor = [
            {
                backgroundColor: [
                    'rgba(50,205,50)',
                    'rgba(255,69,0)',
                ]
            }
        ];
    }
    soldItems(data) {
        this.bhujiaSev = 0;
        this.pepsi = 0;
        this.chips = 0;
        this.sanitaryNapkinSmall = 0;
        this.bhujiaSevPercentage = 0;
        this.pepsiPercentage = 0;
        this.chipsPercentage = 0;
        this.sanitaryNapkinSmallPercentage = 0;
        for (let i = 0; i < this.soldArrayLength; i++) {
            if (data[i].itemName == "Bhujia Sev") {
                this.bhujiaSev = data[i].totalQuantity;
                this.bhujiaSevName = data[i].itemName;
                this.isbhujiaSev = true;
            }
            else if (data[i].itemName == "Pepsi") {
                this.pepsi = data[i].totalQuantity;
                this.pepsiName = data[i].itemName;
                this.ispepsi = true;
            }
            else if (data[i].itemName == "chips") {
                this.chips = data[i].totalQuantity;
                this.chipsName = data[i].itemName;
                this.ischips = true;
            }
            else {
                this.sanitaryNapkinSmall = data[i].totalQuantity;
                this.sanitaryNapkinSmallName = data[i].itemName;
                this.issanitaryNapkinSmall = true;
            }
        }
        this.bhujiaSevPercentage = (this.bhujiaSev) / (this.bhujiaSev + this.pepsi + this.chips + this.sanitaryNapkinSmall) * 100;
        this.pepsiPercentage = (this.pepsi) / (this.bhujiaSev + this.pepsi + this.chips + this.sanitaryNapkinSmall) * 100;
        this.chipsPercentage = (this.chips) / (this.bhujiaSev + this.pepsi + this.chips + this.sanitaryNapkinSmall) * 100;
        this.sanitaryNapkinSmallPercentage = (this.sanitaryNapkinSmall) / (this.bhujiaSev + this.pepsi + this.chips + this.sanitaryNapkinSmall) * 100;
        this.soldItemsChart.doughnutChartLabels = [[this.bhujiaSevName], [this.pepsiName], [this.chipsName], [this.sanitaryNapkinSmallName]];
        this.soldItemsChart.doughnutChartType = 'doughnut';
        this.soldItemsChart.doughnutChartLegend = true;
        this.soldItemsChart.doughnutChartData = [this.bhujiaSev, this.pepsi, this.chips, this.sanitaryNapkinSmall];
        this.soldItemsChart.doughnutChartOptions = {};
        this.soldItemsChart.pieColor = [
            {
                backgroundColor: [
                    ['rgba(242,77,65,255)'],
                    ['rgba(49,182,77,255)'],
                    ['rgba(252,203,86,255)'],
                    ['rgba(104,223,237,255)']
                ]
            }
        ];
    }
    transactionCount(data) {
        if (this.transactionArrayLength == 0 || this.transactionArrayLength == null) {
            this.isShown = true;
            this.ispieShown = false;
        }
        else {
            this.isShown = false;
            this.ispieShown = true;
        }
        this.transactionFailed = 0;
        this.completed = 0;
        this.dispenseFailed = 0;
        this.orderCreated = 0;
        this.paymentSuccess = 0;
        this.completedPercentage = 0;
        this.failedPercentage = 0;
        for (let i = 0; i < this.transactionArrayLength; i++) {
            if (data[i].transactionStatus == "COMPLETED") {
                this.completed = data[i].count;
            }
            else if (data[i].transactionStatus == "DISPENSE FAILED") {
                this.dispenseFailed = data[i].count;
            }
            else if (data[i].transactionStatus == "ORDER CREATED") {
                this.orderCreated = data[i].count;
            }
            else if (data[i].transactionStatus == "PAYMENT SUCCESS") {
                this.paymentSuccess = data[i].count;
            }
            else {
                this.transactionFailed = data[i].count;
            }
        }
        if ((this.dispenseFailed + this.completed) != 0) {
            this.completedPercentage = ((this.completed) / (this.dispenseFailed + this.completed)) * 100;
            this.failedPercentage = ((this.dispenseFailed) / (this.dispenseFailed + this.completed)) * 100;
        }
        else {
            this.completedPercentage = 0;
            this.failedPercentage = 0;
        }
        this.transactionChart.arbarChartLabels = ['Success', 'Failed'];
        this.transactionChart.arbarChartType = 'pie';
        this.transactionChart.arbarChartLegend = true;
        this.transactionChart.arbarChartData = [this.completed, this.dispenseFailed];
        this.transactionChart.arbarChartOptions = {};
        this.transactionChart.pieChartPlugins = [];
        this.transactionChart.pieColor = [
            {
                backgroundColor: [
                    'rgba(34,139,34)',
                    'rgba(255,0,0)',
                ]
            }
        ];
    }
    merchantRevenue(data) {
        if (data['totalRevenueData'].week1 == 0 && this.flag == 'm' || data['totalRevenueData'].week1 == null && this.flag == 'm' || data['totalRevenueData'].DECEMBER2021 == 0 && this.flag == 'Y' || data['totalRevenueData'].DECEMBER2021 == null && this.flag == 'Y') {
            this.isHide = true;
            this.isPieHide = false;
        }
        else {
            this.isHide = false;
            this.isPieHide = true;
        }
        // if(data.totalRevenue == null ||data.totalRevenue == 0 ){
        //   this.totalRevenue = 0;
        //   this.revenuePercentage = 0;
        // }
        // else{
        //   this.totalRevenue = data.totalRevenue;
        //   this.revenuePercentage =  (data.totalRevenue / (data.totalRevenue + 0))*100;
        // }
        if (this.flag == 'm') {
            this.monthOrYear = "Month";
            this.salesDetailsChart.arbarChartLabels = ['week1', 'week2', 'week3', 'week4'];
            this.salesDetailsChart.arbarChartType = 'bar';
            this.salesDetailsChart.arbarChartLegend = true;
            this.salesDetailsChart.arbarChartData = [data['totalRevenueData']['week1'], data['totalRevenueData']['week2'], data['totalRevenueData']['week3'], data['totalRevenueData']['week4']];
            this.salesDetailsChart.arbarChartOptions = {
                scales: {
                    xAxes: [{
                            barPercentage: 0.4
                        }]
                }
            };
            this.salesDetailsChart.pieChartPlugins = [];
            this.salesDetailsChart.pieColor = [
                {
                    backgroundColor: [
                        'rgba(255,161,181,255)',
                        'rgba(134,199,243,255)',
                        'rgba(255,225,153,255)',
                        'rgb(204,211,217)',
                        'rgba(255,161,181,255)',
                    ]
                }
            ];
        }
        else {
            this.monthOrYear = "Year";
            this.salesDetailsChart.arbarChartLabels = ['DECEMBER2021', 'JANUARY2022', 'FEBRUARY2022', 'MARCH2022',];
            this.salesDetailsChart.arbarChartType = 'bar';
            this.salesDetailsChart.arbarChartLegend = true;
            this.salesDetailsChart.arbarChartData = [data['totalRevenueData'].DECEMBER2021, data['totalRevenueData'].JANUARY2022, data['totalRevenueData'].FEBRUARY2022, data['totalRevenueData'].MARCH2022,];
            this.salesDetailsChart.arbarChartOptions = {
                scales: {
                    xAxes: [{
                            barPercentage: 0.4
                        }]
                }
            };
            this.salesDetailsChart.pieChartPlugins = [];
            this.salesDetailsChart.pieColor = [
                {
                    backgroundColor: [
                        'rgba(255,161,181,255)',
                        'rgba(134,199,243,255)',
                        'rgba(255,225,153,255)',
                        'rgb(204,211,217)',
                        'rgba(255,161,181,255)',
                    ]
                }
            ];
        }
    }
    ngOnInit() {
        this.initCharts();
        this.dateRangeForm = this.fb.group({
            fromDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required),
            toDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required)
        });
        this.contactForm = this.fb.group({
            country: [null]
        });
    }
    initCharts() {
        this.mainChart = this.chartsData.mainChart;
        this.chart = this.chartsData.widgetChart;
        this.brandBoxChart = this.chartsData.brandBoxChart;
        this.barChart = this.chartsData.barChart;
    }
    createForm() {
        this.simpleForm = this.fb.group({
            fromDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            toDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            fromDates: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            toDates: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            flag: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
        });
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
    submit() {
        console.log(this.contactForm.value);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _dashboard_charts_data__WEBPACK_IMPORTED_MODULE_4__["DashboardChartsData"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_charts_data__WEBPACK_IMPORTED_MODULE_4__["DashboardChartsData"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"]])
], DashboardComponent);

//   this.barChart.arbarChartLabels = ['Success','Failed','Order Created','Payment Success','Transaction Failed'];
//   this.barChart.arbarChartType = 'bar';
//   this.barChart.arbarChartLegend = false;
//   this.barChart.arbarChartData = [this.completed,this.dispenseFailed,this.orderCreated,this.paymentSuccess,this.transactionFailed];
//   this.barChart.arbarChartOptions = {
//     scales: {
//         xAxes: [{
//             barPercentage: 0.7
//         }]
//     }
// }
//   this.barChart.pieChartPlugins  = [];
//   this.barChart.pieColor  = [
//     {
//       backgroundColor: [
//         'rgba(37,150,190,255)',
//         'rgba(147,217,217,255)',
//         'rgb(153,153,255)',
//         'rgba(255,161,181,255)',
//         'rgba(134,199,243,255)'
//       ]
//     }
//   ]


/***/ })

}]);
//# sourceMappingURL=views-dashboard-dashboard-module-es2015.js.map