(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{A1uq:function(t,e,i){"use strict";i.r(e),i.d(e,"MapsModule",function(){return Z});var n=i("SVse"),s=i("8Y7J"),o=i("2Vo4"),a=i("HDdC"),r=i("XNiG"),h=i("itXk"),g=i("eIep"),c=i("IzEk"),p=i("lJxs"),d=i("1G5W");const l=["*"];class m{constructor(t){this._ngZone=t,this._pending=[],this._listeners=[],this._targetStream=new o.a(void 0)}_clearListeners(){for(const t of this._listeners)t.remove();this._listeners=[]}getLazyEmitter(t){return this._targetStream.pipe(Object(g.a)(e=>{const i=new a.a(n=>{if(!e)return void this._pending.push({observable:i,observer:n});const s=e.addListener(t,t=>{this._ngZone.run(()=>n.next(t))});return this._listeners.push(s),()=>s.remove()});return i}))}setTarget(t){const e=this._targetStream.value;t!==e&&(e&&(this._clearListeners(),this._pending=[]),this._targetStream.next(t),this._pending.forEach(t=>t.observable.subscribe(t.observer)),this._pending=[])}destroy(){this._clearListeners(),this._pending=[],this._targetStream.complete()}}const _={center:{lat:37.421995,lng:-122.084092},zoom:17,mapTypeId:"roadmap"};let u=(()=>{class t{constructor(t,e,i){this._elementRef=t,this._ngZone=e,this._eventManager=new m(this._ngZone),this.height="500px",this.width="500px",this._options=_,this.boundsChanged=this._eventManager.getLazyEmitter("bounds_changed"),this.centerChanged=this._eventManager.getLazyEmitter("center_changed"),this.mapClick=this._eventManager.getLazyEmitter("click"),this.mapDblclick=this._eventManager.getLazyEmitter("dblclick"),this.mapDrag=this._eventManager.getLazyEmitter("drag"),this.mapDragend=this._eventManager.getLazyEmitter("dragend"),this.mapDragstart=this._eventManager.getLazyEmitter("dragstart"),this.headingChanged=this._eventManager.getLazyEmitter("heading_changed"),this.idle=this._eventManager.getLazyEmitter("idle"),this.maptypeidChanged=this._eventManager.getLazyEmitter("maptypeid_changed"),this.mapMousemove=this._eventManager.getLazyEmitter("mousemove"),this.mapMouseout=this._eventManager.getLazyEmitter("mouseout"),this.mapMouseover=this._eventManager.getLazyEmitter("mouseover"),this.projectionChanged=this._eventManager.getLazyEmitter("projection_changed"),this.mapRightclick=this._eventManager.getLazyEmitter("rightclick"),this.tilesloaded=this._eventManager.getLazyEmitter("tilesloaded"),this.tiltChanged=this._eventManager.getLazyEmitter("tilt_changed"),this.zoomChanged=this._eventManager.getLazyEmitter("zoom_changed"),this._isBrowser=Object(n.C)(i),this._isBrowser&&window}set center(t){this._center=t}set zoom(t){this._zoom=t}set options(t){this._options=t||_}ngOnChanges(t){(t.height||t.width)&&this._setSize();const e=this.googleMap;e&&(t.options&&e.setOptions(this._combineOptions()),t.center&&this._center&&e.setCenter(this._center),t.zoom&&null!=this._zoom&&e.setZoom(this._zoom),t.mapTypeId&&this.mapTypeId&&e.setMapTypeId(this.mapTypeId))}ngOnInit(){this._isBrowser&&(this._mapEl=this._elementRef.nativeElement.querySelector(".map-container"),this._setSize(),this._ngZone.runOutsideAngular(()=>{this.googleMap=new google.maps.Map(this._mapEl,this._combineOptions())}),this._eventManager.setTarget(this.googleMap))}ngOnDestroy(){this._eventManager.destroy()}fitBounds(t,e){this._assertInitialized(),this.googleMap.fitBounds(t,e)}panBy(t,e){this._assertInitialized(),this.googleMap.panBy(t,e)}panTo(t){this._assertInitialized(),this.googleMap.panTo(t)}panToBounds(t,e){this._assertInitialized(),this.googleMap.panToBounds(t,e)}getBounds(){return this._assertInitialized(),this.googleMap.getBounds()||null}getCenter(){return this._assertInitialized(),this.googleMap.getCenter()}getClickableIcons(){return this._assertInitialized(),this.googleMap.getClickableIcons()}getHeading(){return this._assertInitialized(),this.googleMap.getHeading()}getMapTypeId(){return this._assertInitialized(),this.googleMap.getMapTypeId()}getProjection(){return this._assertInitialized(),this.googleMap.getProjection()}getStreetView(){return this._assertInitialized(),this.googleMap.getStreetView()}getTilt(){return this._assertInitialized(),this.googleMap.getTilt()}getZoom(){return this._assertInitialized(),this.googleMap.getZoom()}get controls(){return this._assertInitialized(),this.googleMap.controls}get data(){return this._assertInitialized(),this.googleMap.data}get mapTypes(){return this._assertInitialized(),this.googleMap.mapTypes}get overlayMapTypes(){return this._assertInitialized(),this.googleMap.overlayMapTypes}_setSize(){if(this._mapEl){const t=this._mapEl.style;t.height=null===this.height?"":w(this.height)||"500px",t.width=null===this.width?"":w(this.width)||"500px"}}_combineOptions(){var t,e;const i=this._options||{};return Object.assign(Object.assign({},i),{center:this._center||i.center||_.center,zoom:null!==(e=null!==(t=this._zoom)&&void 0!==t?t:i.zoom)&&void 0!==e?e:_.zoom,mapTypeId:this.mapTypeId||i.mapTypeId||_.mapTypeId})}_assertInitialized(){}}return t.\u0275fac=function(e){return new(e||t)(s.Ub(s.n),s.Ub(s.E),s.Ub(s.H))},t.\u0275cmp=s.Ob({type:t,selectors:[["google-map"]],inputs:{height:"height",width:"width",center:"center",zoom:"zoom",options:"options",mapTypeId:"mapTypeId"},outputs:{boundsChanged:"boundsChanged",centerChanged:"centerChanged",mapClick:"mapClick",mapDblclick:"mapDblclick",mapDrag:"mapDrag",mapDragend:"mapDragend",mapDragstart:"mapDragstart",headingChanged:"headingChanged",idle:"idle",maptypeidChanged:"maptypeidChanged",mapMousemove:"mapMousemove",mapMouseout:"mapMouseout",mapMouseover:"mapMouseover",projectionChanged:"projectionChanged",mapRightclick:"mapRightclick",tilesloaded:"tilesloaded",tiltChanged:"tiltChanged",zoomChanged:"zoomChanged"},exportAs:["googleMap"],features:[s.Gb],ngContentSelectors:l,decls:2,vars:0,consts:[[1,"map-container"]],template:function(t,e){1&t&&(s.sc(),s.Vb(0,"div",0),s.rc(1))},encapsulation:2,changeDetection:0}),t})();const b=/([A-Za-z%]+)$/;function w(t){return null==t?"":b.test(t)?t:`${t}px`}let y=(()=>{class t{constructor(t,e,i){this._googleMap=t,this._elementRef=e,this._ngZone=i,this._eventManager=new m(this._ngZone),this._options=new o.a({}),this._position=new o.a(void 0),this._destroy=new r.a,this.closeclick=this._eventManager.getLazyEmitter("closeclick"),this.contentChanged=this._eventManager.getLazyEmitter("content_changed"),this.domready=this._eventManager.getLazyEmitter("domready"),this.positionChanged=this._eventManager.getLazyEmitter("position_changed"),this.zindexChanged=this._eventManager.getLazyEmitter("zindex_changed")}set options(t){this._options.next(t||{})}set position(t){this._position.next(t)}ngOnInit(){this._googleMap._isBrowser&&(this._combineOptions().pipe(Object(c.a)(1)).subscribe(t=>{this._ngZone.runOutsideAngular(()=>{this.infoWindow=new google.maps.InfoWindow(t)}),this._eventManager.setTarget(this.infoWindow)}),this._watchForOptionsChanges(),this._watchForPositionChanges())}ngOnDestroy(){this._eventManager.destroy(),this._destroy.next(),this._destroy.complete(),this.infoWindow&&this.close()}close(){this._assertInitialized(),this.infoWindow.close()}getContent(){return this._assertInitialized(),this.infoWindow.getContent()}getPosition(){return this._assertInitialized(),this.infoWindow.getPosition()}getZIndex(){return this._assertInitialized(),this.infoWindow.getZIndex()}open(t){this._assertInitialized();const e=t?t.getAnchor():void 0;this.infoWindow.get("anchor")===e&&e||(this._elementRef.nativeElement.style.display="",this.infoWindow.open(this._googleMap.googleMap,e))}_combineOptions(){return Object(h.a)([this._options,this._position]).pipe(Object(p.a)(([t,e])=>Object.assign(Object.assign({},t),{position:e||t.position,content:this._elementRef.nativeElement})))}_watchForOptionsChanges(){this._options.pipe(Object(d.a)(this._destroy)).subscribe(t=>{this._assertInitialized(),this.infoWindow.setOptions(t)})}_watchForPositionChanges(){this._position.pipe(Object(d.a)(this._destroy)).subscribe(t=>{t&&(this._assertInitialized(),this.infoWindow.setPosition(t))})}_assertInitialized(){}}return t.\u0275fac=function(e){return new(e||t)(s.Ub(u),s.Ub(s.n),s.Ub(s.E))},t.\u0275dir=s.Pb({type:t,selectors:[["map-info-window"]],hostAttrs:[2,"display","none"],inputs:{options:"options",position:"position"},outputs:{closeclick:"closeclick",contentChanged:"contentChanged",domready:"domready",positionChanged:"positionChanged",zindexChanged:"zindexChanged"},exportAs:["mapInfoWindow"]}),t})(),v=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Sb({type:t}),t.\u0275inj=s.Rb({}),t})();var z=i("IheW"),M=i("JIr8"),f=i("LRne");let I=(()=>{class t{constructor(t){this.apiLoaded=t.jsonp("https://maps.googleapis.com/maps/api/js?key=AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA","callback").pipe(Object(p.a)(()=>!0),Object(M.a)(()=>Object(f.a)(!1)))}}return t.\u0275fac=function(e){return new(e||t)(s.hc(z.a))},t.\u0275prov=s.Qb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var C=i("Iluq");function O(t,e){1&t&&(s.ac(0,"div"),s.Vb(1,"img",5),s.Zb())}let E=(()=>{class t{constructor(t,e){this.gmLoader=t,this.document=e,this.title="",this.options={center:{lat:37.42,lng:-122.103719},zoom:11},this.markerOptions={draggable:!1},this.markerPositions=[],this.markers=[{position:{lat:37.431489,lng:-122.163719},label:"S",title:"Stanford",www:"https://www.stanford.edu/"},{position:{lat:37.394694,lng:-122.150333},label:"T",title:"Tesla",www:"https://www.tesla.com/"},{position:{lat:37.331681,lng:-122.0301},label:"A",title:"Apple",www:"https://www.apple.com/"},{position:{lat:37.484722,lng:-122.148333},label:"F",title:"Facebook",www:"https://www.facebook.com/"}]}get infoWindowContent(){return this.activeInfoWindow}set infoWindowContent(t){this.title=t.title,this.activeInfoWindow=t}ngOnInit(){this.setPositions()}ngOnDestroy(){this.removeGoogleMapScript()}setPositions(){this.markers.forEach(t=>{const{lat:e,lng:i}=Object.assign({},t.position);this.markerPositions.push({lat:e,lng:i})})}openInfoWindow(t,e){this.infoWindowContent=e,this.infoWindow.open(t)}removeGoogleMapScript(){const t=["maps.googleapis"];window.google=void 0;const e=this.document.head.getElementsByTagName("script");for(let i=e.length-1;i>=0;i--){const n=e[i].getAttribute("src");null!=n&&t.filter(t=>n.includes(t)).length&&e[i].remove()}}}return t.\u0275fac=function(e){return new(e||t)(s.Ub(I),s.Ub(n.e))},t.\u0275cmp=s.Ob({type:t,selectors:[["app-google-maps-integration"]],viewQuery:function(t,e){if(1&t&&s.Tc(y,1),2&t){let t;s.Bc(t=s.lc())&&(e.infoWindow=t.first)}},features:[s.Hb([I])],decls:13,vars:3,consts:[[1,"fade-in"],["color","info"],["href","https://github.com/angular/components/tree/master/src/google-maps","target","_blank",1,"card-header-action"],[1,"text-muted"],[4,"ngIf"],["src","../../../assets/images/map1.JPG",2,"width","100%"]],template:function(t,e){1&t&&(s.ac(0,"div",0),s.ac(1,"c-card"),s.ac(2,"c-card-header"),s.Oc(3," Google Maps "),s.ac(4,"c-badge",1),s.Oc(5,"CoreUI Pro Integration"),s.Zb(),s.ac(6,"c-card-header-actions"),s.ac(7,"a",2),s.ac(8,"small",3),s.Oc(9,"docs"),s.Zb(),s.Zb(),s.Zb(),s.Zb(),s.ac(10,"c-card-body"),s.Mc(11,O,2,0,"div",4),s.oc(12,"async"),s.Zb(),s.Zb(),s.Zb()),2&t&&(s.Ib(11),s.tc("ngIf",s.pc(12,1,e.gmLoader.apiLoaded)))},directives:[C.qc,C.uc,C.kc,C.vc,C.rc,n.o],pipes:[n.b],styles:[""]}),t})();var k=i("iInd");const L=[{path:"",component:E,data:{title:"Google Maps"}}];let T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Sb({type:t}),t.\u0275inj=s.Rb({imports:[[k.g.forChild(L)],k.g]}),t})();var j=i("rVqu");let Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Sb({type:t,bootstrap:[E]}),t.\u0275inj=s.Rb({providers:[],imports:[[n.c,v,z.c,z.b,T,C.h,j.b,C.c]]}),t})()}}]);