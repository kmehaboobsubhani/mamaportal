(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-icons-icons-module"],{

/***/ "LOSu":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/icons/coreui-icons.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-card>\r\n    <c-card-header>\r\n      {{ title }}\r\n      <c-card-header-actions>\r\n        <a\r\n          href=\"https://coreui.io/icons\"\r\n          rel=\"noreferrer noopener\"\r\n          target=\"_blank\"\r\n          class=\"card-header-action\"\r\n        >\r\n          <small class=\"text-muted\">download</small>\r\n        </a>\r\n      </c-card-header-actions>\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <c-row class=\"text-center\">\r\n        <c-col\r\n          class=\"mb-5\"\r\n          xs=\"6\"\r\n          sm=\"4\"\r\n          md=\"3\"\r\n          xl=\"2\"\r\n          *ngFor=\"let icon of icons\"\r\n        >\r\n          <c-icon [name]=\"icon[0]\" size=\"3xl\" [title]=\"icon[0]\"></c-icon>\r\n          <div>{{ toKebabCase(icon[0]) }}</div>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n</div>\r\n");

/***/ }),

/***/ "aPNi":
/*!*********************************************!*\
  !*** ./src/app/views/icons/icons.module.ts ***!
  \*********************************************/
/*! exports provided: IconsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsModule", function() { return IconsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _coreui_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coreui-icons.component */ "xYUe");
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons-routing.module */ "fncw");







let IconsModule = class IconsModule {
};
IconsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _icons_routing_module__WEBPACK_IMPORTED_MODULE_6__["IconsRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ],
        declarations: [_coreui_icons_component__WEBPACK_IMPORTED_MODULE_5__["CoreUIIconsComponent"]],
    })
], IconsModule);



/***/ }),

/***/ "fncw":
/*!*****************************************************!*\
  !*** ./src/app/views/icons/icons-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IconsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsRoutingModule", function() { return IconsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _coreui_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coreui-icons.component */ "xYUe");




const routes = [
    {
        path: '',
        data: {
            title: 'Icons',
        },
        children: [
            {
                path: '',
                redirectTo: 'coreui-icons',
            },
            {
                path: 'coreui-icons',
                component: _coreui_icons_component__WEBPACK_IMPORTED_MODULE_3__["CoreUIIconsComponent"],
                data: {
                    title: 'CoreUI Icons',
                },
            },
            {
                path: 'brands',
                component: _coreui_icons_component__WEBPACK_IMPORTED_MODULE_3__["CoreUIIconsComponent"],
                data: {
                    title: 'Brands',
                },
            },
            {
                path: 'flags',
                component: _coreui_icons_component__WEBPACK_IMPORTED_MODULE_3__["CoreUIIconsComponent"],
                data: {
                    title: 'Flags',
                },
            },
        ],
    },
];
let IconsRoutingModule = class IconsRoutingModule {
};
IconsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IconsRoutingModule);



/***/ }),

/***/ "xYUe":
/*!*******************************************************!*\
  !*** ./src/app/views/icons/coreui-icons.component.ts ***!
  \*******************************************************/
/*! exports provided: CoreUIIconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreUIIconsComponent", function() { return CoreUIIconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_coreui_icons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./coreui-icons.component.html */ "LOSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");





let CoreUIIconsComponent = class CoreUIIconsComponent {
    constructor(route, iconSet) {
        this.route = route;
        this.iconSet = iconSet;
        this.title = 'CoreUI Icons';
        this.icons = [];
    }
    ngOnInit() {
        const path = this.route.routeConfig.path;
        let prefix = 'cil';
        if (path === 'coreui-icons') {
            this.title = `${this.title} - Free`;
            prefix = 'cil';
        }
        else if (path === 'brands') {
            this.title = `${this.title} - Brands`;
            prefix = 'cib';
        }
        else if (path === 'flags') {
            this.title = `${this.title} - Flags`;
            prefix = 'cif';
        }
        this.icons = this.getIconsView(prefix);
    }
    toKebabCase(str) {
        return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
    }
    getIconsView(prefix) {
        return Object.entries(this.iconSet.icons).filter((icon) => {
            return icon[0].startsWith(prefix);
        });
    }
};
CoreUIIconsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconSetService"] }
];
CoreUIIconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_coreui_icons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconSetService"]])
], CoreUIIconsComponent);



/***/ })

}]);
//# sourceMappingURL=views-icons-icons-module-es2015.js.map