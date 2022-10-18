(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-tables-tables-module"],{

/***/ "KQ5F":
/*!*******************************************************!*\
  !*** ./src/app/views/tables/tables-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRoutingModule", function() { return TablesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");



const routes = [
    {
        path: '',
        data: {
            title: 'Plugins',
        },
        children: [
            {
                path: '',
                redirectTo: 'tables',
            },
            {
                path: 'tables',
                loadChildren: () => Promise.all(/*! import() | basic-tables-basic-tables-module */[__webpack_require__.e("default~basic-tables-basic-tables-module~views-base-base-module~views-business-technical-business-te~f777e895"), __webpack_require__.e("basic-tables-basic-tables-module")]).then(__webpack_require__.bind(null, /*! ./basic-tables/basic-tables.module */ "+rHM")).then((m) => m.BasicTablesModule),
            },
            {
                path: 'datatables',
                loadChildren: () => Promise.all(/*! import() | data-tables-data-tables-module */[__webpack_require__.e("default~data-tables-data-tables-module~views-inventory-addItems-addItems-module~views-inventory-addS~1ca80cfd"), __webpack_require__.e("data-tables-data-tables-module")]).then(__webpack_require__.bind(null, /*! ./data-tables/data-tables.module */ "Jobr")).then((m) => m.DataTablesInitModule),
            },
        ],
    },
];
let TablesRoutingModule = class TablesRoutingModule {
};
TablesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TablesRoutingModule);



/***/ }),

/***/ "MCDY":
/*!***********************************************!*\
  !*** ./src/app/views/tables/tables.module.ts ***!
  \***********************************************/
/*! exports provided: TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tables-routing.module */ "KQ5F");




let TablesModule = class TablesModule {
};
TablesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _tables_routing_module__WEBPACK_IMPORTED_MODULE_3__["TablesRoutingModule"]],
    })
], TablesModule);



/***/ })

}]);
//# sourceMappingURL=views-tables-tables-module-es2015.js.map