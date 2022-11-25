import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { NgxEchartsModule } from "ngx-echarts";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { NgApexchartsModule } from "ng-apexcharts";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSortModule } from "@angular/material/sort";
import { MatTabsModule } from "@angular/material/tabs";
import { MatMenuModule } from "@angular/material/menu";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatTableModule } from "@angular/material/table";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatRadioModule } from "@angular/material/radio";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { HttpClientModule } from "@angular/common/http";
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatCardModule } from '@angular/material/card'
import { ToastrModule, ToastrService } from 'ngx-toastr';


//import { FullCalendarModule } from '@fullcalendar/angular'

import { OWL_DATE_TIME_LOCALE, OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

//import { OwlDateTimeModule, OWL_DATE_TIME_FORMATS} from 'ng-pick-datetime';


import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

/*FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);*/

//import { MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DoctorRoutingModule } from "./doctor-routing.module";
import { ComponentsModule } from "../shared/components/components.module";
import { MedecinViewComponent } from './composents/medecin-view/medecin-view.component';
import { MedecinFormsComponent } from './composents/medecin-view/medecin-forms.component';
import { MedecinDetailComponent } from './composents/medecin-detail/medecin-detail.component';
import { ProfileMedecinComponent } from './composents/profile-medecin/profile-medecin.component';
import { DashboardMedecinComponent } from "./dashboard-medecin/dashboard-medecin.component";
import { RapportComponent } from './composents/rapport/rapport.component';
import { MedecinCalendrierComponent } from './composents/medecin-calendrier/medecin-calendrier.component';
import { MedecinService } from "./service/medecin.service";
import { FactureComponent } from "./composents/facture/facture.component";
import { MedecinView2Component } from './composents/medecin-view2/medecin-view2.component';


@NgModule({
  declarations: [
    MedecinViewComponent,
    MedecinFormsComponent,
    MedecinDetailComponent,
    ProfileMedecinComponent,
    DashboardMedecinComponent,
    RapportComponent,
    MedecinCalendrierComponent,
    FactureComponent,
    MedecinView2Component

  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    chartjsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    HttpClientModule,
    PerfectScrollbarModule,
    MatIconModule,
    //FullCalendarModule,
    MatDatepickerModule,
    ToastrModule.forRoot({}),
    MatToolbarModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    NgApexchartsModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSortModule,
    MatTabsModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatTooltipModule,
    MatRadioModule,
    DragDropModule,
    ComponentsModule,
    /*OwlDateTimeModule,
    OwlNativeDateTimeModule*/

  ], providers: [MedecinService, ToastrService,
    //{provide: OWL_DATE_TIME_LOCALE, useValue: 'fr'},

  ]
})
export class DoctorModule { }
