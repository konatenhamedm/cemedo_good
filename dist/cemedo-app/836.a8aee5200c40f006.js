"use strict";(self.webpackChunkcemedoApp=self.webpackChunkcemedoApp||[]).push([[836],{29836:(B,Z,r)=>{r.r(Z),r.d(Z,{MedicamentModule:()=>_});var i=r(69808),g=r(91083),v=r(86087),h=r(59783),y=r(45330),e=r(5e3),w=r(8696),R=r(40520);let k=(()=>{class o{constructor(t){this.http=t,this.baseUrl=w.G.BaseUrl.Url+"medicaments/"}getListe(){return this.http.get(this.baseUrl).toPromise().then(t=>t.data).then(t=>t)}create(t){return console.log(t),this.http.post(this.baseUrl+"create",t)}deleteSelectedProducts(t){return this.http.post(this.baseUrl+"active",t)}update(t,l){return console.log(l),this.http.post(`${this.baseUrl+"update"}/${t}`,l)}delete(t){return this.http.get(`${this.baseUrl+"active"}/${t}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(R.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var E=r(67658),L=r(44534),f=r(24851),U=r(15315),q=r(19114),S=r(17773),I=r(40845),b=r(93075),D=r(31424);function T(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"button",19),e.NdJ("click",function(){return e.CHM(t),e.oxw().openNew()}),e.qZA(),e._uU(1," \xa0 "),e.TgZ(2,"button",20),e.NdJ("click",function(){return e.CHM(t),e.oxw().deleteSelectedProducts()}),e.qZA()}if(2&o){const t=e.oxw();e.xp6(2),e.Q6J("disabled",!t.selectedEntity||!t.selectedEntity.length)}}function x(o,m){1&o&&e._UZ(0,"button",21)}function P(o,m){1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"th",22),e._UZ(2,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(3,"th",23),e._uU(4,"Libelle "),e._UZ(5,"p-sortIcon",24),e.qZA(),e.TgZ(6,"th",25),e._uU(7,"Posologie "),e._UZ(8,"p-sortIcon",26),e.qZA(),e.TgZ(9,"th",27),e._uU(10,"Quantit\xe9 "),e._UZ(11,"p-sortIcon",28),e.qZA(),e.TgZ(12,"th",29),e._uU(13,"Actions"),e.qZA(),e.qZA(),e.TgZ(14,"tr"),e.TgZ(15,"th",22),e._UZ(16,"p-tableHeaderCheckbox"),e.qZA(),e.TgZ(17,"th"),e._UZ(18,"p-columnFilter",30),e.qZA(),e.TgZ(19,"th"),e._UZ(20,"p-columnFilter",31),e.qZA(),e.TgZ(21,"th"),e._UZ(22,"p-columnFilter",32),e.qZA(),e._UZ(23,"th"),e.qZA())}function O(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"tr",33),e.TgZ(1,"td"),e._UZ(2,"p-tableCheckbox",34),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td",35),e.TgZ(10,"button",36),e.NdJ("click",function(){const u=e.CHM(t).$implicit;return e.oxw().editProduct(u)}),e.qZA(),e._uU(11," \xa0 "),e.TgZ(12,"button",37),e.NdJ("click",function(){const u=e.CHM(t).$implicit;return e.oxw().deleteProduct(u)}),e.qZA(),e._uU(13,"\xa0 "),e.TgZ(14,"button",38),e.NdJ("click",function(){const u=e.CHM(t).$implicit;return e.oxw().deleteProduct(u)}),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=m.$implicit;e.Q6J("pSelectableRow",t),e.xp6(2),e.Q6J("value",t),e.xp6(2),e.Oqu(t.libelle),e.xp6(2),e.Oqu(t.posologie),e.xp6(2),e.Oqu(t.quantite)}}function N(o,m){if(1&o&&(e.TgZ(0,"div",39),e._uU(1),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.hij(" Au total il y a ",t.liste?t.liste.length:0," enregistrement(s). ")}}function z(o,m){1&o&&(e.TgZ(0,"small",46),e._uU(1,"Libelle est requis."),e.qZA())}function J(o,m){1&o&&(e.TgZ(0,"small",46),e._uU(1,"Posologie est requis."),e.qZA())}function F(o,m){1&o&&(e.TgZ(0,"small",46),e._uU(1,"Quantit\xe9 est requis."),e.qZA())}function s(o,m){if(1&o){const t=e.EpF();e._UZ(0,"br"),e.TgZ(1,"div",40),e.TgZ(2,"label",41),e._uU(3,"Libelle"),e.qZA(),e.TgZ(4,"input",42),e.NdJ("ngModelChange",function(d){return e.CHM(t),e.oxw().specialite.libelle=d}),e.qZA(),e.YNc(5,z,2,0,"small",43),e.qZA(),e.TgZ(6,"div",40),e.TgZ(7,"label",44),e._uU(8,"Posologie"),e.qZA(),e.TgZ(9,"input",45),e.NdJ("ngModelChange",function(d){return e.CHM(t),e.oxw().specialite.posologie=d}),e.qZA(),e.YNc(10,J,2,0,"small",43),e.qZA(),e.TgZ(11,"div",40),e.TgZ(12,"label",44),e._uU(13,"Quantit\xe9"),e.qZA(),e.TgZ(14,"input",45),e.NdJ("ngModelChange",function(d){return e.CHM(t),e.oxw().specialite.quantite=d}),e.qZA(),e.YNc(15,F,2,0,"small",43),e.qZA(),e._UZ(16,"hr")}if(2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.specialite.libelle),e.xp6(1),e.Q6J("ngIf",t.submitted&&!t.specialite.libelle),e.xp6(4),e.Q6J("ngModel",t.specialite.posologie),e.xp6(1),e.Q6J("ngIf",t.submitted&&!t.specialite.posologie),e.xp6(4),e.Q6J("ngModel",t.specialite.quantite),e.xp6(1),e.Q6J("ngIf",t.submitted&&!t.specialite.quantite)}}function p(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"button",47),e.NdJ("click",function(){return e.CHM(t),e.oxw().hideDialog()}),e.qZA(),e.TgZ(1,"button",48),e.NdJ("click",function(){return e.CHM(t),e.oxw().saveProduct()}),e.qZA()}}const n=function(o,m){return[7,o,m]},a=function(){return{width:"750px","margin-top":"-90px"}},c=function(){return{width:"450px"}},M=[{path:"liste",component:(()=>{class o{constructor(t,l,d,u){this.dialogService=t,this.service=l,this.messageService=d,this.confirmationService=u,this.selectAll=!1,this.cols=[],this.data_create={id:null,libelle:"",posologie:"",quantite:null,active:null},this.data_delete=Array()}ngOnInit(){this.items=[{label:"M\xe9dicament"},{label:"Liste des m\xe9dicaments",routerLink:""}],this.home={icon:"pi pi-home"},this.loading=!0,this.service.getListe().then(t=>{this.liste=t.slice(0,6).filter(l=>0==l.active),this.totalRecords=this.liste.length,console.log(t.length)}),this.service.getListe().then(t=>{this.virtuelle=t.filter(l=>0==l.active),this.totalRecords=this.virtuelle.length,this.loading=!1,console.log(this.virtuelle)})}onSelectAllChange(t){t.checked?this.service.getListe().then(d=>{this.selectedEntity=d,this.selectAll=!0}):(this.selectedEntity=[],this.selectAll=!1)}loadCustomers(t){this.loading=!0,setTimeout(()=>{this.virtuelle&&(this.liste=this.virtuelle.slice(t.first,t.first+t.rows),this.loading=!1)},1e3)}openNew(){this.specialite=this.data_create,this.submitted=!1,this.entityDialog=!0}deleteSelectedProducts(){this.confirmationService.confirm({message:" Voulez vous r\xe9ellement supprimer ces enregistrements ?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.liste=this.liste.filter(t=>!this.selectedEntity.includes(t)),this.selectedEntity.forEach(t=>{this.data_delete.push(t.id)}),this.selectedEntity=null,this.service.deleteSelectedProducts(this.data_delete).subscribe(t=>{this.loading=!0,setTimeout(()=>{this.messageService.add({severity:"success",summary:"Successful",detail:"Enregistrement (s) effectu\xe9 (s) avec succes",life:3e3}),this.loading=!1},1e3)})}})}editProduct(t){this.specialite=Object.assign({},t),this.entityDialog=!0}deleteProduct(t){this.confirmationService.confirm({message:" Voulez vous r\xe9ellement supprimer cet enregistrement ? ",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:()=>{this.liste=this.liste.filter(l=>l.id!==t.id),this.specialite=Object.assign({},t),this.service.delete(this.specialite.id).subscribe(l=>{this.loading=!0,setTimeout(()=>{this.loading=!1,this.messageService.add({severity:"success",summary:"Succes",detail:"Suppression effectu\xe9e avec success",life:3e3})},1e3)})}})}hideDialog(){this.entityDialog=!1,this.submitted=!1}saveProduct(){this.submitted=!0;const t={libelle:this.specialite.libelle};this.specialite.libelle.trim()&&(this.specialite.id?(this.liste[this.findIndexById(this.specialite.id)]=this.specialite,this.service.update(this.specialite.id,t).subscribe(l=>{this.loading=!0,setTimeout(()=>{this.messageService.add({severity:"success",summary:"Successful",detail:"Mise \xe0 jour effectu\xe9e avec success",life:3e3}),this.loading=!1},1e3)})):(this.service.create(t).subscribe(l=>{this.loading=!0,setTimeout(()=>{this.loading=!1,this.messageService.add({severity:"success",summary:"Successful",detail:"Ajout effectu\xe9 avec success",life:3e3})},1e3)}),this.liste.push(this.specialite)),this.liste=[...this.liste],this.entityDialog=!1,this.specialite=Object.assign({},this.specialite))}findIndexById(t){let l=-1;for(let d=0;d<this.liste.length;d++)if(this.liste[d].id===t){l=d;break}return l}createId(){return 1}onSelectionChange(t=[]){this.selectAll=t.length===this.totalRecords,this.selectedEntity=t}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.xA),e.Y36(k),e.Y36(h.ez),e.Y36(h.YP))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-medicament"]],viewQuery:function(t,l){if(1&t&&e.Gf(v.NW,5),2&t){let d;e.iGM(d=e.CRH())&&(l.paginator=d.first)}},features:[e._Bn([h.ez,h.YP,y.xA])],decls:23,vars:23,consts:[[1,"content"],[1,"content-block"],[1,"block-header"],[3,"model","home"],[1,"row","clearfix"],[1,"col-xs-12","col-sm-12","col-md-12","col-lg-12"],[1,"card"],[1,"body"],["styleClass","mb-4"],["pTemplate","left"],["pTemplate","right"],["dataKey","id","styleClass","p-datatable-gridlines","currentPageReportTemplate","Affichage de {first} \xe0 {last} sur  {totalRecords} entr\xe9es",3,"value","lazy","selection","selectAll","paginator","rows","totalRecords","showCurrentPageReport","loading","rowsPerPageOptions","onLazyLoad","selectionChange","selectAllChange"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","summary"],["header","Medicament","styleClass","p-fluid el",3,"visible","modal","visibleChange"],["pTemplate","content"],["pTemplate","footer"],["pButton","","pRipple","","label","Nouveau","icon","pi pi-plus",1,"p-button-success","mr-2",3,"click"],["pButton","","pRipple","","label","Supprimer","icon","pi pi-trash",1,"p-button-danger",3,"disabled","click"],["pButton","","pRipple","","label","Imprimer","icon","pi pi-upload",1,"p-button-help","btn-view"],[2,"width","3rem"],["pResizableColumn","","pSortableColumn","libelle"],["field","libelle"],["pResizableColumn","","pSortableColumn","posologie"],["field","posologie"],["pResizableColumn","","pSortableColumn","quantite"],["field","quantite"],["pResizableColumn",""],["type","text","field","libelle"],["type","text","field","posologie"],["type","text","field","quantite"],[3,"pSelectableRow"],[3,"value"],["width","200px"],["pButton","","pRipple","","icon","pi pi-pencil",1,"p-button","p-button-success","btn-sm","btn-edit",3,"click"],["pButton","","pRipple","","icon","pi pi-check",1,"p-button","p-button-help","btn-sm","btn-view",3,"click"],["pButton","","pRipple","","icon","pi pi-trash",1,"p-button","p-button-warning","btn-sm","btn-delete",3,"click"],[1,"flex","align-items-center","justify-content-between"],[1,"field"],["for","name"],["type","text","pInputText","","id","libelle","required","","autofocus","",3,"ngModel","ngModelChange"],["class","p-error",4,"ngIf"],["for","cle"],["type","text","pInputText","","id","cle","required","","autofocus","",3,"ngModel","ngModelChange"],[1,"p-error"],["pButton","","pRipple","","label","Annuler","icon","pi pi-times",1,"p-button","p-button-help",3,"click"],["pButton","","pRipple","","label","Valider","icon","pi pi-check",1,"p-button-success",3,"click"]],template:function(t,l){1&t&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"br"),e._UZ(4,"p-breadcrumb",3),e._UZ(5,"br"),e.qZA(),e.TgZ(6,"div",4),e.TgZ(7,"div",5),e.TgZ(8,"div",6),e.TgZ(9,"div",7),e.TgZ(10,"p-toolbar",8),e.YNc(11,T,3,1,"ng-template",9),e.YNc(12,x,1,0,"ng-template",10),e.qZA(),e.TgZ(13,"p-table",11,12),e.NdJ("onLazyLoad",function(u){return l.loadCustomers(u)})("selectionChange",function(u){return l.onSelectionChange(u)})("selectAllChange",function(u){return l.onSelectAllChange(u)}),e.YNc(15,P,24,0,"ng-template",13),e.YNc(16,O,15,5,"ng-template",14),e.YNc(17,N,2,1,"ng-template",15),e.qZA(),e.TgZ(18,"p-dialog",16),e.NdJ("visibleChange",function(u){return l.entityDialog=u}),e.YNc(19,s,17,6,"ng-template",17),e.YNc(20,p,2,0,"ng-template",18),e.qZA(),e._UZ(21,"p-confirmDialog"),e._UZ(22,"p-toast"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(4),e.Q6J("model",l.items)("home",l.home),e.xp6(9),e.Q6J("value",l.liste)("lazy",!0)("selection",l.selectedEntity)("selectAll",l.selectAll)("paginator",!0)("rows",7)("totalRecords",l.totalRecords)("showCurrentPageReport",!0)("loading",l.loading)("rowsPerPageOptions",e.WLB(18,n,2*l.totalRecords,3*l.totalRecords)),e.xp6(5),e.Akn(e.DdM(21,a)),e.Q6J("visible",l.entityDialog)("modal",!0),e.xp6(3),e.Akn(e.DdM(22,c)))},directives:[E.a,L.o,h.jx,f.iA,U.V,q.Q,S.FN,I.Hq,f.Mo,f.Q7,f.lQ,f.fz,f.xl,f.Ei,f.UA,b.Fj,D.o,b.Q7,b.JJ,b.On,i.O5],styles:["[_nghost-%COMP%]     .el{background-color:#fff!important;width:40vw!important;box-shadow:0 20px 20px #d8dde680;border:1px solid #e7e7e7}[_nghost-%COMP%]     .p-dialog-header .ng-star-inserted{color:#fff!important}"]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[g.Bz.forChild(M)],g.Bz]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[i.ez,A]]}),o})()},45330:(B,Z,r)=>{r.d(Z,{xA:()=>F});var i=r(5e3),g=r(41777),v=r(69808),h=r(75730),y=r(85921),e=r(77579),w=r(59783);const R=["mask"];function k(s,p){if(1&s){const n=i.EpF();i.TgZ(0,"button",12),i.NdJ("click",function(){return i.CHM(n),i.oxw(3).hide()})("keydown.enter",function(){return i.CHM(n),i.oxw(3).hide()}),i._UZ(1,"span",13),i.qZA()}2&s&&i.Q6J("ngClass","p-dialog-header-icon p-dialog-header-maximize p-link")}function E(s,p){if(1&s&&(i.TgZ(0,"div",8),i.TgZ(1,"span",9),i._uU(2),i.qZA(),i.TgZ(3,"div",10),i.YNc(4,k,2,1,"button",11),i.qZA(),i.qZA()),2&s){const n=i.oxw(2);i.xp6(2),i.Oqu(n.config.header),i.xp6(2),i.Q6J("ngIf",!1!==n.config.closable)}}function L(s,p){}function f(s,p){if(1&s&&(i.TgZ(0,"div",14),i._uU(1),i.qZA()),2&s){const n=i.oxw(2);i.xp6(1),i.hij(" ",n.config.footer," ")}}const U=function(s){return{"p-dialog p-dynamic-dialog p-component":!0,"p-dialog-rtl":s}},q=function(s,p){return{transform:s,transition:p}},S=function(s){return{value:"visible",params:s}};function I(s,p){if(1&s){const n=i.EpF();i.TgZ(0,"div",3),i.NdJ("@animation.start",function(c){return i.CHM(n),i.oxw().onAnimationStart(c)})("@animation.done",function(c){return i.CHM(n),i.oxw().onAnimationEnd(c)}),i.YNc(1,E,5,2,"div",4),i.TgZ(2,"div",5),i.YNc(3,L,0,0,"ng-template",6),i.qZA(),i.YNc(4,f,2,1,"div",7),i.qZA()}if(2&s){const n=i.oxw();i.Tol(n.config.styleClass),i.Udp("width",n.config.width)("height",n.config.height),i.Q6J("ngClass",i.VKq(12,U,n.config.rtl))("ngStyle",n.config.style)("@animation",i.VKq(17,S,i.WLB(14,q,n.transformOptions,n.config.transitionOptions||"150ms cubic-bezier(0, 0, 0.2, 1)"))),i.xp6(1),i.Q6J("ngIf",!1!==n.config.showHeader),i.xp6(1),i.Q6J("ngStyle",n.config.contentStyle),i.xp6(2),i.Q6J("ngIf",n.config.footer)}}const b=function(s){return{"p-dialog-mask":!0,"p-component-overlay p-component-overlay-enter p-dialog-mask-scrollblocker":s}};let D=(()=>{class s{constructor(n){this.viewContainerRef=n}}return s.\u0275fac=function(n){return new(n||s)(i.Y36(i.s_b))},s.\u0275dir=i.lG2({type:s,selectors:[["","pDynamicDialogContent",""]],hostAttrs:[1,"p-element"]}),s})();class T{}class x{constructor(){this._onClose=new e.x,this.onClose=this._onClose.asObservable(),this._onDestroy=new e.x,this.onDestroy=this._onDestroy.asObservable()}close(p){this._onClose.next(p)}destroy(){this._onDestroy.next(null)}}const P=(0,g.oQ)([(0,g.oB)({transform:"{{transform}}",opacity:0}),(0,g.jt)("{{transition}}",(0,g.oB)({transform:"none",opacity:1}))]),O=(0,g.oQ)([(0,g.jt)("{{transition}}",(0,g.oB)({transform:"{{transform}}",opacity:0}))]);let N=(()=>{class s{constructor(n,a,c,C,M,A,_){this.componentFactoryResolver=n,this.cd=a,this.renderer=c,this.config=C,this.dialogRef=M,this.zone=A,this.primeNGConfig=_,this.visible=!0,this.transformOptions="scale(0.7)"}ngAfterViewInit(){this.loadChildComponent(this.childComponentType),this.cd.detectChanges()}loadChildComponent(n){let a=this.componentFactoryResolver.resolveComponentFactory(n),c=this.insertionPoint.viewContainerRef;c.clear(),this.componentRef=c.createComponent(a)}moveOnTop(){!1!==this.config.autoZIndex&&(y.P9.set("modal",this.container,(this.config.baseZIndex||0)+this.primeNGConfig.zIndex.modal),this.wrapper.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1))}onAnimationStart(n){switch(n.toState){case"visible":this.container=n.element,this.wrapper=this.container.parentElement,this.moveOnTop(),this.bindGlobalListeners(),!1!==this.config.modal&&this.enableModality(),this.focus();break;case"void":this.wrapper&&!1!==this.config.modal&&h.p.addClass(this.wrapper,"p-component-overlay-leave")}}onAnimationEnd(n){"void"===n.toState&&(this.onContainerDestroy(),this.dialogRef.destroy())}onContainerDestroy(){this.unbindGlobalListeners(),this.container&&!1!==this.config.autoZIndex&&y.P9.clear(this.container),!1!==this.config.modal&&this.disableModality(),this.container=null}close(){this.visible=!1,this.cd.markForCheck()}hide(){this.dialogRef&&this.dialogRef.close()}enableModality(){!1!==this.config.closable&&this.config.dismissableMask&&(this.maskClickListener=this.renderer.listen(this.wrapper,"mousedown",n=>{this.wrapper&&this.wrapper.isSameNode(n.target)&&this.hide()})),!1!==this.config.modal&&h.p.addClass(document.body,"p-overflow-hidden")}disableModality(){this.wrapper&&(this.config.dismissableMask&&this.unbindMaskClickListener(),!1!==this.config.modal&&h.p.removeClass(document.body,"p-overflow-hidden"),this.cd.destroyed||this.cd.detectChanges())}onKeydown(n){if(9===n.which){n.preventDefault();let a=h.p.getFocusableElements(this.container);if(a&&a.length>0)if(a[0].ownerDocument.activeElement){let c=a.indexOf(a[0].ownerDocument.activeElement);n.shiftKey?-1==c||0===c?a[a.length-1].focus():a[c-1].focus():-1==c||c===a.length-1?a[0].focus():a[c+1].focus()}else a[0].focus()}}focus(){let n=h.p.findSingle(this.container,"[autofocus]");n&&this.zone.runOutsideAngular(()=>{setTimeout(()=>n.focus(),5)})}bindGlobalListeners(){this.bindDocumentKeydownListener(),!1!==this.config.closeOnEscape&&!1!==this.config.closable&&this.bindDocumentEscapeListener()}unbindGlobalListeners(){this.unbindDocumentKeydownListener(),this.unbindDocumentEscapeListener()}bindDocumentKeydownListener(){this.zone.runOutsideAngular(()=>{this.documentKeydownListener=this.onKeydown.bind(this),window.document.addEventListener("keydown",this.documentKeydownListener)})}unbindDocumentKeydownListener(){this.documentKeydownListener&&(window.document.removeEventListener("keydown",this.documentKeydownListener),this.documentKeydownListener=null)}bindDocumentEscapeListener(){this.documentEscapeListener=this.renderer.listen(this.maskViewChild?this.maskViewChild.nativeElement.ownerDocument:"document","keydown",a=>{27==a.which&&parseInt(this.container.style.zIndex)==y.P9.getCurrent()&&this.hide()})}unbindDocumentEscapeListener(){this.documentEscapeListener&&(this.documentEscapeListener(),this.documentEscapeListener=null)}unbindMaskClickListener(){this.maskClickListener&&(this.maskClickListener(),this.maskClickListener=null)}ngOnDestroy(){this.onContainerDestroy(),this.componentRef&&this.componentRef.destroy()}}return s.\u0275fac=function(n){return new(n||s)(i.Y36(i._Vd),i.Y36(i.sBO),i.Y36(i.Qsj),i.Y36(T),i.Y36(x),i.Y36(i.R0b),i.Y36(w.b4))},s.\u0275cmp=i.Xpm({type:s,selectors:[["p-dynamicDialog"]],viewQuery:function(n,a){if(1&n&&(i.Gf(D,5),i.Gf(R,5)),2&n){let c;i.iGM(c=i.CRH())&&(a.insertionPoint=c.first),i.iGM(c=i.CRH())&&(a.maskViewChild=c.first)}},hostAttrs:[1,"p-element"],decls:3,vars:4,consts:[[3,"ngClass"],["mask",""],["role","dialog",3,"ngClass","ngStyle","class","width","height",4,"ngIf"],["role","dialog",3,"ngClass","ngStyle"],["class","p-dialog-header",4,"ngIf"],[1,"p-dialog-content",3,"ngStyle"],["pDynamicDialogContent",""],["class","p-dialog-footer",4,"ngIf"],[1,"p-dialog-header"],[1,"p-dialog-title"],[1,"p-dialog-header-icons"],["type","button",3,"ngClass","click","keydown.enter",4,"ngIf"],["type","button",3,"ngClass","click","keydown.enter"],[1,"p-dialog-header-close-icon","pi","pi-times"],[1,"p-dialog-footer"]],template:function(n,a){1&n&&(i.TgZ(0,"div",0,1),i.YNc(2,I,5,19,"div",2),i.qZA()),2&n&&(i.Q6J("ngClass",i.VKq(2,b,!1!==a.config.modal)),i.xp6(2),i.Q6J("ngIf",a.visible))},directives:function(){return[v.mk,v.O5,v.PC,D]},styles:[".p-dialog-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dialog-mask.p-component-overlay{pointer-events:auto}.p-dialog{display:flex;flex-direction:column;pointer-events:auto;max-height:90%;transform:scale(1);position:relative}.p-dialog-content{overflow-y:auto;flex-grow:1}.p-dialog-header{display:flex;align-items:center;justify-content:space-between;flex-shrink:0}.p-dialog-draggable .p-dialog-header{cursor:move}.p-dialog-footer{flex-shrink:0}.p-dialog .p-dialog-header-icons{display:flex;align-items:center}.p-dialog .p-dialog-header-icon{display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-fluid .p-dialog-footer .p-button{width:auto}.p-dialog-top .p-dialog,.p-dialog-bottom .p-dialog,.p-dialog-left .p-dialog,.p-dialog-right .p-dialog,.p-dialog-top-left .p-dialog,.p-dialog-top-right .p-dialog,.p-dialog-bottom-left .p-dialog,.p-dialog-bottom-right .p-dialog{margin:.75rem;transform:translate(0)}.p-dialog-maximized{transition:none;transform:none;width:100vw!important;height:100vh!important;top:0px!important;left:0px!important;max-height:100%;height:100%}.p-dialog-maximized .p-dialog-content{flex-grow:1}.p-dialog-left{justify-content:flex-start}.p-dialog-right{justify-content:flex-end}.p-dialog-top{align-items:flex-start}.p-dialog-top-left{justify-content:flex-start;align-items:flex-start}.p-dialog-top-right{justify-content:flex-end;align-items:flex-start}.p-dialog-bottom{align-items:flex-end}.p-dialog-bottom-left{justify-content:flex-start;align-items:flex-end}.p-dialog-bottom-right{justify-content:flex-end;align-items:flex-end}.p-dialog .p-resizable-handle{position:absolute;font-size:.1px;display:block;cursor:se-resize;width:12px;height:12px;right:1px;bottom:1px}.p-confirm-dialog .p-dialog-content{display:flex;align-items:center}\n"],encapsulation:2,data:{animation:[(0,g.X$)("animation",[(0,g.eR)("void => visible",[(0,g._7)(P)]),(0,g.eR)("visible => void",[(0,g._7)(O)])])]}}),s})();class J{constructor(p,n){this._parentInjector=p,this._additionalTokens=n}get(p,n,a){return this._additionalTokens.get(p)||this._parentInjector.get(p,n)}}let F=(()=>{class s{constructor(n,a,c){this.componentFactoryResolver=n,this.appRef=a,this.injector=c,this.dialogComponentRefMap=new Map}open(n,a){const c=this.appendDialogComponentToBody(a);return this.dialogComponentRefMap.get(c).instance.childComponentType=n,c}appendDialogComponentToBody(n){const a=new WeakMap;a.set(T,n);const c=new x;a.set(x,c);const C=c.onClose.subscribe(()=>{this.dialogComponentRefMap.get(c).instance.close()}),M=c.onDestroy.subscribe(()=>{this.removeDialogComponentFromBody(c),M.unsubscribe(),C.unsubscribe()}),_=this.componentFactoryResolver.resolveComponentFactory(N).create(new J(this.injector,a));return this.appRef.attachView(_.hostView),document.body.appendChild(_.hostView.rootNodes[0]),this.dialogComponentRefMap.set(c,_),c}removeDialogComponentFromBody(n){if(!n||!this.dialogComponentRefMap.has(n))return;const a=this.dialogComponentRefMap.get(n);this.appRef.detachView(a.hostView),a.destroy(),this.dialogComponentRefMap.delete(n)}}return s.\u0275fac=function(n){return new(n||s)(i.LFG(i._Vd),i.LFG(i.z2F),i.LFG(i.zs3))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac}),s})()}}]);