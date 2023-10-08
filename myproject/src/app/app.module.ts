import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AddCircleComponent } from './add-circle/add-circle.component';
import { TestComponent } from './test/test.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

console.log('appmodule........');


@NgModule({
  declarations: [ //components,directives,pipes
    AppComponent,
    HomeComponent,
    LandingComponent,
    AddCircleComponent,
    TestComponent,
    PagenotfoundComponent
  ],
  imports: [ //modules..
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
