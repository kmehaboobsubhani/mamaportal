(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-notifications-notifications-module"],{

/***/ "GA2o":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/badges/badges.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col lg=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Badges\r\n          <c-card-header-actions>\r\n            <a href=\"http://coreui.io/docs/components/bootstrap-badge/\" class=\"c-card-header-action\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </c-card-header-actions>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <h1>Example heading\r\n            <c-badge color=\"secondary\">New</c-badge>\r\n          </h1>\r\n          <h2>Example heading\r\n            <c-badge color=\"secondary\">New</c-badge>\r\n          </h2>\r\n          <h3>Example heading\r\n            <c-badge color=\"secondary\">New</c-badge>\r\n          </h3>\r\n          <h4>Example heading\r\n            <c-badge color=\"secondary\">New</c-badge>\r\n          </h4>\r\n          <h5>Example heading\r\n            <c-badge color=\"secondary\">New</c-badge>\r\n          </h5>\r\n          <h6>Example heading\r\n            <c-badge color=\"secondary\">New</c-badge>\r\n          </h6>\r\n        </c-card-body>\r\n        <c-card-footer>\r\n          <button cButton color=\"primary\" type=\"link\" >Notifications\r\n            <c-badge color=\"light\" shape=\"pill\" class=\"c-ml-1\">9</c-badge>\r\n          </button>\r\n        </c-card-footer>\r\n      </c-card>\r\n    </c-col>\r\n    <c-col lg=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Badges\r\n          <small>contextual variations</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-badge color=\"primary\" class=\"mx-1\">Primary</c-badge>\r\n          <c-badge color=\"secondary\" class=\"mx-1\">Secondary</c-badge>\r\n          <c-badge color=\"success\" class=\"mx-1\">Success</c-badge>\r\n          <c-badge color=\"danger\" class=\"mx-1\">Danger</c-badge>\r\n          <c-badge color=\"warning\" class=\"mx-1\">Warning</c-badge>\r\n          <c-badge color=\"info\" class=\"mx-1\">Info</c-badge>\r\n          <c-badge color=\"light\" class=\"mx-1\">Light</c-badge>\r\n          <c-badge color=\"dark\" class=\"mx-1\">Dark</c-badge>\r\n        </c-card-body>\r\n      </c-card>\r\n      <c-card>\r\n        <c-card-header>\r\n          Badges\r\n          <small>pill badges</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-badge shape=\"pill\" color=\"primary\" class=\"mx-1\">Primary</c-badge>\r\n          <c-badge shape=\"pill\" color=\"secondary\" class=\"mx-1\">Secondary</c-badge>\r\n          <c-badge shape=\"pill\" color=\"success\" class=\"mx-1\">Success</c-badge>\r\n          <c-badge shape=\"pill\" color=\"danger\" class=\"mx-1\">Danger</c-badge>\r\n          <c-badge shape=\"pill\" color=\"warning\" class=\"mx-1\">Warning</c-badge>\r\n          <c-badge shape=\"pill\" color=\"info\" class=\"mx-1\">Info</c-badge>\r\n          <c-badge shape=\"pill\" color=\"light\" class=\"mx-1\">Light</c-badge>\r\n          <c-badge shape=\"pill\" color=\"dark\" class=\"mx-1\">Dark</c-badge>\r\n        </c-card-body>\r\n      </c-card>\r\n      <c-card>\r\n        <c-card-header>\r\n          Badges\r\n          <small>links</small>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <a href=\"#\" class=\"mx-1\">\r\n            <c-badge color=\"primary\">Primary</c-badge>\r\n          </a>\r\n          <a href=\"#\" class=\"mx-1\">\r\n            <c-badge color=\"secondary\">Secondary</c-badge>\r\n          </a>\r\n          <a href=\"#\" class=\"mx-1\">\r\n            <c-badge color=\"success\">Success</c-badge>\r\n          </a>\r\n          <a href=\"#\" class=\"mx-1\">\r\n            <c-badge color=\"danger\">Danger</c-badge>\r\n          </a>\r\n          <a href=\"#\" class=\"mx-1\">\r\n            <c-badge color=\"warning\">Warning</c-badge>\r\n          </a>\r\n          <a href=\"#\" class=\"mx-1\">\r\n            <c-badge color=\"info\">Info</c-badge>\r\n          </a>\r\n          <a href=\"#\" class=\"mx-1\">\r\n            <c-badge color=\"light\">Light</c-badge>\r\n          </a>\r\n          <a href=\"#\" class=\"mx-1\">\r\n            <c-badge color=\"dark\">Dark</c-badge>\r\n          </a>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n");

/***/ }),

/***/ "Jm6G":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/alerts/alerts.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          <strong>Bootstrap Alerts</strong>\r\n          <c-card-header-actions>\r\n            <a href=\"https://coreui.io\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </c-card-header-actions>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <div *ngFor=\"let alert of colors\">\r\n            <c-alert [color]=\"alert\">\r\n              <span>This is a <strong class=\"text-{{ alert }}\">{{ alert }}</strong> alert — check it out!</span>\r\n            </c-alert>\r\n          </div>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          <strong>Alert</strong>{{ ' ' }}<small>links</small>\r\n          <c-card-header-actions>\r\n            <a href=\"https://coreui.io\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </c-card-header-actions>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <div *ngFor=\"let alert of colors\">\r\n            <c-alert [color]=\"alert\">\r\n              <span>This is a <strong>{{ alert }}</strong> alert with an <a href=\"#\" class=\"c-alert-link\">example link</a>. Give it a click if you like.</span>\r\n            </c-alert>\r\n          </div>\r\n\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          <strong>Alert</strong> with timeout\r\n          <c-card-header-actions>\r\n            <a href=\"https://coreui.io\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </c-card-header-actions>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-alert color=\"warning\" [show]=\"!!showTime[0]\" [fade]=\"true\" [timeout]=\"showTime[0]\" (dismissed)=\"showTime[0]=0\" closeButton=\"true\">\r\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\r\n          </c-alert>\r\n          <c-alert #alert1 color=\"danger\" [show]=\"!!showTime[1]\" [fade]=\"true\" [timeout]=\"showTime[1]\" (dismissed)=\"showTime[1]=0\">\r\n            <strong class=\"c-alert-heading\">Alert</strong> dismiss in {{(showTime[1] / 1000) - alert1.clock}} seconds.\r\n          </c-alert>\r\n          <c-alert #alert2 color=\"success\" [show]=\"!!showTime[2]\" [fade]=\"true\" [timeout]=\"showTime[2]\" (dismissed)=\"showTime[2]=0\">\r\n            <strong class=\"c-alert-heading\">Alert</strong> dismiss in {{(showTime[2] / 1000) - alert2.clock}} seconds.\r\n            <c-progress size=\"xs\">\r\n              <c-progress-bar [value]=\"(showTime[2] / 1000) - alert2.clock\" [max]=\"showTime[2]/1000\" color=\"success\"></c-progress-bar>\r\n            </c-progress>\r\n          </c-alert>\r\n          <hr>\r\n          <button cButton color=\"secondary\" (click)=\"onResetShowTime()\">Reset</button>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          <strong>Alert</strong> dismissible\r\n          <c-card-header-actions>\r\n            <a href=\"https://coreui.io\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </c-card-header-actions>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-alert color=\"warning\" [closeButton]=\"dismissible\" [fade]=\"true\" (dismissed)=\"onDismiss(0)\" [show]=\"showDismiss[0]\" >\r\n            <strong>Holy guacamole!</strong> You should check in on some of those fields below.\r\n          </c-alert>\r\n          <c-alert color=\"danger\" [closeButton]=\"dismissible\" [fade]=\"true\" (dismissed)=\"onDismiss(1)\" [show]=\"showDismiss[1]\" iconHtml=\"<i class='cil-ban'></i>\">\r\n            <strong class=\"c-alert-heading\">Holy guacamole!</strong> You should check in on some of those fields below.\r\n          </c-alert>\r\n          <c-alert color=\"success\" [closeButton]=\"dismissible\" [fade]=\"false\" (dismissed)=\"onDismiss(2)\" [show]=\"showDismiss[2]\">\r\n            <strong class=\"c-alert-heading\">No fade!</strong> You should check in on some of those fields below.\r\n          </c-alert>\r\n          <hr>\r\n          <button cButton color=\"primary\" [ngClass]=\"'mfe-1'\" (click)=\"onToggleDismiss()\">Toggle</button>\r\n          <button cButton color=\"secondary\" (click)=\"onResetDismiss()\">Reset</button>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n  <c-row>\r\n    <c-col md=\"6\">\r\n      <c-card>\r\n        <c-card-header>\r\n          <strong>Alert</strong> with additional content\r\n          <c-card-header-actions>\r\n            <a href=\"https://coreui.io\" target=\"_blank\">\r\n              <small class=\"text-muted\">docs</small>\r\n            </a>\r\n          </c-card-header-actions>\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <c-alert [color]=\"color\">\r\n            <h4 class=\"c-alert-heading\">Well done!</h4>\r\n            <span>\r\n              <p>You successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>\r\n              <hr>\r\n              <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\r\n            </span>\r\n          </c-alert>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n");

/***/ }),

/***/ "KpDv":
/*!*************************************************************!*\
  !*** ./src/app/views/notifications/notifications.module.ts ***!
  \*************************************************************/
/*! exports provided: NotificationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsModule", function() { return NotificationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons-angular */ "rVqu");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alerts/alerts.component */ "aJx0");
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./badges/badges.component */ "pIWP");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/modals.component */ "QKUK");
/* harmony import */ var _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toasters/toasters.component */ "W/rb");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notifications-routing.module */ "jSGo");
/* harmony import */ var _toasters_toast_simple_toast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toasters/toast-simple/toast.component */ "yxes");




// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// CoreUI Modules


// views




// Notifications Routing

// Simple Toast

let NotificationsModule = class NotificationsModule {
};
NotificationsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            // BrowserAnimationsModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_10__["NotificationsRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["AlertModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["BadgeModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["GridModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ProgressModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ToastModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_5__["IconModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["FormModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ToastModule"],
        ],
        declarations: [
            _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_6__["AlertsComponent"],
            _badges_badges_component__WEBPACK_IMPORTED_MODULE_7__["BadgesComponent"],
            _modals_modals_component__WEBPACK_IMPORTED_MODULE_8__["ModalsComponent"],
            _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_9__["ToastersComponent"],
            _toasters_toast_simple_toast_component__WEBPACK_IMPORTED_MODULE_11__["AppToastComponent"],
        ],
    })
], NotificationsModule);



/***/ }),

/***/ "QKUK":
/*!****************************************************************!*\
  !*** ./src/app/views/notifications/modals/modals.component.ts ***!
  \****************************************************************/
/*! exports provided: ModalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsComponent", function() { return ModalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modals_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modals.component.html */ "Z2Ab");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let ModalsComponent = class ModalsComponent {
    constructor() {
        this.text = '';
    }
};
ModalsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_modals_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ModalsComponent);



/***/ }),

/***/ "W/rb":
/*!********************************************************************!*\
  !*** ./src/app/views/notifications/toasters/toasters.component.ts ***!
  \********************************************************************/
/*! exports provided: Colors, ToastersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Colors", function() { return Colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastersComponent", function() { return ToastersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toasters_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toasters.component.html */ "spXE");
/* harmony import */ var _toasters_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toasters.component.scss */ "mtXW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
/* harmony import */ var _toast_simple_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./toast-simple/toast.component */ "yxes");








var Colors;
(function (Colors) {
    Colors[""] = "";
    Colors["primary"] = "primary";
    Colors["secondary"] = "secondary";
    Colors["success"] = "success";
    Colors["info"] = "info";
    Colors["warning"] = "warning";
    Colors["danger"] = "danger";
    Colors["dark"] = "dark";
    Colors["light"] = "light";
})(Colors || (Colors = {}));
let ToastersComponent = class ToastersComponent {
    constructor() {
        this.positions = Object.values(_coreui_angular__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"]);
        this.position = _coreui_angular__WEBPACK_IMPORTED_MODULE_6__["ToasterPosition"].TopRight;
        this.colors = Object.keys(Colors);
        this.autohide = true;
        this.delay = 5000;
        this.fade = true;
        this.toasterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            autohide: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.autohide),
            delay: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.delay, disabled: !this.autohide }),
            position: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.position),
            fade: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: true, disabled: false }),
            closeButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](true),
            color: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.formChanges = this.toasterForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(e => e.autohide !== this.autohide));
        this.formChanges.subscribe(e => {
            var _a;
            this.autohide = e.autohide;
            this.position = e.position;
            this.fade = e.fade;
            const control = (_a = this.toasterForm) === null || _a === void 0 ? void 0 : _a.get('delay');
            this.autohide ? control.enable() : control.disable();
            this.delay = control.enabled ? e.timeout : this.delay;
        });
    }
    addToast() {
        const formValues = this.toasterForm.value;
        const toasterPosition = this.viewChildren.filter(item => item.position === this.toasterForm.value.position);
        toasterPosition.forEach((item) => {
            const title = `Toast ${formValues.color} ${formValues.position}`;
            const options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(Object.assign(Object.assign({}, formValues), { title }), []);
            const componentRef = item.addToast(_toast_simple_toast_component__WEBPACK_IMPORTED_MODULE_7__["AppToastComponent"], options);
            componentRef.instance['closeButton'] = options.closeButton;
        });
    }
};
ToastersComponent.propDecorators = {
    viewChildren: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: [_coreui_angular__WEBPACK_IMPORTED_MODULE_6__["ToasterComponent"],] }]
};
ToastersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-toasters',
        template: _raw_loader_toasters_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_toasters_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ToastersComponent);



/***/ }),

/***/ "Z2Ab":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/modals/modals.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-row>\r\n    <c-col lg=\"12\">\r\n      <c-card>\r\n        <c-card-header>\r\n          Modals\r\n        </c-card-header>\r\n        <c-card-body>\r\n          <!-- Button trigger modal -->\r\n          <button cButton color=\"secondary\" class=\"mr-1\" (click)=\"defaultModal.show()\">\r\n            Launch default modal\r\n          </button>\r\n          <button cButton color=\"secondary\" class=\"mr-1\" (click)=\"lgModal.show()\">\r\n            Launch large modal\r\n          </button>\r\n          <button cButton color=\"secondary\" class=\"mr-1\" (click)=\"smModal.show()\">\r\n            Launch small modal\r\n          </button>\r\n          <button cButton color=\"secondary\" class=\"mr-1\" (click)=\"xlModal.show()\">\r\n            Launch xl modal\r\n          </button>\r\n          <hr>\r\n          <button cButton color=\"primary\" class=\"mr-1\" (click)=\"primaryModal.show()\">\r\n            Primary modal\r\n          </button>\r\n          <button cButton color=\"success\" class=\"mr-1\" (click)=\"successModal.show()\">\r\n            Success modal\r\n          </button>\r\n          <button cButton color=\"warning\" class=\"mr-1\" (click)=\"warningModal.show()\">\r\n            Warning modal\r\n          </button>\r\n          <button cButton color=\"danger\" class=\"mr-1\" (click)=\"dangerModal.show()\">\r\n            Danger modal\r\n          </button>\r\n          <button cButton color=\"info\" class=\"mr-1\" (click)=\"infoModal.show()\">\r\n            Info modal\r\n          </button>\r\n        </c-card-body>\r\n      </c-card>\r\n    </c-col>\r\n  </c-row>\r\n</div>\r\n\r\n<c-modal #defaultModal [closeOnBackdrop]=\"false\">\r\n  <ng-template #modalHeader>\r\n    <h4 class=\"c-modal-title\">Default modal</h4>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <p>One fine body&hellip;</p>\r\n  </ng-template>\r\n  <ng-template #modalFooter>\r\n    <button cButton color=\"secondary\" (click)=\"defaultModal.hide()\">Close</button>\r\n    <button cButton color=\"primary\" >Save changes</button>\r\n  </ng-template>\r\n</c-modal>\r\n\r\n<c-modal #lgModal size=\"lg\">\r\n  <ng-template #modalHeader>\r\n    <h4 class=\"c-modal-title\">Large modal</h4>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <p class=\"text-center\">One fine body&hellip;</p>\r\n  </ng-template>\r\n  <ng-template #modalFooter>\r\n    <button cButton color=\"secondary\" (click)=\"lgModal.hide()\">Close</button>\r\n    <button cButton color=\"primary\" >Save changes</button>\r\n  </ng-template>\r\n</c-modal>\r\n\r\n<c-modal #smModal size=\"sm\">\r\n  <ng-template #modalHeader>\r\n    <h4 class=\"c-modal-title\">Small modal</h4>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <p>One fine body&hellip;</p>\r\n  </ng-template>\r\n  <ng-template #modalFooter>\r\n    <button cButton color=\"secondary\" (click)=\"smModal.hide()\">Close</button>\r\n    <button cButton color=\"primary\" >Save changes</button>\r\n  </ng-template>\r\n</c-modal>\r\n\r\n<c-modal #xlModal size=\"xl\">\r\n  <ng-template #modalHeader>\r\n    <h4 class=\"c-modal-title\">XL modal</h4>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <p>One fine body&hellip;</p>\r\n  </ng-template>\r\n  <ng-template #modalFooter>\r\n    <button cButton color=\"secondary\" (click)=\"xlModal.hide()\">Close</button>\r\n    <button cButton color=\"primary\" >Save changes</button>\r\n  </ng-template>\r\n</c-modal>\r\n\r\n<c-modal #primaryModal color=\"primary\">\r\n  <ng-template #modalHeader>\r\n    <h4 class=\"c-modal-title\">Primary modal</h4>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <p>One fine body&hellip;</p>\r\n  </ng-template>\r\n  <ng-template #modalFooter>\r\n    <button cButton color=\"secondary\" (click)=\"primaryModal.hide()\">Close</button>\r\n    <button cButton color=\"primary\" >Save changes</button>\r\n  </ng-template>\r\n</c-modal>\r\n\r\n<c-modal #successModal color=\"success\">\r\n  <ng-template #modalHeader>\r\n    <h4 class=\"c-modal-title\">Success modal</h4>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <p>One fine body&hellip;</p>\r\n  </ng-template>\r\n  <ng-template #modalFooter>\r\n    <button cButton color=\"secondary\" (click)=\"successModal.hide()\">Close</button>\r\n    <button cButton color=\"success\" >Save changes</button>\r\n  </ng-template>\r\n</c-modal>\r\n\r\n<c-modal #warningModal color=\"warning\">\r\n  <ng-template #modalHeader>\r\n    <h4 class=\"c-modal-title\">Warning modal</h4>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <p>One fine body&hellip;</p>\r\n  </ng-template>\r\n  <ng-template #modalFooter>\r\n    <button cButton color=\"secondary\" (click)=\"warningModal.hide()\">Close</button>\r\n    <button cButton color=\"warning\" >Save changes</button>\r\n  </ng-template>\r\n</c-modal>\r\n\r\n<c-modal #dangerModal color=\"danger\">\r\n  <ng-template #modalHeader>\r\n    <h4 class=\"c-modal-title\">Danger modal</h4>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <p>One fine body&hellip;</p>\r\n  </ng-template>\r\n  <ng-template #modalFooter>\r\n    <button cButton color=\"secondary\" (click)=\"dangerModal.hide()\">Close</button>\r\n    <button cButton color=\"danger\" >Save changes</button>\r\n  </ng-template>\r\n</c-modal>\r\n\r\n<c-modal #infoModal color=\"info\">\r\n  <ng-template #modalHeader>\r\n    <h4 class=\"c-modal-title\">Info modal</h4>\r\n  </ng-template>\r\n  <ng-template #modalBody>\r\n    <p>One fine body&hellip;</p>\r\n  </ng-template>\r\n  <ng-template #modalFooter>\r\n    <button cButton color=\"secondary\" (click)=\"infoModal.hide()\">Close</button>\r\n    <button cButton color=\"info\" >Save changes</button>\r\n  </ng-template>\r\n</c-modal>\r\n");

/***/ }),

/***/ "aJx0":
/*!****************************************************************!*\
  !*** ./src/app/views/notifications/alerts/alerts.component.ts ***!
  \****************************************************************/
/*! exports provided: AlertsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsComponent", function() { return AlertsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_alerts_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./alerts.component.html */ "Jm6G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let AlertsComponent = class AlertsComponent {
    constructor() {
        this.colors = [
            'primary',
            'secondary ',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
        ];
        this.showTime = [3000, 6000, 9000];
        this.showDismiss = [true, true, true];
        this.show = false;
        this.color = 'info';
        this.dismissible = true;
        this.timeouts = [];
    }
    ngOnInit() {
        this.setTimers();
    }
    ngOnDestroy() {
        this.clearTimeouts();
    }
    clearTimeouts() {
        this.timeouts.map((item, index) => {
            clearTimeout(this.timeouts[index]);
            this.timeouts[index] = null;
        });
    }
    setTimers() {
        this.showTime.map((time, index) => {
            this.timeouts[index] = setTimeout(() => {
                // this.showTime[index] = item;
            }, time);
        });
    }
    onResetShowTime() {
        this.clearTimeouts();
        this.showTime = [3000, 6000, 9000];
        this.setTimers();
    }
    onDismiss(id) {
        this.showDismiss[id] = false;
    }
    onResetDismiss() {
        this.showDismiss = [true, true, true];
    }
    onToggleDismiss() {
        this.dismissible = !this.dismissible;
    }
};
AlertsComponent.ctorParameters = () => [];
AlertsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_alerts_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AlertsComponent);



/***/ }),

/***/ "bQaa":
/*!********************************************************************************!*\
  !*** ./src/app/views/notifications/toasters/toast-simple/toast.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "j7J6":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/toasters/toast-simple/toast.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container>\r\n  <c-toast-header [closeButton]=\"closeButton\"><i>{{title}}</i></c-toast-header>\r\n  <c-toast-body #toast [cToastClose]=\"toast.toast\">\r\n    <div>This is a dynamic toast no {{index}} {{clock}}</div>\r\n    <ng-content></ng-content>\r\n  </c-toast-body>\r\n</ng-container>\r\n");

/***/ }),

/***/ "jSGo":
/*!*********************************************************************!*\
  !*** ./src/app/views/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsRoutingModule", function() { return NotificationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alerts/alerts.component */ "aJx0");
/* harmony import */ var _badges_badges_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./badges/badges.component */ "pIWP");
/* harmony import */ var _modals_modals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/modals.component */ "QKUK");
/* harmony import */ var _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./toasters/toasters.component */ "W/rb");







const routes = [
    {
        path: '',
        data: {
            title: 'Notifications',
        },
        children: [
            {
                path: '',
                redirectTo: 'alerts',
            },
            {
                path: 'alerts',
                component: _alerts_alerts_component__WEBPACK_IMPORTED_MODULE_3__["AlertsComponent"],
                data: {
                    title: 'Alerts',
                },
            },
            {
                path: 'badges',
                component: _badges_badges_component__WEBPACK_IMPORTED_MODULE_4__["BadgesComponent"],
                data: {
                    title: 'Badges',
                },
            },
            {
                path: 'modals',
                component: _modals_modals_component__WEBPACK_IMPORTED_MODULE_5__["ModalsComponent"],
                data: {
                    title: 'Modals',
                },
            },
            {
                path: 'toasters',
                component: _toasters_toasters_component__WEBPACK_IMPORTED_MODULE_6__["ToastersComponent"],
                data: {
                    title: 'Toasters',
                },
            },
        ],
    },
];
let NotificationsRoutingModule = class NotificationsRoutingModule {
};
NotificationsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsRoutingModule);



/***/ }),

/***/ "mtXW":
/*!**********************************************************************!*\
  !*** ./src/app/views/notifications/toasters/toasters.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b2FzdGVycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pIWP":
/*!****************************************************************!*\
  !*** ./src/app/views/notifications/badges/badges.component.ts ***!
  \****************************************************************/
/*! exports provided: BadgesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgesComponent", function() { return BadgesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_badges_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./badges.component.html */ "GA2o");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");



let BadgesComponent = class BadgesComponent {
    constructor() { }
};
BadgesComponent.ctorParameters = () => [];
BadgesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_badges_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], BadgesComponent);



/***/ }),

/***/ "spXE":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/notifications/toasters/toasters.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"fade-in\">\r\n  <c-card>\r\n    <c-card-header>\r\n      Toaster\r\n  <!--    <DocsLink name=\"-Toast\"/>-->\r\n    </c-card-header>\r\n    <c-card-body>\r\n      <c-container>\r\n        <c-row>\r\n          <c-col sm=\"12\" lg=\"6\">\r\n            <form cForm [formGroup]=\"toasterForm\">\r\n              <h5>Add toast with following props:</h5>\r\n\r\n              <c-form-check custom variant=\"checkbox\" class=\"my-2 mt-4\">\r\n                <input cInput type=\"checkbox\" formControlName=\"autohide\" class=\"custom-control-input\" id=\"autohide\">\r\n                <label cLabel class=\"custom-control-label\" for=\"autohide\">\r\n                  Toast autohide\r\n                </label>\r\n              </c-form-check>\r\n\r\n              <c-form-group>\r\n                <label cLabel for=\"delay\">Delay</label >\r\n                <input cInput type=\"number\" formControlName=\"delay\" id=\"delay\">\r\n              </c-form-group>\r\n\r\n              <c-form-group class=\"my-2\">\r\n                <label cLabel>Position</label>\r\n                <select cSelect formControlName=\"position\">\r\n                  <option *ngFor=\"let position of positions\" [ngValue]=\"position\">\r\n                    {{position}}\r\n                  </option>\r\n                </select>\r\n              </c-form-group>\r\n\r\n              <c-form-group class=\"my-2\">\r\n                <label cLabel>Color</label>\r\n                <select cSelect formControlName=\"color\">\r\n                  <option *ngFor=\"let color of colors\" [ngValue]=\"color\">\r\n                    {{color}}\r\n                  </option>\r\n                </select>\r\n              </c-form-group>\r\n\r\n              <c-form-check custom variant=\"checkbox\" class=\"my-2\">\r\n                <input cInput type=\"checkbox\" formControlName=\"fade\" class=\"custom-control-input\" id=\"fade\">\r\n                <label cLabel class=\"custom-control-label\" for=\"fade\">Fade</label>\r\n              </c-form-check>\r\n\r\n              <c-form-check custom variant=\"checkbox\" class=\"my-2\">\r\n                <input cInput type=\"checkbox\" formControlName=\"closeButton\" class=\"custom-control-input\" id=\"close\">\r\n                <label cLabel class=\"custom-control-label\" for=\"close\">Close Button</label>\r\n              </c-form-check>\r\n              <hr/>\r\n              <button cButton class=\"mfe-1 w-25\" color=\"success\" (click)=\"addToast()\">\r\n                Add toast\r\n              </button>\r\n            </form>\r\n          </c-col>\r\n          <c-col>\r\n            <c-toaster position=\"static\">\r\n              <c-toast [show]=\"true\" [autohide]=\"false\" [fade]=\"true\">\r\n                <c-toast-header>Toast title</c-toast-header>\r\n                <c-toast-body>This is a static toast in a static toaster</c-toast-body>\r\n              </c-toast>\r\n              <c-toast [show]=\"true\" color=\"dark\" [fade]=\"true\">\r\n                <c-toast-header [closeButton]=\"false\">Toast title</c-toast-header>\r\n                <c-toast-body>This is a static toast in a static toaster</c-toast-body>\r\n              </c-toast>\r\n              <app-toast-simple [autohide]=\"false\" [show]=\"true\" color=\"secondary\" [title]=\"'App Toast'\" [fade]=\"true\" #at>This is a toast in static positioned App toaster! {{at.index}}</app-toast-simple>\r\n            </c-toaster>\r\n            <c-toaster *ngFor=\"let pos of positions | slice : 1\" position=\"{{pos}}\"></c-toaster>\r\n          </c-col>\r\n        </c-row>\r\n      </c-container>\r\n    </c-card-body>\r\n  </c-card>\r\n  <c-card>\r\n    <c-card-body>\r\n      <c-row>\r\n        <c-col>\r\n          <p>Form value: {{ toasterForm.value | json }}</p>\r\n        </c-col>\r\n      </c-row>\r\n    </c-card-body>\r\n  </c-card>\r\n</div>\r\n");

/***/ }),

/***/ "yxes":
/*!******************************************************************************!*\
  !*** ./src/app/views/notifications/toasters/toast-simple/toast.component.ts ***!
  \******************************************************************************/
/*! exports provided: AppToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppToastComponent", function() { return AppToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_toast_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./toast.component.html */ "j7J6");
/* harmony import */ var _toast_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.component.scss */ "bQaa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ "Iluq");
var AppToastComponent_1;





let AppToastComponent = AppToastComponent_1 = class AppToastComponent extends _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"] {
    constructor(hostElement, renderer, ref, toasterService) {
        super(hostElement, renderer, ref, toasterService);
        this.hostElement = hostElement;
        this.renderer = renderer;
        this.ref = ref;
        this.toasterService = toasterService;
        this.autohide = true;
        this.delay = 1000;
        this.fade = true;
        this.closeButton = true;
        this.title = '';
    }
    doShow() {
        this.show = true;
    }
    doHide() {
        this.show = false;
    }
};
AppToastComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ToasterService"] }
];
AppToastComponent.propDecorators = {
    autohide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    delay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    fade: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    closeButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AppToastComponent = AppToastComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-toast-simple',
        template: _raw_loader_toast_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        providers: [{ provide: _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => AppToastComponent_1) }],
        styles: [_toast_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"],
        _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
], AppToastComponent);



/***/ })

}]);
//# sourceMappingURL=views-notifications-notifications-module-es2015.js.map