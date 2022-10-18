(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-apps-apps-module"],{

/***/ "6/Kp":
/*!***************************************************!*\
  !*** ./src/app/views/apps/apps-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsRoutingModule", function() { return AppsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "QB/w");




const routes = [
    {
        path: '',
        data: {
            title: 'Apps',
        },
        children: [
            // {
            //   path: 'email',
            //   loadChildren: () => import('./email/email.module').then(m => m.EmailModule)
            // },
            {
                path: 'invoicing',
                loadChildren: () => __webpack_require__.e(/*! import() | invoicing-invoice-module */ "invoicing-invoice-module").then(__webpack_require__.bind(null, /*! ./invoicing/invoice.module */ "tIlT")).then((m) => m.InvoiceModule),
            },
        ],
    },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
let AppsRoutingModule = class AppsRoutingModule {
};
AppsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppsRoutingModule);



/***/ }),

/***/ "QaRx":
/*!*******************************************!*\
  !*** ./src/app/views/apps/apps.module.ts ***!
  \*******************************************/
/*! exports provided: AppsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsModule", function() { return AppsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apps-routing.module */ "6/Kp");




let AppsModule = class AppsModule {
};
AppsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _apps_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppsRoutingModule"]],
    })
], AppsModule);



/***/ })

}]);
//# sourceMappingURL=views-apps-apps-module-es2015.js.map