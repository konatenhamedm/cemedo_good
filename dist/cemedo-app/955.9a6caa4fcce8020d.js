"use strict";(self.webpackChunkcemedoApp=self.webpackChunkcemedoApp||[]).push([[955],{74955:(B,x,r)=>{r.r(x),r.d(x,{RelationModule:()=>_});var t=r(69808),g=r(91083),v=r(86087),h=r(59783),y=r(45330),e=r(5e3),R=r(8696),T=r(40520);let Z=(()=>{class o{constructor(i){this.http=i,this.baseUrl=R.G.BaseUrl.Url+"relations/"}getListe(){return this.http.get(this.baseUrl).toPromise().then(i=>i.data).then(i=>i)}create(i){return console.log(i),this.http.post(this.baseUrl+"create",i)}deleteSelectedProducts(i){return this.http.post(this.baseUrl+"active",i)}update(i,l){return console.log(l),this.http.post(`${this.baseUrl+"update"}/${i}`,l)}delete(i){return this.http.get(`${this.baseUrl+"active"}/${i}`)}}return o.\u0275fac=function(i){return new(i||o)(e.LFG(T.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var A=r(67658),M=r(44534),f=r(24851),k=r(15315),E=r(19114),L=r(40845),b=r(93075),S=r(31424);function D(o,m){if(1&o){const i=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){return e.CHM(i),e.oxw().openNew()}),e.qZA(),e._uU(1," \xa0 "),e.TgZ(2,"button",20),e.NdJ("click",function(){return e.CHM(i),e.oxw().deleteSelectedProducts()}),e.qZA()}if(2&o){const i=e.oxw();e.xp6(2),e.Q6J("disabled",!i.selectedEntity||!i.selectedEntity.length)}}function w(o,m){1&o&&e._UZ(0,"button",21)}function C(o,m){1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"th",22),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",23),e._uU(4,"libelle "),e._UZ(5,"p-sortIcon",24),e.qZA(),e.TgZ(6,"th",25),e._uU(7,"Actions"),e.qZA(),e.qZA(),e.TgZ(8,"tr"),e.TgZ(9,"th",22),e._UZ(10,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(11,"th"),e._UZ(12,"p-columnFilter",26),e.qZA(),e._UZ(13,"th"),e.qZA())}function P(o,m){if(1&o){const i=e.EpF();e.TgZ(0,"tr",27),e.TgZ(1,"td"),e._UZ(2,"p-tableCheckbox",28),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",29),e.TgZ(6,"button",30),e.NdJ("click",function(){const u=e.CHM(i).$implicit;return e.oxw().editProduct(u)}),e.qZA(),e._uU(7," \xa0 "),e.TgZ(8,"button",31),e.NdJ("click",function(){const u=e.CHM(i).$implicit;return e.oxw().deleteProduct(u)}),e.qZA(),e._uU(9,"\xa0 "),e.TgZ(10,"button",32),e.NdJ("click",function(){const u=e.CHM(i).$implicit;return e.oxw().deleteProduct(u)}),e.qZA(),e.qZA(),e.qZA()}if(2&o){const i=m.$implicit;e.Q6J("pSelectableRow",i),e.xp6(2),e.Q6J("value",i),e.xp6(2),e.Oqu(i.libelle)}}function I(o,m){if(1&o&&(e.TgZ(0,"div",33),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" Au total il y a ",i.liste?i.liste.length:0," enregistrement(s). ")}}function U(o,m){1&o&&(e.TgZ(0,"small",38),e._uU(1,"Libelle est requis."),e.qZA())}function F(o,m){if(1&o){const i=e.EpF();e._UZ(0,"br"),e.TgZ(1,"div",34),e.TgZ(2,"label",35),e._uU(3,"Libelle"),e.qZA(),e.TgZ(4,"input",36),e.NdJ("ngModelChange",function(p){return e.CHM(i),e.oxw().specialite.libelle=p}),e.qZA(),e.YNc(5,U,2,0,"small",37),e.qZA(),e._UZ(6,"hr")}if(2&o){const i=e.oxw();e.xp6(4),e.Q6J("ngModel",i.specialite.libelle),e.xp6(1),e.Q6J("ngIf",i.submitted&&!i.specialite.libelle)}}function O(o,m){if(1&o){const i=e.EpF();e.TgZ(0,"button",39),e.NdJ("click",function(){return e.CHM(i),e.oxw().hideDialog()}),e.qZA(),e.TgZ(1,"button",40),e.NdJ("click",function(){return e.CHM(i),e.oxw().saveProduct()}),e.qZA()}}const N=function(o,m){return[7,o,m]},s=function(){return{width:"750px","margin-top":"-90px"}},d=function(){return{width:"450px"}},a=[{path:"liste",component:(()=>{class o{constructor(i,l,p,u){this.dialogService=i,this.service=l,this.messageService=p,this.confirmationService=u,this.selectAll=!1,this.cols=[],this.data_create={id:null,libelle:"",createdAt:"",updatedAt:"",version:null,active:null},this.data_delete=Array()}ngOnInit(){this.items=[{label:"Relation"},{label:"Liste des relations",routerLink:""}],this.home={icon:"pi pi-home"},this.loading=!0,this.service.getListe().then(i=>{this.liste=i.slice(0,6).filter(l=>0==l.active),this.totalRecords=this.liste.length,console.log(i.length)}),this.service.getListe().then(i=>{this.virtuelle=i.filter(l=>0==l.active),this.totalRecords=this.virtuelle.length,this.loading=!1,console.log(this.virtuelle)})}onSelectAllChange(i){i.checked?this.service.getListe().then(p=>{this.selectedEntity=p,this.selectAll=!0}):(this.selectedEntity=[],this.selectAll=!1)}loadCustomers(i){this.loading=!0,setTimeout(()=>{this.virtuelle&&(this.liste=this.virtuelle.slice(i.first,i.first+i.rows),this.loading=!1)},1e3)}openNew(){this.specialite=this.data_create,this.submitted=!1,this.entityDialog=!0}deleteSelectedProducts(){this.confirmationService.confirm({message:" Voulez vous r\xe9ellement supprimer ces enregistrements ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.liste=this.liste.filter(i=>!this.selectedEntity.includes(i)),this.selectedEntity.forEach(i=>{this.data_delete.push(i.id)}),this.selectedEntity=null,this.service.deleteSelectedProducts(this.data_delete).subscribe(i=>{this.loading=!0,setTimeout(()=>{this.messageService.add({severity:"success",summary:"Successful",detail:"Enregistrement (s) effectu\xe9 (s) avec succes",life:3e3}),this.loading=!1},1e3)})}})}editProduct(i){this.specialite=Object.assign({},i),this.entityDialog=!0}deleteProduct(i){this.confirmationService.confirm({message:" Voulez vous r\xe9ellement supprimer cet enregistrement ? ",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.liste=this.liste.filter(l=>l.id!==i.id),this.specialite=Object.assign({},i),this.service.delete(this.specialite.id).subscribe(l=>{this.loading=!0,setTimeout(()=>{this.loading=!1,this.messageService.add({severity:"success",summary:"Succes",detail:"Suppression effectu\xe9e avec success",life:3e3})},1e3)})}})}hideDialog(){this.entityDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0;const i={libelle:this.specialite.libelle};this.specialite.libelle.trim()&&(this.specialite.id?(this.liste[this.findIndexById(this.specialite.id)]=this.specialite,this.service.update(this.specialite.id,i).subscribe(l=>{this.loading=!0,setTimeout(()=>{this.messageService.add({severity:"success",summary:"Successful",detail:"Mise \xe0 jour effectu\xe9e avec success",life:3e3}),this.loading=!1},1e3)})):(this.service.create(i).subscribe(l=>{this.loading=!0,setTimeout(()=>{this.loading=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Ajout effectu\xe9 avec success",life:3e3})},1e3)}),this.liste.push(this.specialite)),this.liste=[...this.liste],this.entityDialog=!1,this.specialite=Object.assign({},this.specialite))}findIndexById(i){let l=-1;for(let p=0;p<this.liste.length;p++)if(this.liste[p].id===i){l=p;break}return l}createId(){return 1}onSelectionChange(i=[]){this.selectAll=i.length===this.totalRecords,this.selectedEntity=i}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(y.xA),e.Y36(Z),e.Y36(h.ez),e.Y36(h.YP))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-relation"]],viewQuery:function(i,l){if(1&i&&e.Gf(v.NW,5),2&i){let p;e.iGM(p=e.CRH())&&(l.paginator=p.first)}},features:[e._Bn([h.ez,h.YP,y.xA])],decls:22,vars:23,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"model","home"],[1,"row","clearfix"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"card"],[1,"body"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["dataKey","id","styleClass","p-datatable-gridlines","currentPageReportTemplate","Affichage de {first} \xe0 {last} sur  {totalRecords} entr\xe9es",3,"value","lazy","selection","selectAll","paginator","rows","totalRecords","showCurrentPageReport","loading","rowsPerPageOptions","onLazyLoad","selectionChange","selectAllChange"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","Relations","styleClass","p-fluid el",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","label","Nouveau","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Supprimer","icon","pi pi-trash",1,"p-button-danger",3,"disabled","click"],["pButton","","pRipple","","label","Imprimer","icon","pi pi-upload",1,"p-button-help","btn-view"],[2,"width","3rem"],["pResizableColumn","","pSortableColumn","libelle"],["field","libelle"],["pResizableColumn",""],["type","text","field","libelle"],[3,"pSelectableRow"],[3,"value"],["width","200px"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button","p-button-success","btn-sm","btn-edit",3,"click"],["pButton","","pRipple","","icon","pi pi-check",1,"p-button","p-button-help","btn-sm","btn-view",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button","p-button-warning","btn-sm","btn-delete",3,"click"],[1,"flex","align-items-center","justify-content-between"],[1,"field"],["for","name"],["type","text","pInputText","","id","libelle","required","","autofocus","",3,"ngModel","ngModelChange"],["class","p-error",4,"ngIf"],[1,"p-error"],["pButton","","pRipple","","label","Annuler","icon","pi pi-times",1,"p-button","p-button-help","btn-delete",3,"click"],["pButton","","pRipple","","label","Valider","icon","pi pi-check",1,"p-button-success","btn-view",3,"click"]],template:function(i,l){1&i&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"br"),e._UZ(4,"p-breadcrumb",3),e._UZ(5,"br"),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"div",7),e.TgZ(10,"p-toolbar",8),e.YNc(11,D,3,1,"ng-template",9),e.YNc(12,w,1,0,"ng-template",10),e.qZA(),e.TgZ(13,"p-table",11,12),e.NdJ("onLazyLoad",function(u){return l.loadCustomers(u)})("selectionChange",function(u){return l.onSelectionChange(u)})("selectAllChange",function(u){return l.onSelectAllChange(u)}),e.YNc(15,C,14,0,"ng-template",13),e.YNc(16,P,11,3,"ng-template",14),e.YNc(17,I,2,1,"ng-template",15),e.qZA(),e.TgZ(18,"p-dialog",16),e.NdJ("visibleChange",function(u){return l.entityDialog=u}),e.YNc(19,F,7,2,"ng-template",17),e.YNc(20,O,2,0,"ng-template",18),e.qZA(),e._UZ(21,"p-confirmDialog"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(4),e.Q6J("model",l.items)("home",l.home),e.xp6(9),e.Q6J("value",l.liste)("lazy",!0)("selection",l.selectedEntity)("selectAll",l.selectAll)("paginator",!0)("rows",7)("totalRecords",l.totalRecords)("showCurrentPageReport",!0)("loading",l.loading)("rowsPerPageOptions",e.WLB(18,N,2*l.totalRecords,3*l.totalRecords)),e.xp6(5),e.Akn(e.DdM(21,s)),e.Q6J("visible",l.entityDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(22,d)))},directives:[A.a,M.o,h.jx,f.iA,k.V,E.Q,L.Hq,f.Mo,f.Q7,f.lQ,f.fz,f.xl,f.Ei,f.UA,b.Fj,S.o,b.Q7,b.JJ,b.On,t.O5],styles:["[_nghost-%COMP%]     .el{background-color:#fff!important;width:40vw!important;box-shadow:0 20px 20px #d8dde680;border:1px solid #e7e7e7}[_nghost-%COMP%]     .p-dialog-header .ng-star-inserted{color:#fff!important}"]}),o})()}];let c=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(a)],g.Bz]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[t.ez,c]]}),o})()},45330:(B,x,r)=>{r.d(x,{xA:()=>N});var t=r(5e3),g=r(41777),v=r(69808),h=r(75730),y=r(85921),e=r(77579),R=r(59783);const T=["mask"];function Z(s,d){if(1&s){const n=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){return t.CHM(n),t.oxw(3).hide()})("keydown.enter",function(){return t.CHM(n),t.oxw(3).hide()}),t._UZ(1,"span",13),t.qZA()}2&s&&t.Q6J("ngClass","p-dialog-header-icon p-dialog-header-maximize p-link")}function A(s,d){if(1&s&&(t.TgZ(0,"div",8),t.TgZ(1,"span",9),t._uU(2),t.qZA(),t.TgZ(3,"div",10),t.YNc(4,Z,2,1,"button",11),t.qZA(),t.qZA()),2&s){const n=t.oxw(2);t.xp6(2),t.Oqu(n.config.header),t.xp6(2),t.Q6J("ngIf",!1!==n.config.closable)}}function M(s,d){}function f(s,d){if(1&s&&(t.TgZ(0,"div",14),t._uU(1),t.qZA()),2&s){const n=t.oxw(2);t.xp6(1),t.hij(" ",n.config.footer," ")}}const k=function(s){return{"p-dialog p-dynamic-dialog p-component":!0,"p-dialog-rtl":s}},E=function(s,d){return{transform:s,transition:d}},L=function(s){return{value:"visible",params:s}};function b(s,d){if(1&s){const n=t.EpF();t.TgZ(0,"div",3),t.NdJ("@animation.start",function(c){return t.CHM(n),t.oxw().onAnimationStart(c)})("@animation.done",function(c){return t.CHM(n),t.oxw().onAnimationEnd(c)}),t.YNc(1,A,5,2,"div",4),t.TgZ(2,"div",5),t.YNc(3,M,0,0,"ng-template",6),t.qZA(),t.YNc(4,f,2,1,"div",7),t.qZA()}if(2&s){const n=t.oxw();t.Tol(n.config.styleClass),t.Udp("width",n.config.width)("height",n.config.height),t.Q6J("ngClass",t.VKq(12,k,n.config.rtl))("ngStyle",n.config.style)("@animation",t.VKq(17,L,t.WLB(14,E,n.transformOptions,n.config.transitionOptions||"150ms cubic-bezier(0, 0, 0.2, 1)"))),t.xp6(1),t.Q6J("ngIf",!1!==n.config.showHeader),t.xp6(1),t.Q6J("ngStyle",n.config.contentStyle),t.xp6(2),t.Q6J("ngIf",n.config.footer)}}const S=function(s){return{"p-dialog-mask":!0,"p-component-overlay p-component-overlay-enter p-dialog-mask-scrollblocker":s}};let D=(()=>{class s{constructor(n){this.viewContainerRef=n}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(t.s_b))},s.\u0275dir=t.lG2({type:s,selectors:[["","pDynamicDialogContent",""]],hostAttrs:[1,"p-element"]}),s})();class w{}class C{constructor(){this._onClose=new e.x,this.onClose=this._onClose.asObservable(),this._onDestroy=new e.x,this.onDestroy=this._onDestroy.asObservable()}close(d){this._onClose.next(d)}destroy(){this._onDestroy.next(null)}}const P=(0,g.oQ)([(0,g.oB)({transform:"{{transform}}",opacity:0}),(0,g.jt)("{{transition}}",(0,g.oB)({transform:"none",opacity:1}))]),I=(0,g.oQ)([(0,g.jt)("{{transition}}",(0,g.oB)({transform:"{{transform}}",opacity:0}))]);let U=(()=>{class s{constructor(n,a,c,_,o,m,i){this.componentFactoryResolver=n,this.cd=a,this.renderer=c,this.config=_,this.dialogRef=o,this.zone=m,this.primeNGConfig=i,this.visible=!0,this.transformOptions="scale(0.7)"}ngAfterViewInit(){this.loadChildComponent(this.childComponentType),this.cd.detectChanges()}loadChildComponent(n){let a=this.componentFactoryResolver.resolveComponentFactory(n),c=this.insertionPoint.viewContainerRef;c.clear(),this.componentRef=c.createComponent(a)}moveOnTop(){!1!==this.config.autoZIndex&&(y.P9.set("modal",this.container,(this.config.baseZIndex||0)+this.primeNGConfig.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}onAnimationStart(n){switch(n.toState){case"visible":this.container=n.element,this.wrapper=this.container.parentElement,this.moveOnTop(),this.bindGlobalListeners(),!1!==this.config.modal&&this.enableModality(),this.focus();break;case"void":this.wrapper&&!1!==this.config.modal&&h.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(n){"void"===n.toState&&(this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.container&&!1!==this.config.autoZIndex&&y.P9.clear(this.container),!1!==this.config.modal&&this.disableModality(),this.container=null}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}enableModality(){!1!==this.config.closable&&this.config.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",n=>{this.wrapper&&this.wrapper.isSameNode(n.target)&&this.hide()})),!1!==this.config.modal&&h.p.addClass(document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.config.dismissableMask&&this.unbindMaskClickListener(),!1!==this.config.modal&&h.p.removeClass(document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}onKeydown(n){if(9===n.which){n.preventDefault();let a=h.p.getFocusableElements(this.container);if(a&&a.length>0)if(a[0].ownerDocument.activeElement){let c=a.indexOf(a[0].ownerDocument.activeElement);n.shiftKey?-1==c||0===c?a[a.length-1].focus():a[c-1].focus():-1==c||c===a.length-1?a[0].focus():a[c+1].focus()}else a[0].focus()}}focus(){let n=h.p.findSingle(this.container,"[autofocus]");n&&this.zone.runOutsideAngular(()=>{setTimeout(()=>n.focus(),5)})}bindGlobalListeners(){this.bindDocumentKeydownListener(),!1!==this.config.closeOnEscape&&!1!==this.config.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentKeydownListener(),this.unbindDocumentEscapeListener()}bindDocumentKeydownListener(){this.zone.runOutsideAngular(()=>{this.documentKeydownListener=this.onKeydown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener)})}unbindDocumentKeydownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.maskViewChild?this.maskViewChild.nativeElement.ownerDocument:"document","keydown",a=>{27==a.which&&parseInt(this.container.style.zIndex)==y.P9.getCurrent()&&this.hide()})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}ngOnDestroy(){this.onContainerDestroy(),this.componentRef&&this.componentRef.destroy()}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(t._Vd),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(w),t.Y36(C),t.Y36(t.R0b),t.Y36(R.b4))},s.\u0275cmp=t.Xpm({type:s,selectors:[["p-dynamicDialog"]],viewQuery:function(n,a){if(1&n&&(t.Gf(D,5),t.Gf(T,5)),2&n){let c;t.iGM(c=t.CRH())&&(a.insertionPoint=c.first),t.iGM(c=t.CRH())&&(a.maskViewChild=c.first)}},hostAttrs:[1,"p-element"],decls:3,vars:4,consts:[[3,"ngClass"],["mask",""],["role","dialog",3,"ngClass","ngStyle","class","width","height",4,"ngIf"],["role","dialog",3,"ngClass","ngStyle"],["class","p-dialog-header",4,"ngIf"],[1,"p-dialog-content",3,"ngStyle"],["pDynamicDialogContent",""],["class","p-dialog-footer",4,"ngIf"],[1,"p-dialog-header"],[1,"p-dialog-title"],[1,"p-dialog-header-icons"],["type","button",3,"ngClass","click","keydown.enter",4,"ngIf"],["type","button",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-close-icon","pi","pi-times"],[1,"p-dialog-footer"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0,1),t.YNc(2,b,5,19,"div",2),t.qZA()),2&n&&(t.Q6J("ngClass",t.VKq(2,S,!1!==a.config.modal)),t.xp6(2),t.Q6J("ngIf",a.visible))},directives:function(){return[v.mk,v.O5,v.PC,D]},styles:[".p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translate(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0px!important;left:0px!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}\n"],encapsulation:2,data:{animation:[(0,g.X$)("animation",[(0,g.eR)("void => visible",[(0,g._7)(P)]),(0,g.eR)("visible => void",[(0,g._7)(I)])])]}}),s})();class O{constructor(d,n){this._parentInjector=d,this._additionalTokens=n}get(d,n,a){return this._additionalTokens.get(d)||this._parentInjector.get(d,n)}}let N=(()=>{class s{constructor(n,a,c){this.componentFactoryResolver=n,this.appRef=a,this.injector=c,this.dialogComponentRefMap=new Map}open(n,a){const c=this.appendDialogComponentToBody(a);return this.dialogComponentRefMap.get(c).instance.childComponentType=n,c}appendDialogComponentToBody(n){const a=new WeakMap;a.set(w,n);const c=new C;a.set(C,c);const _=c.onClose.subscribe(()=>{this.dialogComponentRefMap.get(c).instance.close()}),o=c.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(c),o.unsubscribe(),_.unsubscribe()}),i=this.componentFactoryResolver.resolveComponentFactory(U).create(new O(this.injector,a));return this.appRef.attachView(i.hostView),document.body.appendChild(i.hostView.rootNodes[0]),this.dialogComponentRefMap.set(c,i),c}removeDialogComponentFromBody(n){if(!n||!this.dialogComponentRefMap.has(n))return;const a=this.dialogComponentRefMap.get(n);this.appRef.detachView(a.hostView),a.destroy(),this.dialogComponentRefMap.delete(n)}}return s.\u0275fac=function(n){return new(n||s)(t.LFG(t._Vd),t.LFG(t.z2F),t.LFG(t.zs3))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})()}}]);