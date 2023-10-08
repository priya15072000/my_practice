import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { Landing2Component } from '../admin/landing2/landing2.component';

const routes: Routes = [
  {path:'studentHome',component:StudentComponent},
  {path:'landing2',component:Landing2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
