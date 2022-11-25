import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgoraComponent } from './agora.component';

const routes: Routes = [
  {path:'listes',component:AgoraComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgoraRoutingModule { }
