import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomformsComponent } from './customforms/customforms.component';
import { ImageFormComponentComponent } from './image-form-component/image-form-component.component';
import { ImageFormComponent } from './image-form/image-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageRotateFormComponent } from './image-rotate-form/image-rotate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomformsComponent    ,
    ImageFormComponentComponent,
    ImageFormComponent,
    ImageRotateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
