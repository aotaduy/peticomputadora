function _possibleConstructorReturn(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?_assertThisInitialized(t):n}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _get(t,n,e){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var i=_superPropBase(t,n);if(i){var r=Object.getOwnPropertyDescriptor(i,n);return r.get?r.get.call(e):r.value}})(t,n,e||t)}function _superPropBase(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=_getPrototypeOf(t)););return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&_setPrototypeOf(t,n)}function _setPrototypeOf(t,n){return(_setPrototypeOf=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{dgmN:function(t,n,e){"use strict";e.r(n);var i={};e.r(i),e.d(i,"clearAccumulator",(function(){return pt})),e.d(i,"add2numbers",(function(){return ht})),e.d(i,"sub2numbers",(function(){return ft})),e.d(i,"jump",(function(){return mt})),e.d(i,"infiniteLoop",(function(){return gt})),e.d(i,"jumpconditional",(function(){return yt})),e.d(i,"sums",(function(){return vt})),e.d(i,"printer",(function(){return Ct}));var r,o,c,s,a,u,l,b,d,p,h,f,m,g=e("aceb"),y=e("vTDv"),v=e("tyNb"),C=[{title:"Bienvenidos",icon:"home-outline",link:"/pages/bienvenidos",home:!0},{title:"Ejemplos",icon:"keypad-outline",link:"/pages/ejemplos"},{title:"Peti-Computadora",icon:"layout-outline",link:"/pages/peticomputadora"}],k=e("fXoL"),_=e("mgFL"),W=((o=function t(){_classCallCheck(this,t),this.menu=C}).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=k.Kb({type:o,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(t,n){1&t&&(k.Wb(0,"ngx-one-column-layout"),k.Rb(1,"nb-menu",0),k.Rb(2,"router-outlet"),k.Vb()),2&t&&(k.Eb(1),k.mc("items",n.menu))},directives:[_.a,g.L,v.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),o),x=((r=function(){function t(n){_classCallCheck(this,t),this.menuService=n}return _createClass(t,[{key:"goToHome",value:function(){this.menuService.navigateHome()}}]),t}()).\u0275fac=function(t){return new(t||r)(k.Qb(g.N))},r.\u0275cmp=k.Kb({type:r,selectors:[["ngx-not-found"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"flex-centered","col-xl-4","col-lg-6","col-md-8","col-sm-12"],[1,"title"],[1,"sub-title"],["nbButton","","fullWidth","","type","button",1,"home-button",3,"click"]],template:function(t,n){1&t&&(k.Wb(0,"div",0),k.Wb(1,"div",1),k.Wb(2,"nb-card"),k.Wb(3,"nb-card-body"),k.Wb(4,"div",2),k.Wb(5,"h2",3),k.Ac(6,"404 Page Not Found"),k.Vb(),k.Wb(7,"small",4),k.Ac(8,"The page you were looking for doesn't exist"),k.Vb(),k.Wb(9,"button",5),k.ec("click",(function(){return n.goToHome()})),k.Ac(10," Take me home "),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Vb())},directives:[g.o,g.n,g.l],styles:[".flex-centered[_ngcontent-%COMP%]{margin:auto}nb-card-body[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.sub-title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{text-align:center}.sub-title[_ngcontent-%COMP%]{display:block;margin-bottom:3rem}.home-button[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),r),A=e("3Pt+"),V=[0,0,0,0,0,0,0,0],P=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;_classCallCheck(this,t),this.bits=n}return _createClass(t,[{key:"signBit",value:function(){return this.bits[0]}},{key:"signValue",value:function(){return 1===this.signBit()?-1:1}},{key:"absoluteValuBits",value:function(){return this.bits.slice(1)}},{key:"asInteger",value:function(){return this.absoluteValuBits().reduce((function(t,n,e){return t+n*Math.pow(2,6-e)}),0)*this.signValue()}}],[{key:"bitsFor",value:function(t,n){var e=Array.from(t.toString(2)).map((function(t){return Number.parseInt(t,10)}));return Array(n-e.length).fill(0).concat(e)}},{key:"signedBitsFor",value:function(t,n){return[t<0?1:0].concat(this.bitsFor(Math.abs(t),n-1))}},{key:"from8bitInteger",value:function(n){return new t(t.signedBitsFor(n,8))}}]),t}(),O=function(){function t(n){_classCallCheck(this,t),this.instruction=n.decodedInstruction,this.programCounter=n.programCounter,this.accumulator=n.accumulator,this.halt=n.halt,this.count=n.executions.length}return _createClass(t,[{key:"updateWith",value:function(t){}},{key:"toString",value:function(){return"RI: ".concat(this.instruction.mnemonic()," ").concat(this.instruction.getAddress(),"\nCP = CP + 1 => CP = ").concat(this.programCounter," + 1 = ").concat(this.programCounter+1,"\n").concat(this.instruction.toStringWith(this),"\n")}}]),t}(),w=((c=function(){function t(n){_classCallCheck(this,t),this.code=n}return _createClass(t,[{key:"getAddress",value:function(){return this.code.bits.slice(3).reduce((function(t,n,e){return t+n*Math.pow(2,4-e)}),0)}},{key:"getValue",value:function(){return this.code.asInteger()}},{key:"setAddress",value:function(t){this.code=new P(this.instructionBits().concat(this.addressBitsFor(t)))}},{key:"addressBitsFor",value:function(t){return P.bitsFor(t,5)}},{key:"mnemonic",value:function(){return this.getClassInstance().mnemonic()}},{key:"instructionBits",value:function(){return this.getClassInstance().instructionBits}},{key:"getClassInstance",value:function(){return this.constructor}},{key:"isData",value:function(){return!1}},{key:"asBinaryString",value:function(){return this.code.bits.join("")}},{key:"newContextFor",value:function(t){return new O(t)}},{key:"toStringWith",value:function(t){return""}}],[{key:"mnemonic",value:function(){return"ZZZ"}}]),t}()).instructionBits=[0,0,0],c),S=function(t){function n(t){var e;return _classCallCheck(this,n),(e=_possibleConstructorReturn(this,_getPrototypeOf(n).call(this,t))).operand=e.instruction.getOperand(t),e}return _inherits(n,t),_createClass(n,[{key:"updateWith",value:function(t){_get(_getPrototypeOf(n.prototype),"updateWith",this).call(this,t),this.accumulatorAfter=t.accumulator}}]),n}(O),I=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"executeOn",value:function(t){var n=this.getOperand(t);t.accumulator=this.calculate(t.accumulator,n.asInteger())}},{key:"getOperand",value:function(t){return t.memory.get(this.getAddress())}},{key:"toStringWith",value:function(t){return"A = A ".concat(this.operatorString()," (").concat(this.getAddress(),")\nA = ").concat(t.accumulator," ").concat(this.operatorString()," ").concat(t.operand.asInteger(),"\nA = ").concat(t.accumulatorAfter,"\n")}},{key:"operatorString",value:function(){return"+"}},{key:"newContextFor",value:function(t){return new S(t)}}]),n}(w),R=((f=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"calculate",value:function(t,n){return t+n}},{key:"operatorString",value:function(){return"+"}}],[{key:"mnemonic",value:function(){return"ADD"}}]),n}(I)).instructionBits=[0,0,1],f),T=((h=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"calculate",value:function(t,n){return t-n}},{key:"operatorString",value:function(){return"-"}}],[{key:"mnemonic",value:function(){return"SUB"}}]),n}(I)).instructionBits=[0,1,0],h),E=((p=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"executeOn",value:function(t){t.memory.set(this.getAddress(),P.from8bitInteger(t.accumulator))}},{key:"toStringWith",value:function(t){return"(".concat(this.getAddress(),") = ").concat(t.accumulator)}}],[{key:"mnemonic",value:function(){return"STR"}}]),n}(w)).instructionBits=[0,1,1],p),M=((d=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"executeOn",value:function(t){t.halt=!0}},{key:"setAddress",value:function(){_get(_getPrototypeOf(n.prototype),"setAddress",this).call(this,0)}},{key:"toStringWith",value:function(t){return"STOP PROGRAM"}}],[{key:"mnemonic",value:function(){return"STP"}}]),n}(w)).instructionBits=[0,0,0],d),B=((b=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"executeOn",value:function(t){t.jumpTo(this.getAddress())}},{key:"toStringWith",value:function(t){return"CP = ".concat(this.getAddress(),"\n")}}],[{key:"mnemonic",value:function(){return"JUI"}}]),n}(w)).instructionBits=[1,1,0],b),U=((l=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"executeOn",value:function(t){t.accumulator<0&&_get(_getPrototypeOf(n.prototype),"executeOn",this).call(this,t)}},{key:"toStringWith",value:function(t){var n="IF A < 0 = => CP = ".concat(this.getAddress(),"\n    A < 0 = ").concat(t.accumulator<0,"\n"),e="CP = ".concat(t.programCounter);return t.accumulator<0&&(e="CP = ".concat(this.getAddress())),n+e}}],[{key:"mnemonic",value:function(){return"JUN"}}]),n}(B)).instructionBits=[1,0,1],l),D=((u=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"executeOn",value:function(t){t.appendOutput(t.accumulator.toString())}},{key:"setAddress",value:function(){_get(_getPrototypeOf(n.prototype),"setAddress",this).call(this,0)}},{key:"toStringWith",value:function(t){return"PRINT ".concat(t.accumulator)}}],[{key:"mnemonic",value:function(){return"WRT"}}]),n}(w)).instructionBits=[1,1,1],u),j=((a=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"executeOn",value:function(t){t.accumulator>=0&&_get(_getPrototypeOf(n.prototype),"executeOn",this).call(this,t)}},{key:"toStringWith",value:function(t){var n="IF A >= 0 = => CP = ".concat(this.getAddress(),"\n    A >= 0 = ").concat(t.accumulator>=0,"\n"),e="CP = ".concat(t.programCounter);return t.accumulator>=0&&(e="CP = ".concat(this.getAddress())),n+e}}],[{key:"mnemonic",value:function(){return"JUP"}}]),n}(B)).instructionBits=[1,0,0],a),F=((s=function(){function t(){_classCallCheck(this,t),this.instructionTable=[M,R,T,E,j,U,B,D]}return _createClass(t,[{key:"instructionFor",value:function(t){return new(0,this.instructionTable[this.getInstructionIndex(t)])(t)}},{key:"getInstructionIndex",value:function(t){return t.bits.slice(0,3).reduce((function(t,n,e){return t+n*Math.pow(2,2-e)}),0)}}]),t}()).\u0275fac=function(t){return new(t||s)},s.\u0275prov=k.Mb({token:s,factory:s.\u0275fac,providedIn:"root"}),s),N=function(t){function n(){return _classCallCheck(this,n),_possibleConstructorReturn(this,_getPrototypeOf(n).apply(this,arguments))}return _inherits(n,t),_createClass(n,[{key:"executeOn",value:function(t){}},{key:"isData",value:function(){return!0}}],[{key:"mnemonic",value:function(){return"DAT"}}]),n}(w),J=((m=function(){function t(n){_classCallCheck(this,t),this.set=n,this.instructionSet=n}return _createClass(t,[{key:"parse",value:function(t){var n=this;return t.split(/\r?\n/).filter((function(t){return 0!==t.length})).map((function(t,e){return n.parseLine(t,e)}))}},{key:"parseLine",value:function(t,n){return"9">=t[0]&&t[0]<"9"?this.parseNumber(t,n):this.parseInstruction(t,n)}},{key:"parseInstruction",value:function(t,n){var e=t.slice(0,3).toUpperCase(),i=this.instructionSet.instructionTable.find((function(t){return t.mnemonic()===e}));if(void 0===i)throw new Error("Instruccion no reconocida ".concat(e,", linea: ").concat(n));var r=new i;return r.setAddress(this.parseAddress(t,n)),r}},{key:"parseAddress",value:function(t,n){var e=Number.parseInt(t.slice(3),10);if(e<0||e>31)throw new Error("Direccion fuera de rango ".concat(e,", linea: ").concat(n));return e}},{key:"parseNumber",value:function(t,n){var e=Number.parseInt(t,10);if(e<-127||e>127)throw new Error("Constante fuera de rango ".concat(e,", linea: ").concat(n));return new N(P.from8bitInteger(e))}}]),t}()).\u0275fac=function(t){return new(t||m)(k.ac(F))},m.\u0275prov=k.Mb({token:m,factory:m.\u0275fac,providedIn:"root"}),m),K=e("ofXK");function L(t,n){1&t&&k.Rb(0,"li",9)}function q(t,n){if(1&t&&(k.Wb(0,"alert",10),k.Ac(1),k.Vb()),2&t){var e=k.gc();k.Eb(1),k.Cc(" ",e.error&&e.error.message," ")}}var H,z,Q=((z=function(){function t(n,e){_classCallCheck(this,t),this.toastrService=n,this.parser=e,this.compiled=new k.o,this.accent="",this.defaultCode="STR 30\nSTR 30\nADD 12\nSUB 10\nJUP 08\nADD 13\nWRT 00\nSTP 00\nADD 11\nJUI 06\n04\n01\n07\n02",this.createLineNumbers()}return _createClass(t,[{key:"ngOnInit",value:function(){this.form=new A.d({code:new A.b(this.source||this.defaultCode)})}},{key:"ngOnChanges",value:function(){this.form&&this.form.controls.code.setValue(this.source||this.defaultCode)}},{key:"compile",value:function(){this.error=null,this.accent="";try{var t=this.parser.parse(this.form.value.code);this.compiled.emit(t)}catch(n){this.error=n,this.accent="danger",this.toastrService.danger(this.error.message)}}},{key:"createLineNumbers",value:function(){this.lineNumbers=Array(32).fill(0).map((function(t,n){return n}))}}]),t}()).\u0275fac=function(t){return new(t||z)(k.Qb(g.Y),k.Qb(J))},z.\u0275cmp=k.Kb({type:z,selectors:[["app-assembly-editor"]],inputs:{source:"source"},outputs:{compiled:"compiled"},features:[k.Cb()],decls:14,vars:4,consts:[[3,"accent"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"editor-form",3,"formGroup"],[1,"editor"],[1,"line-numbers"],["start","0"],["class","line-number",4,"ngFor","ngForOf"],["formControlName","code","name","code","id","code","cols","10","rows","32"],["type","danger",4,"ngIf"],[1,"line-number"],["type","danger"]],template:function(t,n){1&t&&(k.Wb(0,"nb-card",0),k.Wb(1,"nb-card-header"),k.Ac(2," Programa Fuente "),k.Wb(3,"button",1),k.ec("click",(function(){return n.compile()})),k.Ac(4,"Ejecutar "),k.Vb(),k.Vb(),k.Wb(5,"nb-card-body"),k.Wb(6,"form",2),k.Wb(7,"div",3),k.Wb(8,"div",4),k.Wb(9,"ol",5),k.yc(10,L,1,0,"li",6),k.Vb(),k.Vb(),k.Wb(11,"textarea",7),k.Ac(12,"    "),k.Vb(),k.Vb(),k.yc(13,q,2,1,"alert",8),k.Vb(),k.Vb(),k.Vb()),2&t&&(k.mc("accent",n.accent),k.Eb(6),k.mc("formGroup",n.form),k.Eb(4),k.mc("ngForOf",n.lineNumbers),k.Eb(3),k.mc("ngIf",n.error))},directives:[g.o,g.q,g.n,A.s,A.l,A.e,K.l,A.a,A.k,A.c,K.m],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.editor-form[_ngcontent-%COMP%]{width:200px}.editor[_ngcontent-%COMP%]{font-family:monospace,sans-serif;font-size:1.2rem;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:415px;overflow-y:scroll}.editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:768px}.line-numbers[_ngcontent-%COMP%]{margin-top:4px;width:3rem}.line-number[_ngcontent-%COMP%]{height:23px;font-family:monospace;font-size:1.2rem}"]}),z),X=((H=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||H)},H.\u0275cmp=k.Kb({type:H,selectors:[["ngx-assembly-instructions-help"]],decls:86,vars:0,consts:[[1,"table","small"]],template:function(t,n){1&t&&(k.Wb(0,"nb-card"),k.Wb(1,"nb-card-header"),k.Ac(2,"Intrucciones"),k.Vb(),k.Wb(3,"nb-card-body"),k.Wb(4,"table",0),k.Wb(5,"tr"),k.Wb(6,"td"),k.Ac(7,"Decimal"),k.Vb(),k.Wb(8,"td"),k.Ac(9,"Binario"),k.Vb(),k.Wb(10,"td"),k.Ac(11,"Mnem\xf3nico"),k.Vb(),k.Wb(12,"td"),k.Ac(13,"Que Hace"),k.Vb(),k.Vb(),k.Wb(14,"tr"),k.Wb(15,"td"),k.Ac(16,"0"),k.Vb(),k.Wb(17,"td"),k.Ac(18,"000"),k.Vb(),k.Wb(19,"td"),k.Ac(20,"STP"),k.Vb(),k.Wb(21,"td"),k.Ac(22,"Stop!"),k.Vb(),k.Vb(),k.Wb(23,"tr"),k.Wb(24,"td"),k.Ac(25,"1"),k.Vb(),k.Wb(26,"td"),k.Ac(27,"001"),k.Vb(),k.Wb(28,"td"),k.Ac(29,"ADD"),k.Vb(),k.Wb(30,"td"),k.Ac(31,"A = A + (dir)"),k.Vb(),k.Vb(),k.Wb(32,"tr"),k.Wb(33,"td"),k.Ac(34,"2"),k.Vb(),k.Wb(35,"td"),k.Ac(36," 010"),k.Vb(),k.Wb(37,"td"),k.Ac(38," SUB"),k.Vb(),k.Wb(39,"td"),k.Ac(40," A = A - (dir)"),k.Vb(),k.Vb(),k.Wb(41,"tr"),k.Wb(42,"td"),k.Ac(43,"3"),k.Vb(),k.Wb(44,"td"),k.Ac(45," 011"),k.Vb(),k.Wb(46,"td"),k.Ac(47," STR"),k.Vb(),k.Wb(48,"td"),k.Ac(49," (dir) = A"),k.Vb(),k.Vb(),k.Wb(50,"tr"),k.Wb(51,"td"),k.Ac(52,"4"),k.Vb(),k.Wb(53,"td"),k.Ac(54," 100"),k.Vb(),k.Wb(55,"td"),k.Ac(56," JUP"),k.Vb(),k.Wb(57,"td"),k.Ac(58," Salto por positivo"),k.Vb(),k.Vb(),k.Wb(59,"tr"),k.Wb(60,"td"),k.Ac(61,"5"),k.Vb(),k.Wb(62,"td"),k.Ac(63," 101"),k.Vb(),k.Wb(64,"td"),k.Ac(65," JUN"),k.Vb(),k.Wb(66,"td"),k.Ac(67," Salto por negativo"),k.Vb(),k.Vb(),k.Wb(68,"tr"),k.Wb(69,"td"),k.Ac(70,"6"),k.Vb(),k.Wb(71,"td"),k.Ac(72," 110"),k.Vb(),k.Wb(73,"td"),k.Ac(74," JUI"),k.Vb(),k.Wb(75,"td"),k.Ac(76," Salto incondicional"),k.Vb(),k.Vb(),k.Wb(77,"tr"),k.Wb(78,"td"),k.Ac(79,"7"),k.Vb(),k.Wb(80,"td"),k.Ac(81," 111"),k.Vb(),k.Wb(82,"td"),k.Ac(83," WRT"),k.Vb(),k.Wb(84,"td"),k.Ac(85," Imprimir A"),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Vb())},directives:[g.o,g.q,g.n],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}"]}),H),G=function(){function t(n){_classCallCheck(this,t),this.bytes=[];for(var e=0;e<n;e++)this.bytes.push(new P)}return _createClass(t,[{key:"get",value:function(t){return this.bytes[t]}},{key:"set",value:function(t,n){return this.bytes[t]=n}}]),t}(),Z=function(){function t(n){_classCallCheck(this,t),this.halt=!1,this.programCounter=0,this.accumulator=0,this.executions=[],this.output=[],this.memory=n||new G(32),this.instructionSet=new F}return _createClass(t,[{key:"reset",value:function(){this.programCounter=0,this.accumulator=0,this.executions=[],this.output=[]}},{key:"currentExecution",value:function(){return this.executions[this.executions.length-1]}},{key:"runInstruction",value:function(){this.isHalted()||(this.getInstruction(),this.incrementProgramCounter(),this.decodeInstruction(),this.executeInstruction())}},{key:"isHalted",value:function(){return this.halt}},{key:"getInstruction",value:function(){this.instructionRegister=this.memory.get(this.programCounter)}},{key:"incrementProgramCounter",value:function(){this.programCounter=this.programCounter+1}},{key:"decodeInstruction",value:function(){this.decodedInstruction=this.instructionSet.instructionFor(this.instructionRegister),this.executions.push(this.decodedInstruction.newContextFor(this))}},{key:"executeInstruction",value:function(){this.decodedInstruction.executeOn(this),this.currentExecution().updateWith(this)}},{key:"jumpTo",value:function(t){this.programCounter=t}},{key:"run",value:function(){this.reset();for(var t=0;!this.isHalted()&&t<1e3;)this.runInstruction(),t++;if(t>=1e3)throw new Error("Run limit exceeded")}},{key:"load",value:function(t){var n=this;t.forEach((function(t,e){return n.memory.set(e,t.code)}))}},{key:"memorySnapshot",value:function(t){var n=this;return Array(t).fill(0).map((function(t,n){return n})).map((function(t){return n.instructionSet.instructionFor(n.memory.get(t))}))}},{key:"appendOutput",value:function(t){this.output.push(t)}}]),t}();function $(t,n){if(1&t&&(k.Ub(0),k.Ac(1),k.Tb()),2&t){var e=k.gc();k.Eb(1),k.Dc(" ",e.instruction.mnemonic()," ",e.instruction.getAddress(),"\n")}}var Y,tt=((Y=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||Y)},Y.\u0275cmp=k.Kb({type:Y,selectors:[["ngx-instruction"]],inputs:{instruction:"instruction"},decls:7,vars:3,consts:[[1,"bits"],[1,"decimal"],[4,"ngIf"]],template:function(t,n){1&t&&(k.Wb(0,"span",0),k.Ac(1),k.Vb(),k.Ac(2," -\n"),k.Wb(3,"span",1),k.Ac(4),k.Vb(),k.Ac(5," -\n"),k.yc(6,$,2,2,"ng-container",2)),2&t&&(k.Eb(1),k.Bc(n.instruction.asBinaryString()),k.Eb(3),k.Bc(n.instruction.getValue()),k.Eb(2),k.mc("ngIf",!n.instruction.isData()))},directives:[K.m],styles:[".decimal[_ngcontent-%COMP%]{width:25px;display:inline-block;text-align:right}"]}),Y);function nt(t,n){if(1&t&&(k.Wb(0,"li"),k.Rb(1,"ngx-instruction",2),k.Vb()),2&t){var e=n.$implicit,i=n.index,r=k.gc();k.Hb("highlight",i===r.line),k.Eb(1),k.mc("instruction",e)}}var et,it=((et=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||et)},et.\u0275cmp=k.Kb({type:et,selectors:[["app-instructions-display"]],inputs:{instructions:"instructions",line:"line"},decls:2,vars:1,consts:[["start","0"],[3,"highlight",4,"ngFor","ngForOf"],[3,"instruction"]],template:function(t,n){1&t&&(k.Wb(0,"ol",0),k.yc(1,nt,2,3,"li",1),k.Vb()),2&t&&(k.Eb(1),k.mc("ngForOf",n.instructions))},directives:[K.l,tt],styles:["[_nghost-%COMP%]{height:480px}.highlight[_ngcontent-%COMP%]{font-weight:700;color:tomato}"]}),et);function rt(t,n){if(1&t&&(k.Ub(0),k.Wb(1,"div"),k.Ac(2),k.Vb(),k.Wb(3,"div"),k.Ac(4),k.Vb(),k.Tb()),2&t){var e=k.gc();k.Eb(2),k.Cc(" Contador Programa: ",e.programCounter," "),k.Eb(2),k.Cc(" Acumulador: ",e.controlUnit.accumulator," ")}}var ot,ct=((ot=function(){function t(n){_classCallCheck(this,t),this.parser=n,this.delay=500,this.edit=new k.o,this.executions=new k.o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"runProgram",value:function(){var t=this;this.loadProgram(),this.stopRunning=setInterval((function(){return t.runInstruction()}),this.delay)}},{key:"loadProgram",value:function(){this.controlUnit=new Z,this.controlUnit.load(this.instructions)}},{key:"runInstruction",value:function(){this.controlUnit.isHalted()&&clearInterval(this.stopRunning),this.controlUnit.runInstruction(),this.lastInstruction=this.controlUnit.decodedInstruction,this.programCounter=this.controlUnit.programCounter,this.instructions=this.controlUnit.memorySnapshot(this.instructions.length),this.executions.emit(this.controlUnit.executions)}},{key:"goEdit",value:function(){this.stop(),this.edit.emit()}},{key:"stop",value:function(){clearInterval(this.stopRunning),this.executions.emit(this.controlUnit.executions)}}]),t}()).\u0275fac=function(t){return new(t||ot)(k.Qb(J))},ot.\u0275cmp=k.Kb({type:ot,selectors:[["ngx-assembly-runner"]],inputs:{instructions:"instructions",delay:"delay"},outputs:{edit:"edit",executions:"executions"},decls:15,vars:3,consts:[[1,"btn","btn-secondary","btn-sm",3,"click"],[3,"instructions","line"],[4,"ngIf"],[1,"btn","btn-primary","btn-sm",3,"click"]],template:function(t,n){1&t&&(k.Wb(0,"nb-card"),k.Wb(1,"nb-card-header"),k.Ac(2," Programa "),k.Wb(3,"button",0),k.ec("click",(function(){return n.goEdit()})),k.Ac(4,"Editar"),k.Vb(),k.Vb(),k.Wb(5,"nb-card-body"),k.Rb(6,"app-instructions-display",1),k.yc(7,rt,5,2,"ng-container",2),k.Vb(),k.Wb(8,"nb-card-footer"),k.Wb(9,"button",3),k.ec("click",(function(){return n.runProgram()})),k.Ac(10,"Ejecutar"),k.Vb(),k.Wb(11,"button",3),k.ec("click",(function(){return n.runInstruction()})),k.Ac(12,"Paso"),k.Vb(),k.Wb(13,"button",0),k.ec("click",(function(){return n.stop()})),k.Ac(14,"Parar"),k.Vb(),k.Vb(),k.Vb()),2&t&&(k.Eb(6),k.mc("instructions",n.instructions)("line",n.programCounter),k.Eb(1),k.mc("ngIf",n.lastInstruction))},directives:[g.o,g.q,g.n,it,K.m,g.p],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}"]}),ot);function st(t,n){if(1&t&&(k.Wb(0,"li"),k.Wb(1,"pre"),k.Ac(2),k.Vb(),k.Vb()),2&t){var e=n.$implicit;k.Eb(2),k.Bc(e.toString())}}var at,ut,lt,bt=((ut=function(){function t(){_classCallCheck(this,t),this.executions=[]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||ut)},ut.\u0275cmp=k.Kb({type:ut,selectors:[["ngx-execution-display"]],inputs:{executions:"executions"},decls:6,vars:1,consts:[["start","0"],[4,"ngFor","ngForOf"]],template:function(t,n){1&t&&(k.Wb(0,"nb-card"),k.Wb(1,"nb-card-header"),k.Ac(2," Prueba de Escritorio "),k.Vb(),k.Wb(3,"nb-card-body"),k.Wb(4,"ol",0),k.yc(5,st,3,1,"li",1),k.Vb(),k.Vb(),k.Vb()),2&t&&(k.Eb(5),k.mc("ngForOf",n.executions))},directives:[g.o,g.q,g.n,K.l],styles:[""]}),ut),dt=((at=function(){function t(n){_classCallCheck(this,t),this.router=n,this.isEditing=!0,this.executions=[];var e=this.router.getCurrentNavigation();e&&e.extras&&e.extras.state&&(this.loadedProgram=e.extras.state.program,this.loadedSource=this.loadedProgram.program)}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"setInstructions",value:function(t){this.instructions=t,this.isEditing=!1}},{key:"edit",value:function(){this.isEditing=!0}},{key:"getExecutions",value:function(){}},{key:"setExecutions",value:function(t){this.executions=t}}]),t}()).\u0275fac=function(t){return new(t||at)(k.Qb(v.c))},at.\u0275cmp=k.Kb({type:at,selectors:[["ngx-peti-computer-ide"]],decls:10,vars:5,consts:[[1,"row",3,"hidden"],[1,"col-xxxl-3","col-xxl-4","col-lg-5","col-md-5"],[3,"source","compiled"],[1,"col-xxxl-3","col-xxl-4","col-lg-7","col-md-7"],[1,"col-xxxl-3","col-xxl-4","col-lg-4","col-md-5"],[3,"instructions","executions","edit"],[1,"col-xxxl-3","col-xxl-4","col-lg-8","col-md-7"],[3,"executions"]],template:function(t,n){1&t&&(k.Wb(0,"div",0),k.Wb(1,"div",1),k.Wb(2,"app-assembly-editor",2),k.ec("compiled",(function(t){return n.setInstructions(t)})),k.Vb(),k.Vb(),k.Wb(3,"div",3),k.Rb(4,"ngx-assembly-instructions-help"),k.Vb(),k.Vb(),k.Wb(5,"div",0),k.Wb(6,"div",4),k.Wb(7,"ngx-assembly-runner",5),k.ec("executions",(function(t){return n.setExecutions(t)}))("edit",(function(){return n.edit()})),k.Vb(),k.Vb(),k.Wb(8,"div",6),k.Rb(9,"ngx-execution-display",7),k.Vb(),k.Vb()),2&t&&(k.mc("hidden",!n.isEditing),k.Eb(2),k.mc("source",n.loadedSource),k.Eb(3),k.mc("hidden",n.isEditing),k.Eb(2),k.mc("instructions",n.instructions),k.Eb(2),k.mc("executions",n.executions))},directives:[Q,X,ct,bt],styles:[""]}),at),pt={title:"Limpiar Acumulador",description:"Pone en 0 el acmulador",program:"STR 06\nSUB 06\nWRT\nSTP\n123\n123\n123"},ht={title:"Sumar dos numeros",description:"Sumar los numeros en las posiciones 08 y 09 y mostrar el resultado",program:"STR 10\nSUB 10\nADD 10\nADD 11\nWRT\nSTP\nWRT\nSTP\n100\n123\n124\n"},ft={title:"Restar dos numeros",description:"Restar los numeros en las posiciones 08 y 09 y mostrar el resultado",program:"STR 10\nSUB 10\nADD 10\nSUB 11\nWRT\nSTP\n0\n0\n0\n0\n100\n123"},mt={title:"Salto incondicional",description:"Realiza un salto independientemente del valor del acumulador",program:"ADD 10\nJUI 04\nSTP\nWRT\nADD 2\nWRT\nSTP\nSTP\n00\n00\n30\n"},gt={title:"Loop infinito",description:"Realiza un salto independientemente pero entra en un bucle infinito",program:"ADD 6\nWRT\nSUB 7\nJUI 0\nSTP\n00\n10\n7"},yt={title:"Salto condicoinal",description:"Ejemplo del apunte 4",program:"STR 10\nSUB 10\nADD 09\nJUP 06\nSUB 10\nSUB 10\nWRT 9\nSTP 5\n00\n-5\n120\n"},vt={title:"Sumas sucesivas",description:"Suma la posicion 11 hsata que el valor llegue al cotenido de la posicion 10",program:"STR 13\nSUB 13\nADD 10\nADD 11\nSTR 10\nSUB 12\nJUN 00\nWRT\nSTP\n00\n0\n1\n10"},Ct={title:"Imprmir posicion de memoria",description:"Imprime la posicion de memoria 20 tantas veces como diga la posicion de memoria 21 usando 22 como contador",program:"STR 23\nSUB 23\nSTR 22\nSTR 23\nSUB 23\nADD 10\nWRT\nSTR 23\nSUB 23\nADD 22\nADD 24\nSUB 21\nJUN 03\nSTP\n00\n00\n00\n00\n00\n00\n00\n10\n00\n00\n01"},kt=((lt=function(){function t(){_classCallCheck(this,t),this.loadClicked=new k.o}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"load",value:function(){this.loadClicked.emit(this.program)}}]),t}()).\u0275fac=function(t){return new(t||lt)},lt.\u0275cmp=k.Kb({type:lt,selectors:[["ngx-peti-example-source"]],inputs:{program:"program"},outputs:{loadClicked:"loadClicked"},decls:11,vars:3,consts:[[1,"btn","btn-primary","btn-sm",3,"click"]],template:function(t,n){1&t&&(k.Wb(0,"nb-card"),k.Wb(1,"nb-card-header"),k.Ac(2),k.Wb(3,"button",0),k.ec("click",(function(){return n.load()})),k.Ac(4,"Ejecutar"),k.Vb(),k.Vb(),k.Wb(5,"nb-card-body"),k.Wb(6,"p"),k.Ac(7),k.Vb(),k.Wb(8,"pre"),k.Wb(9,"code"),k.Ac(10),k.Vb(),k.Vb(),k.Vb(),k.Vb()),2&t&&(k.Eb(2),k.Cc(" ",n.program.title," "),k.Eb(5),k.Bc(n.program.description),k.Eb(3),k.Cc("",n.program.program,"\n    "))},directives:[g.o,g.q,g.n],styles:[""]}),lt);function _t(t,n){if(1&t){var e=k.Xb();k.Wb(0,"div",2),k.Wb(1,"ngx-peti-example-source",3),k.ec("loadClicked",(function(t){return k.sc(e),k.gc().openIde(t)})),k.Vb(),k.Vb()}if(2&t){var i=n.$implicit;k.Eb(1),k.mc("program",i)}}var Wt,xt,At,Vt,Pt,Ot=((Wt=function(){function t(n){_classCallCheck(this,t),this.router=n,this.programs=Object.values(i)}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"openIde",value:function(t){this.router.navigate(["/pages/peticomputadora"],{state:{program:t}})}}]),t}()).\u0275fac=function(t){return new(t||Wt)(k.Qb(v.c))},Wt.\u0275cmp=k.Kb({type:Wt,selectors:[["ngx-peti-examples"]],decls:2,vars:1,consts:[[1,"row"],["class","col-xxxl-3 col-xxl-4 col-lg-4 col-md-4",4,"ngFor","ngForOf"],[1,"col-xxxl-3","col-xxl-4","col-lg-4","col-md-4"],[3,"program","loadClicked"]],template:function(t,n){1&t&&(k.Wb(0,"div",0),k.yc(1,_t,2,1,"div",1),k.Vb()),2&t&&(k.Eb(1),k.mc("ngForOf",n.programs))},directives:[K.l,kt],styles:[""]}),Wt),wt=[{path:"",component:W,children:[{path:"bienvenidos",component:(xt=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),xt.\u0275fac=function(t){return new(t||xt)},xt.\u0275cmp=k.Kb({type:xt,selectors:[["ngx-peti-welcome"]],decls:39,vars:0,consts:[[1,"row"],[1,"col-xxxl-3","col-xxl-4","col-lg-6","col-md-6"],["href","http://www.frro.utn.edu.ar"],["routerLink","/pages/ejemplos"],["routerLink","/pages/peticomputadora"],["href","./assets/pdf/unidad3.pdf"],["href","./assets/pdf/unidad4.pdf"]],template:function(t,n){1&t&&(k.Wb(0,"div",0),k.Wb(1,"div",1),k.Wb(2,"nb-card"),k.Wb(3,"nb-card-header"),k.Wb(4,"h1"),k.Ac(5,"Bienvenidos"),k.Vb(),k.Vb(),k.Wb(6,"nb-card-body"),k.Wb(7,"p"),k.Ac(8,"Este es un simulador de una computadora minima didactica llamada PetiComputadora. Esta fue creada en la catedra de Arquitectura de computadoras de la "),k.Wb(9,"a",2),k.Ac(10,"UTN Facultad Regional Rosario"),k.Vb(),k.Ac(11,"."),k.Vb(),k.Wb(12,"p"),k.Ac(13," Es una computadora con una tama\xf1o de palabra de 8 bits, 3 bits para el codigo de instruccion y 5 bits \xb4para el direccionamiento de memoria. "),k.Vb(),k.Wb(14,"p"),k.Ac(15," Lo que redunda en 8 instrucciones y 32 posiciones de memoria disponibles de 8 bits cada una. "),k.Vb(),k.Wb(16,"p"),k.Ac(17," En la pagina de "),k.Wb(18,"a",3),k.Ac(19," Ejemplos"),k.Vb(),k.Ac(20," se pueden ver varios programas de ejemplo para ejecutar. "),k.Vb(),k.Wb(21,"p"),k.Ac(22,"Sino en la pagina del "),k.Wb(23,"a",4),k.Ac(24,"emulador"),k.Vb(),k.Ac(25," propiamente dicho podemos ejecutar cualquier programa"),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Wb(26,"div",1),k.Wb(27,"nb-card"),k.Wb(28,"nb-card-header"),k.Wb(29,"h1"),k.Ac(30,"Apuntes"),k.Vb(),k.Vb(),k.Wb(31,"nb-card-body"),k.Wb(32,"ul"),k.Wb(33,"li"),k.Wb(34,"a",5),k.Ac(35," Unidad 3 "),k.Vb(),k.Vb(),k.Wb(36,"li"),k.Wb(37,"a",6),k.Ac(38," Unidad 4 "),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Vb(),k.Vb())},directives:[g.o,g.q,g.n,v.f],styles:[""]}),xt)},{path:"peticomputadora",component:dt},{path:"ejemplos",component:Ot},{path:"",redirectTo:"bienvenidos",pathMatch:"full"},{path:"**",component:x}]}],St=((Pt=function t(){_classCallCheck(this,t)}).\u0275mod=k.Ob({type:Pt}),Pt.\u0275inj=k.Nb({factory:function(t){return new(t||Pt)},imports:[[v.g.forChild(wt)],v.g]}),Pt),It=((Vt=function t(){_classCallCheck(this,t)}).\u0275mod=k.Ob({type:Vt}),Vt.\u0275inj=k.Nb({factory:function(t){return new(t||Vt)},imports:[[A.p,K.c,g.r,g.X.forRoot()]]}),Vt),Rt=((At=function t(){_classCallCheck(this,t)}).\u0275mod=k.Ob({type:At}),At.\u0275inj=k.Nb({factory:function(t){return new(t||At)},imports:[[A.p,K.c,g.r,v.g]]}),At);e.d(n,"PagesModule",(function(){return Et}));var Tt,Et=((Tt=function t(){_classCallCheck(this,t)}).\u0275mod=k.Ob({type:Tt}),Tt.\u0275inj=k.Nb({factory:function(t){return new(t||Tt)},imports:[[St,y.a,g.M,It,Rt]]}),Tt)}}]);