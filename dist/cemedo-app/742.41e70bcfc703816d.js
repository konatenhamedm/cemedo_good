"use strict";(self.webpackChunkcemedoApp=self.webpackChunkcemedoApp||[]).push([[742],{81742:(J,v,d)=>{d.r(v),d.d(v,{RoleModule:()=>c});var t=d(69808),g=d(91083),f=d(59783),_=d(45330),e=d(5e3),C=d(96154),T=d(67658),Z=d(44534),h=d(24851),w=d(15315),R=d(19114),A=d(40845),M=d(31424),y=d(93075);const k=["dt"];function E(o,m){if(1&o){const i=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){return e.CHM(i),e.oxw().openNew()}),e.qZA(),e._uU(1," \xa0 "),e.TgZ(2,"button",21),e.NdJ("click",function(){return e.CHM(i),e.oxw().deleteSelectedProducts()}),e.qZA()}if(2&o){const i=e.oxw();e.xp6(2),e.Q6J("disabled",!i.selectedEntity||!i.selectedEntity.length)}}function L(o,m){1&o&&e._UZ(0,"button",22)}function x(o,m){if(1&o){const i=e.EpF();e.TgZ(0,"div",23),e.TgZ(1,"h5",24),e._uU(2,"Assurance"),e.qZA(),e.TgZ(3,"span",25),e._UZ(4,"i",26),e.TgZ(5,"input",27),e.NdJ("input",function(r){e.CHM(i);const u=e.oxw();return e.MAs(14).filterGlobal(u.getEventValue(r),"contains")}),e.qZA(),e.qZA(),e.qZA()}}function D(o,m){1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"th",28),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",29),e._uU(4,"libelle "),e._UZ(5,"p-sortIcon",30),e.qZA(),e.TgZ(6,"th",31),e._uU(7,"Actions"),e.qZA(),e.qZA(),e.TgZ(8,"tr"),e.TgZ(9,"th",28),e._UZ(10,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(11,"th"),e._UZ(12,"p-columnFilter",32),e.qZA(),e._UZ(13,"th"),e.qZA())}function b(o,m){if(1&o){const i=e.EpF();e.TgZ(0,"tr",33),e.TgZ(1,"td"),e._UZ(2,"p-tableCheckbox",34),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td",35),e.TgZ(6,"button",36),e.NdJ("click",function(){const u=e.CHM(i).$implicit;return e.oxw().editProduct(u)}),e.qZA(),e._uU(7," \xa0 "),e.TgZ(8,"button",37),e.NdJ("click",function(){const u=e.CHM(i).$implicit;return e.oxw().deleteProduct(u)}),e.qZA(),e._uU(9,"\xa0 "),e.TgZ(10,"button",38),e.NdJ("click",function(){const u=e.CHM(i).$implicit;return e.oxw().deleteProduct(u)}),e.qZA(),e.qZA(),e.qZA()}if(2&o){const i=m.$implicit;e.Q6J("pSelectableRow",i),e.xp6(2),e.Q6J("value",i),e.xp6(2),e.Oqu(i.libelle)}}function S(o,m){if(1&o&&(e.TgZ(0,"div",23),e._uU(1),e.qZA()),2&o){const i=e.oxw();e.xp6(1),e.hij(" Au total il y a ",i.liste?i.liste.length:0," enregistrement(s). ")}}function I(o,m){1&o&&(e.TgZ(0,"small",43),e._uU(1,"Libelle est requis."),e.qZA())}function P(o,m){if(1&o){const i=e.EpF();e._UZ(0,"br"),e.TgZ(1,"div",39),e.TgZ(2,"label",40),e._uU(3,"Libelle"),e.qZA(),e.TgZ(4,"input",41),e.NdJ("ngModelChange",function(r){return e.CHM(i),e.oxw().specialite.libelle=r}),e.qZA(),e.YNc(5,I,2,0,"small",42),e.qZA(),e._UZ(6,"hr")}if(2&o){const i=e.oxw();e.xp6(4),e.Q6J("ngModel",i.specialite.libelle),e.xp6(1),e.Q6J("ngIf",i.submitted&&!i.specialite.libelle)}}function F(o,m){if(1&o){const i=e.EpF();e.TgZ(0,"button",44),e.NdJ("click",function(){return e.CHM(i),e.oxw().hideDialog()}),e.qZA(),e.TgZ(1,"button",45),e.NdJ("click",function(){return e.CHM(i),e.oxw().saveProduct()}),e.qZA()}}const O=function(o,m){return[7,o,m]},N=function(){return{width:"750px","margin-top":"-90px"}},s=function(){return{width:"450px"}},n=[{path:"liste",component:(()=>{class o{constructor(i,l,r,u){this.dialogService=i,this.service=l,this.messageService=r,this.confirmationService=u,this.selectAll=!1,this.cols=[],this.data_create={id:null,libelle:"",createdAt:"",updatedAt:"",version:null,active:null},this.data_delete=Array()}ngOnInit(){this.items=[{label:"R\xf4le"},{label:"Liste des r\xf4les",routerLink:""}],this.home={icon:"pi pi-home"},this.loading=!0,this.service.getListe().then(i=>{this.liste=i.slice(0,6).filter(l=>0==l.active),this.totalRecords=this.liste.length,console.log(i.length)}),this.service.getListe().then(i=>{this.virtuelle=i.filter(l=>0==l.active),this.totalRecords=this.virtuelle.length,this.loading=!1,console.log(this.virtuelle)})}onSelectAllChange(i){i.checked?this.service.getListe().then(r=>{this.selectedEntity=r,this.selectAll=!0}):(this.selectedEntity=[],this.selectAll=!1)}loadCustomers(i){this.loading=!0,setTimeout(()=>{this.virtuelle&&(this.liste=this.virtuelle.slice(i.first,i.first+i.rows),this.loading=!1)},1e3)}openNew(){this.specialite=this.data_create,this.submitted=!1,this.entityDialog=!0}applyFilterGlobal(i,l){this.dt.filterGlobal(i.target.value,l)}getEventValue(i){return console.log(i.target.value),i.target.value}deleteSelectedProducts(){this.confirmationService.confirm({message:" Voulez vous r\xe9ellement supprimer ces enregistrements ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.liste=this.liste.filter(i=>!this.selectedEntity.includes(i)),this.selectedEntity.forEach(i=>{this.data_delete.push(i.id)}),this.selectedEntity=null,this.service.deleteSelectedProducts(this.data_delete).subscribe(i=>{this.loading=!0,setTimeout(()=>{this.messageService.add({severity:"success",summary:"Successful",detail:"Enregistrement (s) effectu\xe9 (s) avec succes",life:3e3}),this.loading=!1},1e3)})}})}editProduct(i){this.specialite=Object.assign({},i),this.entityDialog=!0}deleteProduct(i){this.confirmationService.confirm({message:" Voulez vous r\xe9ellement supprimer cet enregistrement ? ",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.liste=this.liste.filter(l=>l.id!==i.id),this.specialite=Object.assign({},i),this.service.delete(this.specialite.id).subscribe(l=>{this.loading=!0,setTimeout(()=>{this.loading=!1,this.messageService.add({severity:"success",summary:"Succes",detail:"Suppression effectu\xe9e avec success",life:3e3})},1e3)})}})}hideDialog(){this.entityDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0;const i={libelle:this.specialite.libelle};this.specialite.libelle.trim()&&(this.specialite.id?(this.liste[this.findIndexById(this.specialite.id)]=this.specialite,this.service.update(this.specialite.id,i).subscribe(l=>{this.loading=!0,setTimeout(()=>{this.messageService.add({severity:"success",summary:"Successful",detail:"Mise \xe0 jour effectu\xe9e avec success",life:3e3}),this.loading=!1},1e3)})):(this.service.create(i).subscribe(l=>{this.loading=!0,setTimeout(()=>{this.loading=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Ajout effectu\xe9 avec success",life:3e3})},1e3)}),this.liste.push(this.specialite)),this.liste=[...this.liste],this.entityDialog=!1,this.specialite=Object.assign({},this.specialite))}findIndexById(i){let l=-1;for(let r=0;r<this.liste.length;r++)if(this.liste[r].id===i){l=r;break}return l}createId(){return 1}onSelectionChange(i=[]){this.selectAll=i.length===this.totalRecords,this.selectedEntity=i}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(_.xA),e.Y36(C.N),e.Y36(f.ez),e.Y36(f.YP))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-role"]],viewQuery:function(i,l){if(1&i&&e.Gf(k,5),2&i){let r;e.iGM(r=e.CRH())&&(l.dt=r.first)}},features:[e._Bn([f.ez,f.YP,_.xA])],decls:23,vars:23,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"model","home"],[1,"row","clearfix"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"card"],[1,"body"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["dataKey","id","styleClass","p-datatable-gridlines","currentPageReportTemplate","Affichage de {first} \xe0 {last} sur  {totalRecords} entr\xe9es",3,"value","lazy","selection","selectAll","paginator","rows","totalRecords","showCurrentPageReport","loading","rowsPerPageOptions","onLazyLoad","selectionChange","selectAllChange"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","R\xf4le","styleClass","p-fluid el",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","label","Nouveau","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Supprimer","icon","pi pi-trash",1,"p-button-danger",3,"disabled","click"],["pButton","","pRipple","","label","Imprimer","icon","pi pi-upload",1,"p-button-help","btn-view"],[1,"flex","align-items-center","justify-content-between"],[1,"m-0"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Rechercher...",3,"input"],[2,"width","3rem"],["pResizableColumn","","pSortableColumn","libelle"],["field","libelle"],["pResizableColumn",""],["type","text","field","libelle"],[3,"pSelectableRow"],[3,"value"],["width","200px"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button","p-button-success","btn-sm","btn-edit",3,"click"],["pButton","","pRipple","","icon","pi pi-check",1,"p-button","p-button-help","btn-sm","btn-view",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button","p-button-warning","btn-sm","btn-delete",3,"click"],[1,"field"],["for","name"],["type","text","pInputText","","id","libelle","required","","autofocus","",3,"ngModel","ngModelChange"],["class","p-error",4,"ngIf"],[1,"p-error"],["pButton","","pRipple","","label","Annuler","icon","pi pi-times",1,"p-button","p-button-help","btn-delete",3,"click"],["pButton","","pRipple","","label","Valider","icon","pi pi-check",1,"p-button-success","btn-view",3,"click"]],template:function(i,l){1&i&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"br"),e._UZ(4,"p-breadcrumb",3),e._UZ(5,"br"),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"div",7),e.TgZ(10,"p-toolbar",8),e.YNc(11,E,3,1,"ng-template",9),e.YNc(12,L,1,0,"ng-template",10),e.qZA(),e.TgZ(13,"p-table",11,12),e.NdJ("onLazyLoad",function(u){return l.loadCustomers(u)})("selectionChange",function(u){return l.onSelectionChange(u)})("selectAllChange",function(u){return l.onSelectAllChange(u)}),e.YNc(15,x,6,0,"ng-template",13),e.YNc(16,D,14,0,"ng-template",14),e.YNc(17,b,11,3,"ng-template",15),e.YNc(18,S,2,1,"ng-template",16),e.qZA(),e.TgZ(19,"p-dialog",17),e.NdJ("visibleChange",function(u){return l.entityDialog=u}),e.YNc(20,P,7,2,"ng-template",18),e.YNc(21,F,2,0,"ng-template",19),e.qZA(),e._UZ(22,"p-confirmDialog"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(4),e.Q6J("model",l.items)("home",l.home),e.xp6(9),e.Q6J("value",l.liste)("lazy",!0)("selection",l.selectedEntity)("selectAll",l.selectAll)("paginator",!0)("rows",7)("totalRecords",l.totalRecords)("showCurrentPageReport",!0)("loading",l.loading)("rowsPerPageOptions",e.WLB(18,O,2*l.totalRecords,3*l.totalRecords)),e.xp6(6),e.Akn(e.DdM(21,N)),e.Q6J("visible",l.entityDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(22,s)))},directives:[T.a,Z.o,f.jx,h.iA,w.V,R.Q,A.Hq,M.o,h.Mo,h.Q7,h.lQ,h.fz,h.xl,h.Ei,h.UA,y.Fj,y.Q7,y.JJ,y.On,t.O5],styles:["[_nghost-%COMP%]     .el{background-color:#fff!important;width:40vw!important;box-shadow:0 20px 20px #d8dde680;border:1px solid #e7e7e7}[_nghost-%COMP%]     .p-dialog-header .ng-star-inserted{color:#fff!important}"]}),o})()}];let a=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(n)],g.Bz]}),o})(),c=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[t.ez,a]]}),o})()},45330:(J,v,d)=>{d.d(v,{xA:()=>N});var t=d(5e3),g=d(41777),f=d(69808),_=d(75730),e=d(85921),C=d(77579),T=d(59783);const Z=["mask"];function h(s,p){if(1&s){const n=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){return t.CHM(n),t.oxw(3).hide()})("keydown.enter",function(){return t.CHM(n),t.oxw(3).hide()}),t._UZ(1,"span",13),t.qZA()}2&s&&t.Q6J("ngClass","p-dialog-header-icon p-dialog-header-maximize p-link")}function w(s,p){if(1&s&&(t.TgZ(0,"div",8),t.TgZ(1,"span",9),t._uU(2),t.qZA(),t.TgZ(3,"div",10),t.YNc(4,h,2,1,"button",11),t.qZA(),t.qZA()),2&s){const n=t.oxw(2);t.xp6(2),t.Oqu(n.config.header),t.xp6(2),t.Q6J("ngIf",!1!==n.config.closable)}}function R(s,p){}function A(s,p){if(1&s&&(t.TgZ(0,"div",14),t._uU(1),t.qZA()),2&s){const n=t.oxw(2);t.xp6(1),t.hij(" ",n.config.footer," ")}}const M=function(s){return{"p-dialog p-dynamic-dialog p-component":!0,"p-dialog-rtl":s}},y=function(s,p){return{transform:s,transition:p}},k=function(s){return{value:"visible",params:s}};function E(s,p){if(1&s){const n=t.EpF();t.TgZ(0,"div",3),t.NdJ("@animation.start",function(c){return t.CHM(n),t.oxw().onAnimationStart(c)})("@animation.done",function(c){return t.CHM(n),t.oxw().onAnimationEnd(c)}),t.YNc(1,w,5,2,"div",4),t.TgZ(2,"div",5),t.YNc(3,R,0,0,"ng-template",6),t.qZA(),t.YNc(4,A,2,1,"div",7),t.qZA()}if(2&s){const n=t.oxw();t.Tol(n.config.styleClass),t.Udp("width",n.config.width)("height",n.config.height),t.Q6J("ngClass",t.VKq(12,M,n.config.rtl))("ngStyle",n.config.style)("@animation",t.VKq(17,k,t.WLB(14,y,n.transformOptions,n.config.transitionOptions||"150ms cubic-bezier(0, 0, 0.2, 1)"))),t.xp6(1),t.Q6J("ngIf",!1!==n.config.showHeader),t.xp6(1),t.Q6J("ngStyle",n.config.contentStyle),t.xp6(2),t.Q6J("ngIf",n.config.footer)}}const L=function(s){return{"p-dialog-mask":!0,"p-component-overlay p-component-overlay-enter p-dialog-mask-scrollblocker":s}};let x=(()=>{class s{constructor(n){this.viewContainerRef=n}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(t.s_b))},s.\u0275dir=t.lG2({type:s,selectors:[["","pDynamicDialogContent",""]],hostAttrs:[1,"p-element"]}),s})();class D{}class b{constructor(){this._onClose=new C.x,this.onClose=this._onClose.asObservable(),this._onDestroy=new C.x,this.onDestroy=this._onDestroy.asObservable()}close(p){this._onClose.next(p)}destroy(){this._onDestroy.next(null)}}const S=(0,g.oQ)([(0,g.oB)({transform:"{{transform}}",opacity:0}),(0,g.jt)("{{transition}}",(0,g.oB)({transform:"none",opacity:1}))]),I=(0,g.oQ)([(0,g.jt)("{{transition}}",(0,g.oB)({transform:"{{transform}}",opacity:0}))]);let P=(()=>{class s{constructor(n,a,c,o,m,i,l){this.componentFactoryResolver=n,this.cd=a,this.renderer=c,this.config=o,this.dialogRef=m,this.zone=i,this.primeNGConfig=l,this.visible=!0,this.transformOptions="scale(0.7)"}ngAfterViewInit(){this.loadChildComponent(this.childComponentType),this.cd.detectChanges()}loadChildComponent(n){let a=this.componentFactoryResolver.resolveComponentFactory(n),c=this.insertionPoint.viewContainerRef;c.clear(),this.componentRef=c.createComponent(a)}moveOnTop(){!1!==this.config.autoZIndex&&(e.P9.set("modal",this.container,(this.config.baseZIndex||0)+this.primeNGConfig.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}onAnimationStart(n){switch(n.toState){case"visible":this.container=n.element,this.wrapper=this.container.parentElement,this.moveOnTop(),this.bindGlobalListeners(),!1!==this.config.modal&&this.enableModality(),this.focus();break;case"void":this.wrapper&&!1!==this.config.modal&&_.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(n){"void"===n.toState&&(this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.container&&!1!==this.config.autoZIndex&&e.P9.clear(this.container),!1!==this.config.modal&&this.disableModality(),this.container=null}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}enableModality(){!1!==this.config.closable&&this.config.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",n=>{this.wrapper&&this.wrapper.isSameNode(n.target)&&this.hide()})),!1!==this.config.modal&&_.p.addClass(document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.config.dismissableMask&&this.unbindMaskClickListener(),!1!==this.config.modal&&_.p.removeClass(document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}onKeydown(n){if(9===n.which){n.preventDefault();let a=_.p.getFocusableElements(this.container);if(a&&a.length>0)if(a[0].ownerDocument.activeElement){let c=a.indexOf(a[0].ownerDocument.activeElement);n.shiftKey?-1==c||0===c?a[a.length-1].focus():a[c-1].focus():-1==c||c===a.length-1?a[0].focus():a[c+1].focus()}else a[0].focus()}}focus(){let n=_.p.findSingle(this.container,"[autofocus]");n&&this.zone.runOutsideAngular(()=>{setTimeout(()=>n.focus(),5)})}bindGlobalListeners(){this.bindDocumentKeydownListener(),!1!==this.config.closeOnEscape&&!1!==this.config.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentKeydownListener(),this.unbindDocumentEscapeListener()}bindDocumentKeydownListener(){this.zone.runOutsideAngular(()=>{this.documentKeydownListener=this.onKeydown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener)})}unbindDocumentKeydownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.maskViewChild?this.maskViewChild.nativeElement.ownerDocument:"document","keydown",a=>{27==a.which&&parseInt(this.container.style.zIndex)==e.P9.getCurrent()&&this.hide()})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}ngOnDestroy(){this.onContainerDestroy(),this.componentRef&&this.componentRef.destroy()}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(t._Vd),t.Y36(t.sBO),t.Y36(t.Qsj),t.Y36(D),t.Y36(b),t.Y36(t.R0b),t.Y36(T.b4))},s.\u0275cmp=t.Xpm({type:s,selectors:[["p-dynamicDialog"]],viewQuery:function(n,a){if(1&n&&(t.Gf(x,5),t.Gf(Z,5)),2&n){let c;t.iGM(c=t.CRH())&&(a.insertionPoint=c.first),t.iGM(c=t.CRH())&&(a.maskViewChild=c.first)}},hostAttrs:[1,"p-element"],decls:3,vars:4,consts:[[3,"ngClass"],["mask",""],["role","dialog",3,"ngClass","ngStyle","class","width","height",4,"ngIf"],["role","dialog",3,"ngClass","ngStyle"],["class","p-dialog-header",4,"ngIf"],[1,"p-dialog-content",3,"ngStyle"],["pDynamicDialogContent",""],["class","p-dialog-footer",4,"ngIf"],[1,"p-dialog-header"],[1,"p-dialog-title"],[1,"p-dialog-header-icons"],["type","button",3,"ngClass","click","keydown.enter",4,"ngIf"],["type","button",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-close-icon","pi","pi-times"],[1,"p-dialog-footer"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0,1),t.YNc(2,E,5,19,"div",2),t.qZA()),2&n&&(t.Q6J("ngClass",t.VKq(2,L,!1!==a.config.modal)),t.xp6(2),t.Q6J("ngIf",a.visible))},directives:function(){return[f.mk,f.O5,f.PC,x]},styles:[".p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translate(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0px!important;left:0px!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}\n"],encapsulation:2,data:{animation:[(0,g.X$)("animation",[(0,g.eR)("void => visible",[(0,g._7)(S)]),(0,g.eR)("visible => void",[(0,g._7)(I)])])]}}),s})();class O{constructor(p,n){this._parentInjector=p,this._additionalTokens=n}get(p,n,a){return this._additionalTokens.get(p)||this._parentInjector.get(p,n)}}let N=(()=>{class s{constructor(n,a,c){this.componentFactoryResolver=n,this.appRef=a,this.injector=c,this.dialogComponentRefMap=new Map}open(n,a){const c=this.appendDialogComponentToBody(a);return this.dialogComponentRefMap.get(c).instance.childComponentType=n,c}appendDialogComponentToBody(n){const a=new WeakMap;a.set(D,n);const c=new b;a.set(b,c);const o=c.onClose.subscribe(()=>{this.dialogComponentRefMap.get(c).instance.close()}),m=c.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(c),m.unsubscribe(),o.unsubscribe()}),l=this.componentFactoryResolver.resolveComponentFactory(P).create(new O(this.injector,a));return this.appRef.attachView(l.hostView),document.body.appendChild(l.hostView.rootNodes[0]),this.dialogComponentRefMap.set(c,l),c}removeDialogComponentFromBody(n){if(!n||!this.dialogComponentRefMap.has(n))return;const a=this.dialogComponentRefMap.get(n);this.appRef.detachView(a.hostView),a.destroy(),this.dialogComponentRefMap.delete(n)}}return s.\u0275fac=function(n){return new(n||s)(t.LFG(t._Vd),t.LFG(t.z2F),t.LFG(t.zs3))},s.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac}),s})()}}]);