(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{ywyR:function(e,t,n){"use strict";n.r(t),n.d(t,"AdvancedFormsModule",function(){return k});var a=n("SVse"),o=n("s7LF"),r=n("M3cK"),c=n("ienR"),d=n("wTG2"),s=n("Iluq"),l=n("rVqu"),i=n("iInd"),b=n("l+2V"),p=n("8Y7J");function g(e,t){if(1&e&&(p.ac(0,"option",34),p.Oc(1),p.Zb()),2&e){const e=t.$implicit;p.tc("value",e),p.Ib(1),p.Pc(e)}}function u(e,t){if(1&e&&(p.ac(0,"option",34),p.Oc(1),p.Zb()),2&e){const e=t.$implicit;p.tc("value",e),p.Ib(1),p.Pc(e)}}const h=function(e){return{mask:e}},f=[{path:"",component:(()=>{class e{constructor(){this.dateModel="",this.dateMask={mask:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],pipe:Object(b.createAutoCorrectedDatePipe)("mm/dd/yyyy"),placeholder:"Please enter a date",keepCharPositions:!0},this.phoneModel="",this.phoneMask=["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],this.taxModel="",this.taxMask=[/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/],this.ssnModel="",this.ssnMask=[/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],this.eyeScriptModel="",this.eyeScriptMask=["~",/\d/,".",/\d/,/\d/," ","~",/\d/,".",/\d/,/\d/," ",/\d/,/\d/,/\d/],this.ccnModel="",this.ccnMask=[/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/],this.minDate=new Date(2017,5,10),this.maxDate=new Date(2022,9,15),this.bsValue=new Date,this.bsRangeValue=[new Date(2020,7,4),new Date(2020,7,20)],this.hstep=1,this.mstep=15,this.ismeridian=!0,this.isEnabled=!0,this.mytime=new Date,this.options={hstep:[1,2,3],mstep:[1,5,10,15,25,30]},this.countries=[{label:"Belgium",value:"BE"},{label:"Danmark",value:"DK"},{label:"France",value:"FR",disabled:!0},{label:"Luxembourg",value:"LU"},{label:"Netherlands",value:"NL"}],this.selectedCountries=["BE","NL"]}toggleMode(){this.ismeridian=!this.ismeridian}update(){const e=new Date;e.setHours(14),e.setMinutes(0),this.mytime=e}changed(){console.log("Time changed to: "+this.mytime)}clear(){this.mytime=void 0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Ob({type:e,selectors:[["ng-component"]],decls:147,vars:41,consts:[[1,"fade-in"],["md","6"],["href","https://coreui.io/pro/angular/",1,"badge","badge-info","ml-2"],["cLabel",""],["name","cil-calendar","size","sm"],["cInput","",3,"textMask","ngModel","ngModelChange"],["name","cil-phone","size","sm"],["name","cil-dollar","size","sm"],["name","cil-user","size","sm"],["name","cil-asterisk","size","sm"],["name","cil-credit-card","size","sm"],["href","https://ng-select.github.io/ng-select","target","_blank",1,"card-header-action"],[1,"text-muted"],["placeholder","Choose your favorite country",1,"bootstrap",3,"items","clearable"],["placeholder","Choose your favorite country","bindLabel","label","bindValue","value",1,"bootstrap",3,"items","multiple","ngModel","ngModelChange"],["href","https://valor-software.com/ngx-bootstrap/#/datepicker","target","_blank",1,"card-header-action"],["cCol","","xs","12","md","6","col","12"],["cInput","","bsDatepicker","",3,"minDate","maxDate","bsValue","bsValueChange"],["dp","bsDatepicker"],["cCol","","xs","12","md","3","col","12"],["cButton","","color","success",3,"click"],["cInput","","bsDaterangepicker","",3,"ngModel","ngModelChange"],["drp","bsDaterangepicker"],["href","https://valor-software.com/ngx-bootstrap/#/timepicker","target","_blank",1,"card-header-action"],[3,"ngModel","hourStep","minuteStep","showMeridian","readonlyInput","ngModelChange","change"],["color","secondary"],[2,"margin-bottom","0"],["col","6"],["cSelect","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["cButton","","color","info",1,"mr-1","mb-1",3,"click"],["cButton","","color","secondary",1,"mr-1","mb-1",3,"click"],["cButton","","color","primary",1,"mr-1","mb-1",3,"click"],["cButton","","color","danger",1,"mr-1","mb-1",3,"click"],[3,"value"]],template:function(e,t){if(1&e){const e=p.bc();p.ac(0,"div",0),p.ac(1,"c-row"),p.ac(2,"c-col",1),p.ac(3,"c-card"),p.ac(4,"c-card-header"),p.ac(5,"strong"),p.Oc(6,"Angular 2 Input Mask"),p.Zb(),p.Oc(7," - Text Mask "),p.ac(8,"a",2),p.Oc(9,"CoreUI Pro integration"),p.Zb(),p.Zb(),p.ac(10,"c-card-body"),p.ac(11,"fieldset"),p.ac(12,"c-form-group"),p.ac(13,"label",3),p.Oc(14,"Date input"),p.Zb(),p.ac(15,"c-input-group"),p.ac(16,"c-input-group-prepend"),p.ac(17,"c-input-group-text"),p.Vb(18,"c-icon",4),p.Zb(),p.Zb(),p.ac(19,"input",5),p.kc("ngModelChange",function(e){return t.dateModel=e}),p.Zb(),p.Zb(),p.ac(20,"c-form-text"),p.Oc(21,"ex. 99/99/9999"),p.Zb(),p.Zb(),p.ac(22,"c-form-group"),p.ac(23,"label",3),p.Oc(24,"Phone input"),p.Zb(),p.ac(25,"c-input-group"),p.ac(26,"c-input-group-prepend"),p.ac(27,"c-input-group-text"),p.Vb(28,"c-icon",6),p.Zb(),p.Zb(),p.ac(29,"input",5),p.kc("ngModelChange",function(e){return t.phoneModel=e}),p.Zb(),p.Zb(),p.ac(30,"c-form-text"),p.Oc(31,"ex. (999) 999-9999"),p.Zb(),p.Zb(),p.ac(32,"c-form-group"),p.ac(33,"label"),p.Oc(34,"Taxpayer Identification Numbers"),p.Zb(),p.ac(35,"c-input-group"),p.ac(36,"c-input-group-prepend"),p.ac(37,"c-input-group-text"),p.Vb(38,"c-icon",7),p.Zb(),p.Zb(),p.ac(39,"input",5),p.kc("ngModelChange",function(e){return t.taxModel=e}),p.Zb(),p.Zb(),p.ac(40,"c-form-text"),p.Oc(41,"ex. 99-9999999"),p.Zb(),p.Zb(),p.ac(42,"c-form-group"),p.ac(43,"label"),p.Oc(44,"Social Security Number"),p.Zb(),p.ac(45,"c-input-group"),p.ac(46,"c-input-group-prepend"),p.ac(47,"c-input-group-text"),p.Vb(48,"c-icon",8),p.Zb(),p.Zb(),p.ac(49,"input",5),p.kc("ngModelChange",function(e){return t.ssnModel=e}),p.Zb(),p.Zb(),p.ac(50,"c-form-text"),p.Oc(51,"ex. 999-99-9999"),p.Zb(),p.Zb(),p.ac(52,"c-form-group"),p.ac(53,"label"),p.Oc(54,"Eye Script"),p.Zb(),p.ac(55,"c-input-group"),p.ac(56,"c-input-group-prepend"),p.ac(57,"c-input-group-text"),p.Vb(58,"c-icon",9),p.Zb(),p.Zb(),p.ac(59,"input",5),p.kc("ngModelChange",function(e){return t.eyeScriptModel=e}),p.Zb(),p.Zb(),p.ac(60,"c-form-text"),p.Oc(61,"ex. ~9.99 ~9.99 999"),p.Zb(),p.Zb(),p.ac(62,"c-form-group"),p.ac(63,"label"),p.Oc(64,"Credit Card Number"),p.Zb(),p.ac(65,"c-input-group"),p.ac(66,"c-input-group-prepend"),p.ac(67,"c-input-group-text"),p.Vb(68,"c-icon",10),p.Zb(),p.Zb(),p.ac(69,"input",5),p.kc("ngModelChange",function(e){return t.ccnModel=e}),p.Zb(),p.Zb(),p.ac(70,"c-form-text"),p.Oc(71,"ex. 9999 9999 9999 9999"),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.ac(72,"c-col",1),p.ac(73,"c-card"),p.ac(74,"c-card-header"),p.ac(75,"strong"),p.Oc(76,"Ng-select"),p.Zb(),p.ac(77,"a",2),p.Oc(78,"CoreUI Pro integration"),p.Zb(),p.ac(79,"c-card-header-actions"),p.ac(80,"a",11),p.ac(81,"small",12),p.Oc(82,"docs"),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.ac(83,"c-card-body"),p.ac(84,"fieldset"),p.ac(85,"c-form-group"),p.Vb(86,"ng-select",13),p.Zb(),p.ac(87,"c-form-group"),p.ac(88,"ng-select",14),p.kc("ngModelChange",function(e){return t.selectedCountries=e}),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.ac(89,"c-card"),p.ac(90,"c-card-header"),p.ac(91,"strong"),p.Oc(92,"Datepicker"),p.Zb(),p.ac(93,"a",2),p.Oc(94,"CoreUI Pro integration"),p.Zb(),p.ac(95,"c-card-header-actions"),p.ac(96,"a",15),p.ac(97,"small",12),p.Oc(98,"docs"),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.ac(99,"c-card-body"),p.ac(100,"c-row"),p.ac(101,"c-form-group",16),p.ac(102,"input",17,18),p.kc("bsValueChange",function(e){return t.bsValue=e}),p.Zb(),p.Zb(),p.ac(104,"c-form-group",19),p.ac(105,"button",20),p.kc("click",function(){return p.Ec(e),p.Cc(103).toggle()}),p.Oc(106,"Date Picker"),p.Zb(),p.Zb(),p.Zb(),p.ac(107,"c-row"),p.ac(108,"c-form-group",16),p.ac(109,"input",21,22),p.kc("ngModelChange",function(e){return t.bsRangeValue=e}),p.Zb(),p.Zb(),p.ac(111,"c-form-group",19),p.ac(112,"button",20),p.kc("click",function(){return p.Ec(e),p.Cc(110).toggle()}),p.Oc(113,"Date Range Picker"),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.ac(114,"c-card"),p.ac(115,"c-card-header"),p.ac(116,"strong"),p.Oc(117,"Timepicker"),p.Zb(),p.ac(118,"a",2),p.Oc(119,"CoreUI Pro integration"),p.Zb(),p.ac(120,"c-card-header-actions"),p.ac(121,"a",23),p.ac(122,"small",12),p.Oc(123,"docs"),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.ac(124,"c-card-body"),p.ac(125,"timepicker",24),p.kc("ngModelChange",function(e){return t.mytime=e})("change",function(){return t.changed()}),p.Zb(),p.ac(126,"c-alert",25),p.ac(127,"pre",26),p.Oc(128),p.Zb(),p.Zb(),p.ac(129,"c-row"),p.ac(130,"c-col",27),p.Oc(131," Hours step is: "),p.ac(132,"select",28),p.kc("ngModelChange",function(e){return t.hstep=e}),p.Mc(133,g,2,2,"option",29),p.Zb(),p.Zb(),p.ac(134,"c-col",27),p.Oc(135," Minutes step is: "),p.ac(136,"select",28),p.kc("ngModelChange",function(e){return t.mstep=e}),p.Mc(137,u,2,2,"option",29),p.Zb(),p.Zb(),p.Zb(),p.Vb(138,"hr"),p.ac(139,"button",30),p.kc("click",function(){return t.toggleMode()}),p.Oc(140,"12H / 24H"),p.Zb(),p.ac(141,"button",31),p.kc("click",function(){return t.isEnabled=!t.isEnabled}),p.Oc(142,"Enable / Disable input"),p.Zb(),p.ac(143,"button",32),p.kc("click",function(){return t.update()}),p.Oc(144,"Set to 14:00"),p.Zb(),p.ac(145,"button",33),p.kc("click",function(){return t.clear()}),p.Oc(146,"Clear"),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb(),p.Zb()}2&e&&(p.Ib(19),p.tc("textMask",t.dateMask)("ngModel",t.dateModel),p.Ib(10),p.tc("textMask",p.wc(31,h,t.phoneMask))("ngModel",t.phoneModel),p.Ib(10),p.tc("textMask",p.wc(33,h,t.taxMask))("ngModel",t.taxModel),p.Ib(10),p.tc("textMask",p.wc(35,h,t.ssnMask))("ngModel",t.ssnModel),p.Ib(10),p.tc("textMask",p.wc(37,h,t.eyeScriptMask))("ngModel",t.eyeScriptModel),p.Ib(10),p.tc("textMask",p.wc(39,h,t.ccnMask))("ngModel",t.ccnModel),p.Ib(17),p.tc("items",t.countries)("clearable",!0),p.Ib(2),p.tc("items",t.countries)("multiple",!0)("ngModel",t.selectedCountries),p.Ib(14),p.tc("minDate",t.minDate)("maxDate",t.maxDate)("bsValue",t.bsValue),p.Ib(7),p.tc("ngModel",t.bsRangeValue),p.Ib(16),p.tc("ngModel",t.mytime)("hourStep",t.hstep)("minuteStep",t.mstep)("showMeridian",t.ismeridian)("readonlyInput",!t.isEnabled),p.Ib(3),p.Qc("Time is: ",t.mytime,""),p.Ib(4),p.tc("ngModel",t.hstep),p.Ib(1),p.tc("ngForOf",t.options.hstep),p.Ib(3),p.tc("ngModel",t.mstep),p.Ib(1),p.tc("ngForOf",t.options.mstep))},directives:[s.Eb,s.Gb,s.qc,s.uc,s.rc,s.tb,s.Cb,s.wb,s.yb,s.xb,l.a,o.e,s.vb,s.P,o.p,o.s,s.ub,s.vc,d.a,s.Hb,c.b,c.a,s.nc,c.e,c.d,r.a,s.cc,o.x,s.Bb,a.n,o.t,o.A],styles:['.bs-datepicker{display:flex;align-items:stretch;flex-flow:row wrap;background:#fff;box-shadow:0 0 10px 0 #aaa;position:relative;z-index:1}.bs-datepicker:after{clear:both;content:"";display:block}.bs-datepicker bs-day-picker{float:left}.bs-datepicker-btns button:active,.bs-datepicker-btns button:focus,.bs-datepicker-btns button:hover,.bs-datepicker-predefined-btns button:active,.bs-datepicker-predefined-btns button:focus,.bs-datepicker button:active,.bs-datepicker button:focus,.bs-datepicker button:hover,.bs-datepicker input:active,.bs-datepicker input:focus,.bs-datepicker input:hover{outline:none}.bs-datepicker-head{min-width:270px;height:50px;padding:10px;border-radius:3px 3px 0 0;text-align:justify}.bs-datepicker-head:after{content:"";display:inline-block;vertical-align:top;width:100%}.bs-datepicker-head button{display:inline-block;vertical-align:top;padding:0;height:30px;line-height:30px;border:0;background:transparent;text-align:center;cursor:pointer;color:#fff;transition:.3s}.bs-datepicker-head button[disabled],.bs-datepicker-head button[disabled]:active,.bs-datepicker-head button[disabled]:hover{background:hsla(0,0%,86.7%,.3);color:#f5f5f5;cursor:not-allowed}.bs-datepicker-head button.next,.bs-datepicker-head button.previous{border-radius:50%;width:30px;height:30px}.bs-datepicker-head button.next span,.bs-datepicker-head button.previous span{font-size:28px;line-height:1;display:inline-block;position:relative;height:100%;width:100%;border-radius:50%}.bs-datepicker-head button.current{border-radius:15px;max-width:155px;padding:0 13px}.bs-datepicker-head button:hover{background-color:rgba(0,0,0,.1)}.bs-datepicker-head button:active{background-color:rgba(0,0,0,.2)}.bs-datepicker-body{padding:10px;border-radius:0 0 3px 3px;min-height:232px;min-width:278px;border:1px solid #e9edf0}.bs-datepicker-body .days.weeks{position:relative;z-index:1}.bs-datepicker-body table{width:100%;border-collapse:separate;border-spacing:0}.bs-datepicker-body table th{font-size:13px;color:#9aaec1;font-weight:400;text-align:center}.bs-datepicker-body table td{color:#54708b;text-align:center;position:relative;padding:0}.bs-datepicker-body table td span{display:block;margin:0 auto;font-size:13px;border-radius:50%;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.bs-datepicker-body table td:not(.disabled):not(.week) span:not(.disabled):not(.is-other-month){cursor:pointer}.bs-datepicker-body table td.is-highlighted:not(.disabled):not(.selected) span,.bs-datepicker-body table td span.is-highlighted:not(.disabled):not(.selected){background-color:#e9edf0;transition:0s}.bs-datepicker-body table td.is-active-other-month:not(.disabled):not(.selected) span,.bs-datepicker-body table td span.is-active-other-month:not(.disabled):not(.selected){background-color:#e9edf0;transition:0s;cursor:pointer}.bs-datepicker-body table td.disabled span,.bs-datepicker-body table td span.disabled{color:#9aaec1}.bs-datepicker-body table td.selected span,.bs-datepicker-body table td span.selected{color:#fff}.bs-datepicker-body table td.is-other-month span,.bs-datepicker-body table td span.is-other-month{color:rgba(0,0,0,.25)}.bs-datepicker-body table td.active{position:relative}.bs-datepicker-body table td.active.select-start:before{left:35%}.bs-datepicker-body table td.active.select-end:before{left:-85%}.bs-datepicker-body table td.active.select-end span:after,.bs-datepicker-body table td.active.select-start span:after,.bs-datepicker-body table td span.active.select-end:after,.bs-datepicker-body table td span.active.select-start:after{content:"";display:block;position:absolute;z-index:-1;width:100%;height:100%;transition:.3s;top:0;border-radius:50%}.bs-datepicker-body table td:before,.bs-datepicker-body table td span:before{content:"";display:block;position:absolute;z-index:-1;top:6px;bottom:6px;left:-3px;right:-2px;box-sizing:content-box;background:transparent}.bs-datepicker-body table td.active.select-start+td.active:before{left:-20%}.bs-datepicker-body table td:last-child.active:before{border-radius:0 3px 3px 0;width:125%;left:-25%}.bs-datepicker-body table td[class*=select-] span,.bs-datepicker-body table td span[class*=select-]{border-radius:50%;color:#fff}.bs-datepicker-body table.days span.active:not(.select-start):before,.bs-datepicker-body table.days span.in-range:not(.select-start):before,.bs-datepicker-body table.days td.active:not(.select-start):before,.bs-datepicker-body table.days td.in-range:not(.select-start):before{background:#e9edf0}.bs-datepicker-body table.days span{width:32px;height:32px;line-height:32px}.bs-datepicker-body table.days span.select-start{z-index:2}.bs-datepicker-body table.days span.is-highlighted.in-range:before{right:3px;left:0}.bs-datepicker-body table.days span.in-range.select-end:before{right:4px;left:0}.bs-datepicker-body table.days td.active+td.is-highlighted:before,.bs-datepicker-body table.days td.active+td.select-end:before,.bs-datepicker-body table.days td.in-range+td.is-highlighted:before,.bs-datepicker-body table.days td.in-range+td.select-end:before,.bs-datepicker-body table.days td.select-start+td.is-highlighted:before,.bs-datepicker-body table.days td.select-start+td.select-end:before{background:#e9edf0;width:100%}.bs-datepicker-body table.weeks tr td:nth-child(2).active:before{border-radius:3px 0 0 3px;left:0;width:100%}.bs-datepicker-body table:not(.weeks) tr td:first-child:before{border-radius:3px 0 0 3px}.bs-datepicker-body table.years td span{width:46px;height:46px;line-height:45px;margin:0 auto}.bs-datepicker-body table.years tr:not(:last-child) td span{margin-bottom:8px}.bs-datepicker-body table.months td{height:52px}.bs-datepicker-body table.months td span{padding:6px;border-radius:15px}.bs-datepicker .current-timedate{color:#54708b;font-size:15px;text-align:center;height:30px;line-height:30px;border-radius:20px;border:1px solid #e9edf0;margin-bottom:10px;cursor:pointer;text-transform:uppercase;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}.bs-datepicker .current-timedate span:not(:empty):before{content:"";width:15px;height:16px;display:inline-block;margin-right:4px;vertical-align:text-bottom;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAABMklEQVQoU9VTwW3CQBCcOUgBtEBKSAukAnBKME+wFCAlYIhk8sQlxFABtJAScAsuAPBEewYcxCP8ouxrPDsza61uiVN1o6RNHD4htSCmq49RfO71BvMJqBBkITRf1kmUW49nQRC9h1I5AZlBClaL8aP1fKgOOxCx8aSLs+Q19eZuNO8QmPqJRtDFguy7OAcDbJPs+/BKVPDIPrvD2ZJgWAmVe7O0rI0Vqs1seyWUXpuJoppYCa5L+U++NpNPkr5OE2oMdARsb3gykJT5ydZcL8Z9Ww60nxg2LhjON9li9OwXZzo+xLbp3nC2s9CL2RrueGyVrgwNm8HpsCzZ9EEW6kqXlo1GQe03FzP/7W8Hl0dBtu7Bf7zt6mIwvX1RvzDCm7+q3mAW0Dl/GPdUCeXrZLT9BrDrGkm4qlPvAAAAAElFTkSuQmCC)}.bs-datepicker-multiple{border-radius:4px 0 0 4px}.bs-datepicker-multiple+.bs-datepicker-multiple{margin-left:10px}.bs-datepicker-multiple .bs-datepicker{box-shadow:none;position:relative}.bs-datepicker-multiple .bs-datepicker:not(:last-child){padding-right:10px}.bs-datepicker-multiple .bs-datepicker+.bs-datepicker:after{content:"";display:block;width:14px;height:10px;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAA1ElEQVQoU42RsQrCUAxF77VuDu7O4oMWW//BURBBpZvgKk4uIrjoqKOTf+DopIO4uYggtFTfw3+pkQqCW1/G5J7kJiFy4m5MxUlxAzgIPHX+lzMPzupRYlYgxiR7vqsOP8YKzsTx0yxFMCUZ+q7aZzlr+OvgoWcAFyAHgat2jLWu48252DdqAihDJGSSJNUUxYmQjs3+hPQBlAh2rG2LCOPnaw3IiGDX99TRCs7ASJsNhUOA7d/LcuHvRG22FIZvsNXw1MX6VZExCilOQKEfeLXr/10+aC9Ho7arh7oAAAAASUVORK5CYII=);position:absolute;top:25px;left:-8px}.bs-datepicker-multiple .bs-datepicker .left{float:left}.bs-datepicker-multiple .bs-datepicker .right{float:right}.bs-datepicker-container{padding:15px}.bs-datepicker .bs-media-container{display:flex}@media (max-width:768px){.bs-datepicker .bs-media-container{flex-direction:column}}.bs-datepicker-custom-range{padding:15px;background:#eee}.bs-datepicker-predefined-btns button{width:100%;display:block;height:30px;background-color:#9aaec1;border-radius:4px;color:#fff;border:0;margin-bottom:10px;padding:0 18px;text-align:left;transition:.3s}.bs-datepicker-predefined-btns button:hover{background-color:#54708b}.bs-datepicker-buttons{display:flex;flex-flow:row wrap;justify-content:flex-end;padding-top:10px;border-top:1px solid #e9edf0}.bs-datepicker-buttons .btn-default{margin-left:10px}.bs-datepicker-buttons .btn-today-wrapper{display:flex;flex-flow:row wrap}.bs-datepicker-buttons .clear-right,.bs-datepicker-buttons .today-right{flex-grow:0}.bs-datepicker-buttons .clear-left,.bs-datepicker-buttons .today-left{flex-grow:1}.bs-datepicker-buttons .clear-center,.bs-datepicker-buttons .today-center{flex-grow:0.5}.bs-timepicker-container{padding:10px 0}.bs-timepicker-label{color:#54708b;margin-bottom:10px}.bs-timepicker-controls{display:inline-block;vertical-align:top;margin-right:10px}.bs-timepicker-controls button{width:20px;height:20px;border-radius:50%;border:0;background-color:#e9edf0;color:#54708b;font-size:16px;font-weight:700;vertical-align:middle;line-height:0;padding:0;transition:.3s}.bs-timepicker-controls button:hover{background-color:#d5dadd}.bs-timepicker-controls input{width:35px;height:25px;border-radius:13px;text-align:center;border:1px solid #e9edf0}.bs-timepicker .switch-time-format{text-transform:uppercase;min-width:54px;height:25px;border-radius:20px;border:1px solid #e9edf0;background:#fff;color:#54708b;font-size:13px}.bs-timepicker .switch-time-format img{vertical-align:initial;margin-left:4px}bs-datepicker-container,bs-daterangepicker-container{z-index:1080}@media (max-width:768px){.bs-datepicker-multiple{display:flex}.bs-datepicker-multiple+.bs-datepicker-multiple{margin-top:10px;margin-left:0}}.theme-default .bs-datepicker-head{background-color:#777}.theme-default .btn-clear-wrapper .btn-success,.theme-default .btn-today-wrapper .btn-success{background-color:#777;border-color:#777}.theme-default .btn-clear-wrapper .btn-success:focus,.theme-default .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active:focus,.theme-default .btn-today-wrapper .btn-success:focus,.theme-default .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active:focus{box-shadow:none}.theme-default .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active,.theme-default .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active{background-color:#616161;border-color:#616161}.theme-default .btn-clear-wrapper .btn-success:hover,.theme-default .btn-today-wrapper .btn-success:hover{background-color:#6f6e6e;border-color:#6f6e6e}.theme-default .bs-datepicker-body table td.selected span,.theme-default .bs-datepicker-body table td[class*=select-] span:after,.theme-default .bs-datepicker-body table td span.selected,.theme-default .bs-datepicker-body table td span[class*=select-]:after,.theme-default .bs-datepicker-predefined-btns button.selected{background-color:#777}.theme-default .bs-datepicker-body table td.week span{color:#777}.theme-default .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#777;color:#fff;opacity:.5;transition:0s}.theme-green .bs-datepicker-head{background-color:#5cb85c}.theme-green .btn-clear-wrapper .btn-success,.theme-green .btn-today-wrapper .btn-success{background-color:#5cb85c;border-color:#5cb85c}.theme-green .btn-clear-wrapper .btn-success:focus,.theme-green .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active:focus,.theme-green .btn-today-wrapper .btn-success:focus,.theme-green .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active:focus{box-shadow:none}.theme-green .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active,.theme-green .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active{background-color:#1e7e34;border-color:#1e7e34}.theme-green .btn-clear-wrapper .btn-success:hover,.theme-green .btn-today-wrapper .btn-success:hover{background-color:#218838;border-color:#218838}.theme-green .bs-datepicker-body table td.selected span,.theme-green .bs-datepicker-body table td[class*=select-] span:after,.theme-green .bs-datepicker-body table td span.selected,.theme-green .bs-datepicker-body table td span[class*=select-]:after,.theme-green .bs-datepicker-predefined-btns button.selected{background-color:#5cb85c}.theme-green .bs-datepicker-body table td.week span{color:#5cb85c}.theme-green .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#5cb85c;color:#fff;opacity:.5;transition:0s}.theme-blue .bs-datepicker-head{background-color:#5bc0de}.theme-blue .btn-clear-wrapper .btn-success,.theme-blue .btn-today-wrapper .btn-success{background-color:#5bc0de;border-color:#5bc0de}.theme-blue .btn-clear-wrapper .btn-success:focus,.theme-blue .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active:focus,.theme-blue .btn-today-wrapper .btn-success:focus,.theme-blue .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active:focus{box-shadow:none}.theme-blue .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active,.theme-blue .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active{background-color:#2aa8cd;border-color:#2aa8cd}.theme-blue .btn-clear-wrapper .btn-success:hover,.theme-blue .btn-today-wrapper .btn-success:hover{background-color:#3ab3d7;border-color:#3ab3d7}.theme-blue .bs-datepicker-body table td.selected span,.theme-blue .bs-datepicker-body table td[class*=select-] span:after,.theme-blue .bs-datepicker-body table td span.selected,.theme-blue .bs-datepicker-body table td span[class*=select-]:after,.theme-blue .bs-datepicker-predefined-btns button.selected{background-color:#5bc0de}.theme-blue .bs-datepicker-body table td.week span{color:#5bc0de}.theme-blue .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#5bc0de;color:#fff;opacity:.5;transition:0s}.theme-dark-blue .bs-datepicker-head{background-color:#337ab7}.theme-dark-blue .btn-clear-wrapper .btn-success,.theme-dark-blue .btn-today-wrapper .btn-success{background-color:#337ab7;border-color:#337ab7}.theme-dark-blue .btn-clear-wrapper .btn-success:focus,.theme-dark-blue .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active:focus,.theme-dark-blue .btn-today-wrapper .btn-success:focus,.theme-dark-blue .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active:focus{box-shadow:none}.theme-dark-blue .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active,.theme-dark-blue .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active{background-color:#266498;border-color:#266498}.theme-dark-blue .btn-clear-wrapper .btn-success:hover,.theme-dark-blue .btn-today-wrapper .btn-success:hover{background-color:#2c6fa9;border-color:#2c6fa9}.theme-dark-blue .bs-datepicker-body table td.selected span,.theme-dark-blue .bs-datepicker-body table td[class*=select-] span:after,.theme-dark-blue .bs-datepicker-body table td span.selected,.theme-dark-blue .bs-datepicker-body table td span[class*=select-]:after,.theme-dark-blue .bs-datepicker-predefined-btns button.selected{background-color:#337ab7}.theme-dark-blue .bs-datepicker-body table td.week span{color:#337ab7}.theme-dark-blue .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#337ab7;color:#fff;opacity:.5;transition:0s}.theme-red .bs-datepicker-head{background-color:#d9534f}.theme-red .btn-clear-wrapper .btn-success,.theme-red .btn-today-wrapper .btn-success{background-color:#d9534f;border-color:#d9534f}.theme-red .btn-clear-wrapper .btn-success:focus,.theme-red .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active:focus,.theme-red .btn-today-wrapper .btn-success:focus,.theme-red .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active:focus{box-shadow:none}.theme-red .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active,.theme-red .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active{background-color:#d23531;border-color:#d23531}.theme-red .btn-clear-wrapper .btn-success:hover,.theme-red .btn-today-wrapper .btn-success:hover{background-color:#e33732;border-color:#e33732}.theme-red .bs-datepicker-body table td.selected span,.theme-red .bs-datepicker-body table td[class*=select-] span:after,.theme-red .bs-datepicker-body table td span.selected,.theme-red .bs-datepicker-body table td span[class*=select-]:after,.theme-red .bs-datepicker-predefined-btns button.selected{background-color:#d9534f}.theme-red .bs-datepicker-body table td.week span{color:#d9534f}.theme-red .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#d9534f;color:#fff;opacity:.5;transition:0s}.theme-orange .bs-datepicker-head{background-color:#f0ad4e}.theme-orange .btn-clear-wrapper .btn-success,.theme-orange .btn-today-wrapper .btn-success{background-color:#f0ad4e;border-color:#f0ad4e}.theme-orange .btn-clear-wrapper .btn-success:focus,.theme-orange .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active:focus,.theme-orange .btn-today-wrapper .btn-success:focus,.theme-orange .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active:focus{box-shadow:none}.theme-orange .btn-clear-wrapper .btn-success:not(:disabled):not(.disabled):active,.theme-orange .btn-today-wrapper .btn-success:not(:disabled):not(.disabled):active{background-color:#ed9c29;border-color:#ed9c29}.theme-orange .btn-clear-wrapper .btn-success:hover,.theme-orange .btn-today-wrapper .btn-success:hover{background-color:#ffac35;border-color:#ffac35}.theme-orange .bs-datepicker-body table td.selected span,.theme-orange .bs-datepicker-body table td[class*=select-] span:after,.theme-orange .bs-datepicker-body table td span.selected,.theme-orange .bs-datepicker-body table td span[class*=select-]:after,.theme-orange .bs-datepicker-predefined-btns button.selected{background-color:#f0ad4e}.theme-orange .bs-datepicker-body table td.week span{color:#f0ad4e}.theme-orange .bs-datepicker-body table td.active-week span:hover{cursor:pointer;background-color:#f0ad4e;color:#fff;opacity:.5;transition:0s}.ng-select.ng-select-opened>.ng-select-container{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}.ng-select.ng-select-opened>.ng-select-container:hover{box-shadow:none}.ng-select.ng-select-opened>.ng-select-container .ng-arrow{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}.ng-select.ng-select-opened>.ng-select-container .ng-arrow:hover{border-color:transparent transparent #333}.ng-select.ng-select-opened.ng-select-bottom>.ng-select-container{border-bottom-right-radius:0;border-bottom-left-radius:0}.ng-select.ng-select-opened.ng-select-top>.ng-select-container{border-top-right-radius:0;border-top-left-radius:0}.ng-select.ng-select-focused:not(.ng-select-opened)>.ng-select-container{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px rgba(0,126,255,.1)}.ng-select.ng-select-disabled>.ng-select-container{background-color:#f9f9f9}.ng-select .ng-has-value .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}.ng-select .ng-select-container:hover{box-shadow:0 1px 0 rgba(0,0,0,.06)}.ng-select .ng-select-container .ng-value-container{align-items:center;padding-left:10px}[dir=rtl] .ng-select .ng-select-container .ng-value-container{padding-right:10px;padding-left:0}.ng-select .ng-select-container .ng-value-container .ng-placeholder{color:#999}.ng-select.ng-select-single .ng-select-container{height:36px}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{top:5px;left:0;padding-left:10px;padding-right:50px}[dir=rtl] .ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{padding-right:10px;padding-left:50px}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value{background-color:#f9f9f9;border:1px solid #e6e6e6}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-label{padding:0 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-top:5px;padding-left:7px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container{padding-right:7px;padding-left:0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{margin-right:0;margin-left:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled{background-color:#f9f9f9}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:5px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-label{padding-left:0;padding-right:5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon,.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-label{display:inline-block;padding:1px 5px}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon:hover{background-color:#d1e8ff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-right:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.left{border-left:1px solid #b8dbff;border-right:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:1px solid #b8dbff}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon.right{border-left:0;border-right:1px solid #b8dbff}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 0 3px 3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{padding:0 3px 3px 0}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{top:5px;padding-bottom:5px;padding-left:3px}[dir=rtl] .ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{padding-right:3px;padding-left:0}.ng-select .ng-clear-wrapper{color:#999}.ng-select .ng-clear-wrapper:hover .ng-clear{color:#d0021b}.ng-select .ng-spinner-zone{padding:5px 5px 0 0}[dir=rtl] .ng-select .ng-spinner-zone{padding:5px 0 0 5px}.ng-select .ng-arrow-wrapper{width:25px;padding-right:5px}[dir=rtl] .ng-select .ng-arrow-wrapper{padding-left:5px;padding-right:0}.ng-select .ng-arrow-wrapper:hover .ng-arrow{border-top-color:#666}.ng-select .ng-arrow-wrapper .ng-arrow{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}.ng-dropdown-panel{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.06);left:0}.ng-dropdown-panel.ng-select-bottom{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}.ng-dropdown-panel.ng-select-bottom .ng-dropdown-panel-items .ng-option:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}.ng-dropdown-panel.ng-select-top{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}.ng-dropdown-panel.ng-select-top .ng-dropdown-panel-items .ng-option:first-child{border-top-right-radius:4px;border-top-left-radius:4px}.ng-dropdown-panel .ng-dropdown-header{border-bottom:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-footer{border-top:1px solid #ccc;padding:5px 7px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,.54);cursor:pointer}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-disabled{cursor:default}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-marked{background-color:#f5faff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup.ng-option-selected.ng-option-marked{background-color:#ebf5ff;font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{background-color:#fff;color:rgba(0,0,0,.87);padding:8px 10px}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked{color:#333;background-color:#ebf5ff}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected .ng-option-label,.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-selected.ng-option-marked .ng-option-label{font-weight:600}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-marked{background-color:#f5faff;color:#333}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-disabled{color:#ccc}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-left:22px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option.ng-option-child{padding-right:22px;padding-left:0}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{font-size:80%;font-weight:400;padding-right:5px}[dir=rtl] .ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-tag-label{padding-left:5px;padding-right:0}[dir=rtl] .ng-dropdown-panel{direction:rtl;text-align:right}:host c-input-group-append c-input-group-text c-icon:only-child,:host c-input-group-prepend c-input-group-text c-icon:only-child{display:flex}'],encapsulation:2}),e})(),data:{title:"Advanced Forms"}}];let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Sb({type:e}),e.\u0275inj=p.Rb({imports:[[i.g.forChild(f)],i.g]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.Sb({type:e}),e.\u0275inj=p.Rb({imports:[[a.c,o.l,m,r.b.forRoot(),c.c.forRoot(),d.b,s.h,s.r,s.f,s.q,l.b,s.b,s.Q]]}),e})()}}]);