(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-machinetransactions-transactions-module"], {
    /***/
    "M0Ma":
    /*!**********************************************************************!*\
      !*** ./src/app/views/machinetransactions/transactions.component.css ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function M0Ma(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      /***/
    },

    /***/
    "N9CK":
    /*!**************************************************************************!*\
      !*** ./src/app/views/machinetransactions/transactions-routing.module.ts ***!
      \**************************************************************************/

    /*! exports provided: TransactionsRoutingModule */

    /***/
    function N9CK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionsRoutingModule", function () {
        return TransactionsRoutingModule;
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


      var _transactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./transactions.component */
      "X1sM");

      var routes = [{
        path: '',
        component: _transactions_component__WEBPACK_IMPORTED_MODULE_3__["TransactionsComponent"],
        data: {
          title: 'Transactions'
        }
      }];

      var TransactionsRoutingModule = function TransactionsRoutingModule() {
        _classCallCheck(this, TransactionsRoutingModule);
      };

      TransactionsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TransactionsRoutingModule);
      /***/
    },

    /***/
    "X1sM":
    /*!*********************************************************************!*\
      !*** ./src/app/views/machinetransactions/transactions.component.ts ***!
      \*********************************************************************/

    /*! exports provided: TransactionsComponent */

    /***/
    function X1sM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function () {
        return TransactionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./transactions.component.html */
      "xh02");
      /* harmony import */


      var _transactions_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./transactions.component.css */
      "M0Ma");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _Common_common_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../Common/common-data.service */
      "4qVP");
      /* harmony import */


      var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/data.service */
      "AwSQ");

      var TransactionsComponent = /*#__PURE__*/function () {
        function TransactionsComponent(service, commonData) {
          _classCallCheck(this, TransactionsComponent);

          this.service = service;
          this.commonData = commonData;
          this.currentPage = 1;
          this.totalRows = 0;
        }

        _createClass(TransactionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.service.totalMerchantMachineTransactions(this.commonData.merchantId).subscribe(function (resp) {
              console.log("totalMerchantTransactions :" + resp);
              _this.totalRows = resp;

              _this.getTransactions();
            });
          }
        }, {
          key: "refreshPage",
          value: function refreshPage() {
            this.page = 1;
            this.currentPage = this.page;
            this.getTransactions();
          }
        }, {
          key: "getTransactions",
          value: function getTransactions() {
            var _this2 = this;

            if (this.totalRows > 0) {
              this.service.getMerchantMachineTransactions(this.commonData.merchantId, 15, this.currentPage).subscribe(function (resp) {
                console.log("getMerchantTransactions Reponse:::" + JSON.stringify(resp));

                if (resp) {
                  console.log("Txns...............................");
                  _this2.tableData = resp;
                  _this2.returnedArray = _this2.tableData.slice(0, 8);
                }
              });
            }
          }
        }, {
          key: "pageChanged",
          value: function pageChanged(event) {
            var startItem = (event.page - 1) * event.itemsPerPage;
            var endItem = event.page * event.itemsPerPage;
            this.page = event.page;
            this.currentPage = this.page;
            this.returnedArray = this.tableData.slice(startItem, endItem);
            this.getTransactions();
          }
        }, {
          key: "getBadge",
          value: function getBadge(status) {
            switch (status) {
              case 'Active':
                return 'success';

              case 'Inactive':
                return 'secondary';

              case 'Payment Success':
                return 'warning';

              case 'Banned':
                return 'danger';

              default:
                return 'primary';
            }
          }
        }]);

        return TransactionsComponent;
      }();

      TransactionsComponent.ctorParameters = function () {
        return [{
          type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _Common_common_data_service__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"]
        }];
      };

      TransactionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_transactions_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_transactions_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_4__["CommonDataService"]])], TransactionsComponent);
      /***/
    },

    /***/
    "svM0":
    /*!******************************************************************!*\
      !*** ./src/app/views/machinetransactions/transactions.module.ts ***!
      \******************************************************************/

    /*! exports provided: TransactionsModule */

    /***/
    function svM0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionsModule", function () {
        return TransactionsModule;
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


      var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./transactions-routing.module */
      "N9CK");
      /* harmony import */


      var _transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./transactions.component */
      "X1sM");
      /* harmony import */


      var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-bootstrap/pagination */
      "6No5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var TransactionsModule = function TransactionsModule() {
        _classCallCheck(this, TransactionsModule);
      };

      TransactionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _transactions_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionsRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["SwitchModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]],
        declarations: [_transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"]]
      })], TransactionsModule);
      /***/
    },

    /***/
    "xh02":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/machinetransactions/transactions.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xh02(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<c-row>\r\n   <c-col lg=\"12\">\r\n     <c-card>\r\n       <c-card-header>\r\n         Transactions\r\n         <button (click)=\"refreshPage()\"><i class=\"fa fa-refresh\"></i></button>\r\n       </c-card-header>\r\n       <c-card-body>\r\n         <table\r\n           class=\"table table-responsive-sm table-bordered table-striped table-sm\"\r\n         >\r\n           <colgroup>\r\n             <col class=\"column-1\" />\r\n             <col class=\"column-2\" />\r\n             <col class=\"column-3\" />\r\n             <col class=\"column-4\" />\r\n             <col class=\"column-5\" />\r\n           </colgroup>\r\n           <thead>\r\n             <tr>\r\n               <th scope=\"col\">Txnid</th>\r\n               \r\n               <th>Date</th>\r\n               <th>Item</th>\r\n               <th>Quantity</th>\r\n               <th>PosId</th>\r\n               <th>Spring</th>\r\n               \r\n               <th>Sell Price</th>\r\n               <th>OrderId</th>\r\n               <th>Status</th>\r\n               <th>Transaction Amount</th>\r\n               <th>Payment Mode</th>\r\n             </tr>\r\n           </thead>\r\n           <tbody>\r\n             <tr *ngFor=\"let tx of returnedArray\">\r\n               <th scope=\"row\">{{ tx.txnid }}</th>\r\n              \r\n               <td>{{ tx.txnDateStr }}</td>\r\n               <td>{{ tx.name }}</td>\r\n               <td>{{ tx.quantity }}</td>\r\n               <td>{{ tx.posId }}</td>\r\n               <td>{{ tx.springNo }}</td>\r\n               <td>{{ tx.sellPrice }}</td>\r\n               <td>{{ tx.orderId }}</td>\r\n               <td>{{ tx.status }}</td>\r\n               <td>{{ tx.txnAmount }}</td>\r\n               <td>{{ tx.txnMode }}</td>\r\n               \r\n             </tr>\r\n           </tbody>\r\n         </table>\r\n         <nav>\r\n           <pagination\r\n             [totalItems]=\"totalRows\"\r\n             (pageChanged)=\"pageChanged($event)\"\r\n             [itemsPerPage]=\"15\"\r\n             [(ngModel)]=\"currentPage\"\r\n             [maxSize]=\"4\"\r\n             [rotate]=\"true\"\r\n           ></pagination>\r\n         </nav>\r\n       </c-card-body>\r\n     </c-card>\r\n   </c-col>\r\n </c-row>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-machinetransactions-transactions-module-es5.js.map