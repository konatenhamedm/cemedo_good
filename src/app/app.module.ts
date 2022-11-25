import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./layout/header/header.component";
import { PageLoaderComponent } from "./layout/page-loader/page-loader.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { RightSidebarComponent } from "./layout/right-sidebar/right-sidebar.component";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
import { fakeBackendProvider } from "./core/interceptor/fake-backend";
import { ErrorInterceptor } from "./core/interceptor/error.interceptor";
import { JwtInterceptor } from "./core/interceptor/jwt.interceptor";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { TableModule } from "primeng/table";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import {PasswordModule} from 'primeng/password';
import { SplitButtonModule } from "primeng/splitbutton";
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { ToastModule } from "primeng/toast";
//import { DynamicDialogModule } from "primeng/dynamicdialog";
import { DialogModule } from "primeng/dialog";
import { FileUploadModule } from "primeng/fileupload";
import { DropdownModule } from "primeng/dropdown";
import {CalendarModule} from 'primeng/calendar';
import { MultiSelectModule } from "primeng/multiselect";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { CheckboxModule } from "primeng/checkbox";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ClickOutsideModule } from "ng-click-outside";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";

import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { SpecialiteComponent } from "./_controllers/specialite/specialite.component";
import { RoleComponent } from "./_controllers/role/role.component";
import { ServiceComponent } from "./_controllers/service/service.component";
import { TypeServiceComponent } from "./_controllers/type-service/type-service.component";
import { TypeMedecinComponent } from "./_controllers/type-medecin/type-medecin.component";
import { TypeFichierMedicalComponent } from "./_controllers/type-fichier-medical/type-fichier-medical.component";
import { TypeEmployeComponent } from "./_controllers/type-employe/type-employe.component";
import { ResponsableAssuranceComponent } from "./_controllers/responsable-assurance/responsable-assurance.component";
import { PatientComponent } from "./_controllers/patient/patient.component";
import { MedecinComponent } from "./_controllers/medecin/medecin.component";
import { FichierComponent } from "./_controllers/fichier/fichier.component";
import { MedicamentComponent } from "./_controllers/medicament/medicament.component";
import { ModePaiementComponent } from "./_controllers/mode-paiement/mode-paiement.component";
import { RelationComponent } from "./_controllers/relation/relation.component";
import { ComptableComponent } from "./_controllers/comptable/comptable.component";
import { GerantComponent } from "./_controllers/gerant/gerant.component";
import { PharmacienComponent } from "./_controllers/pharmacien/pharmacien.component";
import { InfirmierComponent } from "./_controllers/infirmier/infirmier.component";
import { AssuranceComponent } from "./_controllers/assurance/assurance.component";
import { ResponsableAssuranceService } from "./_services/responsable-assurance/responsable-assurance.service";
import { OrdonnanceComponent } from './_controllers/ordonnance/ordonnance.component';
import { RendezVousComponent } from './_controllers/rendez-vous/rendez-vous.component';
import { FactureComponent } from './_controllers/facture/facture.component';
import { AffectionComponent } from './_controllers/affection/affection.component';
import { AgoraComponent } from './_controllers/agora/agora.component';
import { AdministrateurComponent } from './_controllers/administrateur/administrateur.component';
import { CallComponent } from './_controllers/call/call/call.component';
import { TestComponent } from './_controllers/test/test/test.component'
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SpecialiteService } from "./_services/specialite/specialite.service";
import { AdministrateurService } from "./_services/administrateur/administrateur.service";
import { FactureService } from "./_services/facture/facture.service";
import { AssuranceService } from "./_services/assurance/assurance.service";
import { AgoraService } from "./_services/agora/agora.service";
import { NgxAgoraModule } from 'ngx-agora';
import { agora } from "./_modeles/agora/agora";
import { GeneraleService } from "./_services/_method_generale/generale.service";
import { GenreComponent } from './_controllers/genre/genre.component';
import { ArretMaladieComponent } from './_controllers/arret-maladie/arret-maladie.component';
import { DocumentIdentiteComponent } from './_controllers/document-identite/document-identite.component';
import { ParametersComponent } from './_controllers/parameters/parameters.component';
import { ArretMaladieService } from "./_services/arret-maladie/arret-maladie.service";
import { StatutDocumentComponent } from './_controllers/statut-document/statut-document.component';





const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PageLoaderComponent,
        SidebarComponent,
        RightSidebarComponent,
        AuthLayoutComponent,
        MainLayoutComponent,
        SpecialiteComponent,
        TypeServiceComponent,
        TypeMedecinComponent,
        TypeFichierMedicalComponent,
        TypeEmployeComponent,
        ServiceComponent,
        RoleComponent,
        ResponsableAssuranceComponent,
        PatientComponent,
        MedecinComponent,
        FichierComponent,
        MedicamentComponent,
        ModePaiementComponent,
        RelationComponent,
        ComptableComponent,
        GerantComponent,
        PharmacienComponent,
        InfirmierComponent,
        AssuranceComponent,
        OrdonnanceComponent,
        RendezVousComponent,
        FactureComponent,
        AffectionComponent,
        AdministrateurComponent,
        CallComponent,
        TestComponent,
        AgoraComponent,
        GenreComponent,
        ArretMaladieComponent,
        DocumentIdentiteComponent,
        ParametersComponent,
        StatutDocumentComponent,
        
      
        
        

    ],
    imports: [
        BrowserModule,
        NgxAgoraModule.forRoot({AppID: agora.agora.appId}),
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        PerfectScrollbarModule,
        ClickOutsideModule,
        LoadingBarRouterModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
        
       /* RouterModule.forRoot
        ([{ path: "/admin/specialite", component: SpecialiteComponent }]),*/
        // core & shared
        CoreModule,
        SharedModule,
        TableModule,
        ToolbarModule,
        ToastModule,
        ButtonModule,
        SplitButtonModule,
        ConfirmDialogModule,
        MultiSelectModule,
       // DynamicDialogModule,
        FileUploadModule,
        DialogModule,
        CommonModule,
        RouterModule,
        CheckboxModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        PasswordModule,
        CalendarModule,
        BreadcrumbModule,
        InputNumberModule
      

        
    ],
    providers: [SpecialiteService,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        fakeBackendProvider,
    ],
    bootstrap: [AppComponent,ArretMaladieService ,ResponsableAssuranceService,GeneraleService,AgoraService,SpecialiteService,AdministrateurService,FactureService,AssuranceService],
    
})
export class AppModule {}
