(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-plugins-plugins-module"], {
    /***/
    "/c/9":
    /*!*************************************************!*\
      !*** ./src/app/views/plugins/plugins.module.ts ***!
      \*************************************************/

    /*! exports provided: PluginsModule */

    /***/
    function c9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PluginsModule", function () {
        return PluginsModule;
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


      var _plugins_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./plugins-routing.module */
      "tzDY"); // Routing


      var PluginsModule = function PluginsModule() {
        _classCallCheck(this, PluginsModule);
      };

      PluginsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_plugins_routing_module__WEBPACK_IMPORTED_MODULE_2__["PluginsRoutingModule"]],
        declarations: []
      })], PluginsModule);
      /***/
    },

    /***/
    "tzDY":
    /*!*********************************************************!*\
      !*** ./src/app/views/plugins/plugins-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: PluginsRoutingModule */

    /***/
    function tzDY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PluginsRoutingModule", function () {
        return PluginsRoutingModule;
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

      var routes = [{
        path: '',
        data: {
          title: 'Plugins'
        },
        children: [{
          path: '',
          redirectTo: 'calendar'
        }, {
          path: 'fullcalendar',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | full-calendar-ng-full-calendar-ng-module */
            "full-calendar-ng-full-calendar-ng-module").then(__webpack_require__.bind(null,
            /*! ./full-calendar-ng/full-calendar-ng.module */
            "xS8c")).then(function (m) {
              return m.FullCalendarNgModule;
            });
          }
        }, {
          path: 'draggable-cards',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | draggable-cards-draggable-cards-module */
            "draggable-cards-draggable-cards-module").then(__webpack_require__.bind(null,
            /*! ./draggable-cards/draggable-cards.module */
            "+1an")).then(function (m) {
              return m.DraggableCardsModule;
            });
          }
        }, {
          path: 'spinners',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | spinners-spinners-module */
            "spinners-spinners-module").then(__webpack_require__.bind(null,
            /*! ./spinners/spinners.module */
            "guzr")).then(function (m) {
              return m.SpinnersModule;
            });
          }
        }]
      }];

      var PluginsRoutingModule = function PluginsRoutingModule() {
        _classCallCheck(this, PluginsRoutingModule);
      };

      PluginsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PluginsRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-plugins-plugins-module-es5.js.map