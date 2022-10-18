(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-theme-theme-module"],{

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

/***/ "7L++":
/*!*************************************************!*\
  !*** ./src/app/views/theme/colors.component.ts ***!
  \*************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_colors_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./colors.component.html */ "ayjt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/utils/src */ "lu0M");





let ColorsComponent = class ColorsComponent {
    constructor(_document) {
        this._document = _document;
    }
    themeColors() {
        Array.from(this._document.querySelectorAll('.theme-color')).forEach((el) => {
            const background = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_4__["getStyle"])('background-color', el);
            const table = this._document.createElement('table');
            table.innerHTML = `
        <table class="w-100">
          <tr>
            <td class="text-muted">HEX:</td>
            <td class="font-weight-bold">${Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_4__["rgbToHex"])(background)}</td>
          </tr>
          <tr>
            <td class="text-muted">RGB:</td>
            <td class="font-weight-bold">${background}</td>
          </tr>
        </table>
      `;
            el.parentNode.appendChild(table);
        });
    }
    ngOnInit() {
        this.themeColors();
    }
};
ColorsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] }
];
ColorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_colors_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], ColorsComponent);



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

/***/ "AgMk":
/*!*********************************************!*\
  !*** ./src/app/views/theme/theme.module.ts ***!
  \*********************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./colors.component */ "7L++");
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typography.component */ "al1H");
/* harmony import */ var _theme_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme-routing.module */ "Mdpn");







// Theme Routing

let ThemeModule = class ThemeModule {
};
ThemeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _theme_routing_module__WEBPACK_IMPORTED_MODULE_7__["ThemeRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_4__["IconModule"],
        ],
        declarations: [_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"], _typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"]],
    })
], ThemeModule);



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

/***/ "Mdpn":
/*!*****************************************************!*\
  !*** ./src/app/views/theme/theme-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ThemeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeRoutingModule", function() { return ThemeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors.component */ "7L++");
/* harmony import */ var _typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typography.component */ "al1H");





const routes = [
    {
        path: '',
        data: {
            title: 'Theme',
        },
        children: [
            {
                path: '',
                redirectTo: 'colors',
            },
            {
                path: 'colors',
                component: _colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"],
                data: {
                    title: 'Colors',
                },
            },
            {
                path: 'typography',
                component: _typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"],
                data: {
                    title: 'Typography',
                },
            },
        ],
    },
];
let ThemeRoutingModule = class ThemeRoutingModule {
};
ThemeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThemeRoutingModule);



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

/***/ "al1H":
/*!*****************************************************!*\
  !*** ./src/app/views/theme/typography.component.ts ***!
  \*****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "nKbt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let TypographyComponent = class TypographyComponent {
    constructor() { }
};
TypographyComponent.ctorParameters = () => [];
TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TypographyComponent);



/***/ }),

/***/ "ayjt":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/colors.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-card>\r\n    <c-card-header>\r\n      Theme colors\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <c-row>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=6 class=\"mb-4\">\r\n          <div class=\"bg-primary theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Brand Primary Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-secondary theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Brand Secondary Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-success theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Brand Success Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-danger theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Brand Danger Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-warning theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Brand Warning Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-info theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Brand Info Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-light theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Brand Light Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-dark theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Brand Dark Color</h6>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n  <c-card>\r\n    <c-card-header>\r\n      Grays\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <c-row class=\"mb-3\">\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-gray-100 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Gray 100 Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-gray-200 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Gray 200 Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-gray-300 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Gray 300 Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-gray-400 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Gray 400 Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-gray-500 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Gray 500 Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-gray-600 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Gray 600 Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-gray-700 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Gray 700 Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-gray-800 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Gray 800 Color</h6>\r\n        </c-col>\r\n        <c-col xl=\"2\" md=\"3\" sm=\"4\" col=\"6\" class=\"mb-4\">\r\n          <div class=\"bg-gray-900 theme-color w-75 rounded mb-2\" style=\"padding-top:75%\"></div>\r\n          <h6>Gray 900 Color</h6>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n</div>\r\n");

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

/***/ "nKbt":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/theme/typography.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-card>\r\n    <c-card-body>\r\n      <table class=\"table\">\r\n        <tbody>\r\n          <tr>\r\n            <td>\r\n              \r\n            </td>\r\n            <td><h1>Under construction</h1></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </c-card-body>\r\n  </c-card>\r\n</div>\r\n");

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
//# sourceMappingURL=views-theme-theme-module-es2015.js.map