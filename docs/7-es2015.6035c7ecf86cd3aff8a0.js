(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{E1sD:function(e,n,t){"use strict";t.r(n);var r=t("aceb"),a=t("vTDv"),l=t("tyNb"),o=t("fXoL");let i=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-components"]],decls:1,vars:0,template:function(e,n){1&e&&o["\u0275\u0275element"](0,"router-outlet")},directives:[l.h],encapsulation:2}),e})(),s=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-alert"]],decls:46,vars:0,consts:[[1,"row"],[1,"col-md-12","col-lg-4","col-xxxl-4"],["status","primary"],["status","success"],["status","info"],["status","warning"],["status","danger"],["outline","primary"],["outline","success"],["outline","info"],["outline","warning"],["outline","danger"],["status","primary","accent","info"],["status","success","accent","danger"],["status","info","accent","warning"],["status","warning","accent","danger"],["status","danger","accent","primary"]],template:function(e,n){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275elementStart"](2,"nb-card"),o["\u0275\u0275elementStart"](3,"nb-card-header"),o["\u0275\u0275text"](4,"Colored Alert"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"nb-card-body"),o["\u0275\u0275elementStart"](6,"nb-alert",2),o["\u0275\u0275text"](7,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"nb-alert",3),o["\u0275\u0275text"](9,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"nb-alert",4),o["\u0275\u0275text"](11,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"nb-alert",5),o["\u0275\u0275text"](13,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](14,"nb-alert",6),o["\u0275\u0275text"](15,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](16,"div",1),o["\u0275\u0275elementStart"](17,"nb-card"),o["\u0275\u0275elementStart"](18,"nb-card-header"),o["\u0275\u0275text"](19,"Outline Alert"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](20,"nb-card-body"),o["\u0275\u0275elementStart"](21,"nb-alert",7),o["\u0275\u0275text"](22,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"nb-alert",8),o["\u0275\u0275text"](24,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"nb-alert",9),o["\u0275\u0275text"](26,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](27,"nb-alert",10),o["\u0275\u0275text"](28,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](29,"nb-alert",11),o["\u0275\u0275text"](30,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](31,"div",1),o["\u0275\u0275elementStart"](32,"nb-card"),o["\u0275\u0275elementStart"](33,"nb-card-header"),o["\u0275\u0275text"](34,"Accent Alert"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](35,"nb-card-body"),o["\u0275\u0275elementStart"](36,"nb-alert",12),o["\u0275\u0275text"](37,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](38,"nb-alert",13),o["\u0275\u0275text"](39,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](40,"nb-alert",14),o["\u0275\u0275text"](41,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](42,"nb-alert",15),o["\u0275\u0275text"](43,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](44,"nb-alert",16),o["\u0275\u0275text"](45,"You have been successfully authenticated!"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]())},directives:[r.x,r.A,r.w,r.o],encapsulation:2}),e})(),c=(()=>{class e{constructor(){this.value=25}get status(){return this.value<=25?"danger":this.value<=50?"warning":this.value<=75?"info":"success"}get canIncrease(){return this.value<100}get canDecrease(){return this.value>0}decreaseValue(){this.value>0&&(this.value-=25)}increaseValue(){this.value<100&&(this.value+=25)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-interactive-progress-bar"]],decls:10,vars:5,consts:[[1,"container"],["nbButton","","appearance","ghost",3,"disabled","click"],["icon","minus","pack","eva"],[3,"value","status","displayValue"],["icon","plus","pack","eva"]],template:function(e,n){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card"),o["\u0275\u0275elementStart"](1,"nb-card-header"),o["\u0275\u0275text"](2,"Progress Bar Interactive"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"nb-card-body"),o["\u0275\u0275elementStart"](4,"div",0),o["\u0275\u0275elementStart"](5,"button",1),o["\u0275\u0275listener"]("click",(function(){return n.decreaseValue()})),o["\u0275\u0275element"](6,"nb-icon",2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](7,"nb-progress-bar",3),o["\u0275\u0275elementStart"](8,"button",1),o["\u0275\u0275listener"]("click",(function(){return n.increaseValue()})),o["\u0275\u0275element"](9,"nb-icon",4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](5),o["\u0275\u0275property"]("disabled",n.canDecrease?null:""),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("value",n.value)("status",n.status)("displayValue",!0),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("disabled",n.canIncrease?null:""))},directives:[r.x,r.A,r.w,r.q,r.Q,r.mb],styles:[".nb-theme-default   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.nb-theme-default   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;margin:0 1rem}.nb-theme-dark   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.nb-theme-dark   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;margin:0 1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.nb-theme-cosmic   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;margin:0 1rem}.nb-theme-corporate   [_nghost-%COMP%]   .container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.nb-theme-corporate   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%]{-webkit-box-flex:1;flex:1;margin:0 1rem}"]}),e})(),d=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-progress-bar"]],decls:36,vars:13,consts:[["status","primary",3,"value"],["status","info",3,"value"],["status","success",3,"value"],["status","warning",3,"value"],["status","danger",3,"value"],["size","tiny",3,"value"],["size","small",3,"value"],["size","medium",3,"value"],["size","large",3,"value"],["size","giant",3,"value"],["status","primary",3,"value","displayValue"]],template:function(e,n){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card"),o["\u0275\u0275elementStart"](1,"nb-card-header"),o["\u0275\u0275text"](2,"Progress Bar Status"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"nb-card-body"),o["\u0275\u0275elementStart"](4,"nb-progress-bar",0),o["\u0275\u0275text"](5,"primary"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"nb-progress-bar",1),o["\u0275\u0275text"](7,"info"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"nb-progress-bar",2),o["\u0275\u0275text"](9,"success"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"nb-progress-bar",3),o["\u0275\u0275text"](11,"warning"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"nb-progress-bar",4),o["\u0275\u0275text"](13,"danger"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](14,"ngx-interactive-progress-bar"),o["\u0275\u0275elementStart"](15,"nb-card"),o["\u0275\u0275elementStart"](16,"nb-card-header"),o["\u0275\u0275text"](17,"Progress Bar Size"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](18,"nb-card-body"),o["\u0275\u0275elementStart"](19,"nb-progress-bar",5),o["\u0275\u0275text"](20,"tiny"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](21,"nb-progress-bar",6),o["\u0275\u0275text"](22,"small"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](23,"nb-progress-bar",7),o["\u0275\u0275text"](24,"medium (default)"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](25,"nb-progress-bar",8),o["\u0275\u0275text"](26,"large"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](27,"nb-progress-bar",9),o["\u0275\u0275text"](28,"giant"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](29,"nb-card"),o["\u0275\u0275elementStart"](30,"nb-card-header"),o["\u0275\u0275text"](31,"Progress Bar Value"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](32,"nb-card-body"),o["\u0275\u0275element"](33,"nb-progress-bar",10),o["\u0275\u0275elementStart"](34,"nb-progress-bar",0),o["\u0275\u0275text"](35,"Custom text"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("value",20),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("value",40),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("value",60),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("value",80),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("value",100),o["\u0275\u0275advance"](7),o["\u0275\u0275property"]("value",20),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("value",40),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("value",60),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("value",80),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("value",100),o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("value",40)("displayValue",!0),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("value",60))},directives:[r.x,r.A,r.w,r.mb,c],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%]{margin-top:1rem}"]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-spinner-sizes"]],decls:15,vars:5,consts:[["nbSpinnerSize","tiny","nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerSize","small","nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerSize","medium","nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerSize","large","nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerSize","giant","nbSpinnerStatus","primary",3,"nbSpinner"]],template:function(e,n){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card",0),o["\u0275\u0275elementStart"](1,"nb-card-body"),o["\u0275\u0275text"](2," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"nb-card",1),o["\u0275\u0275elementStart"](4,"nb-card-body"),o["\u0275\u0275text"](5," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"nb-card",2),o["\u0275\u0275elementStart"](7,"nb-card-body"),o["\u0275\u0275text"](8," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"nb-card",3),o["\u0275\u0275elementStart"](10,"nb-card-body"),o["\u0275\u0275text"](11," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"nb-card",4),o["\u0275\u0275elementStart"](13,"nb-card-body"),o["\u0275\u0275text"](14," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275property"]("nbSpinner",!0),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",!0),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",!0),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",!0),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",!0))},directives:[r.x,r.Cb,r.w],encapsulation:2}),e})(),b=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-spinner-color"]],decls:15,vars:5,consts:[["nbSpinnerStatus","primary",3,"nbSpinner"],["nbSpinnerStatus","success",3,"nbSpinner"],["nbSpinnerStatus","info",3,"nbSpinner"],["nbSpinnerStatus","warning",3,"nbSpinner"],["nbSpinnerStatus","danger",3,"nbSpinner"]],template:function(e,n){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card",0),o["\u0275\u0275elementStart"](1,"nb-card-body"),o["\u0275\u0275text"](2," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"nb-card",1),o["\u0275\u0275elementStart"](4,"nb-card-body"),o["\u0275\u0275text"](5," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"nb-card",2),o["\u0275\u0275elementStart"](7,"nb-card-body"),o["\u0275\u0275text"](8," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](9,"nb-card",3),o["\u0275\u0275elementStart"](10,"nb-card-body"),o["\u0275\u0275text"](11," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"nb-card",4),o["\u0275\u0275elementStart"](13,"nb-card-body"),o["\u0275\u0275text"](14," Some card content. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275property"]("nbSpinner",!0),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",!0),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",!0),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",!0),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",!0))},directives:[r.x,r.Cb,r.w],encapsulation:2}),e})(),u=(()=>{class e{constructor(){this.loadingLargeGroup=!1,this.loadingMediumGroup=!1}toggleLoadingLargeGroupAnimation(){this.loadingLargeGroup=!0,setTimeout(()=>this.loadingLargeGroup=!1,3e3)}toggleLoadingMediumGroupAnimation(){this.loadingMediumGroup=!0,setTimeout(()=>this.loadingMediumGroup=!1,3e3)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-spinner-in-buttons"]],decls:19,vars:6,consts:[[1,"row"],[1,"col-md-12","col-lg-12","col-xxxl-12"],["nbButton","","status","success","size","large","nbSpinnerStatus","success","nbSpinnerSize","large","nbSpinnerMessage","",3,"nbSpinner","click"],["nbButton","","status","primary","size","large","nbSpinnerStatus","primary","nbSpinnerSize","large","nbSpinnerMessage","",3,"nbSpinner","click"],["nbButton","","status","warning","size","large","nbSpinnerStatus","warning","nbSpinnerSize","large","nbSpinnerMessage","",3,"nbSpinner","click"],[1,"col-md-12","col-lg-12","col-xxxl-12","size-medium-group"],["nbButton","","status","danger","size","medium","nbSpinnerStatus","danger","nbSpinnerMessage","",3,"nbSpinner","click"],["nbButton","","status","info","size","medium","nbSpinnerStatus","info","nbSpinnerSize","small","nbSpinnerMessage","",3,"nbSpinner","click"],["nbButton","","status","primary","size","medium","nbSpinnerStatus","primary","nbSpinnerSize","tiny","nbSpinnerMessage","",3,"nbSpinner","click"]],template:function(e,n){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card"),o["\u0275\u0275elementStart"](1,"nb-card-header"),o["\u0275\u0275text"](2,"Button With Spinner"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"nb-card-body"),o["\u0275\u0275elementStart"](4,"div",0),o["\u0275\u0275elementStart"](5,"div",1),o["\u0275\u0275elementStart"](6,"button",2),o["\u0275\u0275listener"]("click",(function(){return n.toggleLoadingLargeGroupAnimation()})),o["\u0275\u0275text"](7," Download "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](8,"button",3),o["\u0275\u0275listener"]("click",(function(){return n.toggleLoadingLargeGroupAnimation()})),o["\u0275\u0275text"](9," Download "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](10,"button",4),o["\u0275\u0275listener"]("click",(function(){return n.toggleLoadingLargeGroupAnimation()})),o["\u0275\u0275text"](11," Download "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](12,"div",5),o["\u0275\u0275elementStart"](13,"button",6),o["\u0275\u0275listener"]("click",(function(){return n.toggleLoadingMediumGroupAnimation()})),o["\u0275\u0275text"](14," Download "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](15,"button",7),o["\u0275\u0275listener"]("click",(function(){return n.toggleLoadingMediumGroupAnimation()})),o["\u0275\u0275text"](16," Download "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](17,"button",8),o["\u0275\u0275listener"]("click",(function(){return n.toggleLoadingMediumGroupAnimation()})),o["\u0275\u0275text"](18," Download "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](6),o["\u0275\u0275property"]("nbSpinner",n.loadingLargeGroup),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("nbSpinner",n.loadingLargeGroup),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("nbSpinner",n.loadingLargeGroup),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",n.loadingMediumGroup),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("nbSpinner",n.loadingMediumGroup),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("nbSpinner",n.loadingMediumGroup))},directives:[r.x,r.A,r.w,r.q,r.Cb],styles:[".nb-theme-default   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}.nb-theme-default   [_nghost-%COMP%]   .size-medium-group[_ngcontent-%COMP%]{margin-top:2rem;border-top:1px solid #edf1f7}.nb-theme-dark   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}.nb-theme-dark   [_nghost-%COMP%]   .size-medium-group[_ngcontent-%COMP%]{margin-top:2rem;border-top:1px solid #151a30}.nb-theme-cosmic   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .size-medium-group[_ngcontent-%COMP%]{margin-top:2rem;border-top:1px solid #1b1b38}.nb-theme-corporate   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}.nb-theme-corporate   [_nghost-%COMP%]   .size-medium-group[_ngcontent-%COMP%]{margin-top:2rem;border-top:1px solid #edf1f7}"]}),e})(),p=(()=>{class e{constructor(){this.loading=!1}toggleLoadingAnimation(){this.loading=!0,setTimeout(()=>this.loading=!1,1e3)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-spinner-in-tabs"]],decls:9,vars:2,consts:[["size","xsmall"],["fullWidth","",3,"changeTab"],["tabTitle","Tab 1","nbSpinnerStatus","success","nbSpinnerSize","giant",3,"nbSpinner"],["tabTitle","Tab 2","nbSpinnerStatus","info","nbSpinnerSize","giant",3,"nbSpinner"]],template:function(e,n){1&e&&(o["\u0275\u0275elementStart"](0,"nb-card",0),o["\u0275\u0275elementStart"](1,"nb-card-body"),o["\u0275\u0275elementStart"](2,"nb-tabset",1),o["\u0275\u0275listener"]("changeTab",(function(){return n.toggleLoadingAnimation()})),o["\u0275\u0275elementStart"](3,"nb-tab",2),o["\u0275\u0275elementStart"](4,"p"),o["\u0275\u0275text"](5," A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](6,"nb-tab",3),o["\u0275\u0275elementStart"](7,"p"),o["\u0275\u0275text"](8," Nebular's primary goal is to assemble together and connect the most awesome features and libraries creating an efficient ecosystem to speed up and simplify the development. "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",n.loading),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("nbSpinner",n.loading))},directives:[r.x,r.w,r.Lb,r.Kb,r.Cb],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}"]}),e})();const g=[{path:"",component:i,children:[{path:"progress-bar",component:d},{path:"spinner",component:(()=>{class e{constructor(){this.loading=!1}toggleLoadingAnimation(){this.loading=!0,setTimeout(()=>this.loading=!1,3e3)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-spinner"]],decls:9,vars:0,consts:[[1,"row"],[1,"col-md-12","col-lg-12","col-xxxl-6"]],template:function(e,n){1&e&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275elementStart"](1,"div",1),o["\u0275\u0275element"](2,"ngx-spinner-sizes"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"div",1),o["\u0275\u0275element"](4,"ngx-spinner-color"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div",1),o["\u0275\u0275element"](6,"ngx-spinner-in-buttons"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](7,"div",1),o["\u0275\u0275element"](8,"ngx-spinner-in-tabs"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]())},directives:[m,b,u,p],styles:[".nb-theme-default   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}.nb-theme-default   [_nghost-%COMP%]     nb-spinner{z-index:999}.nb-theme-dark   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}.nb-theme-dark   [_nghost-%COMP%]     nb-spinner{z-index:999}.nb-theme-cosmic   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}.nb-theme-cosmic   [_nghost-%COMP%]     nb-spinner{z-index:999}.nb-theme-corporate   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{margin:1rem}.nb-theme-corporate   [_nghost-%COMP%]     nb-spinner{z-index:999}"]}),e})()},{path:"alert",component:s}]}];let S=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[l.g.forChild(g)],l.g]}),e})();t.d(n,"ExtraComponentsModule",(function(){return y}));const h=[r.p,r.n,r.r,r.t,r.s,r.u,r.B,r.C,r.S,r.nb,r.yb,r.Db,r.Mb,a.a,S];let y=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[...h]]}),e})()}}]);