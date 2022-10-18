(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-machines-machines-module"], {
    /***/
    "BS45":
    /*!***************************************************!*\
      !*** ./src/app/views/machines/machines.module.ts ***!
      \***************************************************/

    /*! exports provided: MachinesModule */

    /***/
    function BS45(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MachinesModule", function () {
        return MachinesModule;
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


      var _machines_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./machines-routing.module */
      "DIQ3");
      /* harmony import */


      var _machines_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./machines.component */
      "W24q");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var MachinesModule = function MachinesModule() {
        _classCallCheck(this, MachinesModule);
      };

      MachinesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _machines_routing_module__WEBPACK_IMPORTED_MODULE_5__["MachinesRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["SwitchModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
        declarations: [_machines_component__WEBPACK_IMPORTED_MODULE_6__["MachinesComponent"]]
      })], MachinesModule);
      /***/
    },

    /***/
    "DIQ3":
    /*!***********************************************************!*\
      !*** ./src/app/views/machines/machines-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: MachinesRoutingModule */

    /***/
    function DIQ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MachinesRoutingModule", function () {
        return MachinesRoutingModule;
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


      var _machines_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./machines.component */
      "W24q");

      var routes = [{
        path: '',
        component: _machines_component__WEBPACK_IMPORTED_MODULE_3__["MachinesComponent"],
        data: {
          title: 'Machines'
        }
      }];

      var MachinesRoutingModule = function MachinesRoutingModule() {
        _classCallCheck(this, MachinesRoutingModule);
      };

      MachinesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MachinesRoutingModule);
      /***/
    },

    /***/
    "W24q":
    /*!******************************************************!*\
      !*** ./src/app/views/machines/machines.component.ts ***!
      \******************************************************/

    /*! exports provided: MachinesComponent */

    /***/
    function W24q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MachinesComponent", function () {
        return MachinesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_machines_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./machines.component.html */
      "uugV");
      /* harmony import */


      var _machines_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./machines.component.css */
      "m0PL");
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

      var MachinesComponent = /*#__PURE__*/function () {
        function MachinesComponent(service, commonData, router) {
          _classCallCheck(this, MachinesComponent);

          this.service = service;
          this.commonData = commonData;
          this.router = router;
          this.collapsed = false;
          this.togglerIcons = ['cil-chevron-top', 'cil-chevron-bottom'];
          this.filterQuery = '';
          this.totalItems = 64;
          this.currentPage = 4;
          this.smallnumPages = 10;
          this.maxSize = 5;
          this.bigTotalItems = 675;
          this.bigCurrentPage = 1;
          this.numPages = 0;
          this.currentPager = 4;
          this.loremText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.';
          this.machines = [];
          this.itemNames = [];
          this.levels = [];
        }

        _createClass(MachinesComponent, [{
          key: "toggleCollapse",
          value: function toggleCollapse() {
            this.collapsed = !this.collapsed;
          }
        }, {
          key: "onChange",
          value: function onChange(event) {
            console.log("getMachines Reponse:::" + event);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.service.getMachines(this.commonData.merchantId).subscribe(function (resp) {
              console.log("getMachines Reponse:::" + JSON.stringify(resp));

              if (resp && resp.statusCode == 200) {
                console.log("Machines...............................");
                _this.machines = resp.rowMachines;
                _this.itemNames = resp.itemNames;
                _this.commonData.itemNames = resp.itemNames;
                _this.levels = resp.levels;
              }
            });
          }
        }, {
          key: "isConfigEnabled",
          value: function isConfigEnabled(machineId, config) {
            if (this.machines[0].machines.find(function (m) {
              return m.machineId == machineId;
            })) {
              var configs = this.machines[0].machines.find(function (m) {
                return m.machineId == machineId;
              }).configs;
              return configs.indexOf(config) != -1;
            } else return false;
          }
        }, {
          key: "getLevel",
          value: function getLevel(id) {
            var lvl = 'NA';

            if (this.levels) {
              var l = this.levels.find(function (l) {
                return l.id == id;
              });
              if (l) lvl = l.level;
            }

            return lvl;
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
          key: "navigateToNewMac",
          value: function navigateToNewMac() {
            this.router.navigate(['/machines/configuration'], {
              queryParams: {}
            }); //this.router.navigate(['businesstechnical'],{ queryParams:{} });
          }
        }, {
          key: "navigateToSpring",
          value: function navigateToSpring(machineId) {
            this.router.navigate(['/machines/springs'], {
              queryParams: {
                machineId: machineId
              }
            });
          }
        }, {
          key: "navigateToTransactions",
          value: function navigateToTransactions(machineId) {
            this.router.navigate(['/transactions'], {
              queryParams: {
                machineId: machineId
              }
            });
          }
        }, {
          key: "navigateToConfiguration",
          value: function navigateToConfiguration(machineId) {
            this.router.navigate(['/machines/configuration'], {
              queryParams: {
                machineId: machineId
              }
            }); //this.router.navigate(['businesstechnical'],{ queryParams: {machineId} });
          }
        }]);

        return MachinesComponent;
      }();

      MachinesComponent.ctorParameters = function () {
        return [{
          type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
        }, {
          type: _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      };

      MachinesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_machines_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_machines_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])], MachinesComponent);
      /***/
    },

    /***/
    "m0PL":
    /*!*******************************************************!*\
      !*** ./src/app/views/machines/machines.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function m0PL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      /***/
    },

    /***/
    "uugV":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/machines/machines.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function uugV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<c-row>\r\n   <c-col col=\"12\">\r\n   \r\n      <div class=\"input-group\" style=\"float: left;\">\r\n        <a (click)=\"navigateToNewMac()\" class=\"btn btn\" style=\"background-color: #c7eccf; color:blue; border-radius: 0px;font-size: 14px;font-weight: 900;\">New Machine</a> \r\n         <div class=\"input-group-prepend\">\r\n           <span class=\"input-group-text\"><i class=\"cil-search\"></i></span>\r\n         </div>\r\n         <input cInput\r\n \r\n           [(ngModel)]=\"filterQuery\"\r\n           placeholder=\"Search here\"\r\n         />\r\n         </div>\r\n       <br>\r\n         <div style=\"float: right;\">\r\n     <pagination [boundaryLinks]=\"true\" [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" class=\"pagination-sm\"\r\n                 [maxSize]=\"6\"\r\n                 previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n     </pagination>\r\n   </div>\r\n    </c-col>\r\n    </c-row>\r\n<div *ngFor=\"let rowMachines of machines; let i = index\" class=\"fade-in\">\r\n<c-row>\r\n  \r\n  <c-col  *ngFor=\"let item of rowMachines.machines; let j = index\" sm=\"6\" md=\"4\">\r\n    <c-card>\r\n      <c-card-header>\r\n        <a (click)=\"navigateToSpring(item.machineId)\" class=\"btn btn\" style=\"background-color: #BCDA6E; border-radius: 0px;font-size: 12px;font-weight: 900;\">{{item.machineId}}</a> \r\n        <c-card-header-actions style=\"height: 21px;\" >\r\n          <c-switch (change)=\"onChange($event)\" color=\"info\" size=\"sm\" checked labelOn=\"On\" labelOff=\"Off\"></c-switch>\r\n        </c-card-header-actions>\r\n      </c-card-header>\r\n      <c-card-body>\r\n        <div class=\"iq-card iq-card-block iq-card-stretch iq-card-height\">\r\n          <div class=\"iq-card-body \">\r\n             \r\n             <div class=\"d-flex justify-content-between align-items-center\">\r\n                <div class=\"value-box\">\r\n                  \r\n                   <span class=\"bg-danger dots\"></span>\r\n                   <p class=\"mb-0 text-secondary line-height\"><span style=\"color: #000;font-size: 10px;\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{item.address}}</span>  </p>\r\n                   <p class=\"mb-0 text-secondary line-height\"><span style=\"color: #000;font-size: 10px;\"><i class=\"fa fa-level-up\" aria-hidden=\"true\"></i> {{getLevel(item.level)}}</span>  </p>\r\n                   <p class=\"mb-0 text-secondary line-height\"><span style=\"color: #000;font-size: 10px;\"><i class=\"fa fa-thermometer-empty\" aria-hidden=\"true\"></i>  43°C</span>  </p>                   \r\n                   <p class=\"mb-0 text-secondary line-height\"><span style=\"color: #000;font-size: 10px;\">  </span>  </p>\r\n                </div>\r\n                <div class=\"iq-iconbox iq-bg-danger\">\r\n                  <img [src]=\"'data:image/jpg;base64,'+item.icon\"  width=\"50px\" height=\"50px\">\r\n                </div>\r\n                \r\n             </div>\r\n                <div class=\"mt-2\">\r\n                   \r\n                   <a class=\"icon\"><i class=\"fa fa-wifi\" aria-hidden=\"true\" [ngClass]=\"isConfigEnabled(item.machineId,'WifiModule') ? 'config-enable' : 'config-disable'\"\r\n                      title=\"Wifi Module\"></i></a>\r\n                   <a class=\"icon\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"  [ngClass]=\"isConfigEnabled(item.machineId,'GSM_GPRS_GPS_Module') ? 'config-enable' : 'config-disable'\"\r\n                     title=\"GSM + GPRS + GPS Module kit\"></i></a>\r\n                   <a class=\"icon\"><i class=\"fa fa-mobile\" aria-hidden=\"true\" [ngClass]=\"isConfigEnabled(item.machineId,'RFID') ? 'config-enable' : 'config-disable'\"\r\n                     title=\"RFID\"></i></a>\r\n                  \r\n                   <a class=\"icon\"><i class=\"fa fa-bluetooth\" aria-hidden=\"true\" [ngClass]=\"isConfigEnabled(item.machineId,'BluetoothModule') ? 'config-enable' : 'config-disable'\"\r\n                     title=\"Bluetooth Module\"></i></a>\r\n                   <a class=\"icon\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\" [ngClass]=\"isConfigEnabled(item.machineId,'UPI') ? 'config-enable' : 'config-disable'\"\r\n                     title=\"UPI\"></i></a>\r\n                  \r\n                   <a class=\"icon\"><i class=\"fa fa-credit-card\" [ngClass]=\"isConfigEnabled(item.machineId,'CardReader') ? 'config-enable' : 'config-disable'\"\r\n                     title=\"Card reader\"></i></a>\r\n                   <a class=\"icon\"><i class=\"fa fa-circle-o\" aria-hidden=\"true\" [ngClass]=\"isConfigEnabled(item.machineId,'Coin') ? 'config-enable' : 'config-disable'\"\r\n                     title=\"Coin\"></i></a>\r\n                  \r\n                   <a class=\"icon\"><i class=\"fa fa-money\" aria-hidden=\"true\" [ngClass]=\"isConfigEnabled(item.machineId,'Cash') ? 'config-enable' : 'config-disable'\"\r\n                     title=\"Cash\"></i></a>\r\n                   <p class=\"mb-0 text-secondary line-height\" style=\"max-width: 174px;    margin-top: 0px;\"><span style=\"color: #000;font-size: 10px;\"> Last Transaction:1-02-2021 09:30PM</span>  </p>\r\n                   <!--stars-->\r\n                   <p class=\"mb-0 text-secondary line-height\" style=\"max-width: 174px;    margin-top: 0px;\"><span>\r\n                      <i class=\"fa fa-star\" aria-hidden=\"true\" style=\"color: rgb(231, 171, 59);font-size: 10px;\"></i></span>\r\n                      <i class=\"fa fa-star\" aria-hidden=\"true\" style=\"color: rgb(231, 171, 59);font-size: 10px;\"></i>\r\n                      <i class=\"fa fa-star\" aria-hidden=\"true\" style=\"color: rgb(231, 171, 59);font-size: 10px;\"></i>\r\n                      <i class=\"fa fa-star-half-o\" aria-hidden=\"true\" style=\"color: rgb(231, 171, 59);font-size: 10px;\"></i>\r\n                      \r\n                      <i class=\"fa fa-star-o\" aria-hidden=\"true\" style=\"color: rgb(231, 171, 59);font-size: 10px;\"></i> \r\n                      <i class=\"fa fa-commenting-o\" aria-hidden=\"true\" style=\"color: #282828;font-size: 10px;\"> 20</i> \r\n                      <i class=\"fa fa-money\" aria-hidden=\"true\" style=\"color: #282828;font-size: 10px;\"> 200</i>\r\n                      \r\n                      <i class=\"fa fa\" aria-hidden=\"true\" style=\"color: #282828;font-size: 10px;\"><span style=\"font-size: 11px;\">₹</span> 2000</i>\r\n                   \r\n                   </p>\r\n                   <!--stars end-->\r\n                   <div class=\"edits\" style=\"    margin-top: -45px;\r\n                   position: absolute;\r\n                   right: -45px;\">\r\n                      <div class=\"dropdown-container\" tabindex=\"-1\">\r\n                         <div class=\"three-dots\"></div>\r\n                         <div class=\"dropdown\">\r\n                           <a  (click)=\"navigateToSpring(item.machineId)\"  style=\"text-align:left; color: #000;cursor: pointer;\"><div>&nbsp;&nbsp;<i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Springs</div></a>\r\n                           <a (click)=\"navigateToConfiguration(item.machineId)\"  style=\"text-align:left; color: #000;cursor: pointer;\"><div>&nbsp;&nbsp;<i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Configure</div></a>\r\n                           <a  (click)=\"navigateToTransactions(item.machineId)\"  style=\"text-align:left; color: #000;cursor: pointer;\"><div>&nbsp;&nbsp;<i class=\"fa fa-eye\" aria-hidden=\"true\"></i> Transactions</div></a>\r\n                           <a href=\"#\" style=\"text-align:left; color: #000;\"><div>&nbsp;&nbsp;<i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Delete</div></a>\r\n                         </div>\r\n                       </div> \r\n                   </div>\r\n                   \r\n             </div>\r\n             \r\n          </div>\r\n       </div>\r\n      </c-card-body>\r\n    </c-card>\r\n  </c-col>\r\n    \r\n</c-row>\r\n</div>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-machines-machines-module-es5.js.map