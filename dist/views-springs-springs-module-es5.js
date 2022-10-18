(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-springs-springs-module"], {
    /***/
    "D0bp":
    /*!*************************************************!*\
      !*** ./src/app/views/springs/springs.module.ts ***!
      \*************************************************/

    /*! exports provided: SpringsModule */

    /***/
    function D0bp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpringsModule", function () {
        return SpringsModule;
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


      var _springs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./springs-routing.module */
      "bNEq");
      /* harmony import */


      var _springs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./springs.component */
      "uYAb");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var SpringsModule = function SpringsModule() {
        _classCallCheck(this, SpringsModule);
      };

      SpringsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _springs_routing_module__WEBPACK_IMPORTED_MODULE_5__["SpringsRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["SwitchModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["ModalModule"]],
        declarations: [_springs_component__WEBPACK_IMPORTED_MODULE_6__["SpringsComponent"]]
      })], SpringsModule);
      /***/
    },

    /***/
    "Kj2z":
    /*!*****************************************************!*\
      !*** ./src/app/views/springs/springs.component.css ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function Kj2z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      /***/
    },

    /***/
    "NsEF":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/springs/springs.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function NsEF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n  <c-card>\r\n  <c-card-header>\r\n    \r\n    <c-card-header-actions style=\"height: 21px;\" >\r\n      <div class=\"float-right\">\r\n        <a style=\"color: #FFFFFF;\" class=\"btn btn-primary\" [routerLink]=\"['/machines']\"><i class=\"fa fa-arrow-left\"></i> Go Back</a>\r\n      </div>\r\n    </c-card-header-actions>\r\n  </c-card-header>\r\n  <c-card-body>\r\n<c-row>  \r\n   <c-col col=\"12\">\r\n      \r\n\r\n      <div class=\"input-group\" style=\"float: left;\">      \r\n         <div class=\"input-group-prepend\">\r\n           <span class=\"input-group-text\"><i class=\"cil-search\"></i></span>\r\n         </div>\r\n         <input cInput\r\n           [(ngModel)]=\"filterQuery\"\r\n           placeholder=\"Search here\"\r\n         />\r\n         </div>\r\n       <br>\r\n         <div style=\"float: right;\">\r\n     <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\"\r\n                 [maxSize]=\"6\"\r\n                 previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n     </pagination>\r\n   </div>\r\n    </c-col>\r\n    </c-row>\r\n    <div *ngIf=\"showDSialougeMessage\">\r\n      <h2  class=\"centermid\" style=\"color:#d15629; font-weight:1000; text-align: center; \">Springs data not exist</h2>\r\n    </div>\r\n<div *ngFor=\"let rowSprings of springs; let i = index\" class=\"fade-in\">\r\n\r\n  \r\n<c-row>  \r\n  <c-col  *ngFor=\"let item of rowSprings.springs; let j = index\" sm=\"6\" md=\"4\" style=\" max-width: 72.333333%;\">\r\n    <c-card>\r\n      <c-card-header style=\"background-color: rgba(193, 244, 242, 0.793);\">\r\n        <a href=\"#\" class=\"btn btn\" [ngStyle]=\"{'background-color': item.availability>item.threshold ? '#BCDA6E' : 'red'}\" style=\"border-radius: 0px;font-size: 12px;font-weight: 900;color: #000;\">{{item.springName}}</a> \r\n        <c-card-header-actions style=\"height: 21px;\" >\r\n          <c-switch color=\"info\" size=\"sm\" checked labelOn=\"On\" labelOff=\"Off\"></c-switch>\r\n        </c-card-header-actions>\r\n      </c-card-header>\r\n      <c-card-body>\r\n         <div class=\"iq-card-body p-0\" style=\"    background-color: #fff;\r\n         border-radius: 0px;\r\n         box-shadow: 1px 3px 19px -3px;\">\r\n        \r\n            <div class=\"p-1 bg-primary mb-3 rounded position-relative\" style=\"border-radius: 0px !important;\">\r\n              \r\n               <div class=\"d-flex align-items-center justify-content-between\">\r\n                  <div class=\"icon iq-icon-box\" data-wow-delay=\"0.2s\" style=\" width: 35px;\r\n                  height: 35px;\r\n                  margin-top: -26px;\r\n                  margin-left: 1px;\r\n                  line-height: 68px;\r\n                  \r\n              \">\r\n                     <img [src]=\"'data:image/jpg;base64,'+item.base64\" width=\"100%\" style=\"border-radius: 50%;\">\r\n                  </div>\r\n                  <div class=\"ml-2\">\r\n                     <a (click)=\"springPop(item.sNo, item.springName, item.availability, item.itemFromStockId, item.name);infoModal.show();\" class=\"d-flex align-items-center mr-4\">\r\n                        <span class=\"bg-white   mr-2\"></span>\r\n                        <ul>\r\n                           <li> <p class=\"text-white mb-0\" style=\"font-size: 12px; font-weight: 700;text-align: right;\">Spring #{{item.sNo}}</p></li>\r\n                        </ul>\r\n                     </a>\r\n                    \r\n                  </div>\r\n               </div>\r\n            </div>\r\n            <div class=\"d-flex align-items-center pb-3\">\r\n               <div class=\"col-lg-12\">\r\n                  <div class=\"ml-2\">\r\n                     <h5 class=\"mb-1\" style=\"font-size: 12px; font-weight: 800;\">{{item.name}}</h5>\r\n                     <p style=\"    margin-bottom: 0px;\r\n                     font-size: 9px;\">Quantity / Points</p>\r\n                     <span class=\"h6 text-dark mb-0 counter d-inline-block w-100\" style=\"font-weight: 800;\">{{item.availability}}</span>\r\n                     <p class=\"mb-0 text-secondary line-height\"><span style=\"color: #a09e9e;font-size: 9px;\"> Last Transaction On:</span>  </p>\r\n                     <p class=\"mb-0 text-secondary line-height\"><span style=\"color: #000;font-size: 10px;\"> 10-02-2021 09:30PM </span>  </p>\r\n                  </div>\r\n               </div>\r\n               \r\n               \r\n            </div>\r\n            <div class=\"edits\" style=\"    margin-top: -45px;\r\n                   position: absolute;\r\n                   right: -32px;\">\r\n                      <div class=\"dropdown-container\" tabindex=\"-1\">\r\n                         <div class=\"three-dots\"></div>\r\n                         <div class=\"dropdown\">\r\n                           <a  (click)=\"springPop(item.sNo, item.springName, item.availability, item.itemFromStockId, item.name);infoModal.show()\" style=\"text-align:left; color: #000;cursor: pointer;\"><div>&nbsp;&nbsp;<i class=\"fa fa-pencil\" aria-hidden=\"true\"></i> Edit</div></a>\r\n                           <a  href=\"#\"  style=\"text-align:left; color: #000;cursor: pointer;\"><div>&nbsp;&nbsp;<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View</div></a>\r\n                           <a href=\"#\" style=\"text-align:left; color: #000;\"><div>&nbsp;&nbsp;<i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</div></a>\r\n                         </div>\r\n                       </div> \r\n                   </div>\r\n         </div>\r\n      </c-card-body>\r\n    </c-card>\r\n  </c-col>\r\n    \r\n</c-row>\r\n\r\n\r\n<c-modal #infoModal color=\"info\">\r\n   <ng-template #modalHeader>\r\n     <h4 class=\"c-modal-title\">Update stock / points  into spring {{springName}}</h4>\r\n   </ng-template>\r\n   <ng-template #modalBody>\r\n    <c-row>\r\n      <c-col col=\"6\">\r\n        <p>Item </p>\r\n        <select cSelect [(ngModel)]=\"selItem\">\r\n          <option *ngFor=\"let opt of itemNames\" [value]=\"opt.itemFromStockId\">{{opt.itemName}}-Exp: {{opt.expireDate}}</option>\r\n        </select>\r\n      </c-col>\r\n    </c-row>  \r\n    <br>\r\n    <c-row>\r\n      <c-col col=\"6\">\r\n        <p>Stock / Points {{availability}} </p>\r\n        <p>Current loaded quantity</p>\r\n        <input type=\"number\" [(ngModel)]=\"curLoadedQty\" (change)=\"updateQty()\">\r\n      </c-col>\r\n    </c-row>\r\n   </ng-template>\r\n   <ng-template #modalFooter>\r\n     <button cButton color=\"secondary\" (click)=\"infoModal.hide()\">Close</button>\r\n     <button cButton color=\"info\" (click)=\"updateSpring();infoModal.hide();\" >Save changes</button>\r\n   </ng-template>\r\n </c-modal>\r\n \r\n</div>\r\n</c-card-body>\r\n</c-card>";
      /***/
    },

    /***/
    "bNEq":
    /*!*********************************************************!*\
      !*** ./src/app/views/springs/springs-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: SpringsRoutingModule */

    /***/
    function bNEq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpringsRoutingModule", function () {
        return SpringsRoutingModule;
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


      var _springs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./springs.component */
      "uYAb");

      var routes = [{
        path: '',
        component: _springs_component__WEBPACK_IMPORTED_MODULE_3__["SpringsComponent"],
        data: {
          title: 'Springs'
        }
      }];

      var SpringsRoutingModule = function SpringsRoutingModule() {
        _classCallCheck(this, SpringsRoutingModule);
      };

      SpringsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SpringsRoutingModule);
      /***/
    },

    /***/
    "uYAb":
    /*!****************************************************!*\
      !*** ./src/app/views/springs/springs.component.ts ***!
      \****************************************************/

    /*! exports provided: SpringsComponent */

    /***/
    function uYAb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpringsComponent", function () {
        return SpringsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_springs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./springs.component.html */
      "NsEF");
      /* harmony import */


      var _springs_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./springs.component.css */
      "Kj2z");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/data.service */
      "AwSQ");
      /* harmony import */


      var _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../Common/common-data.service */
      "4qVP");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-spinner */
      "7g+E");

      var SpringsComponent = /*#__PURE__*/function () {
        function SpringsComponent(service, commonData, route, spinner) {
          _classCallCheck(this, SpringsComponent);

          this.service = service;
          this.commonData = commonData;
          this.route = route;
          this.spinner = spinner;
          this.collapsed = false;
          this.togglerIcons = ['cil-chevron-top', 'cil-chevron-bottom'];
          this.itemNames = [];
          this.filterQuery = '';
          this.showDSialougeMessage = false;
          this.totalItems = 64;
          this.currentPage = 4;
          this.smallnumPages = 10;
          this.maxSize = 5;
          this.bigTotalItems = 675;
          this.bigCurrentPage = 1;
          this.numPages = 0;
          this.currentPager = 4;
          this.loremText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';
          this.springs = [];
          this.levels = [];
          this.curLoadedQty = 0;
        }

        _createClass(SpringsComponent, [{
          key: "toggleCollapse",
          value: function toggleCollapse() {
            this.collapsed = !this.collapsed;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.spinner.show();
            this.route.queryParams.subscribe(function (params) {
              console.log(params);
              _this.machineId = params.machineId;
              console.log(_this.machineId);
            });
            this.itemNames = this.commonData.itemNames;
            debugger;
            this.service.getSprings(this.commonData.merchantId, this.machineId).subscribe(function (resp) {
              _this.showDSialougeMessage = false;
              console.log("getSprings Reponse:::" + JSON.stringify(resp));

              if (resp && resp.statusCode == 200) {
                console.log("Springs...............................");
                _this.springs = resp.rowSprings;

                _this.spinner.hide();
              } else {
                _this.showDSialougeMessage = true;
              }
            });
          }
        }, {
          key: "setPage",
          value: function setPage(pageNo) {
            this.currentPage = pageNo;
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            console.log('Page changed to: ' + event.page);
            console.log('Number items per page: ' + event.itemsPerPage);
          }
        }, {
          key: "currentIcon",
          get: function get() {
            return this.collapsed ? this.togglerIcons[1] : this.togglerIcons[0];
          }
        }, {
          key: "springPop",
          value: function springPop(sNo, sp, qty, stkid, name) {
            debugger;
            debugger;
            this.sNo = sNo;
            this.springName = sp;
            this.availability = qty;
            this.tempAvailability = qty;
            this.itemFromStockId = stkid;
            this.selItem = this.itemNames.find(function (i) {
              return i.itemName == name;
            }).itemFromStockId;
          }
        }, {
          key: "updateQty",
          value: function updateQty() {
            this.availability = this.tempAvailability + this.curLoadedQty;
          }
        }, {
          key: "updateSpring",
          value: function updateSpring() {
            var _this2 = this;

            var spr = {
              "sNo": this.sNo,
              "springName": this.springName,
              "curLoadedQty": this.curLoadedQty,
              "availability": this.availability,
              "machineId": this.machineId,
              "itemFromStockId": this.selItem
            };
            this.service.loadItemsOfSpring(spr).subscribe(function (resp) {
              debugger;
              console.log("loadItemsOfSpring Reponse:::" + JSON.stringify(resp));

              if (resp && resp.status == 200) {
                _this2.springs.forEach(function (sp) {
                  console.log(">>>>>>>>>" + JSON.stringify(sp));
                  var spr = sp.springs.find(function (s) {
                    return s.springName == _this2.springName;
                  });

                  if (spr) {
                    spr.availability = _this2.availability;

                    var itm = _this2.itemNames.find(function (i) {
                      return i.itemFromStockId == _this2.selItem;
                    });

                    spr.name = itm.itemName;
                    spr.base64 = itm.icon;
                  }
                });
              }
            });
          }
        }]);

        return SpringsComponent;
      }();

      SpringsComponent.ctorParameters = function () {
        return [{
          type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]
        }];
      };

      SpringsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_springs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_springs_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])], SpringsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-springs-springs-module-es5.js.map