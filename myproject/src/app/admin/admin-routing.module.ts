import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Landing2Component } from './landing2/landing2.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';

const routes: Routes = [
  {path:'adminLanding2',component:Landing2Component},
  {path:'lan2',component:Landing2Component},
  {path:'adminLanding',component:AdminLandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }



