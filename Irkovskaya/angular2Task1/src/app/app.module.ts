import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResourceFormComponent } from './resource-form/resource-form.component';
import { ResultFormComponent } from './result-form/result-form.component';
import { ResourceTableComponent } from './resource-table/resource-table.component';
import { ResourceTableTrComponent } from './resource-table-tr/resource-table-tr.component';
import { ResourceTableTdComponent } from './resource-table-td/resource-table-td.component';
import { ResultFormRowComponent } from './result-form-row/result-form-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourceFormComponent,
    ResultFormComponent,
    ResourceTableComponent,
    ResourceTableTrComponent,
    ResourceTableTdComponent,
    ResultFormRowComponent
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
