!function(){function e(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==t)return;var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}(e,n)||o(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+1an":function(n,o,i){"use strict";i.r(o),i.d(o,"DraggableCardsModule",function(){return G});var c,u,s,l=i("SVse"),d=i("YS7c"),f=i.n(d),v=i("8Y7J"),h=i("XNiG"),m=i("quSY"),p=i("pLZG"),g=i("lJxs"),b=function e(n,t,r){a(this,e),this.name=n,this.drake=t,this.options=r,this.initEvents=!1},y={Cancel:"cancel",Cloned:"cloned",Drag:"drag",DragEnd:"dragend",Drop:"drop",Out:"out",Over:"over",Remove:"remove",Shadow:"shadow",DropModel:"dropModel",RemoveModel:"removeModel"},w=Object.keys(y).map(function(e){return y[e]}),O=f.a||d,C=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;a(this,e),this.build=n},S=function(e,n,t){return function(r){return r.pipe(Object(p.a)(function(t){var r=t.event,o=t.name;return r===e&&(void 0===n||o===n)}),Object(g.a)(function(e){var n=e.name,r=e.args;return t(n,r)}))}},k=function(e,n){var t=r(n,3);return{name:e,el:t[0],container:t[1],source:t[2]}},E=((s=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;a(this,e),this.drakeFactory=t,this.dispatch$=new h.a,this.drag=function(e){return n.dispatch$.pipe(S(y.Drag,e,function(e,n){var t=r(n,2);return{name:e,el:t[0],source:t[1]}}))},this.dragend=function(e){return n.dispatch$.pipe(S(y.DragEnd,e,function(e,n){return{name:e,el:r(n,1)[0]}}))},this.drop=function(e){return n.dispatch$.pipe(S(y.Drop,e,function(e,n){var t=r(n,4);return{name:e,el:t[0],target:t[1],source:t[2],sibling:t[3]}}))},this.elContainerSource=function(e){return function(t){return n.dispatch$.pipe(S(e,t,k))}},this.cancel=this.elContainerSource(y.Cancel),this.remove=this.elContainerSource(y.Remove),this.shadow=this.elContainerSource(y.Shadow),this.over=this.elContainerSource(y.Over),this.out=this.elContainerSource(y.Out),this.cloned=function(e){return n.dispatch$.pipe(S(y.Cloned,e,function(e,n){var t=r(n,3);return{name:e,clone:t[0],original:t[1],cloneType:t[2]}}))},this.dropModel=function(e){return n.dispatch$.pipe(S(y.DropModel,e,function(e,n){var t=r(n,9);return{name:e,el:t[0],target:t[1],source:t[2],sibling:t[3],item:t[4],sourceModel:t[5],targetModel:t[6],sourceIndex:t[7],targetIndex:t[8]}}))},this.removeModel=function(e){return n.dispatch$.pipe(S(y.RemoveModel,e,function(e,n){var t=r(n,6);return{name:e,el:t[0],container:t[1],source:t[2],item:t[3],sourceModel:t[4],sourceIndex:t[5]}}))},this.groups={},null===this.drakeFactory&&(this.drakeFactory=new C)}return t(e,[{key:"add",value:function(e){if(this.find(e.name))throw new Error('Group named: "'+e.name+'" already exists.');return this.groups[e.name]=e,this.handleModels(e),this.setupEvents(e),e}},{key:"find",value:function(e){return this.groups[e]}},{key:"destroy",value:function(e){var n=this.find(e);n&&(n.drake&&n.drake.destroy(),delete this.groups[e])}},{key:"createGroup",value:function(e,n){return this.add(new b(e,this.drakeFactory.build([],n),n))}},{key:"handleModels",value:function(e){var n,t,r,o=this,i=e.name,a=e.drake,c=e.options;a.on("remove",function(e,n,r){if(a.models){var c=a.models[a.containers.indexOf(r)],u=(c=c.slice(0)).splice(t,1)[0];o.dispatch$.next({event:y.RemoveModel,name:i,args:[e,n,r,u,c,t]})}}),a.on("drag",function(e,r){a.models&&(n=e,t=o.domIndexOf(e,r))}),a.on("drop",function(e,u,s,l){if(a.models&&u){r=o.domIndexOf(e,u);var d,f=a.models[a.containers.indexOf(s)],v=a.models[a.containers.indexOf(u)];if(u===s)d=(f=f.slice(0)).splice(t,1)[0],f.splice(r,0,d),v=f;else{var h=n!==e;if(d=f[t],h){if(!c.copyItem)throw new Error("If you have enabled `copy` on a group, you must provide a `copyItem` function.");d=c.copyItem(d)}if(h||(f=f.slice(0)).splice(t,1),(v=v.slice(0)).splice(r,0,d),h)try{u.removeChild(e)}catch(m){}}o.dispatch$.next({event:y.DropModel,name:i,args:[e,u,s,l,d,f,v,t,r]})}})}},{key:"setupEvents",value:function(e){var n=this;if(!e.initEvents){e.initEvents=!0;var t=e.name;w.forEach(function(r){e.drake.on(r,function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];n.dispatch$.next({event:r,name:t,args:o})})})}}},{key:"domIndexOf",value:function(e,n){return Array.prototype.indexOf.call(n.children,e)}}]),e}()).\u0275fac=function(e){return new(e||s)(v.hc(C,8))},s.\u0275prov=v.Qb({token:s,factory:s.\u0275fac}),s),x=((u=function(){function e(n,t){a(this,e),this.el=n,this.dragulaService=t,this.dragulaModelChange=new v.p}return t(e,[{key:"container",get:function(){return this.el&&this.el.nativeElement}},{key:"ngOnChanges",value:function(e){if(e&&e.dragula){var n=e.dragula,t=n.previousValue,r=!!n.currentValue;!!t&&this.teardown(t),r&&this.setup()}else if(e&&e.dragulaModel){var o=e.dragulaModel,i=o.previousValue,a=o.currentValue,c=this.group.drake;if(this.dragula&&c){c.models=c.models||[];var u=c.models.indexOf(i);-1!==u?(c.models.splice(u,1),a&&c.models.splice(u,0,a)):a&&c.models.push(a)}}}},{key:"setup",value:function(){var e=this,n=this.dragulaService.find(this.dragula);n||(n=this.dragulaService.createGroup(this.dragula,{})),function(n){e.dragulaModel&&(n.drake.models?n.drake.models.push(e.dragulaModel):n.drake.models=[e.dragulaModel])}(n),n.drake.containers.push(this.container),this.subscribe(this.dragula),this.group=n}},{key:"subscribe",value:function(e){var n=this;this.subs=new m.a,this.subs.add(this.dragulaService.dropModel(e).subscribe(function(e){var t=e.source,r=e.target,o=e.sourceModel,i=e.targetModel;t===n.el.nativeElement?n.dragulaModelChange.emit(o):r===n.el.nativeElement&&n.dragulaModelChange.emit(i)})),this.subs.add(this.dragulaService.removeModel(e).subscribe(function(e){var t=e.source,r=e.sourceModel;t===n.el.nativeElement&&n.dragulaModelChange.emit(r)}))}},{key:"teardown",value:function(e){this.subs&&this.subs.unsubscribe();var n=this.dragulaService.find(e);if(n){var t=n.drake.containers.indexOf(this.el.nativeElement);if(-1!==t&&n.drake.containers.splice(t,1),this.dragulaModel&&n.drake&&n.drake.models){var r=n.drake.models.indexOf(this.dragulaModel);-1!==r&&n.drake.models.splice(r,1)}}}},{key:"ngOnDestroy",value:function(){this.teardown(this.dragula)}}]),e}()).\u0275fac=function(e){return new(e||u)(v.Ub(v.n),v.Ub(E))},u.\u0275dir=v.Pb({type:u,selectors:[["","dragula",""]],inputs:{dragula:"dragula",dragulaModel:"dragulaModel"},outputs:{dragulaModelChange:"dragulaModelChange"},features:[v.Gb]}),u),M=((c=function(){function e(){a(this,e)}return t(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[E]}}}]),e}()).\u0275fac=function(e){return new(e||c)},c.\u0275mod=v.Sb({type:c}),c.\u0275inj=v.Rb({}),c);new C(function(e,n){return new R(e,n)});var I,Z,D,R=function(){function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0;a(this,n),this.containers=e,this.options=t,this.models=r,this.dragging=!1,this.emitter$=new h.a,this.subs=new m.a}return t(n,[{key:"start",value:function(e){this.dragging=!0}},{key:"end",value:function(){this.dragging=!1}},{key:"cancel",value:function(e){this.dragging=!1}},{key:"remove",value:function(){this.dragging=!1}},{key:"on",value:function(n,t){this.subs.add(this.emitter$.pipe(Object(p.a)(function(e){return e.eventType===n})).subscribe(function(n){var r=n.args;t.apply(void 0,e(r))}))}},{key:"destroy",value:function(){this.subs.unsubscribe()}},{key:"emit",value:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];this.emitter$.next({eventType:e,args:t})}}]),n}(),P=i("Iluq"),N=i("iInd"),T=[{path:"",component:(I=function(){function e(n){var t=this;a(this,e),this.dragulaService=n,this.lorem="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",this.GROUP_1="GROUP_ONE",this.subs=new m.a,n.destroy(this.GROUP_1),n.createGroup(this.GROUP_1,{moves:function(e,n,t){var r=t.className.split(" ");return r.includes("card-header")&&r.includes("drag")}}),this.subs.add(this.dragulaService.drag(this.GROUP_1).subscribe(function(e){var n=e.el,r=e.source;t.onDrag({el:n,source:r})})),this.subs.add(this.dragulaService.drop(this.GROUP_1).subscribe(function(e){var n=e.el,r=e.source;t.onDrop({el:n,source:r})})),this.subs.add(this.dragulaService.over(this.GROUP_1).subscribe(function(e){var n=e.el,r=e.source,o=e.container;t.onOver({el:n,source:r,container:o})})),this.subs.add(this.dragulaService.out(this.GROUP_1).subscribe(function(e){var n=e.el,r=e.source,o=e.container;t.onOut({el:n,source:r,container:o})}))}return t(e,[{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}},{key:"hasClass",value:function(e,n){return new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)").test(e.className)}},{key:"addClass",value:function(e,n){this.hasClass(e,n)||(e.className=e.className?[e.className,n].join(" "):n)}},{key:"removeClass",value:function(e,n){this.hasClass(e,n)&&(e.className=e.className.replace(new RegExp("(?:^|\\s+)"+n+"(?:\\s+|$)","g"),""))}},{key:"onDrag",value:function(e){var n=e.el;this.removeClass(n,"ex-moved")}},{key:"onDrop",value:function(e){var n=e.el;this.addClass(n,"ex-moved")}},{key:"onOver",value:function(e){var n=e.container;this.addClass(n,"ex-over")}},{key:"onOut",value:function(e){var n=e.container;this.removeClass(n,"ex-over")}}]),e}(),I.\u0275fac=function(e){return new(e||I)(v.Ub(E))},I.\u0275cmp=v.Ob({type:I,selectors:[["ng-component"]],decls:56,vars:9,consts:[[1,"fade-in"],["md","4"],[1,"dragdrop",3,"dragula"],["md","12"],[1,"card-accent-secondary"],[1,"drag"],["href","https://coreui.io/pro/angular/","target","_blank",1,"badge","badge-danger","ml-2"],[1,"card-accent-primary"],[1,"card-accent-success"],[1,"card-accent-warning"],["ms","12"],[1,"card-accent-info"],[1,"card-accent-danger"]],template:function(e,n){1&e&&(v.ac(0,"div",0),v.ac(1,"c-row"),v.ac(2,"c-col",1),v.ac(3,"c-row",2),v.ac(4,"c-col",3),v.ac(5,"c-card",4),v.ac(6,"c-card-header",5),v.Oc(7," Drag & Drop Card "),v.ac(8,"a",6),v.Oc(9,"CoreUI Pro"),v.Zb(),v.Zb(),v.ac(10,"c-card-body"),v.Oc(11),v.Zb(),v.Zb(),v.Zb(),v.ac(12,"c-col",3),v.ac(13,"c-card",7),v.ac(14,"c-card-header",5),v.Oc(15," Drag & Drop Card "),v.ac(16,"a",6),v.Oc(17,"CoreUI Pro"),v.Zb(),v.Zb(),v.ac(18,"c-card-body"),v.Oc(19),v.Zb(),v.Zb(),v.Zb(),v.Zb(),v.Zb(),v.ac(20,"c-col",1),v.ac(21,"c-row",2),v.ac(22,"c-col",3),v.ac(23,"c-card",8),v.ac(24,"c-card-header",5),v.Oc(25," Drag & Drop Card "),v.ac(26,"a",6),v.Oc(27,"CoreUI Pro"),v.Zb(),v.Zb(),v.ac(28,"c-card-body"),v.Oc(29),v.Zb(),v.Zb(),v.Zb(),v.ac(30,"c-col",3),v.ac(31,"c-card",9),v.ac(32,"c-card-header",5),v.Oc(33," Drag & Drop Card "),v.ac(34,"a",6),v.Oc(35,"CoreUI Pro"),v.Zb(),v.Zb(),v.ac(36,"c-card-body"),v.Oc(37),v.Zb(),v.Zb(),v.Zb(),v.Zb(),v.Zb(),v.ac(38,"c-col",1),v.ac(39,"c-row",2),v.ac(40,"c-col",10),v.ac(41,"c-card",11),v.ac(42,"c-card-header",5),v.Oc(43," Drag & Drop Card "),v.ac(44,"a",6),v.Oc(45,"CoreUI Pro"),v.Zb(),v.Zb(),v.ac(46,"c-card-body"),v.Oc(47),v.Zb(),v.Zb(),v.Zb(),v.ac(48,"c-col",3),v.ac(49,"c-card",12),v.ac(50,"c-card-header",5),v.Oc(51," Drag & Drop Card "),v.ac(52,"a",6),v.Oc(53,"CoreUI Pro"),v.Zb(),v.Zb(),v.ac(54,"c-card-body"),v.Oc(55),v.Zb(),v.Zb(),v.Zb(),v.Zb(),v.Zb(),v.Zb(),v.Zb()),2&e&&(v.Ib(3),v.tc("dragula",n.GROUP_1),v.Ib(8),v.Qc(" ",n.lorem," "),v.Ib(8),v.Qc(" ",n.lorem," "),v.Ib(2),v.tc("dragula",n.GROUP_1),v.Ib(8),v.Qc(" ",n.lorem," "),v.Ib(8),v.Qc(" ",n.lorem," "),v.Ib(2),v.tc("dragula",n.GROUP_1),v.Ib(8),v.Qc(" ",n.lorem," "),v.Ib(8),v.Qc(" ",n.lorem," "))},directives:[P.Eb,P.Gb,x,P.qc,P.uc,P.rc],styles:[".gu-mirror{position:fixed!important;margin:0!important;z-index:9999!important;opacity:.8}.gu-hide{display:none!important}.gu-unselectable{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.gu-transit{opacity:.2}.dragdrop{min-height:50%}"],encapsulation:2}),I),data:{title:"Draggable Cards"}}],U=((D=function e(){a(this,e)}).\u0275fac=function(e){return new(e||D)},D.\u0275mod=v.Sb({type:D}),D.\u0275inj=v.Rb({imports:[[N.g.forChild(T)],N.g]}),D),G=((Z=function e(){a(this,e)}).\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=v.Sb({type:Z}),Z.\u0275inj=v.Rb({imports:[[U,l.c,P.h,P.r,M.forRoot()]]}),Z)},"8/JR":function(e,n,t){"use strict";var r=t("8T9/"),o=t("Ibf7");e.exports=function(e,n){var t=n||{},i={};return void 0===e&&(e={}),e.on=function(n,t){return i[n]?i[n].push(t):i[n]=[t],e},e.once=function(n,t){return t._once=!0,e.on(n,t),e},e.off=function(n,t){var r=arguments.length;if(1===r)delete i[n];else if(0===r)i={};else{var o=i[n];if(!o)return e;o.splice(o.indexOf(t),1)}return e},e.emit=function(){var n=r(arguments);return e.emitterSnapshot(n.shift()).apply(this,n)},e.emitterSnapshot=function(n){var a=(i[n]||[]).slice(0);return function(){var i=r(arguments),c=this||e;if("error"===n&&!1!==t.throws&&!a.length)throw 1===i.length?i[0]:i;return a.forEach(function(r){t.async?o(r,i,c):r.apply(c,i),r._once&&e.off(n,r)}),e}},e}},"8T9/":function(e,n){e.exports=function(e,n){return Array.prototype.slice.call(e,n)}},Gjsa:function(e,n){var t="function"==typeof setImmediate;e.exports=t?function(e){setImmediate(e)}:function(e){setTimeout(e,0)}},Ibf7:function(e,n,t){"use strict";var r=t("Gjsa");e.exports=function(e,n,t){e&&r(function(){e.apply(t||null,n||[])})}},PzH3:function(e,n,t){"use strict";var r=t("bBst"),o=t("Ys8N"),i=global.document,a=function(e,n,t,r){return e.addEventListener(n,t,r)},c=function(e,n,t,r){return e.removeEventListener(n,t,r)},u=[];function s(e,n,t){var r=function(e,n,t){var r,o;for(r=0;r<u.length;r++)if((o=u[r]).element===e&&o.type===n&&o.fn===t)return r}(e,n,t);if(r){var o=u[r].wrapper;return u.splice(r,1),o}}global.addEventListener||(a=function(e,n,t){return e.attachEvent("on"+n,function(e,n,t){var r=s(e,n,t)||function(e,n,t){return function(n){var r=n||global.event;r.target=r.target||r.srcElement,r.preventDefault=r.preventDefault||function(){r.returnValue=!1},r.stopPropagation=r.stopPropagation||function(){r.cancelBubble=!0},r.which=r.which||r.keyCode,t.call(e,r)}}(e,0,t);return u.push({wrapper:r,element:e,type:n,fn:t}),r}(e,n,t))},c=function(e,n,t){var r=s(e,n,t);if(r)return e.detachEvent("on"+n,r)}),e.exports={add:a,remove:c,fabricate:function(e,n,t){var a=-1===o.indexOf(n)?new r(n,{detail:t}):function(){var e;return i.createEvent?(e=i.createEvent("Event")).initEvent(n,!0,!0):i.createEventObject&&(e=i.createEventObject()),e}();e.dispatchEvent?e.dispatchEvent(a):e.fireEvent("on"+n,a)}}},YS7c:function(e,n,t){"use strict";var r=t("8/JR"),o=t("PzH3"),i=t("n6yW"),a=document,c=a.documentElement;function u(e,n,t,r){global.navigator.pointerEnabled?o[n](e,{mouseup:"pointerup",mousedown:"pointerdown",mousemove:"pointermove"}[t],r):global.navigator.msPointerEnabled?o[n](e,{mouseup:"MSPointerUp",mousedown:"MSPointerDown",mousemove:"MSPointerMove"}[t],r):(o[n](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[t],r),o[n](e,t,r))}function s(e){if(void 0!==e.touches)return e.touches.length;if(void 0!==e.which&&0!==e.which)return e.which;if(void 0!==e.buttons)return e.buttons;var n=e.button;return void 0!==n?1&n?1:2&n?3:4&n?2:0:void 0}function l(e){var n=e.getBoundingClientRect();return{left:n.left+d("scrollLeft","pageXOffset"),top:n.top+d("scrollTop","pageYOffset")}}function d(e,n){return void 0!==global[n]?global[n]:c.clientHeight?c[e]:a.body[e]}function f(e,n,t){var r,o=(e=e||{}).className||"";return e.className+=" gu-hide",r=a.elementFromPoint(n,t),e.className=o,r}function v(){return!1}function h(){return!0}function m(e){return e.width||e.right-e.left}function p(e){return e.height||e.bottom-e.top}function g(e){return e.parentNode===a?null:e.parentNode}function b(e){return"INPUT"===e.tagName||"TEXTAREA"===e.tagName||"SELECT"===e.tagName||y(e)}function y(e){return!!e&&"false"!==e.contentEditable&&("true"===e.contentEditable||y(g(e)))}function w(e){return e.nextElementSibling||function(){var n=e;do{n=n.nextSibling}while(n&&1!==n.nodeType);return n}()}function O(e,n){var t=function(e){return e.targetTouches&&e.targetTouches.length?e.targetTouches[0]:e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e}(n),r={pageX:"clientX",pageY:"clientY"};return e in r&&!(e in t)&&r[e]in t&&(e=r[e]),t[e]}e.exports=function(e,n){var t,d,y,C,S,k,E,x,M,I,Z,D=arguments.length;1===D&&!1===Array.isArray(e)&&(n=e,e=[]);var R,P=null,N=n||{};void 0===N.moves&&(N.moves=h),void 0===N.accepts&&(N.accepts=h),void 0===N.invalid&&(N.invalid=Q),void 0===N.containers&&(N.containers=e||[]),void 0===N.isContainer&&(N.isContainer=v),void 0===N.copy&&(N.copy=!1),void 0===N.copySortSource&&(N.copySortSource=!1),void 0===N.revertOnSpill&&(N.revertOnSpill=!1),void 0===N.removeOnSpill&&(N.removeOnSpill=!1),void 0===N.direction&&(N.direction="vertical"),void 0===N.ignoreInputTextSelection&&(N.ignoreInputTextSelection=!0),void 0===N.mirrorContainer&&(N.mirrorContainer=a.body);var T=r({containers:N.containers,start:q,end:J,cancel:W,remove:K,destroy:A,canMove:F,dragging:!1});return!0===N.removeOnSpill&&T.on("over",oe).on("out",ie),G(),T;function U(e){return-1!==T.containers.indexOf(e)||N.isContainer(e)}function G(e){var n=e?"remove":"add";u(c,n,"mousedown",_),u(c,n,"mouseup",z)}function j(e){u(c,e?"remove":"add","mousemove",X)}function $(e){var n=e?"remove":"add";o[n](c,"selectstart",Y),o[n](c,"click",Y)}function A(){G(!0),z({})}function Y(e){R&&e.preventDefault()}function _(e){if(k=e.clientX,E=e.clientY,1===s(e)&&!e.metaKey&&!e.ctrlKey){var n=e.target,t=B(n);t&&(R=t,j(),"mousedown"===e.type&&(b(n)?n.focus():e.preventDefault()))}}function X(e){if(R)if(0!==s(e)){if(!(void 0!==e.clientX&&Math.abs(e.clientX-k)<=(N.slideFactorX||0)&&void 0!==e.clientY&&Math.abs(e.clientY-E)<=(N.slideFactorY||0))){if(N.ignoreInputTextSelection){var n=O("clientX",e)||0,t=O("clientY",e)||0;if(b(a.elementFromPoint(n,t)))return}var r=R;j(!0),$(),J(),L(r);var o=l(y);C=O("pageX",e)-o.left,S=O("pageY",e)-o.top,i.add(I||y,"gu-transit"),ae(),re(e)}}else z({})}function B(e){if(!(T.dragging&&t||U(e))){for(var n=e;g(e)&&!1===U(g(e));){if(N.invalid(e,n))return;if(!(e=g(e)))return}var r=g(e);if(r&&!N.invalid(e,n)&&N.moves(e,r,n,w(e)))return{item:e,source:r}}}function F(e){return!!B(e)}function q(e){var n=B(e);n&&L(n)}function L(e){le(e.item,e.source)&&(I=e.item.cloneNode(!0),T.emit("cloned",I,e.item,"copy")),d=e.source,y=e.item,x=M=w(e.item),T.dragging=!0,T.emit("drag",y,d)}function Q(){return!1}function J(){if(T.dragging){var e=I||y;H(e,g(e))}}function V(){R=!1,j(!0),$(!0)}function z(e){if(V(),T.dragging){var n=I||y,r=O("clientX",e)||0,o=O("clientY",e)||0,i=te(f(t,r,o),r,o);i&&(I&&N.copySortSource||!I||i!==d)?H(n,i):N.removeOnSpill?K():W()}}function H(e,n){var t=g(e);I&&N.copySortSource&&n===d&&t.removeChild(y),ne(n)?T.emit("cancel",e,d,d):T.emit("drop",e,n,d,M),ee()}function K(){if(T.dragging){var e=I||y,n=g(e);n&&n.removeChild(e),T.emit(I?"cancel":"remove",e,n,d),ee()}}function W(e){if(T.dragging){var n=arguments.length>0?e:N.revertOnSpill,t=I||y,r=g(t),o=ne(r);!1===o&&n&&(I?r&&r.removeChild(I):d.insertBefore(t,x)),o||n?T.emit("cancel",t,d,d):T.emit("drop",t,r,d,M),ee()}}function ee(){var e=I||y;V(),ce(),e&&i.rm(e,"gu-transit"),Z&&clearTimeout(Z),T.dragging=!1,P&&T.emit("out",e,P,d),T.emit("dragend",e),d=y=I=x=M=Z=P=null}function ne(e,n){var r;return r=void 0!==n?n:t?M:w(I||y),e===d&&r===x}function te(e,n,t){for(var r=e;r&&!o();)r=g(r);return r;function o(){if(!1===U(r))return!1;var o=ue(r,e),i=se(r,o,n,t);return!!ne(r,i)||N.accepts(y,r,d,i)}}function re(e){if(t){e.preventDefault();var n=O("clientX",e)||0,r=O("clientY",e)||0,o=r-S;t.style.left=n-C+"px",t.style.top=o+"px";var i=I||y,a=f(t,n,r),c=te(a,n,r),u=null!==c&&c!==P;(u||null===c)&&(P&&h("out"),P=c,u&&h("over"));var s=g(i);if(c!==d||!I||N.copySortSource){var l,v=ue(c,a);if(null!==v)l=se(c,v,n,r);else{if(!0!==N.revertOnSpill||I)return void(I&&s&&s.removeChild(i));l=x,c=d}(null===l&&u||l!==i&&l!==w(i))&&(M=l,c.insertBefore(i,l),T.emit("shadow",i,c,d))}else s&&s.removeChild(i)}function h(e){T.emit(e,i,P,d)}}function oe(e){i.rm(e,"gu-hide")}function ie(e){T.dragging&&i.add(e,"gu-hide")}function ae(){if(!t){var e=y.getBoundingClientRect();(t=y.cloneNode(!0)).style.width=m(e)+"px",t.style.height=p(e)+"px",i.rm(t,"gu-transit"),i.add(t,"gu-mirror"),N.mirrorContainer.appendChild(t),u(c,"add","mousemove",re),i.add(N.mirrorContainer,"gu-unselectable"),T.emit("cloned",t,y,"mirror")}}function ce(){t&&(i.rm(N.mirrorContainer,"gu-unselectable"),u(c,"remove","mousemove",re),g(t).removeChild(t),t=null)}function ue(e,n){for(var t=n;t!==e&&g(t)!==e;)t=g(t);return t===c?null:t}function se(e,n,t,r){var o,i="horizontal"===N.direction;return n!==e?(o=n.getBoundingClientRect(),(i?t>o.left+m(o)/2:r>o.top+p(o)/2)?w(n):n):function(){var n,o,a,c=e.children.length;for(n=0;n<c;n++){if(a=(o=e.children[n]).getBoundingClientRect(),i&&a.left+a.width/2>t)return o;if(!i&&a.top+a.height/2>r)return o}return null}()}function le(e,n){return"boolean"==typeof N.copy?N.copy:N.copy(e,n)}}},Ys8N:function(e,n,t){"use strict";var r=[],o="",i=/^on/;for(o in global)i.test(o)&&r.push(o.slice(2));e.exports=r},bBst:function(e,n){var t=global.CustomEvent;e.exports=function(){try{var e=new t("cat",{detail:{foo:"bar"}});return"cat"===e.type&&"bar"===e.detail.foo}catch(n){}return!1}()?t:"undefined"!=typeof document&&"function"==typeof document.createEvent?function(e,n){var t=document.createEvent("CustomEvent");return n?t.initCustomEvent(e,n.bubbles,n.cancelable,n.detail):t.initCustomEvent(e,!1,!1,void 0),t}:function(e,n){var t=document.createEventObject();return t.type=e,n?(t.bubbles=Boolean(n.bubbles),t.cancelable=Boolean(n.cancelable),t.detail=n.detail):(t.bubbles=!1,t.cancelable=!1,t.detail=void 0),t}},n6yW:function(e,n,t){"use strict";var r={};function o(e){var n=r[e];return n?n.lastIndex=0:r[e]=n=new RegExp("(?:^|\\s)"+e+"(?:\\s|$)","g"),n}e.exports={add:function(e,n){var t=e.className;t.length?o(n).test(t)||(e.className+=" "+n):e.className=n},rm:function(e,n){e.className=e.className.replace(o(n)," ").trim()}}}}])}();