import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipelRoutingModule } from './principel-routing.module';
import { PrincipelHomeComponent } from './principel-home/principel-home.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { TeacherHomeComponent } from './teacher-home/teacher-home.component';
import { PrincipelLoginComponent } from './principel-login/principel-login.component';

import { PrincipelSignupComponent } from './principel-signup/principel-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
console.log('principel...')

@NgModule({
  declarations: [
    PrincipelHomeComponent,
    StudentHomeComponent,
    TeacherHomeComponent,
    PrincipelLoginComponent,
   
    PrincipelSignupComponent
  ],
  imports: [
    CommonModule,
    PrincipelRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class PrincipelModule { }
