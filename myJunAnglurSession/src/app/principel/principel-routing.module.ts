import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipelHomeComponent } from './principel-home/principel-home.component';
import { PrincipelSignupComponent } from './principel-signup/principel-signup.component';
import { PrincipelLoginComponent } from './principel-login/principel-login.component';

const routes: Routes = [
  {path:'priHome',component:PrincipelHomeComponent},
  {path: 'signup',component:PrincipelSignupComponent},
  {path:'login',component:PrincipelLoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipelRoutingModule { }
