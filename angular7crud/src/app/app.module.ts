import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';   //Importing Form-LoadingPattern
import { ReactiveFormsModule } from '@angular/forms';         //Importing Form-Validation
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from './business.service';

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    SlimLoadingBarModule,      //Form-LoadingPattern
    ReactiveFormsModule,       //Form-Validation
    HttpClientModule          
    ], 
  providers: [ BusinessService ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
