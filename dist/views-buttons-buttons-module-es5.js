(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-buttons-buttons-module"], {
    /***/
    "3uxF":
    /*!************************************************************!*\
      !*** ./src/app/views/buttons/buttons/buttons.component.ts ***!
      \************************************************************/

    /*! exports provided: ButtonsComponent */

    /***/
    function uxF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function () {
        return ButtonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./buttons.component.html */
      "tqA9");
      /* harmony import */


      var _buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./buttons.component.scss */
      "XneS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ButtonsComponent = /*#__PURE__*/function () {
        function ButtonsComponent() {
          _classCallCheck(this, ButtonsComponent);
        }

        _createClass(ButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ButtonsComponent;
      }();

      ButtonsComponent.ctorParameters = function () {
        return [];
      };

      ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-buttons',
        template: _raw_loader_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonsComponent);
      /***/
    },

    /***/
    "7xiU":
    /*!******************************************************************!*\
      !*** ./src/app/views/buttons/dropdowns/dropdowns.component.scss ***!
      \******************************************************************/

    /*! exports provided: default */

    /***/
    function xiU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".dropup .dropdown-menu {\n  /*transform: none!important;*/\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZHJvcGRvd25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRiIsImZpbGUiOiJkcm9wZG93bnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcHVwIC5kcm9wZG93bi1tZW51IHtcclxuICAvKnRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7Ki9cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "97bX":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/dropdowns/dropdowns.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col>\r\n      <c-card>\r\n        <c-card-header>\r\n          Bootstrap Dropdowns\r\n          <c-card-header-actions>\r\n            <a href=\"https://coreui.io\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </c-card-header-actions>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton [routerLink] dropdownToggle color=\"secondary\" class=\"dropdown-toggle\">\r\n              Link dropdown\r\n            </button>\r\n            <div *dropdownMenu class=\"dropdown-menu\">\r\n              <h6 cDropdownHeader>Header</h6>\r\n              <a [routerLink] cDropdownItem>Action</a>\r\n              <a [routerLink] cDropdownItem>Another action</a>\r\n              <c-dropdown-divider></c-dropdown-divider>\r\n              <a [routerLink] cDropdownItem>Separated link</a>\r\n            </div>\r\n          </c-button-group>\r\n          <c-button-group dropdown #formDropdown=\"bs-dropdown\" [insideClick]=\"true\" class=\"mr-1 mb-1\">\r\n            <button cButton dropdownToggle color=\"secondary\" class=\"dropdown-toggle\">\r\n              Form dropdown\r\n            </button>\r\n            <div *dropdownMenu class=\"dropdown-menu\" style=\"padding-top: 0;\">\r\n              <button cButton (click)=\"formDropdown.hide()\" style=\"right: 0;\" size=\"sm\" class=\"close\" color=\"link\">\r\n                <c-icon name=\"cil-x\" size=\"xs\"></c-icon>\r\n              </button>\r\n              <form class=\"px-4 py-3\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleDropdownFormEmail1\">Email address</label>\r\n                  <input cInput type=\"email\" id=\"exampleDropdownFormEmail1\" placeholder=\"email@example.com\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"exampleDropdownFormPassword1\">Password</label>\r\n                  <input cInput type=\"password\" id=\"exampleDropdownFormPassword1\" placeholder=\"Password\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <div class=\"form-check\">\r\n                    <input cInput type=\"checkbox\" id=\"dropdownCheck\">\r\n                    <label class=\"form-check-label\" for=\"dropdownCheck\">\r\n                      Remember me\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <button cButton type=\"submit\" color=\"primary\" (click)=\"formDropdown.hide()\">Sign in</button>\r\n              </form>\r\n              <c-dropdown-divider></c-dropdown-divider>\r\n              <a cDropdownItem [routerLink]>New around here? Sign up</a>\r\n              <a cDropdownItem [routerLink]>Forgot password?</a>\r\n            </div>\r\n          </c-button-group>\r\n          <hr>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\" >\r\n            <button cButton dropdownToggle color=\"primary\" class=\"dropdown-toggle\">\r\n              Primary\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton dropdownToggle color=\"secondary\" class=\"dropdown-toggle\">\r\n              Secondary\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton dropdownToggle color=\"success\" class=\"dropdown-toggle\">\r\n              Success\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton dropdownToggle color=\"info\" class=\"dropdown-toggle\">\r\n              Info\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton dropdownToggle color=\"warning\" class=\"dropdown-toggle\">\r\n              Warning\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton dropdownToggle color=\"danger\" class=\"dropdown-toggle\">\r\n              Danger\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <hr>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\" >\r\n            <button cButton color=\"primary\">\r\n              Primary\r\n            </button>\r\n            <button cButton dropdownToggle color=\"primary\" class=\"dropdown-toggle dropdown-toggle-split\">\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton color=\"secondary\">\r\n              Secondary\r\n            </button>\r\n            <button cButton dropdownToggle color=\"secondary\" class=\"dropdown-toggle dropdown-toggle-split\">\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton color=\"success\">\r\n              Success\r\n            </button>\r\n            <button cButton dropdownToggle color=\"success\" class=\"dropdown-toggle dropdown-toggle-split\">\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton color=\"info\">\r\n              Info\r\n            </button>\r\n            <button cButton dropdownToggle color=\"info\" class=\"dropdown-toggle dropdown-toggle-split\"></button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton color=\"warning\">\r\n              Warning\r\n            </button>\r\n            <button cButton dropdownToggle color=\"warning\" class=\"dropdown-toggle dropdown-toggle-split\">\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton color=\"danger\">\r\n              Danger\r\n            </button>\r\n            <button cButton dropdownToggle color=\"danger\" class=\"dropdown-toggle dropdown-toggle-split \"></button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <hr>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton [routerLink] dropdownToggle color=\"secondary\" size=\"lg\" class=\"dropdown-toggle\">\r\n              Large button\r\n            </button>\r\n            <div *dropdownMenu class=\"dropdown-menu\">\r\n              <h6 cDropdownHeader>Header</h6>\r\n              <a [routerLink] cDropdownItem>Action</a>\r\n              <a [routerLink] cDropdownItem>Another action</a>\r\n              <c-dropdown-divider></c-dropdown-divider>\r\n              <a [routerLink] cDropdownItem>Separated link</a>\r\n            </div>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton [routerLink] color=\"secondary\" size=\"lg\">\r\n              Large split button\r\n            </button>\r\n            <button cButton id=\"button-split\" aria-controls=\"dropdown-split\" [routerLink] dropdownToggle color=\"secondary\" size=\"lg\" class=\"dropdown-toggle dropdown-toggle-split\">\r\n            </button>\r\n            <div id=\"dropdown-split\" *dropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n              <h6 cDropdownHeader>Header</h6>\r\n              <a [routerLink] cDropdownItem>Action</a>\r\n              <a [routerLink] cDropdownItem>Another action</a>\r\n              <c-dropdown-divider></c-dropdown-divider>\r\n              <a [routerLink] cDropdownItem>Separated link</a>\r\n            </div>\r\n          </c-button-group>\r\n          <hr>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton [routerLink] dropdownToggle color=\"secondary\" size=\"sm\" class=\"dropdown-toggle\">\r\n              Small button\r\n            </button>\r\n            <div *dropdownMenu class=\"dropdown-menu\">\r\n              <h6 cDropdownHeader>Header</h6>\r\n              <a [routerLink] cDropdownItem>Action</a>\r\n              <a [routerLink] cDropdownItem>Another action</a>\r\n              <c-dropdown-divider></c-dropdown-divider>\r\n              <a [routerLink] cDropdownItem>Separated link</a>\r\n            </div>\r\n          </c-button-group>\r\n          <c-button-group dropdown class=\"mr-1 mb-1\">\r\n            <button cButton [routerLink] color=\"secondary\" size=\"sm\">\r\n              Small split button\r\n            </button>\r\n            <button cButton [routerLink] dropdownToggle color=\"secondary\" size=\"sm\" class=\"dropdown-toggle dropdown-toggle-split\"></button>\r\n            <div *dropdownMenu class=\"dropdown-menu\">\r\n              <h6 cDropdownHeader>Header</h6>\r\n              <a [routerLink] cDropdownItem>Action</a>\r\n              <a [routerLink] cDropdownItem>Another action</a>\r\n              <c-dropdown-divider></c-dropdown-divider>\r\n              <a [routerLink] cDropdownItem>Separated link</a>\r\n            </div>\r\n          </c-button-group>\r\n\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col>\r\n      <c-card>\r\n        <c-card-header>\r\n          Dropdowns\r\n          <small>manual triggers</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-button-group dropdown #manual=\"bs-dropdown\" (isOpenChange)=\"change($event)\" placement=\"top\" class=\"mr-1 mb-1\">\r\n            <button cButton dropdownToggle color=\"primary\" class=\"dropdown-toggle\">\r\n              Button dropdown\r\n            </button>\r\n            <ul *dropdownMenu class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a>\r\n              </li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else\r\n                here</a></li>\r\n              <li class=\"dropdown-divider\"></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <button cButton class=\"mr-1 mb-1\" (click)=\"toggleDropdown($event)\">Toggle</button>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col>\r\n      <c-card>\r\n        <c-card-header>\r\n          Dropdowns\r\n          <small>dropup variation</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-button-group dropdown  [dropup]=\"isDropup\" class=\"mr-1 mb-1\">\r\n            <button cButton dropdownToggle color=\"primary\" class=\"dropdown-toggle\">\r\n              Dropup\r\n            </button>\r\n            <ul *dropdownMenu aria-labelledby=\"button-dropup\" class=\"dropdown-menu\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a>\r\n              </li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else here</a></li>\r\n              <li cDropdownDivider></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n          <c-button-group dropdown placement=\"bottom right\"  class=\"mr-1 mb-1\">\r\n            <button cButton dropdownToggle color=\"primary\" class=\"dropdown-toggle\">\r\n              Dropright\r\n            </button>\r\n            <ul id=\"dropdown-dropup\" *dropdownMenu aria-labelledby=\"button-dropup\" class=\"dropdown-menu dropdown-menu-right\">\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Action</a></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Another action</a>\r\n              </li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Something else\r\n                here</a></li>\r\n              <li class=\"dropdown-divider\"></li>\r\n              <li role=\"menuitem\"><a cDropdownItem [routerLink]>Separated link</a>\r\n              </li>\r\n            </ul>\r\n          </c-button-group>\r\n        </c-card-body>\r\n        <c-card-footer>\r\n          <c-form-check variant=\"checkbox\">\r\n            <input cInput\r\n                   id=\"isDropup\"\r\n                   type=\"checkbox\"\r\n                   value=\"true\"\r\n                   [(ngModel)]=\"isDropup\"\r\n                   style=\"display: inline-block;\">\r\n            <label clabel for=\"isDropup\">{{ isDropup ? 'Is dropup' : 'Is dropdown' }}</label>\r\n          </c-form-check>\r\n        </c-card-footer>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n";
      /***/
    },

    /***/
    "CyjO":
    /*!************************************************************************!*\
      !*** ./src/app/views/buttons/button-groups/button-groups.component.ts ***!
      \************************************************************************/

    /*! exports provided: ButtonGroupsComponent */

    /***/
    function CyjO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonGroupsComponent", function () {
        return ButtonGroupsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_button_groups_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./button-groups.component.html */
      "MdSX");
      /* harmony import */


      var _button_groups_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./button-groups.component.scss */
      "sRSa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ButtonGroupsComponent = /*#__PURE__*/function () {
        function ButtonGroupsComponent() {
          _classCallCheck(this, ButtonGroupsComponent);
        }

        _createClass(ButtonGroupsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ButtonGroupsComponent;
      }();

      ButtonGroupsComponent.ctorParameters = function () {
        return [];
      };

      ButtonGroupsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-button-groups',
        template: _raw_loader_button_groups_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_button_groups_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ButtonGroupsComponent);
      /***/
    },

    /***/
    "KTqY":
    /*!****************************************************************!*\
      !*** ./src/app/views/buttons/dropdowns/dropdowns.component.ts ***!
      \****************************************************************/

    /*! exports provided: DropdownsComponent */

    /***/
    function KTqY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownsComponent", function () {
        return DropdownsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dropdowns.component.html */
      "97bX");
      /* harmony import */


      var _dropdowns_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dropdowns.component.scss */
      "7xiU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");

      var DropdownsComponent = /*#__PURE__*/function () {
        function DropdownsComponent() {
          _classCallCheck(this, DropdownsComponent);

          this.disabled = false;
          this.isDropup = true;
          this.autoClose = false;
          this.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
        }

        _createClass(DropdownsComponent, [{
          key: "onHidden",
          value: function onHidden() {
            console.log('Dropdown is hidden');
          }
        }, {
          key: "onShown",
          value: function onShown() {
            console.log('Dropdown is shown');
          }
        }, {
          key: "isOpenChange",
          value: function isOpenChange() {
            console.log('Dropdown state is changed');
          }
        }, {
          key: "toggleDropdown",
          value: function toggleDropdown($event) {
            $event.preventDefault();
            $event.stopPropagation();
            this.manual.isOpen = !this.manual.isOpen;
          }
        }, {
          key: "change",
          value: function change(value) {
            this.manual.isOpen = value;
          }
        }]);

        return DropdownsComponent;
      }();

      DropdownsComponent.ctorParameters = function () {
        return [];
      };

      DropdownsComponent.propDecorators = {
        manual: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['manual']
        }]
      };
      DropdownsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_dropdowns_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dropdowns_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownsComponent);
      /***/
    },

    /***/
    "MSk0":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/brand-buttons/brand-buttons.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MSk0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col col=\"12\">\r\n      <c-card>\r\n        <c-card-header><strong>Brand Buttons</strong></c-card-header>\r\n        <c-card-body>\r\n          <h6>\r\n            Size Small <small><code>size=\"sm\"</code></small>\r\n          </h6>\r\n          <p>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"facebook\" size=\"sm\">\r\n              <c-icon name=\"cib-facebook-f\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Facebook</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"twitter\" size=\"sm\">\r\n              <c-icon name=\"cib-twitter\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Twitter</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"linkedin\" size=\"sm\">\r\n              <c-icon name=\"cib-linkedin\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">LinkedIn</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"flickr\" size=\"sm\">\r\n              <c-icon name=\"cib-flickr\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Flickr</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"tumblr\" size=\"sm\">\r\n              <c-icon name=\"cib-tumblr\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Tumblr</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"xing\" size=\"sm\">\r\n              <c-icon name=\"cib-xing\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Xing</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"github\" size=\"sm\">\r\n              <c-icon name=\"cib-github\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Github</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"stack-overflow\" size=\"sm\">\r\n              <c-icon name=\"cib-stackoverflow\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">StackOverflow</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"youtube\" size=\"sm\">\r\n              <c-icon name=\"cib-youtube\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">YouTube</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"dribbble\" size=\"sm\">\r\n              <c-icon name=\"cib-dribbble\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Dribbble</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"instagram\" size=\"sm\">\r\n              <c-icon name=\"cib-instagram\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Instagram</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"pinterest\" size=\"sm\">\r\n              <c-icon name=\"cib-pinterest\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Pinterest</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vk\" size=\"sm\">\r\n              <c-icon name=\"cib-vk\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">VK</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"yahoo\" size=\"sm\">\r\n              <c-icon name=\"cib-yahoo\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Yahoo</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"behance\" size=\"sm\">\r\n              <c-icon name=\"cib-behance\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Behance</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"reddit\" size=\"sm\">\r\n              <c-icon name=\"cib-reddit\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Reddit</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vimeo\" size=\"sm\">\r\n              <c-icon name=\"cib-vimeo\" size=\"sm\"></c-icon>\r\n              <span class=\"mfs-2\">Vimeo</span>\r\n            </button>\r\n          </p>\r\n          <h6>Size Normal</h6>\r\n          <p>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"facebook\">\r\n              <c-icon name=\"cib-facebook-f\"></c-icon>\r\n              <span class=\"mfs-2\">Facebook</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"twitter\">\r\n              <c-icon name=\"cib-twitter\"></c-icon>\r\n              <span class=\"mfs-2\">Twitter</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"linkedin\">\r\n              <c-icon name=\"cib-linkedin\"></c-icon>\r\n              <span class=\"mfs-2\">LinkedIn</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"flickr\">\r\n              <c-icon name=\"cib-flickr\"></c-icon>\r\n              <span class=\"mfs-2\">Flickr</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"tumblr\">\r\n              <c-icon name=\"cib-tumblr\"></c-icon>\r\n              <span class=\"mfs-2\">Tumblr</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"xing\">\r\n              <c-icon name=\"cib-xing\"></c-icon>\r\n              <span class=\"mfs-2\">Xing</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"github\">\r\n              <c-icon name=\"cib-github\"></c-icon>\r\n              <span class=\"mfs-2\">Github</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"stack-overflow\">\r\n              <c-icon name=\"cib-stackoverflow\"></c-icon>\r\n              <span class=\"mfs-2\">StackOverflow</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"youtube\">\r\n              <c-icon name=\"cib-youtube\"></c-icon>\r\n              <span class=\"mfs-2\">YouTube</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"dribbble\">\r\n              <c-icon name=\"cib-dribbble\"></c-icon>\r\n              <span class=\"mfs-2\">Dribbble</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"instagram\">\r\n              <c-icon name=\"cib-instagram\"></c-icon>\r\n              <span class=\"mfs-2\">Instagram</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"pinterest\">\r\n              <c-icon name=\"cib-pinterest\"></c-icon>\r\n              <span class=\"mfs-2\">Pinterest</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vk\">\r\n              <c-icon name=\"cib-vk\"></c-icon>\r\n              <span class=\"mfs-2\">VK</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"yahoo\">\r\n              <c-icon name=\"cib-yahoo\"></c-icon>\r\n              <span class=\"mfs-2\">Yahoo</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"behance\">\r\n              <c-icon name=\"cib-behance\"></c-icon>\r\n              <span class=\"mfs-2\">Behance</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"reddit\">\r\n              <c-icon name=\"cib-reddit\"></c-icon>\r\n              <span class=\"mfs-2\">Reddit</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vimeo\">\r\n              <c-icon name=\"cib-vimeo\"></c-icon>\r\n              <span class=\"mfs-2\">Vimeo</span>\r\n            </button>\r\n          </p>\r\n          <h6>\r\n            Size Large <small><code>size=\"lg\"</code></small>\r\n          </h6>\r\n          <p>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"facebook\" size=\"lg\">\r\n              <c-icon name=\"cib-facebook-f\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Facebook</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"twitter\" size=\"lg\">\r\n              <c-icon name=\"cib-twitter\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Twitter</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"linkedin\" size=\"lg\">\r\n              <c-icon name=\"cib-linkedin\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">LinkedIn</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"flickr\" size=\"lg\">\r\n              <c-icon name=\"cib-flickr\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Flickr</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"tumblr\" size=\"lg\">\r\n              <c-icon name=\"cib-tumblr\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Tumblr</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"xing\" size=\"lg\">\r\n              <c-icon name=\"cib-xing\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Xing</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"github\" size=\"lg\">\r\n              <c-icon name=\"cib-github\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Github</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"stack-overflow\" size=\"lg\">\r\n              <c-icon name=\"cib-stackoverflow\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">StackOverflow</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"youtube\" size=\"lg\">\r\n              <c-icon name=\"cib-youtube\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">YouTube</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"dribbble\" size=\"lg\">\r\n              <c-icon name=\"cib-dribbble\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Dribbble</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"instagram\" size=\"lg\">\r\n              <c-icon name=\"cib-instagram\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Instagram</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"pinterest\" size=\"lg\">\r\n              <c-icon name=\"cib-pinterest\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Pinterest</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vk\" size=\"lg\">\r\n              <c-icon name=\"cib-vk\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">VK</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"yahoo\" size=\"lg\">\r\n              <c-icon name=\"cib-yahoo\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Yahoo</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"behance\" size=\"lg\">\r\n              <c-icon name=\"cib-behance\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Behance</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"reddit\" size=\"lg\">\r\n              <c-icon name=\"cib-reddit\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Reddit</span>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vimeo\" size=\"lg\">\r\n              <c-icon name=\"cib-vimeo\" size=\"lg\"></c-icon>\r\n              <span class=\"mfs-2\">Vimeo</span>\r\n            </button>\r\n          </p>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n\r\n    <c-col col=\"12\">\r\n      <c-card>\r\n        <c-card-header>\r\n          <strong>Brand Buttons</strong><small>&nbsp;Only icons</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <h6>\r\n            Size Small <small><code>size=\"sm\"</code></small>\r\n          </h6>\r\n          <p>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"facebook\" size=\"sm\">\r\n              <c-icon name=\"cib-facebook-f\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"twitter\" size=\"sm\">\r\n              <c-icon name=\"cib-twitter\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"linkedin\" size=\"sm\">\r\n              <c-icon name=\"cib-linkedin\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"flickr\" size=\"sm\">\r\n              <c-icon name=\"cib-flickr\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"tumblr\" size=\"sm\">\r\n              <c-icon name=\"cib-tumblr\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"xing\" size=\"sm\">\r\n              <c-icon name=\"cib-xing\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"github\" size=\"sm\">\r\n              <c-icon name=\"cib-github\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"stack-overflow\" size=\"sm\">\r\n              <c-icon name=\"cib-stackoverflow\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"youtube\" size=\"sm\">\r\n              <c-icon name=\"cib-youtube\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"dribbble\" size=\"sm\">\r\n              <c-icon name=\"cib-dribbble\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"instagram\" size=\"sm\">\r\n              <c-icon name=\"cib-instagram\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"pinterest\" size=\"sm\">\r\n              <c-icon name=\"cib-pinterest\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vk\" size=\"sm\">\r\n              <c-icon name=\"cib-vk\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"yahoo\" size=\"sm\">\r\n              <c-icon name=\"cib-yahoo\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"behance\" size=\"sm\">\r\n              <c-icon name=\"cib-behance\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"reddit\" size=\"sm\">\r\n              <c-icon name=\"cib-reddit\" size=\"sm\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vimeo\" size=\"sm\">\r\n              <c-icon name=\"cib-vimeo\" size=\"sm\"></c-icon>\r\n            </button>\r\n          </p>\r\n          <h6>Size Normal</h6>\r\n          <p>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"facebook\">\r\n              <c-icon name=\"cib-facebook-f\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"twitter\">\r\n              <c-icon name=\"cib-twitter\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"linkedin\">\r\n              <c-icon name=\"cib-linkedin\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"flickr\">\r\n              <c-icon name=\"cib-flickr\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"tumblr\">\r\n              <c-icon name=\"cib-tumblr\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"xing\">\r\n              <c-icon name=\"cib-xing\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"github\">\r\n              <c-icon name=\"cib-github\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"stack-overflow\">\r\n              <c-icon name=\"cib-stackoverflow\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"youtube\">\r\n              <c-icon name=\"cib-youtube\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"dribbble\">\r\n              <c-icon name=\"cib-dribbble\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"instagram\">\r\n              <c-icon name=\"cib-instagram\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"pinterest\">\r\n              <c-icon name=\"cib-pinterest\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vk\">\r\n              <c-icon name=\"cib-vk\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"yahoo\">\r\n              <c-icon name=\"cib-yahoo\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"behance\">\r\n              <c-icon name=\"cib-behance\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"reddit\">\r\n              <c-icon name=\"cib-reddit\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vimeo\">\r\n              <c-icon name=\"cib-vimeo\"></c-icon>\r\n            </button>\r\n          </p>\r\n          <h6>\r\n            Size Large <small><code>size=\"lg\"</code></small>\r\n          </h6>\r\n          <p>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"facebook\" size=\"lg\">\r\n              <c-icon name=\"cib-facebook-f\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"twitter\" size=\"lg\">\r\n              <c-icon name=\"cib-twitter\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"linkedin\" size=\"lg\">\r\n              <c-icon name=\"cib-linkedin\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"flickr\" size=\"lg\">\r\n              <c-icon name=\"cib-flickr\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"tumblr\" size=\"lg\">\r\n              <c-icon name=\"cib-tumblr\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"xing\" size=\"lg\">\r\n              <c-icon name=\"cib-xing\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"github\" size=\"lg\">\r\n              <c-icon name=\"cib-github\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"stack-overflow\" size=\"lg\">\r\n              <c-icon name=\"cib-stackoverflow\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"youtube\" size=\"lg\">\r\n              <c-icon name=\"cib-youtube\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"dribbble\" size=\"lg\">\r\n              <c-icon name=\"cib-dribbble\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"instagram\" size=\"lg\">\r\n              <c-icon name=\"cib-instagram\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"pinterest\" size=\"lg\">\r\n              <c-icon name=\"cib-pinterest\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vk\" size=\"lg\">\r\n              <c-icon name=\"cib-vk\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"yahoo\" size=\"lg\">\r\n              <c-icon name=\"cib-yahoo\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"behance\" size=\"lg\">\r\n              <c-icon name=\"cib-behance\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"reddit\" size=\"lg\">\r\n              <c-icon name=\"cib-reddit\" size=\"lg\"></c-icon>\r\n            </button>\r\n            <button cButton class=\"mr-1 mb-1\" color=\"vimeo\" size=\"lg\">\r\n              <c-icon name=\"cib-vimeo\" size=\"lg\"></c-icon>\r\n            </button>\r\n          </p>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n";
      /***/
    },

    /***/
    "MdSX":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/button-groups/button-groups.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function MdSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          <strong>Button group</strong>\r\n          <c-card-header-actions>\r\n            <a class=\"card-header-action\" href=\"http://coreui.io/docs/components/bootstrap-button-group/\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </c-card-header-actions>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-button-group>\r\n            <button cButton color=\"secondary\">Left</button>\r\n            <button cButton color=\"secondary\">Middle</button>\r\n            <button cButton color=\"secondary\">Right</button>\r\n          </c-button-group>\r\n        </c-card-body>\r\n      </c-card>\r\n      <c-card>\r\n        <c-card-header>Button group\r\n          <small>toolbar</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-button-toolbar justify=\"justify\" class=\"mb-3\" aria-label=\"Toolbar with button groups\">\r\n            <c-button-group class=\"mr-2\" aria-label=\"First group\">\r\n              <button cButton color=\"secondary\">1</button>\r\n              <button cButton color=\"secondary\">2</button>\r\n              <button cButton color=\"secondary\">3</button>\r\n              <button cButton color=\"secondary\">4</button>\r\n            </c-button-group>\r\n            <c-button-group class=\"mr-2\" aria-label=\"Second group\">\r\n              <button cButton color=\"secondary\">5</button>\r\n              <button cButton color=\"secondary\">6</button>\r\n              <button cButton color=\"secondary\">7</button>\r\n            </c-button-group>\r\n            <c-button-group aria-label=\"Third group\">\r\n              <button cButton color=\"secondary\">8</button>\r\n            </c-button-group>\r\n          </c-button-toolbar>\r\n          <c-button-toolbar class=\"mb-3\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n            <c-button-group class=\"mr-2\" aria-label=\"First group\">\r\n              <button cButton color=\"secondary\">1</button>\r\n              <button cButton color=\"secondary\">2</button>\r\n              <button cButton color=\"secondary\">3</button>\r\n              <button cButton color=\"secondary\">4</button>\r\n            </c-button-group>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"btnGroupAddon\">@</span>\r\n              </div>\r\n              <input cInput placeholder=\"Input group example\" aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon\" />\r\n            </div>\r\n          </c-button-toolbar>\r\n          <c-button-toolbar class=\"justify-content-between\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n            <c-button-group clsss=\"mr-2\" aria-label=\"First group\">\r\n              <button cButton color=\"secondary\">1</button>\r\n              <button cButton color=\"secondary\">2</button>\r\n              <button cButton color=\"secondary\">3</button>\r\n              <button cButton color=\"secondary\">4</button>\r\n            </c-button-group>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"btnGroupAddon2\">@</span>\r\n              </div>\r\n              <input cInput placeholder=\"Input group example\" aria-label=\"Input group example\" aria-describedby=\"btnGroupAddon2\" />\r\n            </div>\r\n          </c-button-toolbar>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>Button group\r\n          <small>sizing</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-button-group size=\"lg\" class=\"mb-3\" aria-label=\"Large button group\">\r\n            <button cButton color=\"secondary\">Left</button>\r\n            <button cButton color=\"secondary\">Middle</button>\r\n            <button cButton color=\"secondary\">Right</button>\r\n          </c-button-group>\r\n          <br/>\r\n          <c-button-group class=\"mb-3\" aria-label=\"Default button group\">\r\n            <button cButton color=\"secondary\">Left</button>\r\n            <button cButton color=\"secondary\">Middle</button>\r\n            <button cButton color=\"secondary\">Right</button>\r\n          </c-button-group>\r\n          <br/>\r\n          <c-button-group size=\"sm\" aria-label=\"Small button group\">\r\n            <button cButton color=\"secondary\">Left</button>\r\n            <button cButton color=\"secondary\">Middle</button>\r\n            <button cButton color=\"secondary\">Right</button>\r\n          </c-button-group>\r\n        </c-card-body>\r\n      </c-card>\r\n      <c-card>\r\n        <c-card-header>Button group\r\n          <small>nesting</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-button-group aria-label=\"Button group with nested dropdown\" class=\"mr-1 mb-1\" >\r\n            <button cButton color=\"secondary\">1</button>\r\n            <button cButton color=\"secondary\">2</button>\r\n            <c-button-group dropdown>\r\n                <button cButton color=\"secondary\" dropdownToggle>Dropdown</button>\r\n                <div *dropdownMenu class=\"dropdown-menu\">\r\n                  <a cDropdownItem [routerLink]>Dropdown link</a>\r\n                  <a cDropdownItem [routerLink]>Dropdown link</a>\r\n                </div>\r\n            </c-button-group>\r\n          </c-button-group>\r\n          <c-button-group aria-label=\"Button group with nested split dropdown\" class=\"mr-1 mb-1\">\r\n            <button cButton color=\"secondary\">1</button>\r\n            <button cButton color=\"secondary\">2</button>\r\n            <c-button-group dropdown>\r\n                <button cButton color=\"secondary\">Split</button>\r\n                <button cButton color=\"secondary\" dropdownToggle class=\"dropdown-toggle dropdown-toggle-split\"></button>\r\n                <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                  <a cDropdownItem [routerLink]>Dropdown item</a>\r\n                  <a cDropdownItem [routerLink]>Dropdown item</a>\r\n                </div>\r\n            </c-button-group>\r\n          </c-button-group>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>Button group\r\n          <small>vertical variation</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-button-group vertical aria-label=\"Vertical button group\">\r\n            <button cButton color=\"secondary\">Button</button>\r\n            <button cButton color=\"secondary\">Button</button>\r\n            <button cButton color=\"secondary\">Button</button>\r\n            <button cButton color=\"secondary\">Button</button>\r\n            <button cButton color=\"secondary\">Button</button>\r\n            <button cButton color=\"secondary\">Button</button>\r\n          </c-button-group>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>Button group\r\n          <small>vertical variation</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-button-group vertical=\"vertical\" aria-label=\"Vertical button group\">\r\n            <button cButton color=\"secondary\">Button</button>\r\n            <button cButton color=\"secondary\">Button</button>\r\n            <c-button-group dropdown>\r\n              <button cButton color=\"secondary\" dropdownToggle id=\"btnGroupVerticalDrop1\" type=\"button\">Dropdown</button>\r\n              <div *dropdownMenu aria-labelledby=\"btnGroupVerticalDrop1\" class=\"dropdown-menu\">\r\n                <a cDropdownItem [routerLink]>Dropdown link</a>\r\n                <a cDropdownItem [routerLink]>Dropdown link</a>\r\n              </div>\r\n            </c-button-group>\r\n            <button cButton color=\"secondary\">Button</button>\r\n            <button cButton color=\"secondary\">Button</button>\r\n            <c-button-group dropdown=\"right\">\r\n              <button cButton color=\"secondary\" type=\"button\">Split</button>\r\n              <button cButton color=\"secondary\" dropdownToggle id=\"btnGroupVerticalDrop2\" type=\"button\" class=\"dropdown-toggle dropdown-toggle-split\"></button>\r\n              <div *dropdownMenu aria-labelledby=\"btnGroupVerticalDrop2\" class=\"dropdown-menu\">\r\n                <a cDropdownItem [routerLink]>Dropdown link</a>\r\n                <a cDropdownItem [routerLink]>Dropdown link</a>\r\n              </div>\r\n            </c-button-group>\r\n            <c-button-group dropdown dropup=\"true\">\r\n              <button cButton color=\"secondary\" dropdownToggle id=\"btnGroupVerticalDrop3\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</button>\r\n              <div *dropdownMenu aria-labelledby=\"btnGroupVerticalDrop3\" class=\"dropdown-menu\">\r\n                <a cDropdownItem [routerLink]>Dropdown link</a>\r\n                <a cDropdownItem [routerLink]>Dropdown link</a>\r\n              </div>\r\n            </c-button-group>\r\n            <c-button-group dropdown dropup=\"true\">\r\n              <button cButton color=\"secondary\" dropdownToggle id=\"btnGroupVerticalDrop4\" type=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</button>\r\n              <div *dropdownMenu aria-labelledby=\"btnGroupVerticalDrop4\" class=\"dropdown-menu\">\r\n                <a cDropdownItem [routerLink]>Dropdown link</a>\r\n                <a cDropdownItem [routerLink]>Dropdown link</a>\r\n              </div>\r\n            </c-button-group>\r\n          </c-button-group>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Reju":
    /*!*************************************************!*\
      !*** ./src/app/views/buttons/buttons.module.ts ***!
      \*************************************************/

    /*! exports provided: ButtonsModule */

    /***/
    function Reju(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsModule", function () {
        return ButtonsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "3uxF");
      /* harmony import */


      var _button_groups_button_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./button-groups/button-groups.component */
      "CyjO");
      /* harmony import */


      var _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dropdowns/dropdowns.component */
      "KTqY");
      /* harmony import */


      var _brand_buttons_brand_buttons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./brand-buttons/brand-buttons.component */
      "XSbJ");
      /* harmony import */


      var _buttons_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./buttons-routing.module */
      "bAeT");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24"); // CoreUI Modules
      // Buttons Views
      // Buttons Routing


      var ButtonsModule = function ButtonsModule() {
        _classCallCheck(this, ButtonsModule);
      };

      ButtonsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_buttons_buttons_component__WEBPACK_IMPORTED_MODULE_6__["ButtonsComponent"], _button_groups_button_groups_component__WEBPACK_IMPORTED_MODULE_7__["ButtonGroupsComponent"], _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_8__["DropdownsComponent"], _brand_buttons_brand_buttons_component__WEBPACK_IMPORTED_MODULE_9__["BrandButtonsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _buttons_routing_module__WEBPACK_IMPORTED_MODULE_10__["ButtonsRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["DropdownModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["GridModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_11__["BsDropdownModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["FormModule"]]
      })], ButtonsModule);
      /***/
    },

    /***/
    "S4VQ":
    /*!**************************************************************************!*\
      !*** ./src/app/views/buttons/brand-buttons/brand-buttons.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function S4VQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZC1idXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "XSbJ":
    /*!************************************************************************!*\
      !*** ./src/app/views/buttons/brand-buttons/brand-buttons.component.ts ***!
      \************************************************************************/

    /*! exports provided: BrandButtonsComponent */

    /***/
    function XSbJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandButtonsComponent", function () {
        return BrandButtonsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_brand_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./brand-buttons.component.html */
      "MSk0");
      /* harmony import */


      var _brand_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brand-buttons.component.scss */
      "S4VQ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var BrandButtonsComponent = /*#__PURE__*/function () {
        function BrandButtonsComponent() {
          _classCallCheck(this, BrandButtonsComponent);
        }

        _createClass(BrandButtonsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BrandButtonsComponent;
      }();

      BrandButtonsComponent.ctorParameters = function () {
        return [];
      };

      BrandButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-brand-buttons',
        template: _raw_loader_brand_buttons_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_brand_buttons_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BrandButtonsComponent);
      /***/
    },

    /***/
    "XneS":
    /*!**************************************************************!*\
      !*** ./src/app/views/buttons/buttons/buttons.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function XneS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b25zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "bAeT":
    /*!*********************************************************!*\
      !*** ./src/app/views/buttons/buttons-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ButtonsRoutingModule */

    /***/
    function bAeT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonsRoutingModule", function () {
        return ButtonsRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./buttons/buttons.component */
      "3uxF");
      /* harmony import */


      var _button_groups_button_groups_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./button-groups/button-groups.component */
      "CyjO");
      /* harmony import */


      var _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./dropdowns/dropdowns.component */
      "KTqY");
      /* harmony import */


      var _brand_buttons_brand_buttons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./brand-buttons/brand-buttons.component */
      "XSbJ");

      var routes = [{
        path: '',
        data: {
          title: 'Buttons'
        },
        children: [{
          path: '',
          redirectTo: 'buttons'
        }, {
          path: 'buttons',
          component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_3__["ButtonsComponent"],
          data: {
            title: 'Buttons'
          }
        }, {
          path: 'button-groups',
          component: _button_groups_button_groups_component__WEBPACK_IMPORTED_MODULE_4__["ButtonGroupsComponent"],
          data: {
            title: 'Button Groups'
          }
        }, {
          path: 'dropdowns',
          component: _dropdowns_dropdowns_component__WEBPACK_IMPORTED_MODULE_5__["DropdownsComponent"],
          data: {
            title: 'Dropdowns'
          }
        }, {
          path: 'brand-buttons',
          component: _brand_buttons_brand_buttons_component__WEBPACK_IMPORTED_MODULE_6__["BrandButtonsComponent"],
          data: {
            title: 'Brand buttons'
          }
        }]
      }];

      var ButtonsRoutingModule = function ButtonsRoutingModule() {
        _classCallCheck(this, ButtonsRoutingModule);
      };

      ButtonsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ButtonsRoutingModule);
      /***/
    },

    /***/
    "sRSa":
    /*!**************************************************************************!*\
      !*** ./src/app/views/buttons/button-groups/button-groups.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function sRSa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXR0b24tZ3JvdXBzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "tqA9":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/buttons/buttons/buttons.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tqA9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fade-in\">\r\n  <c-card>\r\n    <c-card-header>\r\n      <strong>Standard Buttons</strong>\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <c-row class=\"align-items-center mb-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Normal\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"primary\" [block]=\"true\">Primary</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"secondary\" [block]=\"true\">Secondary</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"success\" [block]=\"true\">Success</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"warning\" [block]=\"true\">Warning</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"danger\" [block]=\"true\">Danger</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"info\" [block]=\"true\">Info</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"light\" [block]=\"true\">Light</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"dark\" [block]=\"true\">Dark</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"link\" [block]=\"true\">Link</button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mb-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Active State\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"primary\" [block]=\"true\" pressed=\"true\">\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"secondary\" [block]=\"true\" pressed=\"true\">\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"success\" [block]=\"true\" pressed=\"true\">\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"warning\" [block]=\"true\" pressed=\"true\">\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"danger\" [block]=\"true\" pressed=\"true\">\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"info\" [block]=\"true\" pressed=\"true\">\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"light\" [block]=\"true\" pressed=\"true\">\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"dark\" [block]=\"true\" pressed=\"true\">\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"link\" [block]=\"true\" pressed=\"true\">\r\n            Link\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Disabled\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"primary\" [block]=\"true\" [disabled]=\"true\">\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"secondary\" [block]=\"true\" [disabled]=\"true\">\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"success\" [block]=\"true\" [disabled]=\"true\">\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"warning\" [block]=\"true\" [disabled]=\"true\">\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"danger\" [block]=\"true\" [disabled]=\"true\">\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"info\" [block]=\"true\" [disabled]=\"true\">\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"light\" [block]=\"true\" [disabled]=\"true\">\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"dark\" [block]=\"true\" [disabled]=\"true\">\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"link\" [block]=\"true\" [disabled]=\"true\">\r\n            Link\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n  <c-card>\r\n    <c-card-header>\r\n      <strong>Outline Buttons</strong>\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <p>Use <code>.btn-outline-*</code> class for outline buttons.</p>\r\n      <c-row class=\"align-items-center mb-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Normal\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"primary\" [block]=\"true\" variant=\"outline\">\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"secondary\" [block]=\"true\" variant=\"outline\">\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"success\" [block]=\"true\" variant=\"outline\">\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"warning\" [block]=\"true\" variant=\"outline\">\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"danger\" [block]=\"true\" variant=\"outline\">\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"info\" [block]=\"true\" variant=\"outline\">\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"light\" [block]=\"true\" variant=\"outline\">\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"dark\" [block]=\"true\" variant=\"outline\">\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"link\" [block]=\"true\" variant=\"outline\">\r\n            Link\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Active State\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"primary\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"secondary\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"success\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"warning\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"danger\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"info\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"light\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"dark\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"link\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Link\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Disabled\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"primary\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"secondary\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"success\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"warning\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"danger\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"info\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"light\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"dark\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\"></c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n  <c-card>\r\n    <c-card-header>\r\n      <strong>Ghost Buttons</strong>\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <p>Use <code>.btn-ghost-*</code> class for ghost buttons.</p>\r\n      <c-row class=\"align-items-center\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Normal\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"primary\" [block]=\"true\" variant=\"ghost\">\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"secondary\" [block]=\"true\" variant=\"ghost\">\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"success\" [block]=\"true\" variant=\"ghost\">\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"warning\" [block]=\"true\" variant=\"ghost\">\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"danger\" [block]=\"true\" variant=\"ghost\">\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"info\" [block]=\"true\" variant=\"ghost\">\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"light\" [block]=\"true\" variant=\"ghost\">\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"dark\" [block]=\"true\" variant=\"ghost\">\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\"></c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Active State\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"primary\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"secondary\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"success\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"warning\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"danger\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"info\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"light\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"dark\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\"></c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Disabled\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"primary\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"secondary\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"success\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"warning\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"danger\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"info\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"light\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"dark\"\r\n            [block]=\"true\"\r\n            variant=\"ghost\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\"></c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n  <c-card>\r\n    <c-card-header>\r\n      <strong>Square Buttons</strong>\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <p>Use <code>.btn-square</code> class for square buttons.</p>\r\n      <c-row class=\"align-items-center\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Normal\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"primary\" [block]=\"true\" shape=\"square\">\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"secondary\" [block]=\"true\" shape=\"square\">\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"success\" [block]=\"true\" shape=\"square\">\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"warning\" [block]=\"true\" shape=\"square\">\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"danger\" [block]=\"true\" shape=\"square\">\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"info\" [block]=\"true\" shape=\"square\">\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"light\" [block]=\"true\" shape=\"square\">\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"dark\" [block]=\"true\" shape=\"square\">\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"link\" [block]=\"true\" shape=\"square\">\r\n            Link\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Active State\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"primary\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"secondary\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"success\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"warning\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"danger\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"info\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"light\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"dark\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"link\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Link\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Disabled\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"primary\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"secondary\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"success\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"warning\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"danger\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"info\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"light\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"dark\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"link\"\r\n            [block]=\"true\"\r\n            shape=\"square\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Link\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n  <c-card>\r\n    <c-card-header>\r\n      <strong>Pill Buttons</strong>\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <p>Use <code>.btn-pill</code> class for pill buttons.</p>\r\n      <c-row class=\"align-items-center\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Normal\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"primary\" [block]=\"true\" shape=\"pill\">\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"secondary\" [block]=\"true\" shape=\"pill\">\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"success\" [block]=\"true\" shape=\"pill\">\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"warning\" [block]=\"true\" shape=\"pill\">\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"danger\" [block]=\"true\" shape=\"pill\">\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"info\" [block]=\"true\" shape=\"pill\">Info</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"light\" [block]=\"true\" shape=\"pill\">\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"dark\" [block]=\"true\" shape=\"pill\">Dark</button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button cButton color=\"link\" [block]=\"true\" shape=\"pill\">Link</button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Active State\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"primary\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"secondary\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"success\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"warning\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"danger\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"info\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"light\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"dark\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"link\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [pressed]=\"true\"\r\n          >\r\n            Link\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row class=\"align-items-center mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Disabled\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"primary\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Primary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"secondary\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Secondary\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"success\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Success\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"warning\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Warning\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"danger\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Danger\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"info\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Info\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"light\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Light\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"dark\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Dark\r\n          </button>\r\n        </c-col>\r\n        <c-col xs=\"6\" sm=\"4\" md=\"2\" col=\"xl\" class=\"mb-3 mb-xl-0\">\r\n          <button\r\n            cButton\r\n            color=\"link\"\r\n            [block]=\"true\"\r\n            shape=\"pill\"\r\n            [disabled]=\"true\"\r\n          >\r\n            Link\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n  <c-card>\r\n    <c-card-header>\r\n      <strong>Sizes</strong>\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <p>\r\n        Fancy larger or smaller buttons? Add <code>.btn-lg</code> or\r\n        <code>.btn-sm</code> for additional sizes.\r\n      </p>\r\n      <c-row alignV=\"center\">\r\n        <!--        <c-col class=\"col-12 col-xl mb-3 mb-xl-0\">-->\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Small add <code>.btn-sm</code>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"primary\" size=\"sm\">Standard Button</button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"secondary\" size=\"sm\" variant=\"outline\">\r\n            Outline Button\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"success\" size=\"sm\" variant=\"ghost\">\r\n            Ghost Button\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"warning\" size=\"sm\" shape=\"square\">\r\n            Square Button\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"danger\" size=\"sm\" shape=\"pill\">\r\n            Pill Button\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row alignV=\"center\" class=\"mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Normal\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"primary\">Standard Button</button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"secondary\" variant=\"outline\">\r\n            Outline Button\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"success\" variant=\"ghost\">Ghost Button</button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"warning\" shape=\"square\">Square Button</button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"danger\" shape=\"pill\">Pill Button</button>\r\n        </c-col>\r\n      </c-row>\r\n      <c-row alignV=\"center\" class=\"mt-3\">\r\n        <c-col col=\"xl\" xs=\"12\" class=\"mb-3 mb-xl-0\">\r\n          Large add <code>.btn-lg</code>.\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"primary\" size=\"lg\">Standard Button</button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"secondary\" size=\"lg\" variant=\"outline\">\r\n            Outline Button\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"success\" size=\"lg\" variant=\"ghost\">\r\n            Ghost Button\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"warning\" size=\"lg\" shape=\"square\">\r\n            Square Button\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center mb-xl-0\">\r\n          <button cButton color=\"danger\" size=\"lg\" shape=\"pill\">\r\n            Pill Button\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n  <c-card>\r\n    <c-card-header>\r\n      <strong>With Icons</strong>\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <c-row alignV=\"center\" class=\"mt-3\">\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center\">\r\n          <button cButton color=\"primary\">\r\n            <c-icon name=\"cil-lightbulb\"></c-icon>\r\n            <span>&nbsp;Standard Button</span>\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center\">\r\n          <button cButton color=\"secondary\" variant=\"outline\">\r\n            <c-icon name=\"cil-lightbulb\"></c-icon>\r\n            <span>&nbsp;Outline Button</span>\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center\">\r\n          <button cButton color=\"success\" variant=\"ghost\">\r\n            <c-icon name=\"cil-lightbulb\"></c-icon>\r\n            <span>&nbsp;Ghost Button</span>\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center\">\r\n          <button cButton color=\"warning\" shape=\"square\">\r\n            <c-icon name=\"cil-lightbulb\"></c-icon>\r\n            <span>&nbsp;Square Button</span>\r\n          </button>\r\n        </c-col>\r\n        <c-col col=\"md\" sm=\"4\" class=\"mb-3 text-center\">\r\n          <button cButton color=\"danger\" shape=\"pill\">\r\n            <c-icon name=\"cil-lightbulb\"></c-icon>\r\n            <span>&nbsp;Pill Button</span>\r\n          </button>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n  <c-row>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          <strong>Block Level Buttons</strong>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <p>Add this class<code>.btn-block</code></p>\r\n          <button cButton color=\"secondary\" [block]=\"true\" size=\"lg\">\r\n            Block level button\r\n          </button>\r\n          <button cButton color=\"primary\" [block]=\"true\" size=\"lg\">\r\n            Block level button\r\n          </button>\r\n          <button cButton color=\"success\" [block]=\"true\" size=\"lg\">\r\n            Block level button\r\n          </button>\r\n          <button cButton color=\"info\" [block]=\"true\" size=\"lg\">\r\n            Block level button\r\n          </button>\r\n          <button cButton color=\"warning\" [block]=\"true\" size=\"lg\">\r\n            Block level button\r\n          </button>\r\n          <button cButton color=\"danger\" [block]=\"true\" size=\"lg\">\r\n            Block level button\r\n          </button>\r\n          <button cButton color=\"link\" [block]=\"true\" size=\"lg\">\r\n            Block level button\r\n          </button>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          <strong>Block Level Buttons</strong>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <p>Add this class<code>.btn-block</code></p>\r\n          <button\r\n            cButton\r\n            color=\"secondary\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            size=\"lg\"\r\n          >\r\n            Block level button\r\n          </button>\r\n          <button\r\n            cButton\r\n            color=\"primary\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            size=\"lg\"\r\n          >\r\n            Block level button\r\n          </button>\r\n          <button\r\n            cButton\r\n            color=\"success\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            size=\"lg\"\r\n          >\r\n            Block level button\r\n          </button>\r\n          <button\r\n            cButton\r\n            color=\"info\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            size=\"lg\"\r\n          >\r\n            Block level button\r\n          </button>\r\n          <button\r\n            cButton\r\n            color=\"warning\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            size=\"lg\"\r\n          >\r\n            Block level button\r\n          </button>\r\n          <button\r\n            cButton\r\n            color=\"danger\"\r\n            [block]=\"true\"\r\n            variant=\"outline\"\r\n            size=\"lg\"\r\n          >\r\n            Block level button\r\n          </button>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-buttons-buttons-module-es5.js.map