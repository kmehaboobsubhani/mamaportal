(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-dashboard-dashboard-module~views-widgets-widgets-module"],{

/***/ "2TMg":
/*!************************************************************************!*\
  !*** ./src/app/views/widgets/widgets-brand/widgets-brand.component.ts ***!
  \************************************************************************/
/*! exports provided: WidgetsBrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsBrandComponent", function() { return WidgetsBrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_widgets_brand_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./widgets-brand.component.html */ "H9LO");
/* harmony import */ var _widgets_brand_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets-brand.component.scss */ "2cqz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dashboard_dashboard_charts_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dashboard/dashboard-charts-data */ "YQRL");





let WidgetsBrandComponent = class WidgetsBrandComponent {
    constructor(chartsData) {
        this.chartsData = chartsData;
        this.brandBoxChart = {};
    }
    ngOnInit() {
        this.brandBoxChart = this.chartsData.brandBoxChart;
    }
};
WidgetsBrandComponent.ctorParameters = () => [
    { type: _dashboard_dashboard_charts_data__WEBPACK_IMPORTED_MODULE_4__["DashboardChartsData"] }
];
WidgetsBrandComponent.propDecorators = {
    noCharts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
WidgetsBrandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-widgets-brand',
        template: _raw_loader_widgets_brand_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_widgets_brand_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_dashboard_charts_data__WEBPACK_IMPORTED_MODULE_4__["DashboardChartsData"]])
], WidgetsBrandComponent);



/***/ }),

/***/ "2cqz":
/*!**************************************************************************!*\
  !*** ./src/app/views/widgets/widgets-brand/widgets-brand.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host .c-chart-brand {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2lkZ2V0cy1icmFuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFBSiIsImZpbGUiOiJ3aWRnZXRzLWJyYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jLWNoYXJ0LWJyYW5kIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "2qTL":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/rgb-to-hex.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-magic-numbers */
const rgbToHex = color => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  if (color === 'transparent') {
    return '#00000000'
  }

  const rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)

  if (!rgb) {
    throw new Error(`${color} is not a valid rgb color`)
  }

  const r = `0${parseInt(rgb[1], 10).toString(16)}`
  const g = `0${parseInt(rgb[2], 10).toString(16)}`
  const b = `0${parseInt(rgb[3], 10).toString(16)}`

  return `#${r.slice(-2)}${g.slice(-2)}${b.slice(-2)}`
}

/* harmony default export */ __webpack_exports__["default"] = (rgbToHex);


/***/ }),

/***/ "5iHM":
/*!********************************************************************************!*\
  !*** ./src/app/views/widgets/chart-bar-simple/chart-bar-simple.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hhcnQtYmFyLXNpbXBsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJjaGFydC1iYXItc2ltcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "60Zf":
/*!******************************************************!*\
  !*** ./src/app/views/widgets/widgets.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "9DGY":
/*!****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/make-uid.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//function for UI releted ID assignment, due to one in 10^15 probability of duplication
const makeUid = () => {
  const key = Math.random().toString(36).substr(2)
  return 'uid-' + key
}

/* harmony default export */ __webpack_exports__["default"] = (makeUid);

/***/ }),

/***/ "B+qb":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/utils/src/pick-by-keys.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pickByKeys = (originalObject, keys) => {
  var newObj = {}
  for (var i = 0; i < keys.length; i++) {
    newObj[keys[i]] = originalObject[keys[i]]
  }
  return newObj
}

/* harmony default export */ __webpack_exports__["default"] = (pickByKeys);

/***/ }),

/***/ "BMe/":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/chartjs/dist/js/coreui-chartjs.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * CoreUI Plugins - Chart.js for CoreUI 3 v2.0.0 (https://coreui.io)
  * Copyright 2020 creativeLabs Łukasz Holeczek
  * Licensed under MIT (https://coreui.io/license/)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! chart.js */ "MO+k")) :
  undefined;
}(this, (function (chart_js) { 'use strict';

  chart_js = chart_js && chart_js.hasOwnProperty('default') ? chart_js['default'] : chart_js;

  /**
   * --------------------------------------------------------------------------
   * Custom Tooltips for Chart.js (vv2.0.0-beta.0): custom-tooltips.js
   * Licensed under MIT (https://coreui.io/plugins/chart.js)
   * --------------------------------------------------------------------------
   */
  function customTooltips(tooltipModel) {
    var _this = this;

    // Add unique id if not exist
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

})));
//# sourceMappingURL=coreui-chartjs.js.map


/***/ }),

/***/ "DXaZ":
/*!*********************************************************!*\
  !*** ./src/app/views/widgets/widgets-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: WidgetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsRoutingModule", function() { return WidgetsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets.component */ "Q2d6");




const routes = [
    {
        path: '',
        component: _widgets_component__WEBPACK_IMPORTED_MODULE_3__["WidgetsComponent"],
        data: {
            title: 'Widgets',
        },
    },
];
let WidgetsRoutingModule = class WidgetsRoutingModule {
};
WidgetsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WidgetsRoutingModule);



/***/ }),

/***/ "H9LO":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/widgets/widgets-brand/widgets-brand.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<c-row>\r\n  <c-col md=\"3\" sm=\"6\">\r\n    <c-widget-brand\r\n      color=\"facebook\"\r\n      rightHeader=\"89k\"\r\n      rightFooter=\"friends\"\r\n      leftHeader=\"459\"\r\n      leftFooter=\"feeds\"\r\n    >\r\n      <c-icon name=\"cib-facebook\" height=\"52\" class=\"my-4\"> </c-icon>\r\n      <ng-container *ngIf=\"!noCharts\">\r\n        <div class=\"c-chart-brand\">\r\n          <canvas\r\n            cNoZoneBaseChart\r\n            [datasets]=\"brandBoxChart.Data1\"\r\n            [labels]=\"brandBoxChart.labels\"\r\n            [options]=\"brandBoxChart.options\"\r\n            [colors]=\"brandBoxChart.colors\"\r\n            [legend]=\"brandBoxChart.legend\"\r\n            [chartType]=\"brandBoxChart.type\"\r\n          >\r\n          </canvas>\r\n        </div>\r\n      </ng-container>\r\n    </c-widget-brand>\r\n  </c-col>\r\n  <c-col md=\"3\" sm=\"6\">\r\n    <c-widget-brand\r\n      color=\"twitter\"\r\n      rightHeader=\"973k\"\r\n      rightFooter=\"followers\"\r\n      leftHeader=\"1.792\"\r\n      leftFooter=\"tweets\"\r\n    >\r\n      <c-icon name=\"cib-twitter\" height=\"52\" class=\"my-4\"> </c-icon>\r\n      <ng-container *ngIf=\"!noCharts\">\r\n        <div class=\"c-chart-brand\">\r\n          <canvas\r\n            cNoZoneBaseChart\r\n            [datasets]=\"brandBoxChart.Data2\"\r\n            [labels]=\"brandBoxChart.labels\"\r\n            [options]=\"brandBoxChart.options\"\r\n            [colors]=\"brandBoxChart.colors\"\r\n            [legend]=\"brandBoxChart.legend\"\r\n            [chartType]=\"brandBoxChart.type\"\r\n          >\r\n          </canvas>\r\n        </div>\r\n      </ng-container>\r\n    </c-widget-brand>\r\n  </c-col>\r\n  <c-col md=\"3\" sm=\"6\">\r\n    <c-widget-brand\r\n      color=\"linkedin\"\r\n      rightHeader=\"500+\"\r\n      rightFooter=\"contracts\"\r\n      leftHeader=\"292\"\r\n      leftFooter=\"feeds\"\r\n    >\r\n      <c-icon name=\"cib-linkedin\" height=\"52\" class=\"my-4\"> </c-icon>\r\n      <ng-container *ngIf=\"!noCharts\">\r\n        <div class=\"c-chart-brand\">\r\n          <canvas\r\n            cNoZoneBaseChart\r\n            [datasets]=\"brandBoxChart.Data3\"\r\n            [labels]=\"brandBoxChart.labels\"\r\n            [options]=\"brandBoxChart.options\"\r\n            [colors]=\"brandBoxChart.colors\"\r\n            [legend]=\"brandBoxChart.legend\"\r\n            [chartType]=\"brandBoxChart.type\"\r\n          >\r\n          </canvas>\r\n        </div>\r\n      </ng-container>\r\n    </c-widget-brand>\r\n  </c-col>\r\n  <c-col md=\"3\" sm=\"6\">\r\n    <c-widget-brand\r\n      rightHeader=\"12\"\r\n      rightFooter=\"events\"\r\n      leftHeader=\"4\"\r\n      leftFooter=\"meetings\"\r\n      color=\"gradient-warning\"\r\n    >\r\n      <c-icon name=\"cil-calendar\" height=\"52\" class=\"my-4\"></c-icon>\r\n      <ng-container *ngIf=\"!noCharts\">\r\n        <div class=\"c-chart-brand\">\r\n          <canvas\r\n            cNoZoneBaseChart\r\n            [datasets]=\"brandBoxChart.Data4\"\r\n            [labels]=\"brandBoxChart.labels\"\r\n            [options]=\"brandBoxChart.options\"\r\n            [colors]=\"brandBoxChart.colors\"\r\n            [legend]=\"brandBoxChart.legend\"\r\n            [chartType]=\"brandBoxChart.type\"\r\n          >\r\n          </canvas>\r\n        </div>\r\n      </ng-container>\r\n    </c-widget-brand>\r\n  </c-col>\r\n</c-row>\r\n");

/***/ }),

/***/ "HK/r":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/hex-to-rgba.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-magic-numbers */
const hexToRgba = (color, opacity = 100) => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)

  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }

  let r
  let g
  let b

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16)
    g = parseInt(color.slice(3, 5), 16)
    b = parseInt(color.slice(5, 7), 16)
  } else {
    r = parseInt(color.slice(1, 2), 16)
    g = parseInt(color.slice(2, 3), 16)
    b = parseInt(color.slice(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`
}

/* harmony default export */ __webpack_exports__["default"] = (hexToRgba);


/***/ }),

/***/ "K+u3":
/*!********************************************************************************!*\
  !*** ./src/app/views/widgets/widgets-dropdown/widgets-dropdown.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXRzLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "KnQi":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/widgets/widgets-dropdown/widgets-dropdown.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<c-row>\r\n  <c-col sm=\"6\" lg=\"3\">\r\n    <c-widget-dropdown\r\n      color=\"gradient-primary\"\r\n      header=\"9.823\"\r\n      text=\"Members online\"\r\n    >\r\n      <c-button-group dropdown>\r\n        <button cButton color=\"transparent\" class=\"p-0 dropdown-toggle\" dropdownToggle>\r\n          <c-icon name=\"cil-settings\"></c-icon>\r\n        </button>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n          <a class=\"dropdown-item\" [routerLink]>Action</a>\r\n          <a class=\"dropdown-item\" [routerLink]>Another action</a>\r\n          <a class=\"dropdown-item\" [routerLink]>Something else here</a>\r\n        </div>\r\n      </c-button-group>\r\n      <div slot=\"footer\">\r\n        <div\r\n          class=\"c-chart-wrapper mt-3 mx-3\"\r\n          style=\"height: 70px;\"\r\n          [@.disabled]=\"true\"\r\n        >\r\n          <canvas\r\n            cNoZoneBaseChart\r\n            class=\"chart\"\r\n            height=\"70\"\r\n            [datasets]=\"chart[0].data\"\r\n            [labels]=\"chart[0].labels\"\r\n            [options]=\"chart[0].options\"\r\n            [colors]=\"chart[0].colors\"\r\n            [chartType]=\"chart[0].type\"\r\n          >\r\n          </canvas>\r\n        </div>\r\n      </div>\r\n    </c-widget-dropdown>\r\n  </c-col>\r\n  <c-col sm=\"6\" lg=\"3\">\r\n    <c-widget-dropdown\r\n      color=\"gradient-info\"\r\n      header=\"9.823\"\r\n      text=\"Members online\"\r\n    >\r\n      <c-button-group dropdown>\r\n        <button cButton color=\"transparent\" class=\"p-0 dropdown-toggle\" dropdownToggle>\r\n          <c-icon name=\"cil-settings\"></c-icon>\r\n        </button>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n          <a class=\"dropdown-item\" [routerLink]>Action</a>\r\n          <a class=\"dropdown-item\" [routerLink]>Another action</a>\r\n          <a class=\"dropdown-item\" [routerLink]>Something else here</a>\r\n        </div>\r\n      </c-button-group>\r\n      <div slot=\"footer\">\r\n        <div\r\n          class=\"c-chart-wrapper mt-3 mx-3\"\r\n          style=\"height: 70px;\"\r\n          [@.disabled]=\"true\"\r\n        >\r\n          <canvas\r\n            cNoZoneBaseChart\r\n            class=\"chart\"\r\n            height=\"70\"\r\n            [datasets]=\"chart[1].data\"\r\n            [labels]=\"chart[1].labels\"\r\n            [options]=\"chart[1].options\"\r\n            [colors]=\"chart[1].colors\"\r\n            [chartType]=\"chart[1].type\"\r\n          >\r\n          </canvas>\r\n        </div>\r\n      </div>\r\n    </c-widget-dropdown>\r\n  </c-col>\r\n  <c-col sm=\"6\" lg=\"3\">\r\n    <c-widget-dropdown\r\n      color=\"gradient-warning\"\r\n      header=\"9.823\"\r\n      text=\"Members online\"\r\n    >\r\n      <c-button-group dropdown>\r\n        <button cButton color=\"transparent\" class=\"p-0 dropdown-toggle\" dropdownToggle>\r\n          <c-icon name=\"cil-settings\"></c-icon>\r\n        </button>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n          <a class=\"dropdown-item\" [routerLink]>Action</a>\r\n          <a class=\"dropdown-item\" [routerLink]>Another action</a>\r\n          <a class=\"dropdown-item\" [routerLink]>Something else here</a>\r\n        </div>\r\n      </c-button-group>\r\n      <div slot=\"footer\">\r\n        <div\r\n          class=\"c-chart-wrapper mt-3\"\r\n          style=\"height: 70px;\"\r\n          [@.disabled]=\"true\"\r\n        >\r\n          <canvas\r\n            cNoZoneBaseChart\r\n            class=\"chart\"\r\n            height=\"70\"\r\n            [datasets]=\"chart[2].data\"\r\n            [labels]=\"chart[2].labels\"\r\n            [options]=\"chart[2].options\"\r\n            [colors]=\"chart[2].colors\"\r\n            [chartType]=\"chart[2].type\"\r\n          >\r\n          </canvas>\r\n        </div>\r\n      </div>\r\n    </c-widget-dropdown>\r\n  </c-col>\r\n  <c-col sm=\"6\" lg=\"3\">\r\n    <c-widget-dropdown\r\n      color=\"gradient-danger\"\r\n      header=\"9.823\"\r\n      text=\"Members online\"\r\n    >\r\n      <c-button-group dropdown>\r\n        <button cButton color=\"transparent\" class=\"p-0 dropdown-toggle\" dropdownToggle>\r\n          <c-icon name=\"cil-settings\"></c-icon>\r\n        </button>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu>\r\n          <a class=\"dropdown-item\" [routerLink]>Action</a>\r\n          <a class=\"dropdown-item\" [routerLink]>Another action</a>\r\n          <a class=\"dropdown-item\" [routerLink]>Something else here</a>\r\n        </div>\r\n      </c-button-group>\r\n      <div slot=\"footer\">\r\n        <div\r\n          class=\"c-chart-wrapper mt-3 mx-3\"\r\n          style=\"height: 70px;\"\r\n          [@.disabled]=\"true\"\r\n        >\r\n          <canvas\r\n            cNoZoneBaseChart\r\n            class=\"chart\"\r\n            height=\"70\"\r\n            [datasets]=\"chart[3].data\"\r\n            [labels]=\"chart[3].labels\"\r\n            [options]=\"chart[3].options\"\r\n            [colors]=\"chart[3].colors\"\r\n            [chartType]=\"chart[3].type\"\r\n          >\r\n          </canvas>\r\n        </div>\r\n      </div>\r\n    </c-widget-dropdown>\r\n  </c-col>\r\n</c-row>\r\n");

/***/ }),

/***/ "MRM4":
/*!********************************************************!*\
  !*** ./node_modules/@coreui/utils/src/omit-by-keys.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const omitByKeys = (originalObject, keys) => {
  var newObj = {}
  var objKeys = Object.keys(originalObject)
  for (var i = 0; i < objKeys.length; i++) {
    !keys.includes(objKeys[i]) && (newObj[objKeys[i]] = originalObject[objKeys[i]])
  }
  return newObj
}

/* harmony default export */ __webpack_exports__["default"] = (omitByKeys);

/***/ }),

/***/ "Nq4P":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/widgets/chart-line-simple/chart-line-simple.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <canvas cNoZoneBaseChart class=\"chart\"\r\n          [datasets]=\"datasets\"\r\n          [labels]=\"labels\"\r\n          [options]=\"options\"\r\n          [colors]=\"colors\"\r\n          [legend]=\"legend\"\r\n          [chartType]=\"chartType\">\r\n  </canvas>\r\n\r\n\r\n");

/***/ }),

/***/ "O5IU":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/widgets/widgets.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col sm=\"6\" lg=\"3\">\r\n      <c-widget-progress\r\n        color=\"gradient-success\"\r\n        footer=\"Lorem ipsum dolor sit amet enim.\"\r\n        header=\"89.9%\"\r\n        text=\"Lorem ipsum...\"\r\n        [value]=\"25\">\r\n      </c-widget-progress>\r\n    </c-col>\r\n    <c-col sm=\"6\" lg=\"3\">\r\n      <c-widget-progress\r\n        color=\"gradient-info\"\r\n        footer=\"Lorem ipsum dolor sit amet enim.\"\r\n        header=\"12.124\"\r\n        text=\"Lorem ipsum...\"\r\n        [value]=\"25\">\r\n      </c-widget-progress>\r\n    </c-col>\r\n    <c-col sm=\"6\" lg=\"3\">\r\n      <c-widget-progress\r\n        color=\"gradient-warning\"\r\n        footer=\"Lorem ipsum dolor sit amet enim.\"\r\n        header=\"{{98111.00 | currency:'USD'}}\"\r\n        text=\"Lorem ipsum...\"\r\n        [value]=\"25\">\r\n      </c-widget-progress>\r\n    </c-col>\r\n    <c-col sm=\"6\" lg=\"3\">\r\n      <c-widget-progress\r\n        color=\"gradient-danger\"\r\n        footer=\"Lorem ipsum dolor sit amet enim.\"\r\n        header=\"2 TB\"\r\n        text=\"Lorem ipsum...\"\r\n        [value]=\"25\">\r\n      </c-widget-progress>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col sm=\"6\" lg=\"3\">\r\n      <c-widget-progress\r\n        header=\"89.9%\"\r\n        text=\"Lorem ipsum...\"\r\n        footer=\"Lorem ipsum dolor sit amet enim.\"\r\n        color=\"gradient-success\"\r\n        value=\"25\"\r\n        [inverse]=\"true\"\r\n      >\r\n      </c-widget-progress>\r\n    </c-col>\r\n    <c-col sm=\"6\" lg=\"3\">\r\n      <c-widget-progress\r\n        color=\"gradient-info\"\r\n        footer=\"Lorem ipsum dolor sit amet enim.\"\r\n        header=\"12.124\"\r\n        text=\"Lorem ipsum...\"\r\n        [value]=\"25\"\r\n        [inverse]=\"true\">\r\n      </c-widget-progress>\r\n    </c-col>\r\n    <c-col sm=\"6\" lg=\"3\">\r\n      <c-widget-progress\r\n        color=\"gradient-warning\"\r\n        footer=\"Lorem ipsum dolor sit amet enim.\"\r\n        header=\"{{98111.00 | currency:'USD'}}\"\r\n        text=\"Lorem ipsum...\"\r\n        [value]=\"25\"\r\n        [inverse]=\"true\">\r\n      </c-widget-progress>\r\n    </c-col>\r\n    <c-col sm=\"6\" lg=\"3\">\r\n      <c-widget-progress\r\n        color=\"gradient-danger\"\r\n        footer=\"Lorem ipsum dolor sit amet enim.\"\r\n        header=\"2 TB\"\r\n        text=\"Lorem ipsum...\"\r\n        [value]=\"25\"\r\n        [inverse]=\"true\">\r\n      </c-widget-progress>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"3\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-primary\"\r\n      >\r\n        <c-icon name=\"cil-settings\" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"3\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-info\"\r\n      >\r\n        <c-icon name=\"cil-laptop\" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"3\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-warning\"\r\n      >\r\n        <c-icon name=\"cil-moon\" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"3\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-danger\"\r\n      >\r\n        <c-icon name=\"cil-bell\" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"3\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-primary\"\r\n        [iconPadding]=\"false\"\r\n      >\r\n        <c-icon name=\"cil-settings\" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"3\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-info\"\r\n        [iconPadding]=\"false\"\r\n      >\r\n        <c-icon name=\"cil-laptop\" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"3\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-warning\"\r\n        [iconPadding]=\"false\"\r\n      >\r\n        <c-icon name=\"cil-moon\" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"3\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-danger\"\r\n        [iconPadding]=\"false\"\r\n      >\r\n        <c-icon name=\"cil-bell\" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"4\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-primary\"\r\n        [iconPadding]=\"false\"\r\n      >\r\n        <c-icon name=\"cil-settings\" class=\"mx-5 \" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"4\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-primary\"\r\n        [iconPadding]=\"false\"\r\n      >\r\n        <c-icon name=\"cil-settings\" class=\"mx-5 \" width=\"24\"></c-icon>\r\n      </c-widget-icon>\r\n    </c-col>\r\n    <c-col col=\"12\" sm=\"6\" lg=\"4\">\r\n      <c-widget-icon\r\n        header=\"$1.999,50\"\r\n        text=\"Income\"\r\n        color=\"gradient-warning\"\r\n        [iconPadding]=\"false\"\r\n      >\r\n        <c-icon name=\"cil-laptop\" class=\"mx-5 \" width=\"24\"></c-icon>\r\n        <c-card-footer class=\"px-3 py-2\" slot=\"footer\">\r\n          <a\r\n            class=\"font-weight-bold font-xs text-muted d-flex justify-content-between\"\r\n            href=\"https://coreui.io/\"\r\n            target=\"_blank\"\r\n          >\r\n            View more\r\n            <c-icon name=\"cil-arrow-right\" width=\"16\"></c-icon>\r\n          </a>\r\n        </c-card-footer>\r\n      </c-widget-icon>\r\n    </c-col>\r\n  </c-row>\r\n\r\n  <app-widgets-brand [noCharts]=\"true\"></app-widgets-brand>\r\n  <app-widgets-brand></app-widgets-brand>\r\n\r\n  <c-card-group class=\"mb-4\">\r\n    <c-widget-progress-icon\r\n      header=\"87.500\"\r\n      text=\"Visitors\"\r\n      color=\"gradient-info\"\r\n    >\r\n      <c-icon name=\"cil-people\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n    <c-widget-progress-icon\r\n      header=\"385\"\r\n      text=\"New Clients\"\r\n      color=\"gradient-success\"\r\n    >\r\n      <c-icon name=\"cil-user-follow\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n    <c-widget-progress-icon\r\n      header=\"1238\"\r\n      text=\"Products Sold\"\r\n      color=\"gradient-warning\"\r\n    >\r\n      <c-icon name=\"cil-basket\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n    <c-widget-progress-icon\r\n      header=\"28%\"\r\n      text=\"Returning Visitors\"\r\n    >\r\n      <c-icon name=\"cil-chart-pie\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n    <c-widget-progress-icon\r\n      header=\"5:34:11\"\r\n      text=\"Avg. Time\"\r\n      color=\"gradient-danger\"\r\n    >\r\n      <c-icon name=\"cil-speedometer\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n  </c-card-group>\r\n\r\n  <c-card-group class=\"mb-4\">\r\n    <c-widget-progress-icon\r\n      header=\"87.500\"\r\n      text=\"Visitors\"\r\n      color=\"gradient-info\"\r\n      [inverse]=\"true\"\r\n    >\r\n      <c-icon name=\"cil-people\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n    <c-widget-progress-icon\r\n      header=\"385\"\r\n      text=\"New Clients\"\r\n      color=\"gradient-success\"\r\n      [inverse]=\"true\"\r\n    >\r\n      <c-icon name=\"cil-userFollow\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n    <c-widget-progress-icon\r\n      header=\"1238\"\r\n      text=\"Products sold\"\r\n      color=\"gradient-warning\"\r\n      [inverse]=\"true\"\r\n    >\r\n      <c-icon name=\"cil-basket\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n    <c-widget-progress-icon\r\n      header=\"28%\"\r\n      text=\"Returning Visitors\"\r\n      color=\"gradient-primary\"\r\n      [inverse]=\"true\"\r\n    >\r\n      <c-icon name=\"cil-chartPie\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n    <c-widget-progress-icon\r\n      header=\"5:34:11\"\r\n      text=\"Avg. Time\"\r\n      color=\"gradient-danger\"\r\n      [inverse]=\"true\"\r\n    >\r\n      <c-icon name=\"cil-speedometer\" height=\"36\"></c-icon>\r\n    </c-widget-progress-icon>\r\n  </c-card-group>\r\n  <c-row>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"87.500\"\r\n        text=\"Visitors\"\r\n        color=\"gradient-info\"\r\n      >\r\n        <c-icon name=\"cil-people\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"385\"\r\n        text=\"New Clients\"\r\n        color=\"gradient-success\"\r\n      >\r\n        <c-icon name=\"cil-userFollow\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"1238\"\r\n        text=\"Products sold\"\r\n        color=\"gradient-warning\"\r\n      >\r\n        <c-icon name=\"cil-basket\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"28%\"\r\n        text=\"Returning Visitors\"\r\n        color=\"gradient-primary\"\r\n      >\r\n        <c-icon name=\"cil-chartPie\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"5:34:11\"\r\n        text=\"Avg. Time\"\r\n        color=\"gradient-danger\"\r\n      >\r\n        <c-icon name=\"cil-speedometer\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"972\"\r\n        text=\"comments\"\r\n        color=\"gradient-info\"\r\n      >\r\n        <c-icon name=\"cil-speech\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"87.500\"\r\n        text=\"Visitors\"\r\n        color=\"gradient-info\"\r\n        [inverse]=\"true\"\r\n      >\r\n        <c-icon name=\"cil-people\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"385\"\r\n        text=\"New Clients\"\r\n        color=\"gradient-success\"\r\n        [inverse]=\"true\"\r\n      >\r\n        <c-icon name=\"cil-userFollow\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"1238\"\r\n        text=\"Products sold\"\r\n        color=\"gradient-warning\"\r\n        [inverse]=\"true\"\r\n      >\r\n        <c-icon name=\"cil-basket\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"28%\"\r\n        text=\"Returning Visitors\"\r\n        color=\"gradient-primary\"\r\n        [inverse]=\"true\"\r\n      >\r\n        <c-icon name=\"cil-chartPie\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"5:34:11\"\r\n        text=\"Avg. Time\"\r\n        color=\"gradient-danger\"\r\n        [inverse]=\"true\"\r\n      >\r\n        <c-icon name=\"cil-speedometer\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n    <c-col sm=\"6\" md=\"2\">\r\n      <c-widget-progress-icon\r\n        header=\"972\"\r\n        text=\"comments\"\r\n        color=\"gradient-info\"\r\n        [inverse]=\"true\"\r\n      >\r\n        <c-icon name=\"cil-speech\" height=\"36\"></c-icon>\r\n      </c-widget-progress-icon>\r\n    </c-col>\r\n  </c-row>\r\n\r\n  <app-widgets-dropdown></app-widgets-dropdown>\r\n\r\n  <c-row>\r\n    <c-col sm=\"4\" lg=\"2\">\r\n      <c-widget-simple header=\"title\" text=\"1,123\">\r\n        <app-chart-line-simple style=\"height:40px;\" color=\"danger\"></app-chart-line-simple>\r\n      </c-widget-simple>\r\n    </c-col>\r\n    <c-col sm=\"4\" lg=\"2\">\r\n      <c-widget-simple header=\"title\" text=\"1,123\">\r\n        <app-chart-line-simple style=\"height:40px;\" color=\"primary\"></app-chart-line-simple>\r\n      </c-widget-simple>\r\n    </c-col>\r\n    <c-col sm=\"4\" lg=\"2\">\r\n      <c-widget-simple header=\"title\" text=\"1,123\">\r\n        <app-chart-line-simple style=\"height:40px;\" color=\"success\"></app-chart-line-simple>\r\n      </c-widget-simple>\r\n    </c-col>\r\n    <c-col sm=\"4\" lg=\"2\">\r\n      <c-widget-simple header=\"title\" text=\"1,123\">\r\n        <app-chart-bar-simple style=\"height:40px;\" color=\"danger\"></app-chart-bar-simple>\r\n      </c-widget-simple>\r\n    </c-col>\r\n    <c-col sm=\"4\" lg=\"2\">\r\n      <c-widget-simple header=\"title\" text=\"1,123\">\r\n        <app-chart-bar-simple style=\"height:40px;\" color=\"primary\"></app-chart-bar-simple>\r\n      </c-widget-simple>\r\n    </c-col>\r\n    <c-col sm=\"4\" lg=\"2\">\r\n      <c-widget-simple header=\"title\" text=\"1,123\">\r\n        <app-chart-bar-simple style=\"height:40px;\" color=\"success\"></app-chart-bar-simple>\r\n      </c-widget-simple>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n");

/***/ }),

/***/ "Q2d6":
/*!****************************************************!*\
  !*** ./src/app/views/widgets/widgets.component.ts ***!
  \****************************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./widgets.component.html */ "O5IU");
/* harmony import */ var _widgets_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets.component.scss */ "60Zf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/utils */ "w7HB");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/chartjs/dist/js/coreui-chartjs.js */ "BMe/");
/* harmony import */ var _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__);






let WidgetsComponent = class WidgetsComponent {
    constructor() {
        // lineChart1
        this.lineChart1Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A',
            },
        ];
        this.lineChart1Labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
        ];
        this.lineChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__["customTooltips"],
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent',
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        },
                    },
                ],
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            display: false,
                            min: 40 - 5,
                            max: 84 + 5,
                        },
                    },
                ],
            },
            elements: {
                line: {
                    borderWidth: 1,
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false,
            },
        };
        this.lineChart1Colours = [
            {
                // grey
                backgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--primary'),
                borderColor: 'rgba(255,255,255,.55)',
            },
        ];
        this.lineChart1Legend = false;
        this.lineChart1Type = 'line';
        // lineChart2
        this.lineChart2Data = [
            {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Series A',
            },
        ];
        this.lineChart2Labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
        ];
        this.lineChart2Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__["customTooltips"],
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        gridLines: {
                            color: 'transparent',
                            zeroLineColor: 'transparent',
                        },
                        ticks: {
                            fontSize: 2,
                            fontColor: 'transparent',
                        },
                    },
                ],
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            display: false,
                            min: 1 - 5,
                            max: 34 + 5,
                        },
                    },
                ],
            },
            elements: {
                line: {
                    tension: 0.00001,
                    borderWidth: 1,
                },
                point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false,
            },
        };
        this.lineChart2Colours = [
            {
                // grey
                backgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--info'),
                borderColor: 'rgba(255,255,255,.55)',
            },
        ];
        this.lineChart2Legend = false;
        this.lineChart2Type = 'line';
        // lineChart3
        this.lineChart3Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40],
                label: 'Series A',
            },
        ];
        this.lineChart3Labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
        ];
        this.lineChart3Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__["customTooltips"],
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        display: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            elements: {
                line: {
                    borderWidth: 2,
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
            legend: {
                display: false,
            },
        };
        this.lineChart3Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
            },
        ];
        this.lineChart3Legend = false;
        this.lineChart3Type = 'line';
        // barChart1
        this.barChart1Data = [
            {
                data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
                label: 'Series A',
                barPercentage: 0.6,
            },
        ];
        this.barChart1Labels = [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
        ];
        this.barChart1Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__["customTooltips"],
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        display: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            legend: {
                display: false,
            },
        };
        this.barChart1Colours = [
            {
                backgroundColor: 'rgba(255,255,255,.3)',
                borderWidth: 0,
            },
        ];
        this.barChart1Legend = false;
        this.barChart1Type = 'bar';
        // lineChart4
        this.lineChart4Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A',
            },
        ];
        this.lineChart4Labels = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        this.lineChart4Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__["customTooltips"],
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        display: false,
                        points: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false,
            },
        };
        this.lineChart4Colours = [
            {
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                borderWidth: 2,
            },
        ];
        this.lineChart4Legend = false;
        this.lineChart4Type = 'line';
        // barChart2
        this.barChart2Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A',
                barPercentage: 0.6,
            },
        ];
        this.barChart2Labels = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        this.barChart2Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__["customTooltips"],
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        display: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
            legend: {
                display: false,
            },
        };
        this.barChart2Colours = [
            {
                backgroundColor: 'rgba(0,0,0,.2)',
                borderWidth: 0,
            },
        ];
        this.barChart2Legend = false;
        this.barChart2Type = 'bar';
        // barChart3
        this.barChart3Data = [
            {
                data: [4, 18, 9, 17, 34, 22, 11, 3, 15, 12, 18, 9],
                label: 'Series A',
            },
        ];
        this.barChart3Labels = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        this.barChart3Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__["customTooltips"],
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        display: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            legend: {
                display: false,
            },
        };
        this.barChart3Primary = [
            {
                backgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--primary'),
                borderColor: 'transparent',
                borderWidth: 1,
            },
        ];
        this.barChart3Danger = [
            {
                backgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--danger'),
                borderColor: 'transparent',
                borderWidth: 1,
            },
        ];
        this.barChart3Success = [
            {
                backgroundColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--success'),
                borderColor: 'transparent',
                borderWidth: 1,
            },
        ];
        this.barChart3Legend = false;
        this.barChart3Type = 'bar';
        // lineChart5
        this.lineChart5Data = [
            {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Series A',
            },
        ];
        this.lineChart5Labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
        ];
        this.lineChart5Options = {
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_5__["customTooltips"],
            },
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        display: false,
                        points: false,
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            elements: { point: { radius: 0 } },
            legend: {
                display: false,
            },
        };
        this.lineChart5Info = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--info'),
                borderWidth: 2,
            },
        ];
        this.lineChart5Success = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--info'),
                borderWidth: 2,
            },
        ];
        this.lineChart5Warning = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_utils__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('--warning'),
                borderWidth: 2,
            },
        ];
        this.lineChart5Legend = false;
        this.lineChart5Type = 'line';
    }
    ngOnInit() { }
};
WidgetsComponent.ctorParameters = () => [];
WidgetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-widgets',
        template: _raw_loader_widgets_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_widgets_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WidgetsComponent);



/***/ }),

/***/ "QmWs":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widgets/chart-line-simple/chart-line-simple.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2hhcnQtbGluZS1zaW1wbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiY2hhcnQtbGluZS1zaW1wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Uj3N":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/widgets/chart-bar-simple/chart-bar-simple.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<canvas cNoZoneBaseChart class=\"chart\"\r\n        [datasets]=\"datasets\"\r\n        [labels]=\"labels\"\r\n        [options]=\"options\"\r\n        [colors]=\"colors\"\r\n        [legend]=\"legend\"\r\n        [chartType]=\"chartType\">\r\n</canvas>\r\n");

/***/ }),

/***/ "UtdI":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-style.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-css-custom-properties */ "g9B2");


const minIEVersion = 10
const isIE1x = () => Boolean(document.documentMode) && document.documentMode >= minIEVersion
const isCustomProperty = property => property.match(/^--.*/i)

const getStyle = (property, element = document.body) => {
  let style

  if (isCustomProperty(property) && isIE1x()) {
    const cssCustomProperties = Object(_get_css_custom_properties__WEBPACK_IMPORTED_MODULE_0__["default"])()
    style = cssCustomProperties[property]
  } else {
    style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '')
  }

  return style
}

/* harmony default export */ __webpack_exports__["default"] = (getStyle);


/***/ }),

/***/ "XVX6":
/*!*************************************************!*\
  !*** ./src/app/views/widgets/widgets.module.ts ***!
  \*************************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "FE24");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets.component */ "Q2d6");
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets-routing.module */ "DXaZ");
/* harmony import */ var _widgets_brand_widgets_brand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets-brand/widgets-brand.component */ "2TMg");
/* harmony import */ var _widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets-dropdown/widgets-dropdown.component */ "owmQ");
/* harmony import */ var _chart_line_simple_chart_line_simple_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart-line-simple/chart-line-simple.component */ "eMeQ");
/* harmony import */ var _chart_bar_simple_chart_bar_simple_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chart-bar-simple/chart-bar-simple.component */ "Y1yH");












let WidgetsModule = class WidgetsModule {
};
WidgetsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _widgets_component__WEBPACK_IMPORTED_MODULE_6__["WidgetsComponent"],
            _widgets_brand_widgets_brand_component__WEBPACK_IMPORTED_MODULE_8__["WidgetsBrandComponent"],
            _widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["WidgetsDropdownComponent"],
            _chart_line_simple_chart_line_simple_component__WEBPACK_IMPORTED_MODULE_10__["ChartLineSimpleComponent"],
            _chart_bar_simple_chart_bar_simple_component__WEBPACK_IMPORTED_MODULE_11__["ChartBarSimpleComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _widgets_routing_module__WEBPACK_IMPORTED_MODULE_7__["WidgetsRoutingModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ChartModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["WidgetModule"],
        ],
        exports: [
            _widgets_dropdown_widgets_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["WidgetsDropdownComponent"],
            _widgets_brand_widgets_brand_component__WEBPACK_IMPORTED_MODULE_8__["WidgetsBrandComponent"]
        ]
    })
], WidgetsModule);



/***/ }),

/***/ "Y1yH":
/*!******************************************************************************!*\
  !*** ./src/app/views/widgets/chart-bar-simple/chart-bar-simple.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChartBarSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartBarSimpleComponent", function() { return ChartBarSimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_bar_simple_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-bar-simple.component.html */ "Uj3N");
/* harmony import */ var _chart_bar_simple_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-bar-simple.component.scss */ "5iHM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/chartjs/dist/js/coreui-chartjs.js */ "BMe/");
/* harmony import */ var _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/utils/src */ "lu0M");






let ChartBarSimpleComponent = class ChartBarSimpleComponent {
    constructor() {
        this.color = 'success';
        this.borderColor = 'rgba(255,255,255,.55)';
        this.backgroundColor = 'transparent';
        // datasets
        this.datasets = [
            {
                data: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
                label: 'Serie A',
                barPercentage: 0.5,
                categoryPercentage: 1,
            },
        ];
        // options
        this.options = {
            responsive: true,
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__["customTooltips"],
            },
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scales: {
                xAxes: [
                    {
                        display: false,
                        ticks: {
                            display: false,
                            min: Math.min.apply(Math, this.datasets[0].data) - 5,
                            max: Math.max.apply(Math, this.datasets[0].data) + 5,
                        },
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            elements: {
                line: {
                    borderWidth: 2,
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
        };
        this.labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        this.colors = [
            {
                backgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["getStyle"])('--success') || '#4dbd74',
                // borderColor: getStyle('--success') || '#4dbd74',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            },
        ];
        this.legend = false;
        this.chartType = 'bar';
    }
    ngOnInit() {
        this.colors[0].backgroundColor = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["getColor"])(this.color) || '#4dbd74';
    }
};
ChartBarSimpleComponent.ctorParameters = () => [];
ChartBarSimpleComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ChartBarSimpleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chart-bar-simple',
        template: _raw_loader_chart_bar_simple_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chart_bar_simple_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ChartBarSimpleComponent);



/***/ }),

/***/ "YQRL":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard-charts-data.ts ***!
  \**********************************************************/
/*! exports provided: DashboardChartsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardChartsData", function() { return DashboardChartsData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _Common_common_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Common/common-data.service */ "4qVP");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/data.service */ "AwSQ");


//import { ITableData } from './dashboard';


let DashboardChartsData = class DashboardChartsData {
    constructor(service, commonData) {
        this.service = service;
        this.commonData = commonData;
        this.mainChart = {};
        this.widgetChart = [];
        this.brandBoxChart = {};
        this.barChart = {};
        this.doughnutChart = {};
        this.pieChart = {};
        this.online = {};
        this.offline = {};
        this.statusMachineChart = {};
        this.soldItemsChart = {};
        this.status = [];
        // this.initWidgetCharts();
        // this.initMainChart();
        // this.initBrandCharts();
        // this.initBarCharts();
    }
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
};
DashboardChartsData.ctorParameters = () => [
    { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _Common_common_data_service__WEBPACK_IMPORTED_MODULE_2__["CommonDataService"] }
];
DashboardChartsData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'any',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _Common_common_data_service__WEBPACK_IMPORTED_MODULE_2__["CommonDataService"]])
], DashboardChartsData);



/***/ }),

/***/ "eMeQ":
/*!********************************************************************************!*\
  !*** ./src/app/views/widgets/chart-line-simple/chart-line-simple.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChartLineSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartLineSimpleComponent", function() { return ChartLineSimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chart_line_simple_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chart-line-simple.component.html */ "Nq4P");
/* harmony import */ var _chart_line_simple_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart-line-simple.component.scss */ "QmWs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/chartjs/dist/js/coreui-chartjs.js */ "BMe/");
/* harmony import */ var _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/utils/src */ "lu0M");






let ChartLineSimpleComponent = class ChartLineSimpleComponent {
    constructor() {
        this.color = 'success';
        this.points = [];
        this.label = 'Serie A';
        this.borderColor = 'rgba(255,255,255,.55)';
        this.backgroundColor = 'transparent';
        // datasets
        this.datasets = [
            {
                data: [10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12],
                label: 'Serie A',
            },
        ];
        // options
        this.options = {
            responsive: true,
            tooltips: {
                enabled: false,
                custom: _coreui_chartjs_dist_js_coreui_chartjs_js__WEBPACK_IMPORTED_MODULE_4__["customTooltips"],
            },
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scales: {
                xAxes: [
                    {
                        display: false,
                        ticks: {
                            display: false,
                            min: Math.min.apply(Math, this.datasets[0].data) - 5,
                            max: Math.max.apply(Math, this.datasets[0].data) + 5,
                        },
                    },
                ],
                yAxes: [
                    {
                        display: false,
                    },
                ],
            },
            elements: {
                line: {
                    borderWidth: 2,
                },
                point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                },
            },
        };
        this.labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        this.colors = [
            {
                backgroundColor: 'transparent',
                borderColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["getColor"])(this.color) || '#4dbd74',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
            },
        ];
        this.legend = false;
        this.chartType = 'line';
    }
    ngOnInit() {
        this.colors[0].borderColor = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_5__["getColor"])(this.color) || '#4dbd74';
        if (this.points.length > 0) {
            this.datasets[0].data = this.points;
        }
    }
};
ChartLineSimpleComponent.ctorParameters = () => [];
ChartLineSimpleComponent.propDecorators = {
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    points: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ChartLineSimpleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chart-line-simple',
        template: _raw_loader_chart_line_simple_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chart_line_simple_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ChartLineSimpleComponent);



/***/ }),

/***/ "g9B2":
/*!*********************************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-css-custom-properties.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Licensed under MIT (https://coreui.io/license)
 * @returns {string} css custom property name
 * --------------------------------------------------------------------------
 */
const getCssCustomProperties = () => {
  const cssCustomProperties = {}
  const sheets = document.styleSheets
  let cssText = ''
  for (let i = sheets.length - 1; i > -1; i--) {
    const rules = sheets[i].cssRules
    for (let j = rules.length - 1; j > -1; j--) {
      if (rules[j].selectorText === '.ie-custom-properties') {
        // eslint-disable-next-line prefer-destructuring
        cssText = rules[j].cssText
        break
      }
    }

    if (cssText) {
      break
    }
  }

  // eslint-disable-next-line unicorn/prefer-string-slice
  cssText = cssText.substring(
    cssText.lastIndexOf('{') + 1,
    cssText.lastIndexOf('}')
  )

  cssText.split(';').forEach(property => {
    if (property) {
      const name = property.split(': ')[0]
      const value = property.split(': ')[1]
      if (name && value) {
        cssCustomProperties[`--${name.trim()}`] = value.trim()
      }
    }
  })
  return cssCustomProperties
}

/* harmony default export */ __webpack_exports__["default"] = (getCssCustomProperties);


/***/ }),

/***/ "iKiQ":
/*!**************************************************************!*\
  !*** ./node_modules/@coreui/utils/src/deep-objects-merge.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const deepObjectsMerge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], deepObjectsMerge(target[key], source[key]))
    }
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

/* harmony default export */ __webpack_exports__["default"] = (deepObjectsMerge);


/***/ }),

/***/ "liGE":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/utils/src/get-color.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-style */ "UtdI");


const getColor = (rawProperty, element = document.body) => {
  const property = `--${rawProperty}`
  const style = Object(_get_style__WEBPACK_IMPORTED_MODULE_0__["default"])(property, element)
  return style ? style : rawProperty
}

/* harmony default export */ __webpack_exports__["default"] = (getColor);


/***/ }),

/***/ "lu0M":
/*!*************************************************!*\
  !*** ./node_modules/@coreui/utils/src/index.js ***!
  \*************************************************/
/*! exports provided: default, deepObjectsMerge, getColor, getStyle, hexToRgb, hexToRgba, makeUid, omitByKeys, pickByKeys, rgbToHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deep_objects_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deep-objects-merge */ "iKiQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepObjectsMerge", function() { return _deep_objects_merge__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _get_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-color */ "liGE");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return _get_color__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _get_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-style */ "UtdI");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return _get_style__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _hex_to_rgb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hex-to-rgb */ "xt2l");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return _hex_to_rgb__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hex-to-rgba */ "HK/r");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgba", function() { return _hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _make_uid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./make-uid */ "9DGY");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeUid", function() { return _make_uid__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _omit_by_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./omit-by-keys */ "MRM4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "omitByKeys", function() { return _omit_by_keys__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _pick_by_keys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pick-by-keys */ "B+qb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pickByKeys", function() { return _pick_by_keys__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rgb-to-hex */ "2qTL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__["default"]; });











const utils = {
  deepObjectsMerge: _deep_objects_merge__WEBPACK_IMPORTED_MODULE_0__["default"],
  getColor: _get_color__WEBPACK_IMPORTED_MODULE_1__["default"],
  getStyle: _get_style__WEBPACK_IMPORTED_MODULE_2__["default"],
  hexToRgb: _hex_to_rgb__WEBPACK_IMPORTED_MODULE_3__["default"],
  hexToRgba: _hex_to_rgba__WEBPACK_IMPORTED_MODULE_4__["default"],
  makeUid: _make_uid__WEBPACK_IMPORTED_MODULE_5__["default"],
  omitByKeys: _omit_by_keys__WEBPACK_IMPORTED_MODULE_6__["default"],
  pickByKeys: _pick_by_keys__WEBPACK_IMPORTED_MODULE_7__["default"],
  rgbToHex: _rgb_to_hex__WEBPACK_IMPORTED_MODULE_8__["default"]
}

/* harmony default export */ __webpack_exports__["default"] = (utils);



/***/ }),

/***/ "owmQ":
/*!******************************************************************************!*\
  !*** ./src/app/views/widgets/widgets-dropdown/widgets-dropdown.component.ts ***!
  \******************************************************************************/
/*! exports provided: WidgetsDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsDropdownComponent", function() { return WidgetsDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_widgets_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./widgets-dropdown.component.html */ "KnQi");
/* harmony import */ var _widgets_dropdown_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets-dropdown.component.scss */ "K+u3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dashboard_dashboard_charts_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dashboard/dashboard-charts-data */ "YQRL");





let WidgetsDropdownComponent = class WidgetsDropdownComponent {
    constructor(chartsData) {
        this.chartsData = chartsData;
        this.chart = [];
    }
    ngOnInit() {
        this.chart = this.chartsData.widgetChart;
    }
};
WidgetsDropdownComponent.ctorParameters = () => [
    { type: _dashboard_dashboard_charts_data__WEBPACK_IMPORTED_MODULE_4__["DashboardChartsData"] }
];
WidgetsDropdownComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-widgets-dropdown',
        template: _raw_loader_widgets_dropdown_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_widgets_dropdown_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_dashboard_dashboard_charts_data__WEBPACK_IMPORTED_MODULE_4__["DashboardChartsData"]])
], WidgetsDropdownComponent);



/***/ }),

/***/ "w7HB":
/*!****************************************************************!*\
  !*** ./node_modules/@coreui/utils/dist/coreui-utils.common.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"deepObjectsMerge",(function(){return r})),n.d(t,"getColor",(function(){return u})),n.d(t,"getStyle",(function(){return a})),n.d(t,"hexToRgb",(function(){return s})),n.d(t,"hexToRgba",(function(){return l})),n.d(t,"makeUid",(function(){return f})),n.d(t,"omitByKeys",(function(){return d})),n.d(t,"pickByKeys",(function(){return p})),n.d(t,"rgbToHex",(function(){return g}));var r=function e(t,n){for(var r=0,o=Object.keys(n);r<o.length;r++){var c=o[r];n[c]instanceof Object&&Object.assign(n[c],e(t[c],n[c]))}return Object.assign(t||{},n),t},o=function(){for(var e={},t=document.styleSheets,n="",r=t.length-1;r>-1;r--){for(var o=t[r].cssRules,c=o.length-1;c>-1;c--)if(".ie-custom-properties"===o[c].selectorText){n=o[c].cssText;break}if(n)break}return(n=n.substring(n.lastIndexOf("{")+1,n.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var n=t.split(": ")[0],r=t.split(": ")[1];n&&r&&(e["--".concat(n.trim())]=r.trim())}})),e},c=function(){return Boolean(document.documentMode)&&document.documentMode>=10},i=function(e){return e.match(/^--.*/i)},a=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(i(e)&&c()){var r=o();t=r[e]}else t=window.getComputedStyle(n,null).getPropertyValue(e).replace(/^\s/,"");return t},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,n="--".concat(e),r=a(n,t);return r||e},s=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,n,r;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),n=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(n,", ").concat(r,")")},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var n,r,o,c=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!c)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(n=parseInt(e.slice(1,3),16),r=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(n=parseInt(e.slice(1,2),16),r=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(n,", ").concat(r,", ").concat(o,", ").concat(t/100,")")},f=function(){return"uid-"+Math.random().toString(36).substr(2)},d=function(e,t){for(var n={},r=Object.keys(e),o=0;o<r.length;o++)!t.includes(r[o])&&(n[r[o]]=e[r[o]]);return n},p=function(e,t){for(var n={},r=0;r<t.length;r++)n[t[r]]=e[t[r]];return n},g=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var n="0".concat(parseInt(t[1],10).toString(16)),r="0".concat(parseInt(t[2],10).toString(16)),o="0".concat(parseInt(t[3],10).toString(16));return"#".concat(n.slice(-2)).concat(r.slice(-2)).concat(o.slice(-2))},b={deepObjectsMerge:r,getColor:u,getStyle:a,hexToRgb:s,hexToRgba:l,makeUid:f,omitByKeys:d,pickByKeys:p,rgbToHex:g};t.default=b}]));

/***/ }),

/***/ "xt2l":
/*!******************************************************!*\
  !*** ./node_modules/@coreui/utils/src/hex-to-rgb.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-magic-numbers */
const hexToRgb = color => {
  if (typeof color === 'undefined') {
    throw new TypeError('Hex color is not defined')
  }

  const hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i)

  if (!hex) {
    throw new Error(`${color} is not a valid hex color`)
  }

  let r
  let g
  let b

  if (color.length === 7) {
    r = parseInt(color.slice(1, 3), 16)
    g = parseInt(color.slice(3, 5), 16)
    b = parseInt(color.slice(5, 7), 16)
  } else {
    r = parseInt(color.slice(1, 2), 16)
    g = parseInt(color.slice(2, 3), 16)
    b = parseInt(color.slice(3, 5), 16)
  }

  return `rgba(${r}, ${g}, ${b})`
}

/* harmony default export */ __webpack_exports__["default"] = (hexToRgb);


/***/ })

}]);
//# sourceMappingURL=default~views-dashboard-dashboard-module~views-widgets-widgets-module-es2015.js.map