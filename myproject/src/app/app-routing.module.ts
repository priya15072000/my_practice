import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AddCircleComponent } from './add-circle/add-circle.component';
import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '' , component:LandingComponent},
  {path:'landing', component:LandingComponent},
  {path: 'home', component:HomeComponent},
  {path:'addCircle',component:AddCircleComponent},
 {path:'test',component:TestComponent},
  
  
//  { lazy loading syntax: 
  //path: 'item',  
//   loadChildren: () => import('./items/items.module').then(m => m.ItemModule)  }  

{ path: 'studentmodule', loadChildren:()=> import('./student/student.module').then(m=>m.StudentModule)},

{path: 'admin', loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},


{path:"**",component:PagenotfoundComponent}//wildcartrouting..
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
