(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoicing-invoice-module"],{

/***/ "De1K":
/*!****************************************************************!*\
  !*** ./src/app/views/apps/invoicing/invoice-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: InvoiceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceRoutingModule", function() { return InvoiceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice.component */ "UXWq");




const routes = [
    {
        path: 'invoice',
        component: _invoice_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceComponent"],
        data: {
            title: 'Invoice',
        },
    },
];
let InvoiceRoutingModule = class InvoiceRoutingModule {
};
InvoiceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvoiceRoutingModule);



/***/ }),

/***/ "UXWq":
/*!***********************************************************!*\
  !*** ./src/app/views/apps/invoicing/invoice.component.ts ***!
  \***********************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invoice.component.html */ "o6Do");
/* harmony import */ var _invoice_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.component.scss */ "xt6H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let InvoiceComponent = class InvoiceComponent {
    constructor() { }
    ngOnInit() { }
    print() {
        // tslint:disable-next-line:no-unused-expression
        window && window.print();
    }
};
InvoiceComponent.ctorParameters = () => [];
InvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invoice',
        template: _raw_loader_invoice_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invoice_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], InvoiceComponent);



/***/ }),

/***/ "o6Do":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/apps/invoicing/invoice.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<c-card>\r\n  <c-card-header class=\"d-flex align-items-center\">\r\n    <span>Invoice <strong> #90-98792</strong></span>\r\n    <button\r\n      [routerLink]\r\n      cButton\r\n      size=\"sm\"\r\n      color=\"secondary\"\r\n      class=\"mfs-auto mr-1 d-print-none\"\r\n      (click)=\"print()\"\r\n    >\r\n      <c-icon name=\"cil-print\"></c-icon> Print\r\n    </button>\r\n    <button cButton size=\"sm\" color=\"info\" class=\"mr-1 d-print-none\">\r\n      <c-icon name=\"cil-save\"></c-icon> Save\r\n    </button>\r\n  </c-card-header>\r\n  <c-card-body>\r\n    <c-row class=\"mb-4\">\r\n      <c-col sm=\"4\">\r\n        <h6 class=\"mb-3\">From:</h6>\r\n        <div><strong>BootstrapMaster.com</strong></div>\r\n        <div>Konopnickiej 42</div>\r\n        <div>43-190 Mikolow, Poland</div>\r\n        <div>Email: lukasz@bootstrapmaster.com</div>\r\n        <div>Phone: +48 123 456 789</div>\r\n      </c-col>\r\n\r\n      <c-col sm=\"4\">\r\n        <h6 class=\"mb-3\">To:</h6>\r\n        <div><strong>BootstrapMaster.com</strong></div>\r\n        <div>Konopnickiej 42</div>\r\n        <div>43-190 Mikolow, Poland</div>\r\n        <div>Email: lukasz@bootstrapmaster.com</div>\r\n        <div>Phone: +48 123 456 789</div>\r\n      </c-col>\r\n\r\n      <c-col sm=\"4\">\r\n        <h6 class=\"mb-3\">Details:</h6>\r\n        <div>Invoice <strong>#90-98792</strong></div>\r\n        <div>March 30, 2013</div>\r\n        <div>VAT: PL9877281777</div>\r\n        <div>Account Name: BootstrapMaster.com</div>\r\n        <div><strong>SWIFT code: 99 8888 7777 6666 5555</strong></div>\r\n      </c-col>\r\n    </c-row>\r\n\r\n    <div class=\"table-responsive-sm\">\r\n      <table class=\"table table-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"center\">#</th>\r\n            <th>Item</th>\r\n            <th>Description</th>\r\n            <th class=\"center\">Quantity</th>\r\n            <th class=\"right\">Unit Cost</th>\r\n            <th class=\"right\">Total</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <td class=\"center\">1</td>\r\n            <td class=\"left\">Origin License</td>\r\n            <td class=\"left\">Extended License</td>\r\n            <td class=\"center\">1</td>\r\n            <td class=\"right\">$999,00</td>\r\n            <td class=\"right\">$999,00</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"center\">2</td>\r\n            <td class=\"left\">Custom Services</td>\r\n            <td class=\"left\">Installation and Customization (cost per hour)</td>\r\n            <td class=\"center\">20</td>\r\n            <td class=\"right\">$150,00</td>\r\n            <td class=\"right\">$3.000,00</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"center\">3</td>\r\n            <td class=\"left\">Hosting</td>\r\n            <td class=\"left\">1 year subscription</td>\r\n            <td class=\"center\">1</td>\r\n            <td class=\"right\">$499,00</td>\r\n            <td class=\"right\">$499,00</td>\r\n          </tr>\r\n          <tr>\r\n            <td class=\"center\">4</td>\r\n            <td class=\"left\">Platinum Support</td>\r\n            <td class=\"left\">1 year subscription 24/7</td>\r\n            <td class=\"center\">1</td>\r\n            <td class=\"right\">$3.999,00</td>\r\n            <td class=\"right\">$3.999,00</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <c-row>\r\n      <c-col sm=\"5\" lg=\"4\">\r\n        <p>\r\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do\r\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\r\n          minim veniam, quis nostrud exercitation ullamco laboris nisi ut\r\n          aliquip ex ea commodo consequat. Duis aute irure dolor in\r\n          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n          pariatur.\r\n        </p>\r\n      </c-col>\r\n\r\n      <c-col lg=\"4\" sm=\"5\" class=\"offset-lg-4 offset-sm-2\">\r\n        <table class=\"table table-clear\">\r\n          <tbody>\r\n            <tr>\r\n              <td class=\"left\"><strong>Subtotal</strong></td>\r\n              <td class=\"right\">$8.497,00</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"left\"><strong>Discount (20%)</strong></td>\r\n              <td class=\"right\">$1,699,40</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"left\"><strong>VAT (10%)</strong></td>\r\n              <td class=\"right\">$679,76</td>\r\n            </tr>\r\n            <tr>\r\n              <td class=\"left\"><strong>Total</strong></td>\r\n              <td class=\"right\"><strong>$7.477,36</strong></td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n        <button cButton color=\"success\" [routerLink]>\r\n          <c-icon name=\"cil-dollar\"></c-icon> Proceed to Payment\r\n        </button>\r\n      </c-col>\r\n    </c-row>\r\n  </c-card-body>\r\n</c-card>\r\n");

/***/ }),

/***/ "tIlT":
/*!********************************************************!*\
  !*** ./src/app/views/apps/invoicing/invoice.module.ts ***!
  \********************************************************/
/*! exports provided: InvoiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-routing.module */ "De1K");
/* harmony import */ var _invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice.component */ "UXWq");







let InvoiceModule = class InvoiceModule {
};
InvoiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_invoice_component__WEBPACK_IMPORTED_MODULE_6__["InvoiceComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoiceRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
        ],
    })
], InvoiceModule);



/***/ }),

/***/ "xt6H":
/*!*************************************************************!*\
  !*** ./src/app/views/apps/invoicing/invoice.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=invoicing-invoice-module-es2015.js.map