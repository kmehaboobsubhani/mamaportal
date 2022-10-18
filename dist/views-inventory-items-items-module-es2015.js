(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-inventory-items-items-module"],{

/***/ "10lv":
/*!**********************************************************!*\
  !*** ./src/app/views/inventory/items/items.component.ts ***!
  \**********************************************************/
/*! exports provided: DataTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesComponent", function() { return DataTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_items_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./items.component.html */ "wieO");
/* harmony import */ var _items_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items.component.scss */ "f3ut");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Common/common-data.service */ "4qVP");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../service/data.service */ "AwSQ");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "7g+E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");








//import { ValidationFormsService } from './validation-forms.service';

let DataTablesComponent = class DataTablesComponent {
    constructor(fb, service, commonData, spinner, router) {
        this.fb = fb;
        this.service = service;
        this.commonData = commonData;
        this.spinner = spinner;
        this.router = router;
        this.filterQuery = '';
        this.springs = [];
        this.levels = [];
        this.curLoadedQty = 0;
        this.customer = {};
        this.submitted = false;
        this.ica = {};
        this.sortByWordLength = (a) => {
            return a.name.length;
        };
        this.createForm();
        this.setTab = 0;
        this.service.getAllItemsOfMerchant(this.commonData.merchantId).subscribe((data) => {
            setTimeout(() => {
                this.data = [...data]; //Refresh
            }, 1000);
        }, (error) => (this.error = error));
    }
    get setTab() {
        return this._setTab;
    }
    set setTab(value) {
        this._setTab = value || 0;
    }
    toInt(num) {
        return +num;
    }
    getDate(regDate) {
        const date = new Date(regDate);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
        });
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
            cid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            crc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            ica: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            asn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            iid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            itp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            spn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            imx: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            key: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            qmx: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
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
            secondaryContact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
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
        // stop here if form is invalid
        return this.simpleForm.status === 'VALID';
    }
    onSubmit() {
        debugger;
        //console.warn(this.onValidate(), this.simpleForm.value);
        if (this.onValidate()) {
            console.warn(this.simpleForm.value);
            alert('SUCCESS!');
        }
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        // clearInterval(this.interval);
    }
    ngOnChanges(changes) {
        console.log('ngOnChanges', changes, this.setTab);
    }
};
DataTablesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
DataTablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-items',
        template: _raw_loader_items_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_items_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], DataTablesComponent);



/***/ }),

/***/ "K3aW":
/*!************************************************************!*\
  !*** ./src/app/views/inventory/items/items-filter.pipe.ts ***!
  \************************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let DataFilterPipe = class DataFilterPipe {
    transform(array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](array, (row) => row.name.indexOf(query) > -1);
        }
        return array;
    }
};
DataFilterPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 'dataFilter',
    })
], DataFilterPipe);



/***/ }),

/***/ "Kopg":
/*!*******************************************************!*\
  !*** ./src/app/views/inventory/items/items.module.ts ***!
  \*******************************************************/
/*! exports provided: DataTablesInitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesInitModule", function() { return DataTablesInitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _pascalhonegger_ng_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pascalhonegger/ng-datatable */ "j9sh");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _items_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items.component */ "10lv");
/* harmony import */ var _items_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items-filter.pipe */ "K3aW");
/* harmony import */ var _items_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items-routing.module */ "Y8rU");










let DataTablesInitModule = class DataTablesInitModule {
};
DataTablesInitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _items_routing_module__WEBPACK_IMPORTED_MODULE_9__["DataTablesRoutingModule"],
            _pascalhonegger_ng_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_6__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_6__["GridModule"],
            _pascalhonegger_ng_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTableModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_6__["FormModule"],
        ],
        declarations: [_items_component__WEBPACK_IMPORTED_MODULE_7__["DataTablesComponent"], _items_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["DataFilterPipe"]],
    })
], DataTablesInitModule);



/***/ }),

/***/ "Y8rU":
/*!***************************************************************!*\
  !*** ./src/app/views/inventory/items/items-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DataTablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataTablesRoutingModule", function() { return DataTablesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items.component */ "10lv");




const routes = [
    {
        path: '',
        component: _items_component__WEBPACK_IMPORTED_MODULE_3__["DataTablesComponent"],
        data: {
            title: 'Data Table',
        },
    },
];
let DataTablesRoutingModule = class DataTablesRoutingModule {
};
DataTablesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DataTablesRoutingModule);



/***/ }),

/***/ "f3ut":
/*!************************************************************!*\
  !*** ./src/app/views/inventory/items/items.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpdGVtcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "wieO":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory/items/items.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <div class=\"float-left\">\r\n        <h3 class=\"text-info\">Item Master</h3>\r\n      </div>\r\n      <div class=\"float-right\">\r\n        <a class=\"btn btn-success\" [routerLink]=\"['/items/addItems']\"><i class=\"fa fa-plus\"></i> Add Item</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <div class=\"table-responsive-sm\">\r\n        <div class=\"float-right\">\r\n          <span class=\"input-group-text\"><i class=\"cil-search\"></i></span>\r\n        </div>\r\n        <div class=\"float-right\">\r\n          <input cInput [(ngModel)]=\"filterQuery\" placeholder=\"Search by name\" />\r\n        </div>\r\n\r\n        <table class=\"table table-striped table-hover table-responsive-lg\" [mfData]=\"data | dataFilter: filterQuery\"\r\n          #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\">\r\n          <thead>\r\n            <tr>\r\n              <th style=\"width: 5%;\">\r\n                <mfDefaultSorter by=\"itemId\" #sortItemId>\r\n                  ItemId\r\n                  <span *ngIf=\"sortItemId.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortItemId.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 20%;\">\r\n                <mfDefaultSorter by=\"name\" #sortName>\r\n                  Name\r\n                  <span *ngIf=\"sortName.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortName.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 20%;\">\r\n                <mfDefaultSorter by=\"description\" #sortDescription>\r\n                  Description\r\n                  <span *ngIf=\"sortDescription.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortDescription.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%;\">\r\n                <mfDefaultSorter by=\"costPrice\" #sortCostPrice>\r\n                  CostPrice\r\n                  <span *ngIf=\"sortCostPrice.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortCostPrice.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%;\">\r\n                <mfDefaultSorter by=\"sellPrice\" #sortSellPrice>\r\n                  SellPrice\r\n                  <span *ngIf=\"sortSellPrice.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortSellPrice.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%;\">\r\n                <mfDefaultSorter by=\"gst\" #sortGst>\r\n                  Gst\r\n                  <span *ngIf=\"sortGst.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortGst.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%;\">\r\n                <mfDefaultSorter by=\"discount\" #sortDiscount>\r\n                  Discount\r\n                  <span *ngIf=\"sortDiscount.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortDiscount.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%;\">\r\n                <mfDefaultSorter by=\"threshold\" #sortThreshold>\r\n                  Threshold\r\n                  <span *ngIf=\"sortThreshold.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortThreshold.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%;\">\r\n                <mfDefaultSorter by=\"category\" #sortCategory>\r\n                  Category\r\n                  <span *ngIf=\"sortCategory.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortCategory.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%;\">\r\n                <mfDefaultSorter by=\"active\" #sortActive>\r\n                  Active\r\n                  <span *ngIf=\"sortActive.isSortedByMeAsc\" class=\"cil-arrow-top\" aria-hidden=\"true\"></span>\r\n                  <span *ngIf=\"sortActive.isSortedByMeDesc\" class=\"cil-arrow-bottom\" aria-hidden=\"true\"></span>\r\n                </mfDefaultSorter>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let tr of mf.data\">\r\n              <td>{{ tr.itemId }}</td>\r\n              <td>{{ tr.name }}</td>\r\n              <td>{{ tr.description }}</td>\r\n              <td>{{ tr.costPrice }}</td>\r\n              <td>{{ tr.sellPrice }}</td>\r\n              <td>{{ tr.gst }}</td>\r\n              <td>{{ tr.discount }}</td>\r\n              <td>{{ tr.threshold }}</td>\r\n              <td>{{ tr.category }}</td>\r\n              <td>{{ tr.active }}</td>\r\n            </tr>\r\n          </tbody>\r\n          <div class=\"card-footer\">\r\n            <div class=\"float-right\">\r\n                <mfBootstrapPaginator [rowsOnPageSet]=\"[5, 10, 15]\"></mfBootstrapPaginator>\r\n          </div>\r\n          </div>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div [style.display]=\"showModal ? 'block' : 'none'\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">ICA</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"simpleForm\" (ngSubmit)=\"onSubmits()\">\r\n          <div class=\"row\">\r\n              <c-row>\r\n                <c-form-group cCol md=\"4\">\r\n                  <h6 class=\"col-form-label\" for=\"cid\">cid :</h6>\r\n                  <input cInput id=\"cid\" formControlName=\"cid\" placeholder=\"cid\" autocomplete=\"given-name\"\r\n                    required [autofocus]=\"true\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted || f.cid.touched) && f.cid.invalid, 'is-valid': f.loginId.touched && f.cid.valid  }\" />\r\n                  <div *ngIf=\"submitted && f['cid'].invalid\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f['cid'].errors.required\">cid is required</div>\r\n                  </div>\r\n                </c-form-group>\r\n            </c-row>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"icaFieldValue(simpleForm.value);hide()\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"hide()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->");

/***/ })

}]);
//# sourceMappingURL=views-inventory-items-items-module-es2015.js.map