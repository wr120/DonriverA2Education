import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInfoComponent } from '../car-info/car-info.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: CarInfoComponent},
    { path : ':model', component: CarInfoComponent}

]

@NgModule({
  imports: [
    CommonModule,
    CarInfoComponent,
  ],
  declarations: []
})
export class FordModule { }
