import { CarList } from './CarList';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChevroletComponent } from './chevrolet/chevrolet.component';
import { FordComponent } from './ford/ford.component';
import { NissanComponent } from './nissan/nissan.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { CarsComponent } from './cars/cars.component';
import { CarItemComponent } from './car-item/car-item.component';
import { ModelListComponent } from './model-list/model-list.component';
import { CarInfoComponent } from './car-info/car-info.component';
import {routes as childChevroletRoutes} from './chevrolet/chevrolet.module';
import {routes as childFordRoutes} from './ford/ford.module';
import {routes as childNissanRoutes} from './nissan/nissan.module';
import {routes as childToyotaRoutes} from './toyota/toyota.module';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: CarsComponent},
    { path: 'chevrolet', component: ChevroletComponent, children: childChevroletRoutes},
    { path: 'ford', component: FordComponent, children: 
      [
          { path: '', redirectTo: 'main', pathMatch: 'full' },
          { path: 'main', component: CarInfoComponent},
          { path : ':model', component: CarInfoComponent}

      ]},
    { path: 'nissan', component: NissanComponent, children: childNissanRoutes},
    { path: 'toyota', component: ToyotaComponent, children: childToyotaRoutes}
];

@NgModule({
  declarations: [
    AppComponent,
    ChevroletComponent,
    FordComponent,
    NissanComponent,
    ToyotaComponent,
    CarsComponent,
    CarItemComponent,
    ModelListComponent,
    CarInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: APP_BASE_HREF, useValue: '/' },
    CarList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
