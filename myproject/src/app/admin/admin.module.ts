import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { Landing2Component } from './landing2/landing2.component';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
console.log("andim module.ts.......");


@NgModule({
  declarations: [
    Landing2Component,
    AdminLandingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
