import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentIdentiteComponent } from './document-identite.component';

const routes: Routes = [
  {path:'liste',component:DocumentIdentiteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentIdentiteRoutingModule { }
