(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-inventory-addStocks-addStocks-module"], {
    /***/
    "4u2K":
    /*!******************************************************************!*\
      !*** ./src/app/views/inventory/addStocks/addStocks.component.ts ***!
      \******************************************************************/

    /*! exports provided: confirmPasswordValidator, AddStocksComponent */

    /***/
    function u2K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "confirmPasswordValidator", function () {
        return confirmPasswordValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddStocksComponent", function () {
        return AddStocksComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_addStocks_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./addStocks.component.html */
      "K5ae");
      /* harmony import */


      var _addStocks_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./addStocks.component.css */
      "gOpx");
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
      "mWZQ");
      /* harmony import */


      var _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../Common/common-data.service */
      "4qVP");
      /* harmony import */


      var _service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../service/data.service */
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

      var AddStocksComponent = /*#__PURE__*/function () {
        function AddStocksComponent(fb, vf, service, commonData, router) {
          _classCallCheck(this, AddStocksComponent);

          this.fb = fb;
          this.vf = vf;
          this.service = service;
          this.commonData = commonData;
          this.router = router;
          this.addStocks = {};
          this._lorem = [];
          this._tabs = [{
            header: 'Merchant Info',
            panel: this.lorem[0],
            icon: 'cil-user'
          }, {
            header: 'Payment Info',
            panel: this.lorem[1],
            icon: 'cil-mobile'
          }, {
            header: 'Payment Gateway',
            panel: this.lorem[1],
            icon: 'cil-credit-card'
          }];
          this.submitted = false;
          this.formErrors = this.vf.errorMessages;
          this.createForm();
        }

        _createClass(AddStocksComponent, [{
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
            // const tabs = this._tabs.map((item) => Object.assign(Object.create(null), item));
            // console.log('tabs:', tabs);
            // return tabs;
            return this._tabs;
          }
        }, {
          key: "tabs2",
          get: function get() {
            // const tabs = this._tabs.map((item) => Object.assign(Object.create(null), item));
            // console.log('tabs:', tabs);
            // return tabs;
            return this._tabs.filter(function (tab) {
              return !tab.disabled;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {// clearInterval(this.interval);
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
              active: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              costPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              gst: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              itemId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              merchantId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              sellPrice: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
              threshold: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
            });
          } // convenience getter for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.simpleForm.controls;
          }
        }, {
          key: "onReset",
          value: function onReset() {
            this.submitted = false;
            this.simpleForm.reset();
          }
        }, {
          key: "onValidate",
          value: function onValidate() {
            this.submitted = true; // stop here if form is invalid

            return this.simpleForm.status === 'VALID';
          }
        }, {
          key: "onAddItems",
          value: function onAddItems(addStocks) {
            debugger;
            this.service.AddItems(addStocks).subscribe(function (resp) {
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
            debugger; //console.warn(this.onValidate(), this.simpleForm.value);

            if (this.onValidate()) {
              console.warn(this.simpleForm.value);
              alert('SUCCESS!');
            }
          }
        }]);

        return AddStocksComponent;
      }();

      AddStocksComponent.ctorParameters = function () {
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

      AddStocksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_addStocks_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [_validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"]],
        styles: [_addStocks_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _validation_forms_service__WEBPACK_IMPORTED_MODULE_5__["ValidationFormsService"], _service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_6__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])], AddStocksComponent);
      /***/
    },

    /***/
    "K5ae":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/inventory/addStocks/addStocks.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function K5ae(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <form [formGroup]=\"entryForm\" novalidate>\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <div class=\"float-left\">\r\n            <h3 class=\"text-info\">Add Stock</h3>\r\n          </div>\r\n          <div class=\"float-right\">\r\n            <a class=\"btn btn-primary\" [routerLink]=\"['/items']\"><i class=\"fa fa-arrow-left\"></i> Back to Stock List</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n  \r\n          <ng-container>\r\n            <c-col md=\"12\">\r\n              <form [formGroup]=\"simpleForm\" novalidate (ngSubmit)=\"onSubmit()\" class=\"needs-validation\">\r\n                <c-row>\r\n                  <c-form-group cCol md=\"4\">\r\n                    <h6 class=\"col-form-label\" for=\"name\">Name :</h6>\r\n                    <input cInput id=\"name\" formControlName=\"name\" placeholder=\"Name\" autocomplete=\"given-name\" required\r\n                      [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.name.touched) && f.name.invalid, 'is-valid': f.category.touched && f.name.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['name'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['name'].errors.required\">Name is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                  <c-form-group cCol md=\"4\">\r\n                    <h6 class=\"col-form-label\" for=\"category\">category :</h6>\r\n                    <input cInput id=\"category\" formControlName=\"category\" placeholder=\"category\" autocomplete=\"given-name\" required\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.category.touched) && f.category.errors, 'is-valid': f.description.touched && !f.category.errors }\" />\r\n                    <div *ngIf=\"submitted && f['category'].errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['category'].errors.required\">category is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                  <c-form-group cCol md=\"4\">\r\n                    <h6 class=\"col-form-label\" for=\"description\">Description :</h6>\r\n                    <input cInput id=\"description\" formControlName=\"description\" placeholder=\"description\"\r\n                      autocomplete=\"family-name\" required\r\n                      [ngClass]=\"{ 'is-invalid':  (submitted || f.description.touched) && f.description.invalid, 'is-valid': f.itemId.touched && f.description.valid }\" />\r\n                    <div *ngIf=\"submitted && f['description'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['description'].errors.required\">Description is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                </c-row>\r\n                <c-row>\r\n                  <c-form-group cCol md=\"6\">\r\n                    <h6 class=\"col-form-label\" for=\"itemId\">ItemId :</h6>\r\n                    <input cInput id=\"itemId\" formControlName=\"itemId\" placeholder=\"item Id\" autocomplete=\"given-name\"\r\n                      required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.itemId.touched) && f.itemId.invalid, 'is-valid': f.merchantId.touched && f.itemId.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['itemId'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['itemId'].errors.required\">ItemId is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                  <c-form-group cCol md=\"6\">\r\n                    <h6 class=\"col-form-label\" for=\"merchantId\">MerchantId :</h6>\r\n                    <input cInput id=\"merchantId\" formControlName=\"merchantId\" placeholder=\"merchantId\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.merchantId.touched) && f.merchantId.invalid, 'is-valid': f.gst.touched && f.merchantId.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['merchantId'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['merchantId'].errors.required\">merchantId is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n  \r\n                </c-row>\r\n                <c-row>\r\n                  <c-form-group cCol md=\"6\">\r\n                    <h6 class=\"col-form-label\" for=\"gst\">Gst Number :</h6>\r\n                    <input cInput id=\"gst\" formControlName=\"gst\" placeholder=\"gstNumber\" autocomplete=\"given-name\"\r\n                      required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.gst.touched) && f.gst.invalid, 'is-valid': f.discount.touched && f.gst.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['gst'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['gst'].errors.required\">Gst Number is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                  <c-form-group cCol md=\"6\">\r\n                    <h6 class=\"col-form-label\" for=\"discount\">Discount :</h6>\r\n                    <input cInput id=\"discount\" formControlName=\"discount\" placeholder=\"discount\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.discount.touched) && f.discount.invalid, 'is-valid': f.costPrice.touched && f.discount.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['discount'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['discount'].errors.required\">Discount is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                </c-row>\r\n                <c-row>\r\n                  <c-form-group cCol md=\"4\">\r\n                    <h6 class=\"col-form-label\" for=\"costPrice\">costPrice :</h6>\r\n                    <input cInput id=\"costPrice\" formControlName=\"costPrice\" placeholder=\"costPrice\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.costPrice.touched) && f.costPrice.invalid, 'is-valid': f.sellPrice.touched && f.costPrice.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['costPrice'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['costPrice'].errors.required\">costPrice is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n  \r\n                  <c-form-group cCol md=\"4\">\r\n                    <h6 class=\"col-form-label\" for=\"sellPrice\">sellPrice :</h6>\r\n                    <input cInput id=\"sellPrice\" formControlName=\"sellPrice\" placeholder=\"sellPrice\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.sellPrice.touched) && f.sellPrice.invalid, 'is-valid': f.threshold.touched && f.sellPrice.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['sellPrice'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['sellPrice'].errors.required\">sellPrice is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n  \r\n                  <c-form-group cCol md=\"4\">\r\n                    <h6 class=\"col-form-label\" for=\"threshold\">threshold :</h6>\r\n                    <input cInput id=\"threshold\" formControlName=\"threshold\" placeholder=\"threshold\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.threshold.touched) && f.threshold.invalid, 'is-valid': f.active.touched && f.threshold.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['threshold'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['threshold'].errors.required\">threshold is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                </c-row>\r\n                <c-row>\r\n  \r\n                  <c-form-group cCol md=\"4\">\r\n                    <h6 class=\"col-form-label\" for=\"active\">active :</h6>\r\n                    <input cInput id=\"active\" formControlName=\"active\" placeholder=\"active\"\r\n                      autocomplete=\"given-name\" required [autofocus]=\"true\"\r\n                      [ngClass]=\"{ 'is-invalid': (submitted || f.active.touched) && f.active.invalid, 'is-valid': f.active.touched && f.active.valid  }\" />\r\n                    <div *ngIf=\"submitted && f['active'].invalid\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f['active'].errors.required\">active is required</div>\r\n                    </div>\r\n                  </c-form-group>\r\n                </c-row>\r\n  \r\n                <c-form-group>\r\n                  <button cButton color=\"primary\" class=\"mfe-1\" type=\"submit\" (click)=\"onAddItems(simpleForm.value)\"\r\n                     >Submit</button>\r\n                  <button cButton color=\"success\" class=\"mfe-1\"  (click)=\"onValidate()\"\r\n                    >Validate</button>\r\n                  <button cButton color=\"danger\" type=\"reset\" (click)=\"onReset()\" [tabindex]=\"'0'\">Clear</button>\r\n                </c-form-group>\r\n              </form>\r\n            </c-col>\r\n          </ng-container>\r\n  \r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>";
      /***/
    },

    /***/
    "QFlq":
    /*!***********************************************************************!*\
      !*** ./src/app/views/inventory/addStocks/addStocks-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: AddStocksRoutingModule */

    /***/
    function QFlq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddStocksRoutingModule", function () {
        return AddStocksRoutingModule;
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


      var _addStocks_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./addStocks.component */
      "4u2K");

      var routes = [{
        path: '',
        component: _addStocks_component__WEBPACK_IMPORTED_MODULE_3__["AddStocksComponent"],
        data: {
          title: 'Add Stocks'
        }
      }];

      var AddStocksRoutingModule = function AddStocksRoutingModule() {
        _classCallCheck(this, AddStocksRoutingModule);
      };

      AddStocksRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddStocksRoutingModule);
      /***/
    },

    /***/
    "gOpx":
    /*!*******************************************************************!*\
      !*** ./src/app/views/inventory/addStocks/addStocks.component.css ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function gOpx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "::ng-deep .card-body {\r\n    flex: 1 1 auto;\r\n    min-height: 1px;\r\n    padding: 1.25rem;\r\n    margin-bottom: 280px;\r\n  }\r\n  \r\n  ::ng-deep .nav-tabs-boxed .tab-content {\r\n    padding: 0.75rem 1.25rem;\r\n    border: 1px solid;\r\n    border-radius: 0 0.25rem 0.25rem 0.25rem;\r\n    color: #768192;\r\n    background-color: #fff;\r\n    border-color: #d8dbe0;\r\n  }\r\n  \r\n  ::ng-deep .card-style {\r\n    border: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFN0b2Nrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoiYWRkU3RvY2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmNhcmQtYm9keSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDFweDtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyODBweDtcclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5uYXYtdGFicy1ib3hlZCAudGFiLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuMjVyZW0gMC4yNXJlbSAwLjI1cmVtO1xyXG4gICAgY29sb3I6ICM3NjgxOTI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZDhkYmUwO1xyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLmNhcmQtc3R5bGUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "mWZQ":
    /*!***********************************************************************!*\
      !*** ./src/app/views/inventory/addStocks/validation-forms.service.ts ***!
      \***********************************************************************/

    /*! exports provided: ValidationFormsService */

    /***/
    function mWZQ(module, __webpack_exports__, __webpack_require__) {
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
    },

    /***/
    "oKrj":
    /*!***************************************************************!*\
      !*** ./src/app/views/inventory/addStocks/addStocks.module.ts ***!
      \***************************************************************/

    /*! exports provided: AddStocksInitModule */

    /***/
    function oKrj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddStocksInitModule", function () {
        return AddStocksInitModule;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _pascalhonegger_ng_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @pascalhonegger/ng-datatable */
      "j9sh");
      /* harmony import */


      var _addStocks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./addStocks.component */
      "4u2K");
      /* harmony import */


      var _addStocks_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./addStocks-routing.module */
      "QFlq");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _forms_validation_forms_validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../forms/validation-forms/validation-forms-routing.module */
      "jloh");

      var AddStocksInitModule = function AddStocksInitModule() {
        _classCallCheck(this, AddStocksInitModule);
      };

      AddStocksInitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _addStocks_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddStocksRoutingModule"], _pascalhonegger_ng_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["CardModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["GridModule"], _pascalhonegger_ng_datatable__WEBPACK_IMPORTED_MODULE_4__["DataTableModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["FormModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _addStocks_routing_module__WEBPACK_IMPORTED_MODULE_6__["AddStocksRoutingModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["SwitchModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["TabsetModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _forms_validation_forms_validation_forms_routing_module__WEBPACK_IMPORTED_MODULE_11__["ValidationFormsRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["GridModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["CardModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["BadgeModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_7__["FormModule"]],
        declarations: [_addStocks_component__WEBPACK_IMPORTED_MODULE_5__["AddStocksComponent"]]
      })], AddStocksInitModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-inventory-addStocks-addStocks-module-es5.js.map