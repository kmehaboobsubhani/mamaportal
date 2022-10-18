(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chartjs-chartjs-module"], {
    /***/
    "BMe/":
    /*!****************************************************************!*\
      !*** ./node_modules/@coreui/chartjs/dist/js/coreui-chartjs.js ***!
      \****************************************************************/

    /*! no static exports found */

    /***/
    function BMe(module, exports, __webpack_require__) {
      /*!
        * CoreUI Plugins - Chart.js for CoreUI 3 v2.0.0 (https://coreui.io)
        * Copyright 2020 creativeLabs Łukasz Holeczek
        * Licensed under MIT (https://coreui.io/license/)
        */
      (function (global, factory) {
        true ? module.exports = factory(__webpack_require__(
        /*! chart.js */
        "MO+k")) : undefined;
      })(this, function (chart_js) {
        'use strict';

        chart_js = chart_js && chart_js.hasOwnProperty('default') ? chart_js['default'] : chart_js;
        /**
         * --------------------------------------------------------------------------
         * Custom Tooltips for Chart.js (vv2.0.0-beta.0): custom-tooltips.js
         * Licensed under MIT (https://coreui.io/plugins/chart.js)
         * --------------------------------------------------------------------------
         */

        function customTooltips(tooltipModel) {
          var _this = this; // Add unique id if not exist


          var _setCanvasId = function _setCanvasId() {
            var _idMaker = function _idMaker() {
              var _hex = 16;
              var _multiplier = 0x10000;
              return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
            };

            var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

            _this._chart.canvas.id = _canvasId;
            return _canvasId;
          };

          var ClassName = {
            ABOVE: 'c-above',
            BELOW: 'c-below',
            CHARTJS_TOOLTIP: 'c-chartjs-tooltip',
            NO_TRANSFORM: 'c-no-transform',
            TOOLTIP_BODY: 'c-tooltip-body',
            TOOLTIP_BODY_ITEM: 'c-tooltip-body-item',
            TOOLTIP_BODY_ITEM_COLOR: 'c-tooltip-body-item-color',
            TOOLTIP_BODY_ITEM_LABEL: 'c-tooltip-body-item-label',
            TOOLTIP_BODY_ITEM_VALUE: 'c-tooltip-body-item-value',
            TOOLTIP_HEADER: 'c-tooltip-header',
            TOOLTIP_HEADER_ITEM: 'c-tooltip-header-item'
          };
          var Selector = {
            DIV: 'div',
            SPAN: 'span',
            TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
          };
          var tooltip = document.getElementById(Selector.TOOLTIP);

          if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = Selector.TOOLTIP;
            tooltip.className = ClassName.CHARTJS_TOOLTIP;

            this._chart.canvas.parentNode.appendChild(tooltip);
          } // Hide if no tooltip


          if (tooltipModel.opacity === 0) {
            tooltip.style.opacity = 0;
            return;
          } // Set caret Position


          tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

          if (tooltipModel.yAlign) {
            tooltip.classList.add(tooltipModel.yAlign);
          } else {
            tooltip.classList.add(ClassName.NO_TRANSFORM);
          } // Set Text


          if (tooltipModel.body) {
            var titleLines = tooltipModel.title || [];
            var tooltipHeader = document.createElement(Selector.DIV);
            tooltipHeader.className = ClassName.TOOLTIP_HEADER;
            titleLines.forEach(function (title) {
              var tooltipHeaderTitle = document.createElement(Selector.DIV);
              tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
              tooltipHeaderTitle.innerHTML = title;
              tooltipHeader.appendChild(tooltipHeaderTitle);
            });
            var tooltipBody = document.createElement(Selector.DIV);
            tooltipBody.className = ClassName.TOOLTIP_BODY;
            var tooltipBodyItems = tooltipModel.body.map(function (item) {
              return item.lines;
            });
            tooltipBodyItems.forEach(function (item, i) {
              var tooltipBodyItem = document.createElement(Selector.DIV);
              tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
              var colors = tooltipModel.labelColors[i];
              var tooltipBodyItemColor = document.createElement(Selector.SPAN);
              tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
              tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
              tooltipBodyItem.appendChild(tooltipBodyItemColor);

              if (item[0].split(':').length > 1) {
                var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
                tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
                tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
                tooltipBodyItem.appendChild(tooltipBodyItemLabel);
                var tooltipBodyItemValue = document.createElement(Selector.SPAN);
                tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
                tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
                tooltipBodyItem.appendChild(tooltipBodyItemValue);
              } else {
                var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

                _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
                _tooltipBodyItemValue.innerHTML = item[0];
                tooltipBodyItem.appendChild(_tooltipBodyItemValue);
              }

              tooltipBody.appendChild(tooltipBodyItem);
            });
            tooltip.innerHTML = '';
            tooltip.appendChild(tooltipHeader);
            tooltip.appendChild(tooltipBody);
          }

          var position = this._chart.canvas.getBoundingClientRect();

          var positionY = this._chart.canvas.offsetTop;
          var positionX = this._chart.canvas.offsetLeft;
          var positionLeft = positionX + tooltipModel.caretX;
          var positionTop = positionY + tooltipModel.caretY; // eslint-disable-next-line

          var halfWidth = tooltipModel.width / 2;

          if (positionLeft + halfWidth > position.width) {
            positionLeft -= halfWidth;
          } else if (positionLeft < halfWidth) {
            positionLeft += halfWidth;
          } // Display, position, and set styles for font


          tooltip.style.opacity = 1;
          tooltip.style.left = positionLeft + "px";
          tooltip.style.top = positionTop + "px";
        }
        /**
         * --------------------------------------------------------------------------
         * Custom Tooltips for Chart.js (vv2.0.0-beta.0): index.umd.js
         * Licensed under MIT (https://github.com/@coreui/coreui-chartjs/LICENSE)
         * --------------------------------------------------------------------------
         */


        var index_umd = {
          customTooltips: customTooltips
        };
        return index_umd;
      }); //# sourceMappingURL=coreui-chartjs.js.map

      /***/

    },

    /***/
    "VP4e":
    /*!******************************************************!*\
      !*** ./src/app/views/chartjs/chartjs.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function VP4e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydGpzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "VjeW":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/chartjs/chartjs.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function VjeW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col col=\"6\">\r\n      <!--  <div class=\"card-columns cols-2\">-->\r\n      <c-card>\r\n        <c-card-header>\r\n          Line Chart <c-badge color=\"info\">CoreUI Pro integration</c-badge>\r\n          <c-card-header-actions>\r\n            <a href=\"http://www.chartjs.org\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </c-card-header-actions>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas\r\n              cNoZoneBaseChart\r\n              class=\"chart\"\r\n              [datasets]=\"lineChartData\"\r\n              [labels]=\"lineChartLabels\"\r\n              [options]=\"lineChartOptions\"\r\n              [colors]=\"lineChartColours\"\r\n              [legend]=\"lineChartLegend\"\r\n              [chartType]=\"lineChartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"\r\n            ></canvas>\r\n          </div>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n    <c-col col=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Bar Chart\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas\r\n              cNoZoneBaseChart\r\n              class=\"chart\"\r\n              [datasets]=\"barChartData\"\r\n              [labels]=\"barChartLabels\"\r\n              [options]=\"barChartOptions\"\r\n              [legend]=\"barChartLegend\"\r\n              [chartType]=\"barChartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"\r\n            ></canvas>\r\n          </div>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col col=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Doughnut Chart\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas\r\n              cNoZoneBaseChart\r\n              class=\"chart\"\r\n              [data]=\"doughnutChartData\"\r\n              [labels]=\"doughnutChartLabels\"\r\n              [options]=\"options\"\r\n              [chartType]=\"doughnutChartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"\r\n            ></canvas>\r\n          </div>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n    <c-col col=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Radar Chart\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas\r\n              cNoZoneBaseChart\r\n              class=\"chart\"\r\n              [datasets]=\"radarChartData\"\r\n              [labels]=\"radarChartLabels\"\r\n              [options]=\"options\"\r\n              [chartType]=\"radarChartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"\r\n            ></canvas>\r\n          </div>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col col=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Pie Chart\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas\r\n              cNoZoneBaseChart\r\n              class=\"chart\"\r\n              [data]=\"pieChartData\"\r\n              [labels]=\"pieChartLabels\"\r\n              [options]=\"options\"\r\n              [chartType]=\"pieChartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"\r\n            ></canvas>\r\n          </div>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n    <c-col col=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Polar Area Chart\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <div class=\"chart-wrapper\">\r\n            <canvas\r\n              cNoZoneBaseChart\r\n              class=\"chart\"\r\n              [data]=\"polarAreaChartData\"\r\n              [labels]=\"polarAreaChartLabels\"\r\n              [legend]=\"polarAreaLegend\"\r\n              [options]=\"options\"\r\n              [chartType]=\"polarAreaChartType\"\r\n              (chartHover)=\"chartHovered($event)\"\r\n              (chartClick)=\"chartClicked($event)\"\r\n            ></canvas>\r\n          </div>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n";
      /***/
    },

    /***/
    "Y+KY":
    /*!*************************************************!*\
      !*** ./src/app/views/chartjs/chartjs.module.ts ***!
      \*************************************************/

    /*! exports provided: ChartjsModule */

    /***/
    function YKY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartjsModule", function () {
        return ChartjsModule;
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


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _chartjs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./chartjs.component */
      "lGC8");
      /* harmony import */


      var _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chartjs-routing.module */
      "lr3f");

      var ChartjsModule = function ChartjsModule() {
        _classCallCheck(this, ChartjsModule);
      };

      ChartjsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_chartjs_component__WEBPACK_IMPORTED_MODULE_4__["ChartjsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _chartjs_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartjsRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["ChartModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"]]
      })], ChartjsModule);
      /***/
    },

    /***/
    "lGC8":
    /*!****************************************************!*\
      !*** ./src/app/views/chartjs/chartjs.component.ts ***!
      \****************************************************/

    /*! exports provided: ChartjsComponent */

    /***/
    function lGC8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartjsComponent", function () {
        return ChartjsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chartjs_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chartjs.component.html */
      "VjeW");
      /* harmony import */


      var _chartjs_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chartjs.component.scss */
      "VP4e");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/chartjs/dist/js/coreui-chartjs.js */
      "BMe/");
      /* harmony import */


      var _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__);

      var ChartjsComponent = /*#__PURE__*/function () {
        function ChartjsComponent() {
          _classCallCheck(this, ChartjsComponent);

          // options
          this.options = {
            responsive: true,
            tooltips: {
              enabled: false,
              custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__["customTooltips"]
            }
          }; // lineChart

          this.lineChartData = [{
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A'
          }, {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B'
          }, {
            data: [18, 48, 77, 9, 100, 27, 40],
            label: 'Series C'
          }];
          this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          this.lineChartOptions = {
            // animation: false,
            responsive: true,
            tooltips: {
              enabled: false,
              custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__["customTooltips"]
            }
          };
          this.lineChartColours = [{
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          }, {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
          }, {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
          }];
          this.lineChartLegend = true;
          this.lineChartType = 'line'; // barChart

          this.barChartOptions = {
            responsive: true,
            tooltips: {
              enabled: false,
              custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__["customTooltips"]
            },
            scales: {
              // xAxes: [{
              //   display: false,
              // }],
              yAxes: [{
                // display: false,
                showLine: false
              }]
            }
          };
          this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
          this.barChartType = 'bar';
          this.barChartLegend = true;
          this.barChartData = [{
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'Series A'
          }, {
            data: [28, 48, 40, 19, 86, 27, 90],
            label: 'Series B'
          }]; // Doughnut

          this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
          this.doughnutChartData = [350, 450, 100];
          this.doughnutChartType = 'doughnut'; // Radar

          this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
          this.radarChartData = [{
            data: [65, 59, 90, 81, 56, 55, 40],
            label: 'Series A'
          }, {
            data: [28, 48, 40, 19, 96, 27, 100],
            label: 'Series B'
          }];
          this.radarChartType = 'radar'; // Pie

          this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
          this.pieChartData = [300, 500, 100];
          this.pieChartType = 'pie'; // PolarArea

          this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
          this.polarAreaChartData = [300, 500, 100, 40, 120];
          this.polarAreaLegend = true;
          this.polarAreaChartType = 'polarArea';
        } // events


        _createClass(ChartjsComponent, [{
          key: "chartClicked",
          value: function chartClicked(e) {
            console.log(e);
          }
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {
            console.log(e);
          }
        }]);

        return ChartjsComponent;
      }();

      ChartjsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-charts',
        template: _raw_loader_chartjs_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chartjs_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ChartjsComponent);
      /***/
    },

    /***/
    "lr3f":
    /*!*********************************************************!*\
      !*** ./src/app/views/chartjs/chartjs-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ChartjsRoutingModule */

    /***/
    function lr3f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChartjsRoutingModule", function () {
        return ChartjsRoutingModule;
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


      var _chartjs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chartjs.component */
      "lGC8");

      var routes = [{
        path: '',
        component: _chartjs_component__WEBPACK_IMPORTED_MODULE_3__["ChartjsComponent"],
        data: {
          title: 'Dashboard'
        }
      }];

      var ChartjsRoutingModule = function ChartjsRoutingModule() {
        _classCallCheck(this, ChartjsRoutingModule);
      };

      ChartjsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChartjsRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-chartjs-chartjs-module-es5.js.map