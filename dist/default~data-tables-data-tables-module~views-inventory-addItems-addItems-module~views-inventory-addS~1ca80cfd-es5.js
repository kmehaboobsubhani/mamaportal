(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~data-tables-data-tables-module~views-inventory-addItems-addItems-module~views-inventory-addS~1ca80cfd"], {
    /***/
    "j9sh":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/@pascalhonegger/ng-datatable/fesm2015/pascalhonegger-ng-datatable.js ***!
      \*******************************************************************************************/

    /*! exports provided: BootstrapPaginator, DataTable, DataTableModule, DefaultSorter, Paginator */

    /***/
    function j9sh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BootstrapPaginator", function () {
        return BootstrapPaginator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTable", function () {
        return DataTable;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataTableModule", function () {
        return DataTableModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultSorter", function () {
        return DefaultSorter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Paginator", function () {
        return Paginator;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");

      function BootstrapPaginator_ul_2_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_li_4_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(_r0.activePage - 4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage - 4);
        }
      }

      function BootstrapPaginator_ul_2_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_li_5_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(_r0.activePage - 3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage - 3);
        }
      }

      function BootstrapPaginator_ul_2_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_li_6_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(_r0.activePage - 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage - 2);
        }
      }

      function BootstrapPaginator_ul_2_li_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_li_7_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(_r0.activePage - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage - 1);
        }
      }

      function BootstrapPaginator_ul_2_li_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_li_11_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(_r0.activePage + 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage + 1);
        }
      }

      function BootstrapPaginator_ul_2_li_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_li_12_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(_r0.activePage + 2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage + 2);
        }
      }

      function BootstrapPaginator_ul_2_li_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_li_13_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(_r0.activePage + 3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage + 3);
        }
      }

      function BootstrapPaginator_ul_2_li_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_li_14_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(_r0.activePage + 4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage + 4);
        }
      }

      function BootstrapPaginator_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_Template_li_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xAB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BootstrapPaginator_ul_2_li_4_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BootstrapPaginator_ul_2_li_5_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BootstrapPaginator_ul_2_li_6_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BootstrapPaginator_ul_2_li_7_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BootstrapPaginator_ul_2_li_11_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BootstrapPaginator_ul_2_li_12_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BootstrapPaginator_ul_2_li_13_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BootstrapPaginator_ul_2_li_14_Template, 3, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_2_Template_li_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setPage(_r0.lastPage);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\xBB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.activePage <= 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage > 4 && _r0.activePage + 1 > _r0.lastPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage > 3 && _r0.activePage + 2 > _r0.lastPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r0.activePage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage + 1 <= _r0.lastPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage + 2 <= _r0.lastPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage + 3 <= _r0.lastPage && _r0.activePage < 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.activePage + 4 <= _r0.lastPage && _r0.activePage < 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", _r0.activePage >= _r0.lastPage);
        }
      }

      function BootstrapPaginator_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BootstrapPaginator_ul_3_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var rows_r31 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return _r0.setRowsOnPage(rows_r31);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rows_r31 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", _r0.rowsOnPage === rows_r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rows_r31);
        }
      }

      function BootstrapPaginator_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BootstrapPaginator_ul_3_li_1_Template, 3, 3, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.rowsOnPageSet);
        }
      }

      var _c0 = ["*"];

      function DefaultSorter_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 3);
        }
      }

      function DefaultSorter_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
        }
      }

      var BootstrapPaginator = /*#__PURE__*/function () {
        function BootstrapPaginator() {
          _classCallCheck(this, BootstrapPaginator);

          this.rowsOnPageSet = [];
          this.minRowsOnPage = 0;
        }

        _createClass(BootstrapPaginator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.rowsOnPageSet) {
              this.minRowsOnPage = this.rowsOnPageSet.reduce(function (previous, current) {
                return current < previous ? current : previous;
              });
            }
          }
        }]);

        return BootstrapPaginator;
      }();

      BootstrapPaginator.ɵfac = function BootstrapPaginator_Factory(t) {
        return new (t || BootstrapPaginator)();
      };

      BootstrapPaginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BootstrapPaginator,
        selectors: [["mfBootstrapPaginator"]],
        inputs: {
          rowsOnPageSet: "rowsOnPageSet",
          mfTable: "mfTable"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 3,
        consts: [[3, "mfTable"], ["p", ""], ["class", "pagination", 4, "ngIf"], ["class", "pagination pull-right float-sm-right", 4, "ngIf"], [1, "pagination"], [1, "page-item", 3, "click"], [1, "page-link", 2, "cursor", "pointer"], ["class", "page-item", 3, "click", 4, "ngIf"], [1, "page-item", "active"], [1, "pagination", "pull-right", "float-sm-right"], ["class", "page-item", 3, "active", "click", 4, "ngFor", "ngForOf"]],
        template: function BootstrapPaginator_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mfPaginator", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BootstrapPaginator_ul_2_Template, 18, 13, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BootstrapPaginator_ul_3_Template, 2, 1, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mfTable", ctx.mfTable);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.dataLength > _r0.rowsOnPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.dataLength > ctx.minRowsOnPage);
          }
        },
        directives: function directives() {
          return [Paginator, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]];
        },
        encapsulation: 2
      });
      BootstrapPaginator.propDecorators = {
        rowsOnPageSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["rowsOnPageSet"]
        }],
        mfTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["mfTable"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BootstrapPaginator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "mfBootstrapPaginator",
            template: "\n    <mfPaginator #p [mfTable]=\"mfTable\">\n        <ul class=\"pagination\" *ngIf=\"p.dataLength > p.rowsOnPage\">\n            <li class=\"page-item\" [class.disabled]=\"p.activePage <= 1\" (click)=\"p.setPage(1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">&laquo;</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 4 && p.activePage + 1 > p.lastPage\" (click)=\"p.setPage(p.activePage - 4)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-4}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 3 && p.activePage + 2 > p.lastPage\" (click)=\"p.setPage(p.activePage - 3)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-3}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 2\" (click)=\"p.setPage(p.activePage - 2)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-2}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage > 1\" (click)=\"p.setPage(p.activePage - 1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage-1}}</a>\n            </li>\n            <li class=\"page-item active\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 1 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 1)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+1}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 2 <= p.lastPage\" (click)=\"p.setPage(p.activePage + 2)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+2}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 3 <= p.lastPage && p.activePage < 3\" (click)=\"p.setPage(p.activePage + 3)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+3}}</a>\n            </li>\n            <li class=\"page-item\" *ngIf=\"p.activePage + 4 <= p.lastPage && p.activePage < 2\" (click)=\"p.setPage(p.activePage + 4)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{p.activePage+4}}</a>\n            </li>\n            <li class=\"page-item\" [class.disabled]=\"p.activePage >= p.lastPage\" (click)=\"p.setPage(p.lastPage)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">&raquo;</a>\n            </li>\n        </ul>\n        <ul class=\"pagination pull-right float-sm-right\" *ngIf=\"p.dataLength > minRowsOnPage\">\n            <li class=\"page-item\" *ngFor=\"let rows of rowsOnPageSet\" [class.active]=\"p.rowsOnPage===rows\" (click)=\"p.setRowsOnPage(rows)\">\n                <a class=\"page-link\" style=\"cursor: pointer\">{{rows}}</a>\n            </li>\n        </ul>\n    </mfPaginator>\n    "
          }]
        }], function () {
          return [];
        }, {
          rowsOnPageSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["rowsOnPageSet"]
          }],
          mfTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["mfTable"]
          }]
        });
      })();

      var DataTable = /*#__PURE__*/function () {
        function DataTable(differs) {
          _classCallCheck(this, DataTable);

          this.differs = differs;
          this.inputData = [];
          this.sortBy = "";
          this.sortOrder = "asc";
          this.sortByChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.sortOrderChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.rowsOnPage = 1000;
          this.activePage = 1;
          this.mustRecalculateData = false;
          this.onSortChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
          this.onPageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.diff = differs.find([]).create(null);
        }

        _createClass(DataTable, [{
          key: "getSort",
          value: function getSort() {
            return {
              sortBy: this.sortBy,
              sortOrder: this.sortOrder
            };
          }
        }, {
          key: "setSort",
          value: function setSort(sortBy, sortOrder) {
            if (this.sortBy !== sortBy || this.sortOrder !== sortOrder) {
              this.sortBy = sortBy;
              this.sortOrder = ["asc", "desc"].indexOf(sortOrder) >= 0 ? sortOrder : "asc";
              this.mustRecalculateData = true;
              this.onSortChange.next({
                sortBy: this.sortBy,
                sortOrder: this.sortOrder
              });
              this.sortByChange.emit(this.sortBy);
              this.sortOrderChange.emit(this.sortOrder);
            }
          }
        }, {
          key: "getPage",
          value: function getPage() {
            return {
              activePage: this.activePage,
              rowsOnPage: this.rowsOnPage,
              dataLength: this.inputData.length
            };
          }
        }, {
          key: "setPage",
          value: function setPage(activePage, rowsOnPage) {
            if (this.rowsOnPage !== rowsOnPage || this.activePage !== activePage) {
              this.activePage = this.activePage !== activePage ? activePage : this.calculateNewActivePage(this.rowsOnPage, rowsOnPage);
              this.rowsOnPage = rowsOnPage;
              this.mustRecalculateData = true;
              this.onPageChange.emit({
                activePage: this.activePage,
                rowsOnPage: this.rowsOnPage,
                dataLength: this.inputData ? this.inputData.length : 0
              });
            }
          }
        }, {
          key: "calculateNewActivePage",
          value: function calculateNewActivePage(previousRowsOnPage, currentRowsOnPage) {
            var firstRowOnPage = (this.activePage - 1) * previousRowsOnPage + 1;
            var newActivePage = Math.ceil(firstRowOnPage / currentRowsOnPage);
            return newActivePage;
          }
        }, {
          key: "recalculatePage",
          value: function recalculatePage() {
            var lastPage = Math.ceil(this.inputData.length / this.rowsOnPage);
            this.activePage = lastPage < this.activePage ? lastPage : this.activePage;
            this.activePage = this.activePage || 1;
            this.onPageChange.emit({
              activePage: this.activePage,
              rowsOnPage: this.rowsOnPage,
              dataLength: this.inputData.length
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.rowsOnPage) {
              this.rowsOnPage = changes.rowsOnPage.previousValue;
              this.setPage(this.activePage, changes.rowsOnPage.currentValue);
              this.mustRecalculateData = true;
            }

            if (changes.sortBy || changes.sortOrder) {
              if (["asc", "desc"].indexOf(this.sortOrder) < 0) {
                console.warn("ng-datatable: value for input mfSortOrder must be one of ['asc', 'desc'], but is:", this.sortOrder);
                this.sortOrder = "asc";
              }

              if (this.sortBy) {
                this.onSortChange.next({
                  sortBy: this.sortBy,
                  sortOrder: this.sortOrder
                });
              }

              this.mustRecalculateData = true;
            }

            if (changes.inputData) {
              this.inputData = changes.inputData.currentValue || [];
              this.recalculatePage();
              this.mustRecalculateData = true;
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            var changes = this.diff.diff(this.inputData);

            if (changes) {
              this.recalculatePage();
              this.mustRecalculateData = true;
            }

            if (this.mustRecalculateData) {
              this.fillData();
              this.mustRecalculateData = false;
            }
          }
        }, {
          key: "fillData",
          value: function fillData() {
            // this.activePage = this.activePage;
            // this.rowsOnPage = this.rowsOnPage;
            var offset = (this.activePage - 1) * this.rowsOnPage; // let data = this.inputData;
            // const sortBy = this.sortBy;
            // if (typeof sortBy === "string" || sortBy instanceof String) {
            //     data = orderBy(data, this.caseInsensitiveIteratee(sortBy as string), [this.sortOrder]);
            // } else {
            //     data = orderBy(data, sortBy, [this.sortOrder]);
            // }
            // data = slice(data, offset, offset + this.rowsOnPage);

            this.data = _toConsumableArray(this.inputData).sort(this.sorter(this.sortBy, this.sortOrder)).slice(offset, offset + this.rowsOnPage);
          }
        }, {
          key: "caseInsensitiveIteratee",
          value: function caseInsensitiveIteratee(sortBy) {
            return function (row) {
              var value = row;

              if (typeof sortBy === "string" || sortBy instanceof String) {
                var _iterator = _createForOfIteratorHelper(sortBy.split(".")),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var sortByProperty = _step.value;

                    if (value) {
                      value = value[sortByProperty];
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              } else {
                value = sortBy(value);
              }

              if (value && typeof value === "string" || value instanceof String) {
                return value.toLowerCase();
              }

              return value;
            };
          }
        }, {
          key: "compare",
          value: function compare(left, right) {
            return left === right ? 0 : left == null || left > right ? 1 : -1;
          }
        }, {
          key: "sorter",
          value: function sorter(sortBy, sortOrder) {
            var _this = this;

            var order = sortOrder === "desc" ? -1 : 1;

            if (Array.isArray(sortBy)) {
              var iteratees = sortBy.map(function (entry) {
                return _this.caseInsensitiveIteratee(entry);
              });
              return function (left, right) {
                var _iterator2 = _createForOfIteratorHelper(iteratees),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var iteratee = _step2.value;
                    var comparison = _this.compare(iteratee(left), iteratee(right)) * order;

                    if (comparison !== 0) {
                      return comparison;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }

                return 0;
              };
            } else {
              var iteratee = this.caseInsensitiveIteratee(sortBy);
              return function (left, right) {
                return _this.compare(iteratee(left), iteratee(right)) * order;
              };
            }
          }
        }]);

        return DataTable;
      }();

      DataTable.ɵfac = function DataTable_Factory(t) {
        return new (t || DataTable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]));
      };

      DataTable.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: DataTable,
        selectors: [["table", "mfData", ""]],
        inputs: {
          inputData: ["mfData", "inputData"],
          sortBy: ["mfSortBy", "sortBy"],
          sortOrder: ["mfSortOrder", "sortOrder"],
          rowsOnPage: ["mfRowsOnPage", "rowsOnPage"],
          activePage: ["mfActivePage", "activePage"]
        },
        outputs: {
          sortByChange: "mfSortByChange",
          sortOrderChange: "mfSortOrderChange"
        },
        exportAs: ["mfDataTable"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      DataTable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
        }];
      };

      DataTable.propDecorators = {
        inputData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["mfData"]
        }],
        sortBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["mfSortBy"]
        }],
        sortOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["mfSortOrder"]
        }],
        sortByChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["mfSortByChange"]
        }],
        sortOrderChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ["mfSortOrderChange"]
        }],
        rowsOnPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["mfRowsOnPage"]
        }],
        activePage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["mfActivePage"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "table[mfData]",
            exportAs: "mfDataTable"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]
          }];
        }, {
          inputData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["mfData"]
          }],
          sortBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["mfSortBy"]
          }],
          sortOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["mfSortOrder"]
          }],
          sortByChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["mfSortByChange"]
          }],
          sortOrderChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ["mfSortOrderChange"]
          }],
          rowsOnPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["mfRowsOnPage"]
          }],
          activePage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["mfActivePage"]
          }]
        });
      })();

      var Paginator = /*#__PURE__*/function () {
        function Paginator(injectMfTable) {
          var _this2 = this;

          _classCallCheck(this, Paginator);

          this.injectMfTable = injectMfTable;
          this.dataLength = 0;

          this.onPageChangeSubscriber = function (event) {
            _this2.activePage = event.activePage;
            _this2.rowsOnPage = event.rowsOnPage;
            _this2.dataLength = event.dataLength;
            _this2.lastPage = Math.ceil(_this2.dataLength / _this2.rowsOnPage);
          };
        }

        _createClass(Paginator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.mfTable = this.inputMfTable || this.injectMfTable;
            this.onPageChangeSubscriber(this.mfTable.getPage());
            this.mfTable.onPageChange.subscribe(this.onPageChangeSubscriber);
          }
        }, {
          key: "setPage",
          value: function setPage(pageNumber) {
            this.mfTable.setPage(pageNumber, this.rowsOnPage);
          }
        }, {
          key: "setRowsOnPage",
          value: function setRowsOnPage(rowsOnPage) {
            this.mfTable.setPage(this.activePage, rowsOnPage);
          }
        }]);

        return Paginator;
      }();

      Paginator.ɵfac = function Paginator_Factory(t) {
        return new (t || Paginator)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataTable, 8));
      };

      Paginator.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: Paginator,
        selectors: [["mfPaginator"]],
        inputs: {
          inputMfTable: ["mfTable", "inputMfTable"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function Paginator_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2
      });

      Paginator.ctorParameters = function () {
        return [{
          type: DataTable,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      };

      Paginator.propDecorators = {
        inputMfTable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["mfTable"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Paginator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "mfPaginator",
            template: "<ng-content></ng-content>"
          }]
        }], function () {
          return [{
            type: DataTable,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }]
          }];
        }, {
          inputMfTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["mfTable"]
          }]
        });
      })();

      var DefaultSorter = /*#__PURE__*/function () {
        function DefaultSorter(mfTable) {
          _classCallCheck(this, DefaultSorter);

          this.mfTable = mfTable;
          this.isSortedByMeAsc = false;
          this.isSortedByMeDesc = false;
        }

        _createClass(DefaultSorter, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.mfTable.onSortChange.subscribe(function (event) {
              // tslint:disable:triple-equals
              _this3.isSortedByMeAsc = event.sortBy == _this3.sortBy && event.sortOrder == "asc";
              _this3.isSortedByMeDesc = event.sortBy == _this3.sortBy && event.sortOrder == "desc"; // tslint:enable:triple-equals
            });
          }
        }, {
          key: "sort",
          value: function sort() {
            if (this.isSortedByMeAsc) {
              this.mfTable.setSort(this.sortBy, "desc");
            } else {
              this.mfTable.setSort(this.sortBy, "asc");
            }
          }
        }]);

        return DefaultSorter;
      }();

      DefaultSorter.ɵfac = function DefaultSorter_Factory(t) {
        return new (t || DefaultSorter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DataTable));
      };

      DefaultSorter.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DefaultSorter,
        selectors: [["mfDefaultSorter"]],
        inputs: {
          sortBy: ["by", "sortBy"]
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 2,
        consts: [[1, "text-nowrap", 2, "cursor", "pointer", 3, "click"], ["class", "glyphicon glyphicon-triangle-top", "aria-hidden", "true", 4, "ngIf"], ["class", "glyphicon glyphicon-triangle-bottom", "aria-hidden", "true", 4, "ngIf"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-triangle-top"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-triangle-bottom"]],
        template: function DefaultSorter_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultSorter_Template_a_click_0_listener() {
              return ctx.sort();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DefaultSorter_span_2_Template, 1, 0, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DefaultSorter_span_3_Template, 1, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSortedByMeAsc);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSortedByMeDesc);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });

      DefaultSorter.ctorParameters = function () {
        return [{
          type: DataTable
        }];
      };

      DefaultSorter.propDecorators = {
        sortBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ["by"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultSorter, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "mfDefaultSorter",
            template: "\n        <a style=\"cursor: pointer\" (click)=\"sort()\" class=\"text-nowrap\">\n            <ng-content></ng-content>\n            <span *ngIf=\"isSortedByMeAsc\" class=\"glyphicon glyphicon-triangle-top\" aria-hidden=\"true\"></span>\n            <span *ngIf=\"isSortedByMeDesc\" class=\"glyphicon glyphicon-triangle-bottom\" aria-hidden=\"true\"></span>\n        </a>"
          }]
        }], function () {
          return [{
            type: DataTable
          }];
        }, {
          sortBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ["by"]
          }]
        });
      })();

      var DataTableModule = function DataTableModule() {
        _classCallCheck(this, DataTableModule);
      };

      DataTableModule.ɵfac = function DataTableModule_Factory(t) {
        return new (t || DataTableModule)();
      };

      DataTableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DataTableModule
      });
      DataTableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataTableModule, {
          declarations: function declarations() {
            return [DataTable, DefaultSorter, Paginator, BootstrapPaginator];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
          },
          exports: function exports() {
            return [DataTable, DefaultSorter, Paginator, BootstrapPaginator];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            declarations: [DataTable, DefaultSorter, Paginator, BootstrapPaginator],
            exports: [DataTable, DefaultSorter, Paginator, BootstrapPaginator]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of ng-datatable
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=pascalhonegger-ng-datatable.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=default~data-tables-data-tables-module~views-inventory-addItems-addItems-module~views-inventory-addS~1ca80cfd-es5.js.map