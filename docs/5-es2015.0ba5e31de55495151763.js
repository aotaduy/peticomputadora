(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{dgmN:function(t,n,e){"use strict";e.r(n);var r={};e.r(r),e.d(r,"clearAccumulator",(function(){return q})),e.d(r,"add2numbers",(function(){return H})),e.d(r,"sub2numbers",(function(){return Q})),e.d(r,"jump",(function(){return z})),e.d(r,"infiniteLoop",(function(){return X})),e.d(r,"sums",(function(){return G})),e.d(r,"printer",(function(){return Z}));var i=e("aceb"),o=e("vTDv"),s=e("tyNb");const c=[{title:"Bienvenidos",icon:"home-outline",link:"/pages/bienvenidos",home:!0},{title:"Ejemplos",icon:"keypad-outline",link:"/pages/ejemplos"},{title:"Peti-Computadora",icon:"layout-outline",link:"/pages/peticomputadora"}];var a=e("fXoL"),u=e("mgFL");let b=(()=>{class t{constructor(){this.menu=c}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(t,n){1&t&&(a.Wb(0,"ngx-one-column-layout"),a.Rb(1,"nb-menu",0),a.Rb(2,"router-outlet"),a.Vb()),2&t&&(a.Eb(1),a.mc("items",n.menu))},directives:[u.a,i.L,s.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),t})(),d=(()=>{class t{constructor(t){this.menuService=t}goToHome(){this.menuService.navigateHome()}}return t.\u0275fac=function(n){return new(n||t)(a.Qb(i.N))},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-not-found"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"flex-centered","col-xl-4","col-lg-6","col-md-8","col-sm-12"],[1,"title"],[1,"sub-title"],["nbButton","","fullWidth","","type","button",1,"home-button",3,"click"]],template:function(t,n){1&t&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Wb(2,"nb-card"),a.Wb(3,"nb-card-body"),a.Wb(4,"div",2),a.Wb(5,"h2",3),a.Ac(6,"404 Page Not Found"),a.Vb(),a.Wb(7,"small",4),a.Ac(8,"The page you were looking for doesn't exist"),a.Vb(),a.Wb(9,"button",5),a.ec("click",(function(){return n.goToHome()})),a.Ac(10," Take me home "),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb())},directives:[i.o,i.n,i.l],styles:[".flex-centered[_ngcontent-%COMP%]{margin:auto}nb-card-body[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.sub-title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{text-align:center}.sub-title[_ngcontent-%COMP%]{display:block;margin-bottom:3rem}.home-button[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),t})();var l=e("3Pt+");const m=[0,0,0,0,0,0,0,0];class p{constructor(t=m){this.bits=t}static bitsFor(t,n){const e=Array.from(t.toString(2)).map(t=>Number.parseInt(t,10));return Array(n-e.length).fill(0).concat(e)}static signedBitsFor(t,n){return[t<0?1:0].concat(this.bitsFor(Math.abs(t),n-1))}static from8bitInteger(t){return new p(p.signedBitsFor(t,8))}signBit(){return this.bits[0]}signValue(){return 1===this.signBit()?-1:1}absoluteValuBits(){return this.bits.slice(1)}asInteger(){return this.absoluteValuBits().reduce((t,n,e)=>t+n*Math.pow(2,6-e),0)*this.signValue()}}class h{constructor(t){this.instruction=t.decodedInstruction,this.programCounter=t.programCounter,this.acumulator=t.accumulator,this.halt=t.halt,this.count=t.executions.length}updateWith(t){}toString(){return`RI: ${this.instruction.mnemonic()} ${this.instruction.getAddress()}\nCP = CP + 1 => CP = ${this.programCounter} + 1 = ${this.programCounter+1}\n${this.instruction.toStringWith(this)}\n`}}let g=(()=>{class t{constructor(t){this.code=t}static mnemonic(){return"ZZZ"}getAddress(){return this.code.bits.slice(3).reduce((t,n,e)=>t+n*Math.pow(2,4-e),0)}getValue(){return this.code.asInteger()}setAddress(t){this.code=new p(this.instructionBits().concat(this.addressBitsFor(t)))}addressBitsFor(t){return p.bitsFor(t,5)}mnemonic(){return this.getClassInstance().mnemonic()}instructionBits(){return this.getClassInstance().instructionBits}getClassInstance(){return this.constructor}isData(){return!1}asBinaryString(){return this.code.bits.join("")}newContextFor(t){return new h(t)}toStringWith(t){return""}}return t.instructionBits=[0,0,0],t})();class f extends h{constructor(t){super(t),this.operand=this.instruction.getOperand(t)}updateWith(t){super.updateWith(t),this.accumulatorAfter=t.accumulator}}class W extends g{executeOn(t){const n=this.getOperand(t);t.accumulator=this.calculate(t.accumulator,n.asInteger())}getOperand(t){return t.memory.get(this.getAddress())}toStringWith(t){return`A = A ${this.operatorString()} (${this.getAddress()})\nA = ${t.acumulator} ${this.operatorString()} ${t.operand.asInteger()}\nA = ${t.accumulatorAfter}\n`}operatorString(){return"+"}newContextFor(t){return new f(t)}}let x=(()=>{class t extends W{static mnemonic(){return"ADD"}calculate(t,n){return t+n}operatorString(){return"-"}}return t.instructionBits=[0,0,1],t})(),A=(()=>{class t extends W{static mnemonic(){return"SUB"}calculate(t,n){return t-n}operatorString(){return"-"}}return t.instructionBits=[0,1,0],t})(),V=(()=>{class t extends g{static mnemonic(){return"STR"}executeOn(t){t.memory.set(this.getAddress(),p.from8bitInteger(t.accumulator))}toStringWith(t){return`(${this.getAddress()}) = ${t.acumulator}`}}return t.instructionBits=[0,1,1],t})(),y=(()=>{class t extends g{static mnemonic(){return"STP"}executeOn(t){t.halt=!0}setAddress(){super.setAddress(0)}toStringWith(t){return"STOP PROGRAM"}}return t.instructionBits=[0,0,0],t})(),C=(()=>{class t extends g{static mnemonic(){return"JUI"}executeOn(t){t.jumpTo(this.getAddress())}toStringWith(t){return`CP = ${this.getAddress()}\n`}}return t.instructionBits=[1,1,0],t})(),P=(()=>{class t extends C{static mnemonic(){return"JUN"}executeOn(t){t.accumulator<0&&super.executeOn(t)}toStringWith(t){const n=`IF A < 0 = => CP = ${this.getAddress()}\n    A < 0 = ${t.acumulator<0}\n`;let e=`CP = ${t.programCounter}`;return t.acumulator<0&&(e=`CP = ${this.getAddress()}`),n+e}}return t.instructionBits=[1,0,1],t})(),w=(()=>{class t extends g{static mnemonic(){return"WRT"}executeOn(t){t.appendOutput(t.accumulator.toString())}setAddress(){super.setAddress(0)}toStringWith(t){return`PRINT ${t.acumulator}`}}return t.instructionBits=[1,1,1],t})(),O=(()=>{class t extends C{static mnemonic(){return"JUP"}executeOn(t){t.accumulator>=0&&super.executeOn(t)}toStringWith(t){const n=`IF A >= 0 = => CP = ${this.getAddress()}\n    A >= 0 = ${t.acumulator>=0}\n`;let e=`CP = ${t.programCounter}`;return t.acumulator>=0&&(e=`CP = ${this.getAddress()}`),n+e}}return t.instructionBits=[1,0,0],t})(),S=(()=>{class t{constructor(){this.instructionTable=[y,x,A,V,O,P,C,w]}instructionFor(t){return new(0,this.instructionTable[this.getInstructionIndex(t)])(t)}getInstructionIndex(t){return t.bits.slice(0,3).reduce((t,n,e)=>t+n*Math.pow(2,2-e),0)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();class v extends g{static mnemonic(){return"DAT"}executeOn(t){}isData(){return!0}}let I=(()=>{class t{constructor(t){this.set=t,this.instructionSet=t}parse(t){return t.split(/\r?\n/).filter(t=>0!==t.length).map((t,n)=>this.parseLine(t,n))}parseLine(t,n){return"9">=t[0]&&t[0]<"9"?this.parseNumber(t,n):this.parseInstruction(t,n)}parseInstruction(t,n){const e=t.slice(0,3).toUpperCase(),r=this.instructionSet.instructionTable.find(t=>t.mnemonic()===e);if(void 0===r)throw new Error(`Instruccion no reconocida ${e}, linea: ${n}`);const i=new r;return i.setAddress(this.parseAddress(t,n)),i}parseAddress(t,n){const e=Number.parseInt(t.slice(3),10);if(e<0||e>31)throw new Error(`Direccion fuera de rango ${e}, linea: ${n}`);return e}parseNumber(t,n){const e=Number.parseInt(t,10);if(e<-127||e>127)throw new Error(`Constante fuera de rango ${e}, linea: ${n}`);return new v(p.from8bitInteger(e))}}return t.\u0275fac=function(n){return new(n||t)(a.ac(S))},t.\u0275prov=a.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var k=e("ofXK");function M(t,n){1&t&&a.Rb(0,"li",9)}function T(t,n){if(1&t&&(a.Wb(0,"alert",10),a.Ac(1),a.Vb()),2&t){const t=a.gc();a.Eb(1),a.Cc(" ",t.error&&t.error.message," ")}}let E=(()=>{class t{constructor(t,n){this.toastrService=t,this.parser=n,this.compiled=new a.o,this.accent="",this.defaultCode="STR 30\nSTR 30\nADD 12\nSUB 10\nJUP 08\nADD 13\nWRT 00\nSTP 00\nADD 11\nJUI 06\n04\n01\n07\n02",this.createLineNumbers()}ngOnInit(){this.form=new l.d({code:new l.b(this.source||this.defaultCode)})}ngOnChanges(){this.form&&this.form.controls.code.setValue(this.source||this.defaultCode)}compile(){this.error=null,this.accent="";try{const t=this.parser.parse(this.form.value.code);this.compiled.emit(t)}catch(t){this.error=t,this.accent="danger",this.toastrService.danger(this.error.message)}}createLineNumbers(){this.lineNumbers=Array(32).fill(0).map((t,n)=>n)}}return t.\u0275fac=function(n){return new(n||t)(a.Qb(i.Y),a.Qb(I))},t.\u0275cmp=a.Kb({type:t,selectors:[["app-assembly-editor"]],inputs:{source:"source"},outputs:{compiled:"compiled"},features:[a.Cb()],decls:14,vars:4,consts:[[3,"accent"],[1,"btn","btn-primary","btn-sm",3,"click"],[1,"editor-form",3,"formGroup"],[1,"editor"],[1,"line-numbers"],["start","0"],["class","line-number",4,"ngFor","ngForOf"],["formControlName","code","name","code","id","code","cols","10","rows","32"],["type","danger",4,"ngIf"],[1,"line-number"],["type","danger"]],template:function(t,n){1&t&&(a.Wb(0,"nb-card",0),a.Wb(1,"nb-card-header"),a.Ac(2," Programa Fuente "),a.Wb(3,"button",1),a.ec("click",(function(){return n.compile()})),a.Ac(4,"Ejecutar "),a.Vb(),a.Vb(),a.Wb(5,"nb-card-body"),a.Wb(6,"form",2),a.Wb(7,"div",3),a.Wb(8,"div",4),a.Wb(9,"ol",5),a.yc(10,M,1,0,"li",6),a.Vb(),a.Vb(),a.Wb(11,"textarea",7),a.Ac(12,"    "),a.Vb(),a.Vb(),a.yc(13,T,2,1,"alert",8),a.Vb(),a.Vb(),a.Vb()),2&t&&(a.mc("accent",n.accent),a.Eb(6),a.mc("formGroup",n.form),a.Eb(4),a.mc("ngForOf",n.lineNumbers),a.Eb(3),a.mc("ngIf",n.error))},directives:[i.o,i.q,i.n,l.s,l.l,l.e,k.l,l.a,l.k,l.c,k.m],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}.editor-form[_ngcontent-%COMP%]{width:200px}.editor[_ngcontent-%COMP%]{font-family:monospace,sans-serif;font-size:1.2rem;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;height:415px;overflow-y:scroll}.editor[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:768px}.line-numbers[_ngcontent-%COMP%]{margin-top:4px;width:3rem}.line-number[_ngcontent-%COMP%]{height:23px;font-family:monospace;font-size:1.2rem}"]}),t})(),R=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-assembly-instructions-help"]],decls:86,vars:0,consts:[[1,"table","small"]],template:function(t,n){1&t&&(a.Wb(0,"nb-card"),a.Wb(1,"nb-card-header"),a.Ac(2,"Intrucciones"),a.Vb(),a.Wb(3,"nb-card-body"),a.Wb(4,"table",0),a.Wb(5,"tr"),a.Wb(6,"td"),a.Ac(7,"Decimal"),a.Vb(),a.Wb(8,"td"),a.Ac(9,"Binario"),a.Vb(),a.Wb(10,"td"),a.Ac(11,"Mnem\xf3nico"),a.Vb(),a.Wb(12,"td"),a.Ac(13,"Que Hace"),a.Vb(),a.Vb(),a.Wb(14,"tr"),a.Wb(15,"td"),a.Ac(16,"0"),a.Vb(),a.Wb(17,"td"),a.Ac(18,"000"),a.Vb(),a.Wb(19,"td"),a.Ac(20,"STP"),a.Vb(),a.Wb(21,"td"),a.Ac(22,"Stop!"),a.Vb(),a.Vb(),a.Wb(23,"tr"),a.Wb(24,"td"),a.Ac(25,"1"),a.Vb(),a.Wb(26,"td"),a.Ac(27,"001"),a.Vb(),a.Wb(28,"td"),a.Ac(29,"ADD"),a.Vb(),a.Wb(30,"td"),a.Ac(31,"A = A + (dir)"),a.Vb(),a.Vb(),a.Wb(32,"tr"),a.Wb(33,"td"),a.Ac(34,"2"),a.Vb(),a.Wb(35,"td"),a.Ac(36," 010"),a.Vb(),a.Wb(37,"td"),a.Ac(38," SUB"),a.Vb(),a.Wb(39,"td"),a.Ac(40," A = A - (dir)"),a.Vb(),a.Vb(),a.Wb(41,"tr"),a.Wb(42,"td"),a.Ac(43,"3"),a.Vb(),a.Wb(44,"td"),a.Ac(45," 011"),a.Vb(),a.Wb(46,"td"),a.Ac(47," STR"),a.Vb(),a.Wb(48,"td"),a.Ac(49," (dir) = A"),a.Vb(),a.Vb(),a.Wb(50,"tr"),a.Wb(51,"td"),a.Ac(52,"4"),a.Vb(),a.Wb(53,"td"),a.Ac(54," 100"),a.Vb(),a.Wb(55,"td"),a.Ac(56," JUP"),a.Vb(),a.Wb(57,"td"),a.Ac(58," Salto por positivo"),a.Vb(),a.Vb(),a.Wb(59,"tr"),a.Wb(60,"td"),a.Ac(61,"5"),a.Vb(),a.Wb(62,"td"),a.Ac(63," 101"),a.Vb(),a.Wb(64,"td"),a.Ac(65," JUN"),a.Vb(),a.Wb(66,"td"),a.Ac(67," Salto por negativo"),a.Vb(),a.Vb(),a.Wb(68,"tr"),a.Wb(69,"td"),a.Ac(70,"6"),a.Vb(),a.Wb(71,"td"),a.Ac(72," 110"),a.Vb(),a.Wb(73,"td"),a.Ac(74," JUI"),a.Vb(),a.Wb(75,"td"),a.Ac(76," Salto incondicional"),a.Vb(),a.Vb(),a.Wb(77,"tr"),a.Wb(78,"td"),a.Ac(79,"7"),a.Vb(),a.Wb(80,"td"),a.Ac(81," 111"),a.Vb(),a.Wb(82,"td"),a.Ac(83," WRT"),a.Vb(),a.Wb(84,"td"),a.Ac(85," Imprimir A"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb())},directives:[i.o,i.q,i.n],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}"]}),t})();class B{constructor(t){this.bytes=[];for(let n=0;n<t;n++)this.bytes.push(new p)}get(t){return this.bytes[t]}set(t,n){return this.bytes[t]=n}}class _{constructor(t){this.halt=!1,this.programCounter=0,this.accumulator=0,this.executions=[],this.output=[],this.memory=t||new B(32),this.instructionSet=new S}reset(){this.programCounter=0,this.accumulator=0,this.executions=[],this.output=[]}currentExecution(){return this.executions[this.executions.length-1]}runInstruction(){this.isHalted()||(this.getInstruction(),this.incrementProgramCounter(),this.decodeInstruction(),this.executeInstruction())}isHalted(){return this.halt}getInstruction(){this.instructionRegister=this.memory.get(this.programCounter)}incrementProgramCounter(){this.programCounter=this.programCounter+1}decodeInstruction(){this.decodedInstruction=this.instructionSet.instructionFor(this.instructionRegister),this.executions.push(this.decodedInstruction.newContextFor(this))}executeInstruction(){this.decodedInstruction.executeOn(this),this.currentExecution().updateWith(this)}jumpTo(t){this.programCounter=t}run(){this.reset();let t=0;for(;!this.isHalted()&&t<1e3;)this.runInstruction(),t++;if(t>=1e3)throw new Error("Run limit exceeded")}load(t){t.forEach((t,n)=>this.memory.set(n,t.code))}memorySnapshot(t){return Array(t).fill(0).map((t,n)=>n).map(t=>this.instructionSet.instructionFor(this.memory.get(t)))}appendOutput(t){this.output.push(t)}}function U(t,n){if(1&t&&(a.Ub(0),a.Ac(1),a.Tb()),2&t){const t=a.gc();a.Eb(1),a.Dc(" ",t.instruction.mnemonic()," ",t.instruction.getAddress(),"\n")}}let D=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-instruction"]],inputs:{instruction:"instruction"},decls:7,vars:3,consts:[[1,"bits"],[1,"decimal"],[4,"ngIf"]],template:function(t,n){1&t&&(a.Wb(0,"span",0),a.Ac(1),a.Vb(),a.Ac(2," -\n"),a.Wb(3,"span",1),a.Ac(4),a.Vb(),a.Ac(5," -\n"),a.yc(6,U,2,2,"ng-container",2)),2&t&&(a.Eb(1),a.Bc(n.instruction.asBinaryString()),a.Eb(3),a.Bc(n.instruction.getValue()),a.Eb(2),a.mc("ngIf",!n.instruction.isData()))},directives:[k.m],styles:[".decimal[_ngcontent-%COMP%]{width:25px;display:inline-block;text-align:right}"]}),t})();function $(t,n){if(1&t&&(a.Wb(0,"li"),a.Rb(1,"ngx-instruction",2),a.Vb()),2&t){const t=n.$implicit,e=n.index,r=a.gc();a.Hb("highlight",e===r.line),a.Eb(1),a.mc("instruction",t)}}let F=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Kb({type:t,selectors:[["app-instructions-display"]],inputs:{instructions:"instructions",line:"line"},decls:2,vars:1,consts:[["start","0"],[3,"highlight",4,"ngFor","ngForOf"],[3,"instruction"]],template:function(t,n){1&t&&(a.Wb(0,"ol",0),a.yc(1,$,2,3,"li",1),a.Vb()),2&t&&(a.Eb(1),a.mc("ngForOf",n.instructions))},directives:[k.l,D],styles:["[_nghost-%COMP%]{height:480px}.highlight[_ngcontent-%COMP%]{font-weight:700;color:tomato}"]}),t})();function j(t,n){if(1&t&&(a.Ub(0),a.Wb(1,"div"),a.Ac(2),a.Vb(),a.Wb(3,"div"),a.Ac(4),a.Vb(),a.Tb()),2&t){const t=a.gc();a.Eb(2),a.Cc(" Contador Programa: ",t.programCounter," "),a.Eb(2),a.Cc(" Acumulador: ",t.controlUnit.accumulator," ")}}let N=(()=>{class t{constructor(t){this.parser=t,this.delay=500,this.edit=new a.o,this.executions=new a.o}ngOnInit(){}runProgram(){this.loadProgram(),this.stopRunning=setInterval(()=>this.runInstruction(),this.delay)}loadProgram(){this.controlUnit=new _,this.controlUnit.load(this.instructions)}runInstruction(){this.controlUnit.isHalted()&&clearInterval(this.stopRunning),this.controlUnit.runInstruction(),this.lastInstruction=this.controlUnit.decodedInstruction,this.programCounter=this.controlUnit.programCounter,this.instructions=this.controlUnit.memorySnapshot(this.instructions.length),this.executions.emit(this.controlUnit.executions)}goEdit(){this.stop(),this.edit.emit()}stop(){clearInterval(this.stopRunning),this.executions.emit(this.controlUnit.executions)}}return t.\u0275fac=function(n){return new(n||t)(a.Qb(I))},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-assembly-runner"]],inputs:{instructions:"instructions",delay:"delay"},outputs:{edit:"edit",executions:"executions"},decls:13,vars:3,consts:[[1,"btn","btn-secondary","btn-sm",3,"click"],[3,"instructions","line"],[4,"ngIf"],[1,"btn","btn-primary","btn-sm",3,"click"]],template:function(t,n){1&t&&(a.Wb(0,"nb-card"),a.Wb(1,"nb-card-header"),a.Ac(2," Programa "),a.Wb(3,"button",0),a.ec("click",(function(){return n.goEdit()})),a.Ac(4,"Editar"),a.Vb(),a.Vb(),a.Wb(5,"nb-card-body"),a.Rb(6,"app-instructions-display",1),a.yc(7,j,5,2,"ng-container",2),a.Vb(),a.Wb(8,"nb-card-footer"),a.Wb(9,"button",3),a.ec("click",(function(){return n.runProgram()})),a.Ac(10,"Ejecutar"),a.Vb(),a.Wb(11,"button",0),a.ec("click",(function(){return n.stop()})),a.Ac(12,"Parar"),a.Vb(),a.Vb(),a.Vb()),2&t&&(a.Eb(6),a.mc("instructions",n.instructions)("line",n.programCounter),a.Eb(1),a.mc("ngIf",n.lastInstruction))},directives:[i.o,i.q,i.n,F,k.m,i.p],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between}"]}),t})();function J(t,n){if(1&t&&(a.Wb(0,"li"),a.Wb(1,"pre"),a.Ac(2),a.Vb(),a.Vb()),2&t){const t=n.$implicit;a.Eb(2),a.Bc(t.toString())}}let K=(()=>{class t{constructor(){this.executions=[]}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-execution-display"]],inputs:{executions:"executions"},decls:6,vars:1,consts:[["start","0"],[4,"ngFor","ngForOf"]],template:function(t,n){1&t&&(a.Wb(0,"nb-card"),a.Wb(1,"nb-card-header"),a.Ac(2," Prueba de Escritorio "),a.Vb(),a.Wb(3,"nb-card-body"),a.Wb(4,"ol",0),a.yc(5,J,3,1,"li",1),a.Vb(),a.Vb(),a.Vb()),2&t&&(a.Eb(5),a.mc("ngForOf",n.executions))},directives:[i.o,i.q,i.n,k.l],styles:[""]}),t})(),L=(()=>{class t{constructor(t){this.router=t,this.isEditing=!0,this.executions=[];const n=this.router.getCurrentNavigation();n&&n.extras&&n.extras.state&&(this.loadedProgram=n.extras.state.program,this.loadedSource=this.loadedProgram.program)}ngOnInit(){}setInstructions(t){this.instructions=t,this.isEditing=!1}edit(){this.isEditing=!0}getExecutions(){}setExecutions(t){this.executions=t}}return t.\u0275fac=function(n){return new(n||t)(a.Qb(s.c))},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-peti-computer-ide"]],decls:10,vars:5,consts:[[1,"row",3,"hidden"],[1,"col-xxxl-3","col-xxl-4","col-lg-5","col-md-5"],[3,"source","compiled"],[1,"col-xxxl-3","col-xxl-4","col-lg-7","col-md-7"],[1,"col-xxxl-3","col-xxl-4","col-lg-4","col-md-5"],[3,"instructions","executions","edit"],[1,"col-xxxl-3","col-xxl-4","col-lg-8","col-md-7"],[3,"executions"]],template:function(t,n){1&t&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Wb(2,"app-assembly-editor",2),a.ec("compiled",(function(t){return n.setInstructions(t)})),a.Vb(),a.Vb(),a.Wb(3,"div",3),a.Rb(4,"ngx-assembly-instructions-help"),a.Vb(),a.Vb(),a.Wb(5,"div",0),a.Wb(6,"div",4),a.Wb(7,"ngx-assembly-runner",5),a.ec("executions",(function(t){return n.setExecutions(t)}))("edit",(function(){return n.edit()})),a.Vb(),a.Vb(),a.Wb(8,"div",6),a.Rb(9,"ngx-execution-display",7),a.Vb(),a.Vb()),2&t&&(a.mc("hidden",!n.isEditing),a.Eb(2),a.mc("source",n.loadedSource),a.Eb(3),a.mc("hidden",n.isEditing),a.Eb(2),a.mc("instructions",n.instructions),a.Eb(2),a.mc("executions",n.executions))},directives:[E,R,N,K],styles:[""]}),t})();const q={title:"Limpiar Acumulador",description:"Pone en 0 el acmulador",program:"STR 06\nSUB 06\nWRT\nSTP\n123\n123\n123"},H={title:"Sumar dos numeros",description:"Sumar los numeros en las posiciones 08 y 09 y mostrar el resultado",program:"STR 10\nSUB 10\nADD 10\nADD 11\nWRT\nSTP\nWRT\nSTP\n100\n123\n124\n"},Q={title:"Restar dos numeros",description:"Restar los numeros en las posiciones 08 y 09 y mostrar el resultado",program:"STR 10\nSUB 10\nADD 10\nSUB 11\nWRT\nSTP\n0\n0\n0\n0\n100\n123"},z={title:"Salto incondicional",description:"Realiza un salto independientemente del valor del acumulador",program:"ADD 10\nJUI 04\nSTP\nWRT\nADD 2\nWRT\nSTP\nSTP\n00\n00\n30\n"},X={title:"Loop infinito",description:"Realiza un salto independientemente pero entra en un bucle infinito",program:"ADD 6\nWRT\nSUB 7\nJUI 0\nSTP\n00\n10\n7"},G={title:"Sumas sucesivas",description:"Suma la posicion 11 hsata que el valor llegue al cotenido de la posicion 10",program:"STR 13\nSUB 13\nADD 10\nADD 11\nSTR 10\nSUB 12\nJUN 00\nWRT\nSTP\n00\n0\n1\n10"},Z={title:"Imprmir posicion de memoria",description:"Imprime la posicion de memoria 20 tantas veces como diga la posicion de memoria 21 usando 22 como contador",program:"STR 23\nSUB 23\nSTR 22\nSTR 23\nSUB 23\nADD 10\nWRT\nSTR 23\nSUB 23\nADD 22\nADD 24 \nSUB 21\nJUN 03\nSTP\n00\n00\n00\n00\n00\n00\n00\n10\n00\n00\n01"};let Y=(()=>{class t{constructor(){this.loadClicked=new a.o}ngOnInit(){}load(){this.loadClicked.emit(this.program)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-peti-example-source"]],inputs:{program:"program"},outputs:{loadClicked:"loadClicked"},decls:11,vars:3,consts:[[1,"btn","btn-primary","btn-sm",3,"click"]],template:function(t,n){1&t&&(a.Wb(0,"nb-card"),a.Wb(1,"nb-card-header"),a.Ac(2),a.Wb(3,"button",0),a.ec("click",(function(){return n.load()})),a.Ac(4,"Ejecutar"),a.Vb(),a.Vb(),a.Wb(5,"nb-card-body"),a.Wb(6,"p"),a.Ac(7),a.Vb(),a.Wb(8,"pre"),a.Wb(9,"code"),a.Ac(10),a.Vb(),a.Vb(),a.Vb(),a.Vb()),2&t&&(a.Eb(2),a.Cc(" ",n.program.title," "),a.Eb(5),a.Bc(n.program.description),a.Eb(3),a.Cc("",n.program.program,"\n    "))},directives:[i.o,i.q,i.n],styles:[""]}),t})();function tt(t,n){if(1&t){const t=a.Xb();a.Wb(0,"div",2),a.Wb(1,"ngx-peti-example-source",3),a.ec("loadClicked",(function(n){return a.sc(t),a.gc().openIde(n)})),a.Vb(),a.Vb()}if(2&t){const t=n.$implicit;a.Eb(1),a.mc("program",t)}}let nt=(()=>{class t{constructor(t){this.router=t,this.programs=Object.values(r)}ngOnInit(){}openIde(t){this.router.navigate(["/pages/peticomputadora"],{state:{program:t}})}}return t.\u0275fac=function(n){return new(n||t)(a.Qb(s.c))},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-peti-examples"]],decls:2,vars:1,consts:[[1,"row"],["class","col-xxxl-3 col-xxl-4 col-lg-4 col-md-4",4,"ngFor","ngForOf"],[1,"col-xxxl-3","col-xxl-4","col-lg-4","col-md-4"],[3,"program","loadClicked"]],template:function(t,n){1&t&&(a.Wb(0,"div",0),a.yc(1,tt,2,1,"div",1),a.Vb()),2&t&&(a.Eb(1),a.mc("ngForOf",n.programs))},directives:[k.l,Y],styles:[""]}),t})();const et=[{path:"",component:b,children:[{path:"bienvenidos",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=a.Kb({type:t,selectors:[["ngx-peti-welcome"]],decls:36,vars:0,consts:[[1,"row"],[1,"col-xxxl-3","col-xxl-4","col-lg-6","col-md-6"],["routerLink","/pages/ejemplos"],["routerLink","/pages/peticomputadora"],["href","./assets/pdf/unidad3.pdf"],["href","./assets/pdf/unidad4.pdf"]],template:function(t,n){1&t&&(a.Wb(0,"div",0),a.Wb(1,"div",1),a.Wb(2,"nb-card"),a.Wb(3,"nb-card-header"),a.Wb(4,"h1"),a.Ac(5,"Bienvenidos"),a.Vb(),a.Vb(),a.Wb(6,"nb-card-body"),a.Wb(7,"p"),a.Ac(8,"Este es un simulador de una computadora minima didactica llamada PetiComputadora"),a.Vb(),a.Wb(9,"p"),a.Ac(10," Es una computadora con una tama\xf1o de palabra de 8 bits, 3 bits para el codigo de instruccion y 5 bits \xb4para el direccionamiento de memoria. "),a.Vb(),a.Wb(11,"p"),a.Ac(12," Lo que redunda en 8 instrucciones y 32 posiciones de memoria disponibles de 8 bits cada una. "),a.Vb(),a.Wb(13,"p"),a.Ac(14," En la pagina de "),a.Wb(15,"a",2),a.Ac(16," Ejemplos"),a.Vb(),a.Ac(17," se pueden ver varios programas de ejemplo para ejecutar. "),a.Vb(),a.Wb(18,"p"),a.Ac(19,"Sino en la pagina del "),a.Wb(20,"a",3),a.Ac(21,"emulador"),a.Vb(),a.Ac(22," propiamente dicho podemos ejecutar cualquier programa"),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Wb(23,"div",1),a.Wb(24,"nb-card"),a.Wb(25,"nb-card-header"),a.Wb(26,"h1"),a.Ac(27,"Apuntes"),a.Vb(),a.Vb(),a.Wb(28,"nb-card-body"),a.Wb(29,"ul"),a.Wb(30,"li"),a.Wb(31,"a",4),a.Ac(32," Unidad 3 "),a.Vb(),a.Vb(),a.Wb(33,"li"),a.Wb(34,"a",5),a.Ac(35," Unidad 4 "),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb(),a.Vb())},directives:[i.o,i.q,i.n,s.f],styles:[""]}),t})()},{path:"peticomputadora",component:L},{path:"ejemplos",component:nt},{path:"",redirectTo:"bienvenidos",pathMatch:"full"},{path:"**",component:d}]}];let rt=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(n){return new(n||t)},imports:[[s.g.forChild(et)],s.g]}),t})(),it=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(n){return new(n||t)},imports:[[l.p,k.c,i.r,i.X.forRoot()]]}),t})(),ot=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(n){return new(n||t)},imports:[[l.p,k.c,i.r,s.g]]}),t})();e.d(n,"PagesModule",(function(){return st}));let st=(()=>{class t{}return t.\u0275mod=a.Ob({type:t}),t.\u0275inj=a.Nb({factory:function(n){return new(n||t)},imports:[[rt,o.a,i.M,it,ot]]}),t})()}}]);