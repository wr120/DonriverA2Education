import { CarList } from '../CarList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.css']
})
export class FordComponent implements OnInit {

   models: Set<String>;
  constructor(public items: CarList) {
    this.models = new Set<String>();
    this.items.list.filter(car => car.vendor.match('Ford')).forEach(item => this.models.add(item.model));
   }

  ngOnInit() {
  }

}
