!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,a,o){return a&&t(e.prototype,a),o&&t(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"BMe/":function(e,t,a){e.exports=function(e){"use strict";return e=e&&e.hasOwnProperty("default")?e.default:e,{customTooltips:function(e){var t,a,o={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||(t=function(){return(65536*(1+Math.random())|0).toString(16)},a="_canvas-"+(t()+t()),this._chart.canvas.id=a,a))+"-tooltip"},r=document.getElementById(o.TOOLTIP);if(r||((r=document.createElement("div")).id=o.TOOLTIP,r.className="c-chartjs-tooltip",this._chart.canvas.parentNode.appendChild(r)),0!==e.opacity){if(r.classList.remove("c-above","c-below","c-no-transform"),r.classList.add(e.yAlign?e.yAlign:"c-no-transform"),e.body){var c=e.title||[],n=document.createElement(o.DIV);n.className="c-tooltip-header",c.forEach(function(e){var t=document.createElement(o.DIV);t.className="c-tooltip-header-item",t.innerHTML=e,n.appendChild(t)});var i=document.createElement(o.DIV);i.className="c-tooltip-body",e.body.map(function(e){return e.lines}).forEach(function(t,a){var r=document.createElement(o.DIV);r.className="c-tooltip-body-item";var c=e.labelColors[a],n=document.createElement(o.SPAN);if(n.className="c-tooltip-body-item-color",n.style.backgroundColor=c.backgroundColor,r.appendChild(n),t[0].split(":").length>1){var s=document.createElement(o.SPAN);s.className="c-tooltip-body-item-label",s.innerHTML=t[0].split(": ")[0],r.appendChild(s);var l=document.createElement(o.SPAN);l.className="c-tooltip-body-item-value",l.innerHTML=t[0].split(": ").pop(),r.appendChild(l)}else{var d=document.createElement(o.SPAN);d.className="c-tooltip-body-item-value",d.innerHTML=t[0],r.appendChild(d)}i.appendChild(r)}),r.innerHTML="",r.appendChild(n),r.appendChild(i)}var s=this._chart.canvas.getBoundingClientRect(),l=this._chart.canvas.offsetLeft+e.caretX,d=this._chart.canvas.offsetTop+e.caretY,b=e.width/2;l+b>s.width?l-=b:l<b&&(l+=b),r.style.opacity=1,r.style.left=l+"px",r.style.top=d+"px"}else r.style.opacity=0}}}(a("MO+k"))},UtdI:function(e,t,a){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return function(e){return e.match(/^--.*/i)}(e)&&Boolean(document.documentMode)&&document.documentMode>=10?function(){for(var e={},t=document.styleSheets,a="",o=t.length-1;o>-1;o--){for(var r=t[o].cssRules,c=r.length-1;c>-1;c--)if(".ie-custom-properties"===r[c].selectorText){a=r[c].cssText;break}if(a)break}return(a=a.substring(a.lastIndexOf("{")+1,a.lastIndexOf("}"))).split(";").forEach(function(t){if(t){var a=t.split(": ")[0],o=t.split(": ")[1];a&&o&&(e["--".concat(a.trim())]=o.trim())}}),e}()[e]:window.getComputedStyle(t,null).getPropertyValue(e).replace(/^\s/,"")}},XVX6:function(t,o,r){"use strict";r.r(o),r.d(o,"WidgetsModule",function(){return J});var c=r("SVse"),n=r("FE24"),i=r("Iluq"),s=r("rVqu"),l=r("iInd"),d=r("w7HB"),b=r("BMe/"),h=r("8Y7J"),p=r("YQRL");function u(e,t){if(1&e&&(h.Yb(0),h.ac(1,"div",10),h.Vb(2,"canvas",11),h.Zb(),h.Xb()),2&e){var a=h.nc();h.Ib(2),h.tc("datasets",a.brandBoxChart.Data1)("labels",a.brandBoxChart.labels)("options",a.brandBoxChart.options)("colors",a.brandBoxChart.colors)("legend",a.brandBoxChart.legend)("chartType",a.brandBoxChart.type)}}function g(e,t){if(1&e&&(h.Yb(0),h.ac(1,"div",10),h.Vb(2,"canvas",11),h.Zb(),h.Xb()),2&e){var a=h.nc();h.Ib(2),h.tc("datasets",a.brandBoxChart.Data2)("labels",a.brandBoxChart.labels)("options",a.brandBoxChart.options)("colors",a.brandBoxChart.colors)("legend",a.brandBoxChart.legend)("chartType",a.brandBoxChart.type)}}function m(e,t){if(1&e&&(h.Yb(0),h.ac(1,"div",10),h.Vb(2,"canvas",11),h.Zb(),h.Xb()),2&e){var a=h.nc();h.Ib(2),h.tc("datasets",a.brandBoxChart.Data3)("labels",a.brandBoxChart.labels)("options",a.brandBoxChart.options)("colors",a.brandBoxChart.colors)("legend",a.brandBoxChart.legend)("chartType",a.brandBoxChart.type)}}function f(e,t){if(1&e&&(h.Yb(0),h.ac(1,"div",10),h.Vb(2,"canvas",11),h.Zb(),h.Xb()),2&e){var a=h.nc();h.Ib(2),h.tc("datasets",a.brandBoxChart.Data4)("labels",a.brandBoxChart.labels)("options",a.brandBoxChart.options)("colors",a.brandBoxChart.colors)("legend",a.brandBoxChart.legend)("chartType",a.brandBoxChart.type)}}var y,v=((y=function(){function t(a){e(this,t),this.chartsData=a,this.brandBoxChart={}}return a(t,[{key:"ngOnInit",value:function(){this.brandBoxChart=this.chartsData.brandBoxChart}}]),t}()).\u0275fac=function(e){return new(e||y)(h.Ub(p.a))},y.\u0275cmp=h.Ob({type:y,selectors:[["app-widgets-brand"]],inputs:{noCharts:"noCharts"},decls:17,vars:4,consts:[["md","3","sm","6"],["color","facebook","rightHeader","89k","rightFooter","friends","leftHeader","459","leftFooter","feeds"],["name","cib-facebook","height","52",1,"my-4"],[4,"ngIf"],["color","twitter","rightHeader","973k","rightFooter","followers","leftHeader","1.792","leftFooter","tweets"],["name","cib-twitter","height","52",1,"my-4"],["color","linkedin","rightHeader","500+","rightFooter","contracts","leftHeader","292","leftFooter","feeds"],["name","cib-linkedin","height","52",1,"my-4"],["rightHeader","12","rightFooter","events","leftHeader","4","leftFooter","meetings","color","gradient-warning"],["name","cil-calendar","height","52",1,"my-4"],[1,"c-chart-brand"],["cNoZoneBaseChart","",3,"datasets","labels","options","colors","legend","chartType"]],template:function(e,t){1&e&&(h.ac(0,"c-row"),h.ac(1,"c-col",0),h.ac(2,"c-widget-brand",1),h.Vb(3,"c-icon",2),h.Mc(4,u,3,6,"ng-container",3),h.Zb(),h.Zb(),h.ac(5,"c-col",0),h.ac(6,"c-widget-brand",4),h.Vb(7,"c-icon",5),h.Mc(8,g,3,6,"ng-container",3),h.Zb(),h.Zb(),h.ac(9,"c-col",0),h.ac(10,"c-widget-brand",6),h.Vb(11,"c-icon",7),h.Mc(12,m,3,6,"ng-container",3),h.Zb(),h.Zb(),h.ac(13,"c-col",0),h.ac(14,"c-widget-brand",8),h.Vb(15,"c-icon",9),h.Mc(16,f,3,6,"ng-container",3),h.Zb(),h.Zb(),h.Zb()),2&e&&(h.Ib(4),h.tc("ngIf",!t.noCharts),h.Ib(4),h.tc("ngIf",!t.noCharts),h.Ib(4),h.tc("ngIf",!t.noCharts),h.Ib(4),h.tc("ngIf",!t.noCharts))},directives:[i.Eb,i.Gb,i.fc,s.a,c.o,i.wc],styles:["[_nghost-%COMP%]   .c-chart-brand[_ngcontent-%COMP%]{position:absolute;width:100%;height:100px}"]}),y);function C(e,t){1&e&&(h.ac(0,"div",13),h.ac(1,"a",14),h.Oc(2,"Action"),h.Zb(),h.ac(3,"a",14),h.Oc(4,"Another action"),h.Zb(),h.ac(5,"a",14),h.Oc(6,"Something else here"),h.Zb(),h.Zb())}function w(e,t){1&e&&(h.ac(0,"div",13),h.ac(1,"a",14),h.Oc(2,"Action"),h.Zb(),h.ac(3,"a",14),h.Oc(4,"Another action"),h.Zb(),h.ac(5,"a",14),h.Oc(6,"Something else here"),h.Zb(),h.Zb())}function Z(e,t){1&e&&(h.ac(0,"div",13),h.ac(1,"a",14),h.Oc(2,"Action"),h.Zb(),h.ac(3,"a",14),h.Oc(4,"Another action"),h.Zb(),h.ac(5,"a",14),h.Oc(6,"Something else here"),h.Zb(),h.Zb())}function x(e,t){1&e&&(h.ac(0,"div",13),h.ac(1,"a",14),h.Oc(2,"Action"),h.Zb(),h.ac(3,"a",14),h.Oc(4,"Another action"),h.Zb(),h.ac(5,"a",14),h.Oc(6,"Something else here"),h.Zb(),h.Zb())}var I,V,O,A,T,M,k=((I=function(){function t(a){e(this,t),this.chartsData=a,this.chart=[]}return a(t,[{key:"ngOnInit",value:function(){this.chart=this.chartsData.widgetChart}}]),t}()).\u0275fac=function(e){return new(e||I)(h.Ub(p.a))},I.\u0275cmp=h.Ob({type:I,selectors:[["app-widgets-dropdown"]],decls:37,vars:24,consts:[["sm","6","lg","3"],["color","gradient-primary","header","9.823","text","Members online"],["dropdown",""],["cButton","","color","transparent","dropdownToggle","",1,"p-0","dropdown-toggle"],["name","cil-settings"],["class","dropdown-menu dropdown-menu-right",4,"dropdownMenu"],["slot","footer"],[1,"c-chart-wrapper","mt-3","mx-3",2,"height","70px"],["cNoZoneBaseChart","","height","70",1,"chart",3,"datasets","labels","options","colors","chartType"],["color","gradient-info","header","9.823","text","Members online"],["color","gradient-warning","header","9.823","text","Members online"],[1,"c-chart-wrapper","mt-3",2,"height","70px"],["color","gradient-danger","header","9.823","text","Members online"],[1,"dropdown-menu","dropdown-menu-right"],[1,"dropdown-item",3,"routerLink"]],template:function(e,t){1&e&&(h.ac(0,"c-row"),h.ac(1,"c-col",0),h.ac(2,"c-widget-dropdown",1),h.ac(3,"c-button-group",2),h.ac(4,"button",3),h.Vb(5,"c-icon",4),h.Zb(),h.Mc(6,C,7,0,"div",5),h.Zb(),h.ac(7,"div",6),h.ac(8,"div",7),h.Vb(9,"canvas",8),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(10,"c-col",0),h.ac(11,"c-widget-dropdown",9),h.ac(12,"c-button-group",2),h.ac(13,"button",3),h.Vb(14,"c-icon",4),h.Zb(),h.Mc(15,w,7,0,"div",5),h.Zb(),h.ac(16,"div",6),h.ac(17,"div",7),h.Vb(18,"canvas",8),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(19,"c-col",0),h.ac(20,"c-widget-dropdown",10),h.ac(21,"c-button-group",2),h.ac(22,"button",3),h.Vb(23,"c-icon",4),h.Zb(),h.Mc(24,Z,7,0,"div",5),h.Zb(),h.ac(25,"div",6),h.ac(26,"div",11),h.Vb(27,"canvas",8),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.ac(28,"c-col",0),h.ac(29,"c-widget-dropdown",12),h.ac(30,"c-button-group",2),h.ac(31,"button",3),h.Vb(32,"c-icon",4),h.Zb(),h.Mc(33,x,7,0,"div",5),h.Zb(),h.ac(34,"div",6),h.ac(35,"div",7),h.Vb(36,"canvas",8),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb()),2&e&&(h.Ib(8),h.tc("@.disabled",!0),h.Ib(1),h.tc("datasets",t.chart[0].data)("labels",t.chart[0].labels)("options",t.chart[0].options)("colors",t.chart[0].colors)("chartType",t.chart[0].type),h.Ib(8),h.tc("@.disabled",!0),h.Ib(1),h.tc("datasets",t.chart[1].data)("labels",t.chart[1].labels)("options",t.chart[1].options)("colors",t.chart[1].colors)("chartType",t.chart[1].type),h.Ib(8),h.tc("@.disabled",!0),h.Ib(1),h.tc("datasets",t.chart[2].data)("labels",t.chart[2].labels)("options",t.chart[2].options)("colors",t.chart[2].colors)("chartType",t.chart[2].type),h.Ib(8),h.tc("@.disabled",!0),h.Ib(1),h.tc("datasets",t.chart[3].data)("labels",t.chart[3].labels)("options",t.chart[3].options)("colors",t.chart[3].colors)("chartType",t.chart[3].type))},directives:[i.Eb,i.Gb,i.hc,i.oc,n.a,i.nc,n.d,s.a,n.b,i.wc,l.f],styles:[""]}),I),S=r("UtdI"),B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,a="--".concat(e);return Object(S.a)(a,t)||e},L=((O=function(){function t(){e(this,t),this.color="success",this.points=[],this.label="Serie A",this.borderColor="rgba(255,255,255,.55)",this.backgroundColor="transparent",this.datasets=[{data:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Serie A"}],this.options={responsive:!0,tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,this.datasets[0].data)-5,max:Math.max.apply(Math,this.datasets[0].data)+5}}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},this.labels=["January","February","March","April","May","June","July","August","September","October","November","December"],this.colors=[{backgroundColor:"transparent",borderColor:B(this.color)||"#4dbd74",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.legend=!1,this.chartType="line"}return a(t,[{key:"ngOnInit",value:function(){this.colors[0].borderColor=B(this.color)||"#4dbd74",this.points.length>0&&(this.datasets[0].data=this.points)}}]),t}()).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=h.Ob({type:O,selectors:[["app-chart-line-simple"]],inputs:{color:"color",points:"points",label:"label"},decls:1,vars:6,consts:[["cNoZoneBaseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"]],template:function(e,t){1&e&&h.Vb(0,"canvas",0),2&e&&h.tc("datasets",t.datasets)("labels",t.labels)("options",t.options)("colors",t.colors)("legend",t.legend)("chartType",t.chartType)},directives:[i.wc],styles:["[_nghost-%COMP%]{display:block}"]}),O),P=((V=function(){function t(){e(this,t),this.color="success",this.borderColor="rgba(255,255,255,.55)",this.backgroundColor="transparent",this.datasets=[{data:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Serie A",barPercentage:.5,categoryPercentage:1}],this.options={responsive:!0,tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,this.datasets[0].data)-5,max:Math.max.apply(Math,this.datasets[0].data)+5}}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},this.labels=["January","February","March","April","May","June","July","August","September","October","November","December"],this.colors=[{backgroundColor:Object(S.a)("--success")||"#4dbd74",pointBackgroundColor:"rgba(148,159,177,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(148,159,177,0.8)"}],this.legend=!1,this.chartType="bar"}return a(t,[{key:"ngOnInit",value:function(){this.colors[0].backgroundColor=B(this.color)||"#4dbd74"}}]),t}()).\u0275fac=function(e){return new(e||V)},V.\u0275cmp=h.Ob({type:V,selectors:[["app-chart-bar-simple"]],inputs:{color:"color"},decls:1,vars:6,consts:[["cNoZoneBaseChart","",1,"chart",3,"datasets","labels","options","colors","legend","chartType"]],template:function(e,t){1&e&&h.Vb(0,"canvas",0),2&e&&h.tc("datasets",t.datasets)("labels",t.labels)("options",t.options)("colors",t.colors)("legend",t.legend)("chartType",t.chartType)},directives:[i.wc],styles:["[_nghost-%COMP%]{display:block}"]}),V),R=[{path:"",component:(A=function(){function t(){e(this,t),this.lineChart1Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart1Labels=["January","February","March","April","May","June","July"],this.lineChart1Options={tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:35,max:89}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart1Colours=[{backgroundColor:Object(d.getStyle)("--primary"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart1Legend=!1,this.lineChart1Type="line",this.lineChart2Data=[{data:[1,18,9,17,34,22,11],label:"Series A"}],this.lineChart2Labels=["January","February","March","April","May","June","July"],this.lineChart2Options={tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:-4,max:39}}]},elements:{line:{tension:1e-5,borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart2Colours=[{backgroundColor:Object(d.getStyle)("--info"),borderColor:"rgba(255,255,255,.55)"}],this.lineChart2Legend=!1,this.lineChart2Type="line",this.lineChart3Data=[{data:[78,81,80,45,34,12,40],label:"Series A"}],this.lineChart3Labels=["January","February","March","April","May","June","July"],this.lineChart3Options={tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}},legend:{display:!1}},this.lineChart3Colours=[{backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)"}],this.lineChart3Legend=!1,this.lineChart3Type="line",this.barChart1Data=[{data:[78,81,80,45,34,12,40,78,81,80,45,34,12,40,12,40],label:"Series A",barPercentage:.6}],this.barChart1Labels=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16"],this.barChart1Options={tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart1Colours=[{backgroundColor:"rgba(255,255,255,.3)",borderWidth:0}],this.barChart1Legend=!1,this.barChart1Type="bar",this.lineChart4Data=[{data:[4,18,9,17,34,22,11,3,15,12,18,9],label:"Series A"}],this.lineChart4Labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.lineChart4Options={tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1,points:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},legend:{display:!1}},this.lineChart4Colours=[{backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",borderWidth:2}],this.lineChart4Legend=!1,this.lineChart4Type="line",this.barChart2Data=[{data:[4,18,9,17,34,22,11,3,15,12,18,9],label:"Series A",barPercentage:.6}],this.barChart2Labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.barChart2Options={tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1,ticks:{beginAtZero:!0}}]},legend:{display:!1}},this.barChart2Colours=[{backgroundColor:"rgba(0,0,0,.2)",borderWidth:0}],this.barChart2Legend=!1,this.barChart2Type="bar",this.barChart3Data=[{data:[4,18,9,17,34,22,11,3,15,12,18,9],label:"Series A"}],this.barChart3Labels=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],this.barChart3Options={tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},legend:{display:!1}},this.barChart3Primary=[{backgroundColor:Object(d.getStyle)("--primary"),borderColor:"transparent",borderWidth:1}],this.barChart3Danger=[{backgroundColor:Object(d.getStyle)("--danger"),borderColor:"transparent",borderWidth:1}],this.barChart3Success=[{backgroundColor:Object(d.getStyle)("--success"),borderColor:"transparent",borderWidth:1}],this.barChart3Legend=!1,this.barChart3Type="bar",this.lineChart5Data=[{data:[65,59,84,84,51,55,40],label:"Series A"}],this.lineChart5Labels=["January","February","March","April","May","June","July"],this.lineChart5Options={tooltips:{enabled:!1,custom:b.customTooltips},maintainAspectRatio:!1,scales:{xAxes:[{display:!1,points:!1}],yAxes:[{display:!1}]},elements:{point:{radius:0}},legend:{display:!1}},this.lineChart5Info=[{backgroundColor:"transparent",borderColor:Object(d.getStyle)("--info"),borderWidth:2}],this.lineChart5Success=[{backgroundColor:"transparent",borderColor:Object(d.getStyle)("--info"),borderWidth:2}],this.lineChart5Warning=[{backgroundColor:"transparent",borderColor:Object(d.getStyle)("--warning"),borderWidth:2}],this.lineChart5Legend=!1,this.lineChart5Type="line"}return a(t,[{key:"ngOnInit",value:function(){}}]),t}(),A.\u0275fac=function(e){return new(e||A)},A.\u0275cmp=h.Ob({type:A,selectors:[["app-widgets"]],decls:143,vars:38,consts:[[1,"fade-in"],["sm","6","lg","3"],["color","gradient-success","footer","Lorem ipsum dolor sit amet enim.","header","89.9%","text","Lorem ipsum...",3,"value"],["color","gradient-info","footer","Lorem ipsum dolor sit amet enim.","header","12.124","text","Lorem ipsum...",3,"value"],["color","gradient-warning","footer","Lorem ipsum dolor sit amet enim.","text","Lorem ipsum...",3,"header","value"],["color","gradient-danger","footer","Lorem ipsum dolor sit amet enim.","header","2 TB","text","Lorem ipsum...",3,"value"],["header","89.9%","text","Lorem ipsum...","footer","Lorem ipsum dolor sit amet enim.","color","gradient-success","value","25",3,"inverse"],["color","gradient-info","footer","Lorem ipsum dolor sit amet enim.","header","12.124","text","Lorem ipsum...",3,"value","inverse"],["color","gradient-warning","footer","Lorem ipsum dolor sit amet enim.","text","Lorem ipsum...",3,"header","value","inverse"],["color","gradient-danger","footer","Lorem ipsum dolor sit amet enim.","header","2 TB","text","Lorem ipsum...",3,"value","inverse"],["col","12","sm","6","lg","3"],["header","$1.999,50","text","Income","color","gradient-primary"],["name","cil-settings","width","24"],["header","$1.999,50","text","Income","color","gradient-info"],["name","cil-laptop","width","24"],["header","$1.999,50","text","Income","color","gradient-warning"],["name","cil-moon","width","24"],["header","$1.999,50","text","Income","color","gradient-danger"],["name","cil-bell","width","24"],["header","$1.999,50","text","Income","color","gradient-primary",3,"iconPadding"],["header","$1.999,50","text","Income","color","gradient-info",3,"iconPadding"],["header","$1.999,50","text","Income","color","gradient-warning",3,"iconPadding"],["header","$1.999,50","text","Income","color","gradient-danger",3,"iconPadding"],["col","12","sm","6","lg","4"],["name","cil-settings","width","24",1,"mx-5"],["name","cil-laptop","width","24",1,"mx-5"],["slot","footer",1,"px-3","py-2"],["href","https://coreui.io/","target","_blank",1,"font-weight-bold","font-xs","text-muted","d-flex","justify-content-between"],["name","cil-arrow-right","width","16"],[3,"noCharts"],[1,"mb-4"],["header","87.500","text","Visitors","color","gradient-info"],["name","cil-people","height","36"],["header","385","text","New Clients","color","gradient-success"],["name","cil-user-follow","height","36"],["header","1238","text","Products Sold","color","gradient-warning"],["name","cil-basket","height","36"],["header","28%","text","Returning Visitors"],["name","cil-chart-pie","height","36"],["header","5:34:11","text","Avg. Time","color","gradient-danger"],["name","cil-speedometer","height","36"],["header","87.500","text","Visitors","color","gradient-info",3,"inverse"],["header","385","text","New Clients","color","gradient-success",3,"inverse"],["name","cil-userFollow","height","36"],["header","1238","text","Products sold","color","gradient-warning",3,"inverse"],["header","28%","text","Returning Visitors","color","gradient-primary",3,"inverse"],["name","cil-chartPie","height","36"],["header","5:34:11","text","Avg. Time","color","gradient-danger",3,"inverse"],["sm","6","md","2"],["header","1238","text","Products sold","color","gradient-warning"],["header","28%","text","Returning Visitors","color","gradient-primary"],["header","972","text","comments","color","gradient-info"],["name","cil-speech","height","36"],["header","972","text","comments","color","gradient-info",3,"inverse"],["sm","4","lg","2"],["header","title","text","1,123"],["color","danger",2,"height","40px"],["color","primary",2,"height","40px"],["color","success",2,"height","40px"]],template:function(e,t){1&e&&(h.ac(0,"div",0),h.ac(1,"c-row"),h.ac(2,"c-col",1),h.Vb(3,"c-widget-progress",2),h.Zb(),h.ac(4,"c-col",1),h.Vb(5,"c-widget-progress",3),h.Zb(),h.ac(6,"c-col",1),h.Vb(7,"c-widget-progress",4),h.oc(8,"currency"),h.Zb(),h.ac(9,"c-col",1),h.Vb(10,"c-widget-progress",5),h.Zb(),h.Zb(),h.ac(11,"c-row"),h.ac(12,"c-col",1),h.Vb(13,"c-widget-progress",6),h.Zb(),h.ac(14,"c-col",1),h.Vb(15,"c-widget-progress",7),h.Zb(),h.ac(16,"c-col",1),h.Vb(17,"c-widget-progress",8),h.oc(18,"currency"),h.Zb(),h.ac(19,"c-col",1),h.Vb(20,"c-widget-progress",9),h.Zb(),h.Zb(),h.ac(21,"c-row"),h.ac(22,"c-col",10),h.ac(23,"c-widget-icon",11),h.Vb(24,"c-icon",12),h.Zb(),h.Zb(),h.ac(25,"c-col",10),h.ac(26,"c-widget-icon",13),h.Vb(27,"c-icon",14),h.Zb(),h.Zb(),h.ac(28,"c-col",10),h.ac(29,"c-widget-icon",15),h.Vb(30,"c-icon",16),h.Zb(),h.Zb(),h.ac(31,"c-col",10),h.ac(32,"c-widget-icon",17),h.Vb(33,"c-icon",18),h.Zb(),h.Zb(),h.Zb(),h.ac(34,"c-row"),h.ac(35,"c-col",10),h.ac(36,"c-widget-icon",19),h.Vb(37,"c-icon",12),h.Zb(),h.Zb(),h.ac(38,"c-col",10),h.ac(39,"c-widget-icon",20),h.Vb(40,"c-icon",14),h.Zb(),h.Zb(),h.ac(41,"c-col",10),h.ac(42,"c-widget-icon",21),h.Vb(43,"c-icon",16),h.Zb(),h.Zb(),h.ac(44,"c-col",10),h.ac(45,"c-widget-icon",22),h.Vb(46,"c-icon",18),h.Zb(),h.Zb(),h.Zb(),h.ac(47,"c-row"),h.ac(48,"c-col",23),h.ac(49,"c-widget-icon",19),h.Vb(50,"c-icon",24),h.Zb(),h.Zb(),h.ac(51,"c-col",23),h.ac(52,"c-widget-icon",19),h.Vb(53,"c-icon",24),h.Zb(),h.Zb(),h.ac(54,"c-col",23),h.ac(55,"c-widget-icon",21),h.Vb(56,"c-icon",25),h.ac(57,"c-card-footer",26),h.ac(58,"a",27),h.Oc(59," View more "),h.Vb(60,"c-icon",28),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Zb(),h.Vb(61,"app-widgets-brand",29),h.Vb(62,"app-widgets-brand"),h.ac(63,"c-card-group",30),h.ac(64,"c-widget-progress-icon",31),h.Vb(65,"c-icon",32),h.Zb(),h.ac(66,"c-widget-progress-icon",33),h.Vb(67,"c-icon",34),h.Zb(),h.ac(68,"c-widget-progress-icon",35),h.Vb(69,"c-icon",36),h.Zb(),h.ac(70,"c-widget-progress-icon",37),h.Vb(71,"c-icon",38),h.Zb(),h.ac(72,"c-widget-progress-icon",39),h.Vb(73,"c-icon",40),h.Zb(),h.Zb(),h.ac(74,"c-card-group",30),h.ac(75,"c-widget-progress-icon",41),h.Vb(76,"c-icon",32),h.Zb(),h.ac(77,"c-widget-progress-icon",42),h.Vb(78,"c-icon",43),h.Zb(),h.ac(79,"c-widget-progress-icon",44),h.Vb(80,"c-icon",36),h.Zb(),h.ac(81,"c-widget-progress-icon",45),h.Vb(82,"c-icon",46),h.Zb(),h.ac(83,"c-widget-progress-icon",47),h.Vb(84,"c-icon",40),h.Zb(),h.Zb(),h.ac(85,"c-row"),h.ac(86,"c-col",48),h.ac(87,"c-widget-progress-icon",31),h.Vb(88,"c-icon",32),h.Zb(),h.Zb(),h.ac(89,"c-col",48),h.ac(90,"c-widget-progress-icon",33),h.Vb(91,"c-icon",43),h.Zb(),h.Zb(),h.ac(92,"c-col",48),h.ac(93,"c-widget-progress-icon",49),h.Vb(94,"c-icon",36),h.Zb(),h.Zb(),h.ac(95,"c-col",48),h.ac(96,"c-widget-progress-icon",50),h.Vb(97,"c-icon",46),h.Zb(),h.Zb(),h.ac(98,"c-col",48),h.ac(99,"c-widget-progress-icon",39),h.Vb(100,"c-icon",40),h.Zb(),h.Zb(),h.ac(101,"c-col",48),h.ac(102,"c-widget-progress-icon",51),h.Vb(103,"c-icon",52),h.Zb(),h.Zb(),h.Zb(),h.ac(104,"c-row"),h.ac(105,"c-col",48),h.ac(106,"c-widget-progress-icon",41),h.Vb(107,"c-icon",32),h.Zb(),h.Zb(),h.ac(108,"c-col",48),h.ac(109,"c-widget-progress-icon",42),h.Vb(110,"c-icon",43),h.Zb(),h.Zb(),h.ac(111,"c-col",48),h.ac(112,"c-widget-progress-icon",44),h.Vb(113,"c-icon",36),h.Zb(),h.Zb(),h.ac(114,"c-col",48),h.ac(115,"c-widget-progress-icon",45),h.Vb(116,"c-icon",46),h.Zb(),h.Zb(),h.ac(117,"c-col",48),h.ac(118,"c-widget-progress-icon",47),h.Vb(119,"c-icon",40),h.Zb(),h.Zb(),h.ac(120,"c-col",48),h.ac(121,"c-widget-progress-icon",53),h.Vb(122,"c-icon",52),h.Zb(),h.Zb(),h.Zb(),h.Vb(123,"app-widgets-dropdown"),h.ac(124,"c-row"),h.ac(125,"c-col",54),h.ac(126,"c-widget-simple",55),h.Vb(127,"app-chart-line-simple",56),h.Zb(),h.Zb(),h.ac(128,"c-col",54),h.ac(129,"c-widget-simple",55),h.Vb(130,"app-chart-line-simple",57),h.Zb(),h.Zb(),h.ac(131,"c-col",54),h.ac(132,"c-widget-simple",55),h.Vb(133,"app-chart-line-simple",58),h.Zb(),h.Zb(),h.ac(134,"c-col",54),h.ac(135,"c-widget-simple",55),h.Vb(136,"app-chart-bar-simple",56),h.Zb(),h.Zb(),h.ac(137,"c-col",54),h.ac(138,"c-widget-simple",55),h.Vb(139,"app-chart-bar-simple",57),h.Zb(),h.Zb(),h.ac(140,"c-col",54),h.ac(141,"c-widget-simple",55),h.Vb(142,"app-chart-bar-simple",58),h.Zb(),h.Zb(),h.Zb(),h.Zb()),2&e&&(h.Ib(3),h.tc("value",25),h.Ib(2),h.tc("value",25),h.Ib(2),h.uc("header",h.qc(8,32,98111,"USD")),h.tc("value",25),h.Ib(3),h.tc("value",25),h.Ib(3),h.tc("inverse",!0),h.Ib(2),h.tc("value",25)("inverse",!0),h.Ib(2),h.uc("header",h.qc(18,35,98111,"USD")),h.tc("value",25)("inverse",!0),h.Ib(3),h.tc("value",25)("inverse",!0),h.Ib(16),h.tc("iconPadding",!1),h.Ib(3),h.tc("iconPadding",!1),h.Ib(3),h.tc("iconPadding",!1),h.Ib(3),h.tc("iconPadding",!1),h.Ib(4),h.tc("iconPadding",!1),h.Ib(3),h.tc("iconPadding",!1),h.Ib(3),h.tc("iconPadding",!1),h.Ib(6),h.tc("noCharts",!0),h.Ib(14),h.tc("inverse",!0),h.Ib(2),h.tc("inverse",!0),h.Ib(2),h.tc("inverse",!0),h.Ib(2),h.tc("inverse",!0),h.Ib(2),h.tc("inverse",!0),h.Ib(23),h.tc("inverse",!0),h.Ib(3),h.tc("inverse",!0),h.Ib(3),h.tc("inverse",!0),h.Ib(3),h.tc("inverse",!0),h.Ib(3),h.tc("inverse",!0),h.Ib(3),h.tc("inverse",!0))},directives:[i.Eb,i.Gb,i.ic,i.gc,s.a,i.sc,v,i.tc,i.jc,k,i.ec,L,P],pipes:[c.d],styles:[""]}),A),data:{title:"Widgets"}}],j=((M=function t(){e(this,t)}).\u0275fac=function(e){return new(e||M)},M.\u0275mod=h.Sb({type:M}),M.\u0275inj=h.Rb({imports:[[l.g.forChild(R)],l.g]}),M),J=((T=function t(){e(this,t)}).\u0275fac=function(e){return new(e||T)},T.\u0275mod=h.Sb({type:T}),T.\u0275inj=h.Rb({imports:[[c.c,j,n.c,i.f,i.h,i.j,i.r,s.b,i.ab,i.ab]]}),T)},YQRL:function(t,o,r){"use strict";r.d(o,"a",function(){return s});var c=r("4qVP"),n=r("AwSQ"),i=r("8Y7J"),s=function(){var t=function(){function t(a,o){e(this,t),this.service=a,this.commonData=o,this.mainChart={},this.widgetChart=[],this.brandBoxChart={},this.barChart={},this.doughnutChart={},this.pieChart={},this.online={},this.offline={},this.statusMachineChart={},this.soldItemsChart={},this.status=[]}return a(t,[{key:"random",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.hc(n.a),i.hc(c.a))},t.\u0275prov=i.Qb({token:t,factory:t.\u0275fac,providedIn:"any"}),t}()},w7HB:function(e,t){!function(e,t){for(var a in t)e[a]=t[a]}(t,function(e){var t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,a),r.l=!0,r.exports}return a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,(function(t){return e[t]}).bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t),a.d(t,"deepObjectsMerge",function(){return o}),a.d(t,"getColor",function(){return s}),a.d(t,"getStyle",function(){return i}),a.d(t,"hexToRgb",function(){return l}),a.d(t,"hexToRgba",function(){return d}),a.d(t,"makeUid",function(){return b}),a.d(t,"omitByKeys",function(){return h}),a.d(t,"pickByKeys",function(){return p}),a.d(t,"rgbToHex",function(){return u});var o=function e(t,a){for(var o=0,r=Object.keys(a);o<r.length;o++){var c=r[o];a[c]instanceof Object&&Object.assign(a[c],e(t[c],a[c]))}return Object.assign(t||{},a),t},r=function(){for(var e={},t=document.styleSheets,a="",o=t.length-1;o>-1;o--){for(var r=t[o].cssRules,c=r.length-1;c>-1;c--)if(".ie-custom-properties"===r[c].selectorText){a=r[c].cssText;break}if(a)break}return(a=a.substring(a.lastIndexOf("{")+1,a.lastIndexOf("}"))).split(";").forEach(function(t){if(t){var a=t.split(": ")[0],o=t.split(": ")[1];a&&o&&(e["--".concat(a.trim())]=o.trim())}}),e},c=function(){return Boolean(document.documentMode)&&document.documentMode>=10},n=function(e){return e.match(/^--.*/i)},i=function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(n(e)&&c()){var o=r();t=o[e]}else t=window.getComputedStyle(a,null).getPropertyValue(e).replace(/^\s/,"");return t},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,a="--".concat(e),o=i(a,t);return o||e},l=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,a,o;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),a=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),a=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(a,", ").concat(o,")")},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var a,o,r,c=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!c)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(a=parseInt(e.slice(1,3),16),o=parseInt(e.slice(3,5),16),r=parseInt(e.slice(5,7),16)):(a=parseInt(e.slice(1,2),16),o=parseInt(e.slice(2,3),16),r=parseInt(e.slice(3,5),16)),"rgba(".concat(a,", ").concat(o,", ").concat(r,", ").concat(t/100,")")},b=function(){return"uid-"+Math.random().toString(36).substr(2)},h=function(e,t){for(var a={},o=Object.keys(e),r=0;r<o.length;r++)!t.includes(o[r])&&(a[o[r]]=e[o[r]]);return a},p=function(e,t){for(var a={},o=0;o<t.length;o++)a[t[o]]=e[t[o]];return a},u=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var a="0".concat(parseInt(t[1],10).toString(16)),o="0".concat(parseInt(t[2],10).toString(16)),r="0".concat(parseInt(t[3],10).toString(16));return"#".concat(a.slice(-2)).concat(o.slice(-2)).concat(r.slice(-2))};t.default={deepObjectsMerge:o,getColor:s,getStyle:i,hexToRgb:l,hexToRgba:d,makeUid:b,omitByKeys:h,pickByKeys:p,rgbToHex:u}}]))}}])}();