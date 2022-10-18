(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-tables-basic-tables-module"],{

/***/ "+rHM":
/*!******************************************************************!*\
  !*** ./src/app/views/tables/basic-tables/basic-tables.module.ts ***!
  \******************************************************************/
/*! exports provided: BasicTablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTablesModule", function() { return BasicTablesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "6No5");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _basic_tables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-tables.component */ "NJnN");
/* harmony import */ var _basic_tables_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic-tables-routing.module */ "hPLu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");








let BasicTablesModule = class BasicTablesModule {
};
BasicTablesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_basic_tables_component__WEBPACK_IMPORTED_MODULE_5__["BasicTablesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _basic_tables_routing_module__WEBPACK_IMPORTED_MODULE_6__["BasicTablesRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["BadgeModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ],
    })
], BasicTablesModule);



/***/ }),

/***/ "/4gm":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tables/basic-tables/basic-tables.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col lg=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Users\r\n        </c-card-header>\r\n        \r\n        <c-card-body>\r\n          <button cButton color=\"primary\" class=\"mfe-1\" >Add</button>\r\n          <table class=\"table table-responsive-sm\">\r\n            <colgroup>\r\n              <col class=\"column-1\" />\r\n              <col class=\"column-2\" />\r\n              <col class=\"column-3\" />\r\n              <col class=\"column-4\" />\r\n              <col class=\"column-5\" />\r\n            </colgroup>\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">id</th>\r\n                <th>Username</th>\r\n                <th>Registered</th>\r\n                <th>Role</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let user of returnedArray\">\r\n                <th scope=\"row\">{{ user.id }}</th>\r\n                <td>{{ user.name }}</td>\r\n                <td>{{ user.registered | date: \"shortDate\" }}</td>\r\n                <td>{{ user.role }}</td>\r\n                <td>\r\n                  <c-badge [color]=\"getBadge(user.status)\">{{\r\n                    user.status\r\n                  }}</c-badge>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <pagination\r\n            [totalItems]=\"tableData.length\"\r\n            (pageChanged)=\"pageChanged($event)\"\r\n            [itemsPerPage]=\"5\"\r\n            [(ngModel)]=\"currentPage\"\r\n            [maxSize]=\"4\"\r\n            [rotate]=\"true\"\r\n          ></pagination>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n");

/***/ }),

/***/ "GHXp":
/*!***********************************************************************!*\
  !*** ./src/app/views/tables/basic-tables/basic-tables.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .column-1 {\n  width: 7%;\n}\n:host .column-2 {\n  width: 40%;\n}\n:host .column-3 {\n  width: 23%;\n}\n:host .column-4 {\n  width: 15%;\n}\n:host .column-5 {\n  width: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmFzaWMtdGFibGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsU0FBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0FBQUo7QUFFRTtFQUNFLFVBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtBQUFKO0FBRUU7RUFDRSxVQUFBO0FBQUoiLCJmaWxlIjoiYmFzaWMtdGFibGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jb2x1bW4tMSB7XHJcbiAgICB3aWR0aDogNyU7XHJcbiAgfVxyXG4gIC5jb2x1bW4tMiB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICAuY29sdW1uLTMge1xyXG4gICAgd2lkdGg6IDIzJTtcclxuICB9XHJcbiAgLmNvbHVtbi00IHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG4gIC5jb2x1bW4tNSB7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "NJnN":
/*!*********************************************************************!*\
  !*** ./src/app/views/tables/basic-tables/basic-tables.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicTablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTablesComponent", function() { return BasicTablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_basic_tables_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./basic-tables.component.html */ "/4gm");
/* harmony import */ var _basic_tables_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-tables.component.scss */ "GHXp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _users_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-data */ "kRiT");





let BasicTablesComponent = class BasicTablesComponent {
    constructor() {
        this.tableData = _users_data__WEBPACK_IMPORTED_MODULE_4__["usersData"];
        this.currentPage = 1;
    }
    ngOnInit() {
        this.returnedArray = this.tableData.slice(0, 5);
    }
    pageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.page = event.page;
        this.returnedArray = this.tableData.slice(startItem, endItem);
    }
    getBadge(status) {
        switch (status) {
            case 'Active':
                return 'success';
            case 'Inactive':
                return 'secondary';
            case 'Pending':
                return 'warning';
            case 'Banned':
                return 'danger';
            default:
                return 'primary';
        }
    }
};
BasicTablesComponent.ctorParameters = () => [];
BasicTablesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-basic-tables',
        template: _raw_loader_basic_tables_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basic_tables_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BasicTablesComponent);



/***/ }),

/***/ "hPLu":
/*!**************************************************************************!*\
  !*** ./src/app/views/tables/basic-tables/basic-tables-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: BasicTablesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicTablesRoutingModule", function() { return BasicTablesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _basic_tables_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-tables.component */ "NJnN");




const routes = [
    {
        path: '',
        component: _basic_tables_component__WEBPACK_IMPORTED_MODULE_3__["BasicTablesComponent"],
        data: {
            title: 'Tables',
        },
    },
];
let BasicTablesRoutingModule = class BasicTablesRoutingModule {
};
BasicTablesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BasicTablesRoutingModule);



/***/ }),

/***/ "kRiT":
/*!*********************************************************!*\
  !*** ./src/app/views/tables/basic-tables/users-data.ts ***!
  \*********************************************************/
/*! exports provided: usersData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersData", function() { return usersData; });
const usersData = [
    {
        id: 101,
        name: 'John Doe',
        registered: '2018/01/01',
        role: 'Guest',
        status: 'Pending',
    },
    {
        id: 102,
        name: 'Samppa Nori',
        registered: '2018/01/01',
        role: 'Member',
        status: 'Active',
    },
    {
        id: 103,
        name: 'Estavan Lykos',
        registered: '2018/02/01',
        role: 'Staff',
        status: 'Banned',
    },
    {
        id: 104,
        name: 'Chetan Mohamed',
        registered: '2018/02/01',
        role: 'Admin',
        status: 'Inactive',
    },
    {
        id: 105,
        name: 'Derick Maximinus',
        registered: '2018/03/01',
        role: 'Member',
        status: 'Pending',
    },
    {
        id: 5,
        name: 'Friderik Dávid',
        registered: '2018/01/21',
        role: 'Staff',
        status: 'Active',
    },
    {
        id: 6,
        name: 'Yiorgos Avraamu',
        registered: '2018/01/01',
        role: 'Member',
        status: 'Active',
    },
    {
        id: 7,
        name: 'Avram Tarasios',
        registered: '2018/02/01',
        role: 'Staff',
        status: 'Banned',
    },
    {
        id: 8,
        name: 'Quintin Ed',
        registered: '2018/02/01',
        role: 'Admin',
        status: 'Inactive',
    },
    {
        id: 9,
        name: 'Enéas Kwadwo',
        registered: '2018/03/01',
        role: 'Member',
        status: 'Pending',
    },
    {
        id: 10,
        name: 'Agapetus Tadeáš',
        registered: '2018/01/21',
        role: 'Staff',
        status: 'Active',
    },
    {
        id: 11,
        name: 'Carwyn Fachtna',
        registered: '2018/01/01',
        role: 'Member',
        status: 'Active',
    },
    {
        id: 12,
        name: 'Nehemiah Tatius',
        registered: '2018/02/01',
        role: 'Staff',
        status: 'Banned',
    },
    {
        id: 13,
        name: 'Ebbe Gemariah',
        registered: '2018/02/01',
        role: 'Admin',
        status: 'Inactive',
    },
    {
        id: 14,
        name: 'Eustorgios Amulius',
        registered: '2018/03/01',
        role: 'Member',
        status: 'Pending',
    },
    {
        id: 15,
        name: 'Leopold Gáspár',
        registered: '2018/01/21',
        role: 'Staff',
        status: 'Active',
    },
    {
        id: 16,
        name: 'Pompeius René',
        registered: '2018/01/01',
        role: 'Member',
        status: 'Active',
    },
    {
        id: 17,
        name: 'Paĉjo Jadon',
        registered: '2018/02/01',
        role: 'Staff',
        status: 'Banned',
    },
    {
        id: 18,
        name: 'Micheal Mercurius',
        registered: '2018/02/01',
        role: 'Admin',
        status: 'Inactive',
    },
    {
        id: 19,
        name: 'Ganesha Dubhghall',
        registered: '2018/03/01',
        role: 'Member',
        status: 'Pending',
    },
    {
        id: 20,
        name: 'Hiroto Šimun',
        registered: '2018/01/21',
        role: 'Staff',
        status: 'Active',
    },
    {
        id: 21,
        name: 'Vishnu Serghei',
        registered: '2018/01/01',
        role: 'Member',
        status: 'Active',
    },
    {
        id: 22,
        name: 'Zbyněk Phoibos',
        registered: '2018/02/01',
        role: 'Staff',
        status: 'Banned',
    },
    {
        id: 23,
        name: 'Aulus Agmundr',
        registered: '2018/01/01',
        role: 'Member',
        status: 'Pending',
    },
    {
        id: 42,
        name: 'Ford Prefect',
        registered: '2001/05/25',
        role: 'Alien',
        status: 'Don\'t panic!',
    },
];


/***/ })

}]);
//# sourceMappingURL=basic-tables-basic-tables-module-es2015.js.map