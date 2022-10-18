(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-configuration-configuration-module"], {
    /***/
    "FQ0u":
    /*!*********************************************************************!*\
      !*** ./src/app/views/configuration/Configuration-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ConfigurationRoutingModule */

    /***/
    function FQ0u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationRoutingModule", function () {
        return ConfigurationRoutingModule;
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


      var _Configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./Configuration.component */
      "ek0A");

      var routes = [{
        path: '',
        component: _Configuration_component__WEBPACK_IMPORTED_MODULE_3__["ConfigurationComponent"],
        data: {
          title: 'Configuration'
        }
      }];

      var ConfigurationRoutingModule = function ConfigurationRoutingModule() {
        _classCallCheck(this, ConfigurationRoutingModule);
      };

      ConfigurationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfigurationRoutingModule);
      /***/
    },

    /***/
    "N30Y":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/configuration/configuration.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function N30Y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n      <c-col md=\"12\">\r\n        <c-row>\r\n    <c-form-group cCol md=\"6\">\r\n      <div >\r\n        <h3 class=\"text-success\">Configuration</h3>\r\n      </div>\r\n    </c-form-group>\r\n    \r\n    <c-form-group cCol md=\"6\">\r\n      <div class=\"float-right\">\r\n        <a style=\"color: #FFFFFF;\" class=\"btn btn-primary\" [routerLink]=\"['/machines']\"><i class=\"fa fa-arrow-left\"></i> Go Back</a>\r\n      </div>\r\n    </c-form-group>\r\n\r\n    </c-row>\r\n    </c-col>\r\n</div>\r\n<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col>\r\n      <c-card>\r\n        <c-card-body>\r\n          <c-tabset  fill=\"fill\" variant=\"pills\" boxed=\"true\" [activeTab]=\"'0'\">\r\n            <c-tablist>\r\n              <c-tab *ngFor=\"let tab of tabs2\">\r\n                <c-icon [name]=\"tab.icon\" class=\"pb-1\"></c-icon>\r\n                {{tab.header}}\r\n              </c-tab>\r\n            </c-tablist>\r\n            <c-tab-content>\r\n              <c-tab-pane *ngFor=\"let tab of tabs2; let i = index\">\r\n\r\n                <ng-container *ngIf=\"i===0\">\r\n                  <c-col>\r\n                    <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\r\n                     \r\n                      <c-row>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h4 class=\"col-form-label\" for=\"cid\">Cid :</h4>\r\n                          <input cInput id=\"cid\" formControlName=\"cid\" placeholder=\"cid\" autocomplete=\"given-name\"\r\n                            required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.cid.touched) && f.cid.invalid, 'is-valid': f.loginId.touched && f.cid.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['cid'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['cid'].errors.required\">cid is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h4 class=\"col-form-label\" for=\"crc\">Crc :</h4>\r\n                          <input cInput id=\"crc\" formControlName=\"crc\" placeholder=\"crc\" autocomplete=\"crc\" required\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.crc.touched) && f.crc.errors, 'is-valid': f.merchantId.touched && !f.crc.errors }\" />\r\n                          <div *ngIf=\"submitted && f['crc'].errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['crc'].errors.required\">crc is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h4 class=\"col-form-label\" >Ica :</h4>\r\n                          <button cButton color=\"btn btn-primary\" type=\"submit\" (click)=\"showing()\" [tabindex]=\"'0'\"\r\n                            >Add (ICA)\r\n                          </button>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"imx\">Imx :</h4>\r\n                          <input cInput id=\"imx\" formControlName=\"imx\" placeholder=\"imx\" autocomplete=\"given-name\"\r\n                            required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.imx.touched) && f.imx.invalid, 'is-valid': f.gstNo.touched && f.imx.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['imx'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['imx'].errors.required\">imx is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"key\">Key :</h4>\r\n                          <input cInput id=\"key\" formControlName=\"key\" placeholder=\"key\" autocomplete=\"given-name\"\r\n                            required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.key.touched) && f.key.invalid, 'is-valid': f.billingPlan.touched && f.key.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['key'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['key'].errors.required\">key is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h4 class=\"col-form-label\" for=\"men\">Men :</h4>\r\n                          <input cInput id=\"men\" formControlName=\"men\" placeholder=\"men\" autocomplete=\"given-name\"\r\n                            required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.men.touched) && f.men.invalid, 'is-valid': f.phone.touched && f.men.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['men'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['men'].errors.required\">men Plan is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h4 class=\"col-form-label\" for=\"mid\">Mid :</h4>\r\n                          <input cInput id=\"mid\" formControlName=\"mid\" placeholder=\"mid\" autocomplete=\"given-name\"\r\n                            required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mid.touched) && f.mid.invalid, 'is-valid': f.phone.touched && f.mid.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['mid'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mid'].errors.required\">mid Plan is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h4 class=\"col-form-label\" for=\"qmx\">Qmx :</h4>\r\n                          <input cInput id=\"qmx\" formControlName=\"qmx\" placeholder=\"qmx\" autocomplete=\"given-name\"\r\n                            required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.qmx.touched) && f.qmx.invalid, 'is-valid': f.address.touched && f.qmx.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['qmx'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['qmx'].errors.required\">qmx is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      <c-form-group>\r\n                        <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\"\r\n                          (click)=\"onSaveBusiness(simpleForm.value)\" [disabled]=\"simpleForm.valid\"\r\n                          [tabindex]=\"'0'\">Submit</button>\r\n                        <button cButton color=\"success\" class=\"mfe-1\" [disabled]=\"simpleForm.valid\"\r\n                          (click)=\"onValidate()\" [tabindex]=\"'0'\">Validate</button>\r\n                        <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\" [tabindex]=\"'0'\">Clear</button>\r\n                      </c-form-group>\r\n                    </form>\r\n                \r\n                  </c-col>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"i===1\">\r\n                  \r\n                  <c-col md=\"12\">\r\n                    <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\r\n                      <c-card-header>Toaster\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"keys\">Key :</h4>\r\n                          <input cInput id=\"keys\" formControlName=\"keys\" placeholder=\"keys\" autocomplete=\"given-name\"\r\n                            required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.keys.touched) && f.keys.invalid, 'is-valid': f.mids.touched && f.keys.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['keys'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['keys'].errors.required\">Key is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"mids\">Machine ID :</h4>\r\n                          <input cInput id=\"mids\" formControlName=\"mids\" placeholder=\"mids\"\r\n                            autocomplete=\"mids\" required\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mids.touched) && f.mids.errors, 'is-valid': f.merchantId.touched && !f.mids.errors }\" />\r\n                          <div *ngIf=\"submitted && f['mids'].errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mids'].errors.required\">Machine ID is required</div>\r\n\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"nss\">No of spring supported in machine:</h4>\r\n                          <input cInput id=\"nss\" formControlName=\"nss\" placeholder=\"nss\"\r\n                            autocomplete=\"family-name\" required\r\n                            [ngClass]=\"{ 'is-invalid':  (submitted || f.nss.touched) && f.nss.invalid, 'is-valid': f.panNo.touched && f.nss.valid }\" />\r\n                          <div *ngIf=\"submitted && f['nss'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['nss'].errors.required\">No of spring supported in machine is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"nse\">No of spring enabled in machine :</h4>\r\n                          <input cInput id=\"nse\" formControlName=\"nse\" placeholder=\"nse\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.nse.touched) && f.nse.invalid, 'is-valid': f.gstNo.touched && f.nse.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['nse'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['nse'].errors.required\">No of spring enabled in machine is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      </c-card-header>\r\n                      <c-row>\r\n                        \r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"spn\">Spring number :</h4>\r\n                          <input cInput id=\"spn\" formControlName=\"spn\" placeholder=\"spn\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.spn.touched) && f.spn.invalid, 'is-valid': f.primaryContact.touched && f.spn.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['spn'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['spn'].errors.required\">Spring number is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"ssc\">Spring slot Count :</h4>\r\n                          <input cInput id=\"ssc\" formControlName=\"ssc\" placeholder=\"ssc\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.ssc.touched) && f.ssc.invalid, 'is-valid': f.pincode.touched && f.ssc.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['ssc'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['ssc'].errors.required\">Spring slot Count is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                   \r\n                    \r\n                      <c-row>\r\n                      \r\n                      <c-form-check cCol md=\"2\" custom variant=\"checkbox\" class=\"my-2\">\r\n                      <input cInput type=\"checkbox\" formControlName=\"cdf\" class=\"custom-control-input\" id=\"cdf\">\r\n                      <label cLabel class=\"custom-control-label\" for=\"cdf\">Coin device</label>                     \r\n                     </c-form-check>\r\n\r\n                     <c-form-check cCol md=\"2\" custom variant=\"checkbox\" class=\"my-2\">\r\n                      <input cInput type=\"checkbox\" formControlName=\"bdf\" class=\"custom-control-input\" id=\"bdf\">\r\n                      <label cLabel class=\"custom-control-label\" for=\"bdf\">Bill device</label>                     \r\n                     </c-form-check>\r\n\r\n                     <c-form-check cCol md=\"2\" custom variant=\"checkbox\" class=\"my-2\">\r\n                      <input cInput type=\"checkbox\" formControlName=\"dsc\" class=\"custom-control-input\" id=\"dsc\">\r\n                      <label cLabel class=\"custom-control-label\" for=\"dsc\">Drop sensor self check</label>                     \r\n                     </c-form-check>\r\n\r\n                     <c-form-check cCol md=\"2\" custom variant=\"checkbox\" class=\"my-2\">\r\n                      <input cInput type=\"checkbox\" formControlName=\"gps\" class=\"custom-control-input\" id=\"gps\">\r\n                      <label cLabel class=\"custom-control-label\" for=\"gps\">GPS</label>                     \r\n                     </c-form-check>\r\n\r\n                     <c-form-check cCol md=\"2\" custom variant=\"checkbox\" class=\"my-2\">\r\n                      <input cInput type=\"checkbox\" formControlName=\"gsm\" class=\"custom-control-input\" id=\"gsm\">\r\n                      <label cLabel class=\"custom-control-label\" for=\"gsm\">GSM</label>                     \r\n                     </c-form-check>\r\n                     \r\n                     \r\n                      </c-row>\r\n                      <c-row>\r\n\r\n                        <c-form-check cCol md=\"2\" custom variant=\"checkbox\" class=\"my-2\">\r\n                          <input cInput type=\"checkbox\" formControlName=\"wfi\" class=\"custom-control-input\" id=\"wfi\">\r\n                          <label cLabel class=\"custom-control-label\" for=\"wfi\">Wifi</label>                     \r\n                         </c-form-check>\r\n\r\n                         <c-form-check cCol md=\"2\" custom variant=\"checkbox\" class=\"my-2\">\r\n                          <input cInput type=\"checkbox\" formControlName=\"tsf\" class=\"custom-control-input\" id=\"tsf\">\r\n                          <label cLabel class=\"custom-control-label\" for=\"tsf\">Temperature Sensor</label>                     \r\n                         </c-form-check>\r\n\r\n                         <c-form-check cCol md=\"2\" custom variant=\"checkbox\" class=\"my-2\">\r\n                          <input cInput type=\"checkbox\" formControlName=\"psf\" class=\"custom-control-input\" id=\"psf\">\r\n                          <label cLabel class=\"custom-control-label\" for=\"psf\">Paired Spring flag</label>                     \r\n                         </c-form-check>\r\n\r\n                      </c-row>\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"mff\">Motor Running Feedback :</h4>\r\n                          <input cInput id=\"mff\" formControlName=\"mff\" placeholder=\"mff\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mff.touched) && f.mff.invalid, 'is-valid': f.address.touched && f.mff.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['mff'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mff'].errors.required\">Motor Running Feedback  is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"mcf\">Motor current measurement :</h4>\r\n                          <input cInput id=\"mcf\" formControlName=\"mcf\" placeholder=\"mcf\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mcf.touched) && f.mcf.invalid, 'is-valid': f.country.touched && f.mcf.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['mcf'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mcf'].errors.required\">Motor current measurement is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"mtp\">Motor Type :</h4>\r\n                          <input cInput id=\"mtp\" formControlName=\"mtp\" placeholder=\"mtp\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mtp.touched) && f.mtp.invalid, 'is-valid': f.pincode.touched && f.mtp.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['mtp'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mtp'].errors.required\">Motor Type is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"mlc\">Motor Low current(10mA precision) :</h4>\r\n                          <input cInput id=\"mlc\" formControlName=\"mlc\" placeholder=\"mlc\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mlc.touched) && f.mlc.invalid, 'is-valid': f.primaryContact.touched && f.mlc.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['mlc'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mlc'].errors.required\">Motor Low current(10mA precision) is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>                   \r\n                      <c-row>\r\n                        \r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"mhc\">Motor High current(10mA precision) :</h4>\r\n                          <input cInput id=\"mhc\" formControlName=\"mhc\"\r\n                            placeholder=\"mhc\" autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mhc.touched) && f.mhc.invalid, 'is-valid': f.secondaryContact.touched && f.mhc.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['mhc'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mhc'].errors.required\">Motor High current(10mA precision) is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"nmc\">No of connected motor in paired :</h4>\r\n                          <input cInput id=\"nmc\" formControlName=\"nmc\"\r\n                            placeholder=\"nmc\" autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.nmc.touched) && f.nmc.invalid, 'is-valid': f.nmc.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['nmc'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['nmc'].errors.required\">No of connected motor in paired  is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      <c-row>                        \r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"mrp\">Motor Rotations Per Pay :</h4>\r\n                          <input cInput id=\"mrp\" formControlName=\"mrp\" placeholder=\"mrp\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mrp.touched) && f.mrp.invalid, 'is-valid': f.primaryContact.touched && f.mrp.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['mrp'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mrp'].errors.required\">Motor Rotations Per Pay is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"asl\">Alternate spring Limit:</h4>\r\n                          <input cInput id=\"asl\" formControlName=\"asl\"\r\n                            placeholder=\"asl\" autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.asl.touched) && f.asl.invalid, 'is-valid': f.asl.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['asl'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['asl'].errors.required\">Alternate spring Limit is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                    \r\n                   \r\n                      <c-row>                       \r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"dfc\">Dispense fail safe rotation count :</h4>\r\n                          <input cInput id=\"dfc\" formControlName=\"dfc\" placeholder=\"dfc\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.dfc.touched) && f.dfc.invalid, 'is-valid': f.primaryContact.touched && f.dfc.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['dfc'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['dfc'].errors.required\">Dispense fail safe rotation count is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"wsn\">WiFi SSID name :</h4>\r\n                          <input cInput id=\"wsn\" formControlName=\"wsn\"\r\n                            placeholder=\"wsn\" autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.wsn.touched) && f.wsn.invalid, 'is-valid': f.secondaryContact.touched && f.wsn.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['wsn'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['wsn'].errors.required\">WiFi SSID name is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"wpd\">WiFi Password:</h4>\r\n                          <input cInput id=\"wpd\" formControlName=\"wpd\"\r\n                            placeholder=\"wpd\" autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.wpd.touched) && f.wpd.invalid, 'is-valid': f.wpd.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['wpd'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['wpd'].errors.required\">WiFi Password is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"3\">\r\n                          <h4 class=\"col-form-label\" for=\"mid\">New Master Locker ID :</h4>\r\n                          <input cInput id=\"mid\" formControlName=\"mid\" placeholder=\"mid\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mid.touched) && f.mid.invalid, 'is-valid': f.pincode.touched && f.mid.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['mid'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mid'].errors.required\">New Master Locker ID is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n\r\n                        <c-form-group cCol md=\"3\">\r\n                          <h4 class=\"col-form-label\" for=\"pid\">New POS ID :</h4>\r\n                          <input cInput id=\"pid\" formControlName=\"pid\" placeholder=\"pid\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.pid.touched) && f.pid.invalid, 'is-valid': f.primaryContact.touched && f.pid.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['pid'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['pid'].errors.required\">New POS ID is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n\r\n                        <c-form-group cCol md=\"3\">\r\n                          <h4 class=\"col-form-label\" for=\"mac\">Mac Address :</h4>\r\n                          <input cInput id=\"mac\" formControlName=\"mac\"\r\n                            placeholder=\"mac\" autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.mac.touched) && f.mac.invalid, 'is-valid': f.secondaryContact.touched && f.mac.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['mac'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['mac'].errors.required\">Mac Address is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                    \r\n\r\n                      <c-form-group>\r\n                        <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\"\r\n                          (click)=\"onSaveTech(simpleForm.value)\" [disabled]=\"simpleForm.valid\"\r\n                          [tabindex]=\"'0'\">Submit</button>\r\n                        <button cButton color=\"success\" class=\"mfe-1\" [disabled]=\"simpleForm.valid\"\r\n                          (click)=\"onValidate()\" [tabindex]=\"'0'\">Validate</button>\r\n                        <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\" [tabindex]=\"'0'\">Clear</button>\r\n                      </c-form-group>\r\n                    </form>\r\n                  </c-col>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"i===2\">\r\n                  <c-col md=\"12\">\r\n                    <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h4 class=\"col-form-label\" for=\"cid\">Cid :</h4>\r\n                          <input cInput id=\"cid\" formControlName=\"cid\" placeholder=\"cid\" autocomplete=\"given-name\"\r\n                            required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.cid.touched) && f.cid.invalid, 'is-valid': f.loginId.touched && f.cid.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['cid'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['cid'].errors.required\">Merchant Short Name is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h4 class=\"col-form-label\" for=\"loginId\">LoginId :</h4>\r\n                          <input cInput id=\"loginId\" formControlName=\"loginId\" placeholder=\"loginId\"\r\n                            autocomplete=\"loginId\" required\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.loginId.touched) && f.loginId.errors, 'is-valid': f.merchantId.touched && !f.loginId.errors }\" />\r\n                          <div *ngIf=\"submitted && f['loginId'].errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['loginId'].errors.required\">LoginId is required</div>\r\n                            <div *ngIf=\"f['loginId'].errors.minlength\">{{formErrors.username.minLength}}</div>\r\n                            <div *ngIf=\"f['loginId'].errors.pattern\">{{formErrors.username.pattern}}</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"4\">\r\n                          <h4 class=\"col-form-label\" for=\"merchantId\">MerchantId :</h4>\r\n                          <input cInput id=\"merchantId\" formControlName=\"merchantId\" placeholder=\"merchantId\"\r\n                            autocomplete=\"family-name\" required\r\n                            [ngClass]=\"{ 'is-invalid':  (submitted || f.merchantId.touched) && f.merchantId.invalid, 'is-valid': f.panNo.touched && f.merchantId.valid }\" />\r\n                          <div *ngIf=\"submitted && f['merchantId'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['merchantId'].errors.required\">MerchantId is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"panNo\">Pan Number :</h4>\r\n                          <input cInput id=\"panNo\" formControlName=\"panNo\" placeholder=\"Pan Number\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.panNo.touched) && f.panNo.invalid, 'is-valid': f.gstNo.touched && f.panNo.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['panNo'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['panNo'].errors.required\">Pan Number is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"gstNo\">Gst Number :</h4>\r\n                          <input cInput id=\"gstNo\" formControlName=\"gstNo\" placeholder=\"Gst Number\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.gstNo.touched) && f.gstNo.invalid, 'is-valid': f.billingPlan.touched && f.gstNo.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['gstNo'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['gstNo'].errors.required\">Gst Number is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n\r\n                      </c-row>\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"billingPlan\">Billing Plan :</h4>\r\n                          <input cInput id=\"billingPlan\" formControlName=\"billingPlan\" placeholder=\"Billing Plan\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.billingPlan.touched) && f.billingPlan.invalid, 'is-valid': f.phone.touched && f.billingPlan.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['billingPlan'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['billingPlan'].errors.required\">Billing Plan is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                        <c-form-group cCol md=\"6\">\r\n                          <h4 class=\"col-form-label\" for=\"phone\">Phone Number :</h4>\r\n                          <input cInput id=\"phone\" formControlName=\"phone\" placeholder=\"Phone Number\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.phone.touched) && f.phone.invalid, 'is-valid': f.address.touched && f.phone.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['phone'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['phone'].errors.required\">Phone Number is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"12\">\r\n                          <h4 class=\"col-form-label\" for=\"address\">Address :</h4>\r\n                          <input cInput id=\"address\" formControlName=\"address\" placeholder=\"address\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.address.touched) && f.address.invalid, 'is-valid': f.country.touched && f.address.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['address'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['address'].errors.required\">Address is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n                      <c-row>\r\n                        <c-form-group cCol md=\"3\">\r\n                          <h4 class=\"col-form-label\" for=\"country\">Country :</h4>\r\n                          <input cInput id=\"country\" formControlName=\"country\" placeholder=\"country\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.country.touched) && f.country.invalid, 'is-valid': f.pincode.touched && f.country.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['country'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['country'].errors.required\">Country is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n\r\n                        <c-form-group cCol md=\"3\">\r\n                          <h4 class=\"col-form-label\" for=\"pincode\">Pincode :</h4>\r\n                          <input cInput id=\"pincode\" formControlName=\"pincode\" placeholder=\"pincode\"\r\n                            autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.pincode.touched) && f.pincode.invalid, 'is-valid': f.primaryContact.touched && f.pincode.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['pincode'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['pincode'].errors.required\">Pincode is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n\r\n                        <c-form-group cCol md=\"3\">\r\n                          <h4 class=\"col-form-label\" for=\"primaryContact\">PrimaryContact :</h4>\r\n                          <input cInput id=\"primaryContact\" formControlName=\"primaryContact\"\r\n                            placeholder=\"primaryContact\" autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.primaryContact.touched) && f.primaryContact.invalid, 'is-valid': f.secondaryContact.touched && f.primaryContact.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['primaryContact'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['primaryContact'].errors.required\">PrimaryContact is required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n\r\n                        <c-form-group cCol md=\"3\">\r\n                          <h4 class=\"col-form-label\" for=\"secondaryContact\">SecondaryContact:</h4>\r\n                          <input cInput id=\"secondaryContact\" formControlName=\"secondaryContact\"\r\n                            placeholder=\"secondaryContact\" autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.secondaryContact.touched) && f.secondaryContact.invalid, 'is-valid': f.secondaryContact.valid  }\" />\r\n                          <div *ngIf=\"submitted && f['secondaryContact'].invalid\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f['secondaryContact'].errors.required\">SecondaryContactis required</div>\r\n                          </div>\r\n                        </c-form-group>\r\n                      </c-row>\r\n\r\n                      <c-form-group>\r\n                        <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\"\r\n                          (click)=\"onSaveTech(simpleForm.value)\" [disabled]=\"simpleForm.valid\"\r\n                          [tabindex]=\"'0'\">Submit</button>\r\n                        <button cButton color=\"success\" class=\"mfe-1\" [disabled]=\"simpleForm.valid\"\r\n                          (click)=\"onValidate()\" [tabindex]=\"'0'\">Validate</button>\r\n                        <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\" [tabindex]=\"'0'\">Clear</button>\r\n                      </c-form-group>\r\n                    </form>\r\n                  </c-col>\r\n                </ng-container>\r\n                                \r\n              </c-tab-pane>\r\n            </c-tab-content>\r\n          </c-tabset>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n\r\n\r\n\r\n <div [style.display]=\"showModal ? 'block' : 'none'\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Add ICA</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"add-lessons-form\" [formGroup]=\"form\" class=\"needs-validation\">\r\n          <ng-container formArrayName=\"lessons\">\r\n            <ng-container *ngFor=\"let lessonForm of lessons.controls; let i = index\">\r\n              <form class=\"lesson-form-row\" [formGroup]=\"lessonForm\">\r\n                <c-row>\r\n                  \r\n                  <div cCol md=\"2\">\r\n                    <h4 class=\"col-form-label\" for=\"asn\">Asn :</h4>\r\n                    <input cInput id=\"asn\" formControlName=\"asn\" placeholder=\"asn\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.asn.touched) && f.asn.invalid, 'is-valid': f.itp.touched && f.asn.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['asn'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['asn'].errors.required\">asn is required</div>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <div cCol md=\"2\">\r\n                    <h4 class=\"col-form-label\" for=\"iid\">Iid :</h4>\r\n                    <input cInput id=\"iid\" formControlName=\"iid\" placeholder=\"iid\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.iid.touched) && f.iid.invalid, 'is-valid': f.itp.touched && f.iid.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['iid'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['iid'].errors.required\">iid is required</div>\r\n                    </div>\r\n                  </div>\r\n                \r\n                  <div cCol md=\"2\">\r\n                    <h4 class=\"col-form-label\" for=\"itp\">Itp :</h4>\r\n                    <input cInput id=\"itp\" formControlName=\"itp\" placeholder=\"itp\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.itp.touched) && f.itp.invalid, 'is-valid': f.spn.touched && f.itp.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['itp'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['itp'].errors.required\">itp is required</div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <c-form-group cCol md=\"2\">\r\n                    <h4 class=\"col-form-label\" for=\"spn\">Spn:</h4>\r\n                    <input cInput id=\"spn\" formControlName=\"spn\" placeholder=\"spn\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.spn.touched) && f.spn.invalid, 'is-valid': f.spn.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['spn'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['spn'].errors.required\">spn is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n\r\n                  <c-form-group cCol md=\"4\">\r\n                    <a (click)=\"deleteLesson(i)\" style=\"text-align:left; color: rgb(207, 18, 18);cursor: pointer;\">\r\n                      <div>&nbsp;&nbsp;<i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</div>\r\n                    </a>\r\n                  </c-form-group>\r\n                </c-row>\r\n              </form>\r\n            </ng-container>\r\n          </ng-container>\r\n          <div style=\"position: center;\">\r\n            <button cButton color=\"success\" class=\"mfe-1\" class=\"btn btn-default\" type=\"button\"\r\n              (click)=\"addLesson()\">Add</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"icaFieldValue(lessonForm.value);hide()\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"hide()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  \r\n \r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <div [style.display]=\"showModal ? 'block' : 'none'\" class=\"modal\" id=\"imagemodal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">ICA</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form [formGroup]=\"simpleForm\" (ngSubmit)=\"onSubmits()\">\r\n          <div class=\"row\">\r\n            <c-row>\r\n              <c-form-group cCol md=\"12\">\r\n                <table>\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Asn</th>\r\n                      <th>Action</th>\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr *ngFor=\"let field of fieldArray; let i = index\">\r\n\r\n                      <td>\r\n                        <input cInput [(ngModel)]=\"field.price\" class=\"form-control\" type=\"text\"\r\n                          name=\"{{field.price}}\" />\r\n                      </td>\r\n                      <td>\r\n                        <a (click)=\"deleteFieldValue(i)\" style=\"text-align:left; color: #000;cursor: pointer;\"><div>&nbsp;&nbsp;<i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</div></a>                        \r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                        <input cInput class=\"form-control\" type=\"text\" id=\"newAttributePrice\"\r\n                          [(ngModel)]=\"newAttribute.price\" name=\"newAttributePrice\" />\r\n                      </td>\r\n                      <td>\r\n                        <button cButton color=\"success\" class=\"mfe-1\" class=\"btn btn-default\" type=\"button\"\r\n                          (click)=\"addFieldValue()\">Add</button>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n\r\n              </c-form-group>\r\n            </c-row>\r\n            <c-row>\r\n              <c-form-group cCol md=\"4\">\r\n                <h4 class=\"col-form-label\" for=\"iid\">Iid :</h4>\r\n                <input cInput id=\"iid\" formControlName=\"iid\" placeholder=\"iid\" autocomplete=\"given-name\" required\r\n                  [autofocus]=\"true\"\r\n                  [ngClass]=\"{ 'is-invalid': (submitted || f.iid.touched) && f.iid.invalid, 'is-valid': f.itp.touched && f.iid.valid  }\" />\r\n                <div *ngIf=\"submitted && f['iid'].invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f['iid'].errors.required\">iid is required</div>\r\n                </div>\r\n              </c-form-group>\r\n              <c-form-group cCol md=\"4\">\r\n                <h4 class=\"col-form-label\" for=\"itp\">Itp :</h4>\r\n                <input cInput id=\"itp\" formControlName=\"itp\" placeholder=\"itp\" autocomplete=\"given-name\" required\r\n                  [autofocus]=\"true\"\r\n                  [ngClass]=\"{ 'is-invalid': (submitted || f.itp.touched) && f.itp.invalid, 'is-valid': f.spn.touched && f.itp.valid  }\" />\r\n                <div *ngIf=\"submitted && f['itp'].invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f['itp'].errors.required\">itp is required</div>\r\n                </div>\r\n              </c-form-group>\r\n              <c-form-group cCol md=\"4\">\r\n                <h4 class=\"col-form-label\" for=\"spn\">Spn:</h4>\r\n                <input cInput id=\"spn\" formControlName=\"spn\" placeholder=\"spn\" autocomplete=\"given-name\" required\r\n                  [autofocus]=\"true\"\r\n                  [ngClass]=\"{ 'is-invalid': (submitted || f.spn.touched) && f.spn.invalid, 'is-valid': f.spn.valid  }\" />\r\n                <div *ngIf=\"submitted && f['spn'].invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f['spn'].errors.required\">spn is required</div>\r\n                </div>\r\n              </c-form-group>\r\n            </c-row>\r\n            <c-row>\r\n            </c-row>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"icaFieldValue(simpleForm.value);hide()\">Submit</button>\r\n        <button type=\"button\" class=\"btn btn-dark\" data-dismiss=\"modal\" (click)=\"hide()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>  -->";
      /***/
    },

    /***/
    "ZWvG":
    /*!*****************************************************************!*\
      !*** ./src/app/views/configuration/configuration.component.css ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function ZWvG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .card-body {\r\n  flex: 1 1 auto;\r\n  min-height: 1px;\r\n  padding: 1.25rem;\r\n  margin-bottom: 280px;\r\n}\r\n\r\n::ng-deep .nav-tabs-boxed .tab-content {\r\n  padding: 0.75rem 1.25rem;\r\n  border: 1px solid;\r\n  border-radius: 0 0.25rem 0.25rem 0.25rem;\r\n  color: #768192;\r\n  background-color: #fff;\r\n  border-color: #d8dbe0;\r\n}\r\n\r\n::ng-deep .card-style {\r\n  border: none;\r\n}\r\n\r\n.modal-dialog {\r\n    max-width: 740px;\r\n    margin: 1.75rem auto;\r\n  }\r\n\r\np.ridge {border-style: ridge;border-color: rgb(10, 14, 10);}\r\n\r\ninput.largerCheckbox {\r\n    width: 20px;\r\n    height: 40px;\r\n    margin-top: -7px;\r\n    margin-left: revert;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUdFO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7QUFFQSxTQUFTLG1CQUFtQixDQUFDLDZCQUE2QixDQUFDOztBQUUzRDtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmNhcmQtYm9keSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG4gIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMjgwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubmF2LXRhYnMtYm94ZWQgLnRhYi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwLjI1cmVtIDAuMjVyZW0gMC4yNXJlbTtcclxuICBjb2xvcjogIzc2ODE5MjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvcjogI2Q4ZGJlMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jYXJkLXN0eWxlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4gIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgbWF4LXdpZHRoOiA3NDBweDtcclxuICAgIG1hcmdpbjogMS43NXJlbSBhdXRvO1xyXG4gIH1cclxuXHJcbiAgcC5yaWRnZSB7Ym9yZGVyLXN0eWxlOiByaWRnZTtib3JkZXItY29sb3I6IHJnYigxMCwgMTQsIDEwKTt9XHJcbiAgXHJcbiAgaW5wdXQubGFyZ2VyQ2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtN3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IHJldmVydDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "ek0A":
    /*!****************************************************************!*\
      !*** ./src/app/views/configuration/Configuration.component.ts ***!
      \****************************************************************/

    /*! exports provided: confirmPasswordValidator, ConfigurationComponent */

    /***/
    function ek0A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function () {
        return confirmPasswordValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
        return ConfigurationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./configuration.component.html */
      "N30Y");
      /* harmony import */


      var _configuration_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./configuration.component.css */
      "ZWvG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./validation-forms.service */
      "udCq");
      /* harmony import */


      var _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../Common/common-data.service */
      "4qVP");
      /* harmony import */


      var _service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../service/data.service */
      "AwSQ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /** passwords must match - custom validator */


      var confirmPasswordValidator = function confirmPasswordValidator(control) {
        var password = control.get('password');
        var confirm = control.get('confirmPassword');
        return password && confirm && password.value === confirm.value ? null : {
          passwordMismatch: true
        };
      };

      var ConfigurationComponent = /*#__PURE__*/function () {
        function ConfigurationComponent(fb, vf, service, commonData, router) {
          _classCallCheck(this, ConfigurationComponent);

          this.fb = fb;
          this.vf = vf;
          this.service = service;
          this.commonData = commonData;
          this.router = router;
          this.customer = {};
          this.submitted = false;
          this.ica = {};
          this.myObjArray = [];
          this.ObjArray = [];
          this.fieldArray = [];
          this.newAttribute = {};
          this.icaArray = [];
          this.newicaAttribute = {};
          this.myInstance = [];
          this._lorem = [];
          this._tabs = [{
            header: 'Technical Configuration',
            panel: this.lorem[0],
            icon: 'cil-user'
          }, {
            header: 'Business Configuration',
            panel: this.lorem[1],
            icon: 'cil-home'
          }, {
            header: 'General Configuration',
            panel: this.lorem[2],
            icon: 'cil-mobile'
          }]; //FormArray

          this.form = this.fb.group({
            lessons: this.fb.array([])
          });
          this.formErrors = this.vf.errorMessages;
          this.createForm();
          this.addLesson();
          this.setTab = 0;
        }

        _createClass(ConfigurationComponent, [{
          key: "setTab",
          get: function get() {
            return this._setTab;
          },
          set: function set(value) {
            this._setTab = value || 0;
          }
        }, {
          key: "lorem",
          get: function get() {
            return _toConsumableArray(this._lorem);
          }
        }, {
          key: "tabs",
          get: function get() {
            return this._tabs;
          }
        }, {
          key: "tabs2",
          get: function get() {
            return this._tabs.filter(function (tab) {
              return !tab.disabled;
            });
          } //FormArray

        }, {
          key: "lessons",
          get: function get() {
            return this.form.controls["lessons"];
          }
        }, {
          key: "addLesson",
          value: function addLesson() {
            this.lessonForm = this.fb.group({
              asn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              iid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              itp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              spn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
            this.lessons.push(this.lessonForm);
          }
        }, {
          key: "deleteLesson",
          value: function deleteLesson(lessonIndex) {
            this.lessons.removeAt(lessonIndex);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            console.log('ngOnChanges', changes, this.setTab);
          }
        }, {
          key: "onTabChange",
          value: function onTabChange(e) {
            console.log('onTabChange', e);
          }
        }, {
          key: "createForm",
          value: function createForm() {
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
              men: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              qmx: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              loginId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(this.vf.formRules.usernameMin), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.vf.formRules.nonEmpty)]],
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
              // email: ['', [Validators.required, Validators.email]],
              keys: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mids: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              nss: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              nse: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              cdf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              bdf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mff: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mcf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mtp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mlc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mhc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              dsf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              dsc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              gps: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              gsm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              wfi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              psf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              nmc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              ssc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mrp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              sec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              dec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mec: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              tsf: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              asl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              bst: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              dfc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              wsn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              wpd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              pid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              mac: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            }, {
              validators: confirmPasswordValidator
            });
          }
        }, {
          key: "f",
          get: function get() {
            return this.simpleForm.controls;
            return this.businessForm.controls;
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.submitted = false;
            this.simpleForm.reset();
            this.businessForm.reset();
          }
        }, {
          key: "onValidate",
          value: function onValidate() {
            this.submitted = true;
            return this.simpleForm.status === 'VALID';
            return this.businessForm.status === 'VALID';
          }
        }, {
          key: "onSaveBusiness",
          value: function onSaveBusiness(business) {
            this.mybusinessArray = {
              "cid": business.cid,
              "crc": parseInt(business.crc + ""),
              "ica": this.ObjArray,
              "imx": parseInt(business.imx + ""),
              "key": business.key,
              "men": parseInt(business.men + ""),
              "mid": business.mid,
              "qmx": parseInt(business.qmx + "")
            };
            console.log(this.mybusinessArray); // this.myObjArray.push({"ica": {"asn": business.asn, "iid": business.iid,"itp": business.itp,"spn": business.spn}});

            debugger;
            console.log("testforbug" + JSON.stringify(this.mybusinessArray));
            this.service.saveBusiness(this.mybusinessArray).subscribe(function (resp) {
              console.log("login Reponse:::" + JSON.stringify(resp));

              if (resp && resp.statusCode == 200) {
                console.log("Sucess");
                alert('SUCCESS!');
              }
            });
          }
        }, {
          key: "onSaveTech",
          value: function onSaveTech(business) {
            debugger;
            this.service.saveTech(business).subscribe(function (resp) {
              console.log("login Reponse:::" + JSON.stringify(resp));

              if (resp && resp.statusCode == 200) {
                console.log("Sucess");
                alert('SUCCESS!');
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            debugger;

            if (this.onValidate()) {
              console.warn(this.simpleForm.value);
              alert('SUCCESS!');
            }
          }
        }, {
          key: "onBusinessSubmit",
          value: function onBusinessSubmit() {
            debugger;

            if (this.onValidate()) {
              console.warn(this.businessForm.value);
              alert('SUCCESS!');
            }
          }
        }, {
          key: "showing",
          value: function showing() {
            debugger;
            this.showModal = true;
          }
        }, {
          key: "hide",
          value: function hide() {
            debugger;
            this.showModal = false;
          }
        }, {
          key: "addFieldValue",
          value: function addFieldValue() {
            debugger;
            this.fieldArray.push(this.newAttribute);
            console.log(this.fieldArray);
            this.newAttribute = {};
            console.log(this.fieldArray);
          }
        }, {
          key: "deleteFieldValue",
          value: function deleteFieldValue(index) {
            this.fieldArray.splice(index, 1);
          }
        }, {
          key: "icaFieldValue",
          value: function icaFieldValue(icaArray) {
            debugger;
            this.myObjArray.push({
              "asn": [parseInt(icaArray.asn)],
              "iid": parseInt(icaArray.iid),
              "itp": parseInt(icaArray.itp),
              "spn": parseInt(icaArray.spn)
            });
            this.newicaAttribute = JSON.parse(JSON.stringify(this.myObjArray));
            this.ObjArray = Object.assign(this.newicaAttribute);
            this.icaArray.push(this.newicaAttribute);
          }
        }]);

        return ConfigurationComponent;
      }();

      ConfigurationComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"]
        }, {
          type: _service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
        }, {
          type: _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__["CommonDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }];
      };

      ConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_configuration_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_configuration_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"], _service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], ConfigurationComponent);
      /***/
    },

    /***/
    "l/9y":
    /*!*************************************************************!*\
      !*** ./src/app/views/configuration/configuration.module.ts ***!
      \*************************************************************/

    /*! exports provided: ConfigurationModule */

    /***/
    function l9y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigurationModule", function () {
        return ConfigurationModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _Configuration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Configuration-routing.module */
      "FQ0u");
      /* harmony import */


      var _Configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Configuration.component */
      "ek0A");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _forms_validation_forms_validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../forms/validation-forms/validation-forms-routing.module */
      "jloh");

      var ConfigurationModule = function ConfigurationModule() {
        _classCallCheck(this, ConfigurationModule);
      };

      ConfigurationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _Configuration_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfigurationRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["SwitchModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["TabsetModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _forms_validation_forms_validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_9__["ValidationFormsRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["FormModule"]],
        declarations: [_Configuration_component__WEBPACK_IMPORTED_MODULE_6__["ConfigurationComponent"]]
      })], ConfigurationModule);
      /***/
    },

    /***/
    "udCq":
    /*!*****************************************************************!*\
      !*** ./src/app/views/configuration/validation-forms.service.ts ***!
      \*****************************************************************/

    /*! exports provided: ValidationFormsService */

    /***/
    function udCq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidationFormsService", function () {
        return ValidationFormsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var ValidationFormsService = function ValidationFormsService() {
        _classCallCheck(this, ValidationFormsService);

        this.formRules = {
          nonEmpty: '^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$',
          usernameMin: 5,
          passwordMin: 6,
          passwordPattern: '(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
        };
        this.formErrors = {
          firstName: '',
          lastName: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          accept: false
        };
        this.errorMessages = {
          firstName: {
            required: 'First name is required'
          },
          lastName: {
            required: 'Last name is required'
          },
          username: {
            required: 'Username is required',
            minLength: "'Username must be ".concat(this.formRules.usernameMin, " characters or more"),
            pattern: 'Must contain letters and/or numbers, no trailing spaces'
          },
          email: {
            required: 'required',
            email: 'Invalid email address'
          },
          password: {
            required: 'Password is required',
            pattern: 'Password must contain: numbers, uppercase and lowercase letters',
            minLength: "Password must be at least ".concat(this.formRules.passwordMin, " characters")
          },
          confirmPassword: {
            required: 'Password confirmation is required',
            passwordMismatch: 'Passwords must match'
          },
          accept: {
            requiredTrue: 'You have to accept our Terms and Conditions'
          }
        };
      };

      ValidationFormsService.ctorParameters = function () {
        return [];
      };

      ValidationFormsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ValidationFormsService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-configuration-configuration-module-es5.js.map