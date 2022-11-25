import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArretMaladieComponent } from './arret-maladie.component';

const routes: Routes = [
  {path:'liste',component:ArretMaladieComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArretMaladieRoutingModule { }
