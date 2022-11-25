import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatutDocumentComponent } from './statut-document.component';

const routes: Routes = [
  {path:'liste',component:StatutDocumentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatutDocumentRoutingModule { }
