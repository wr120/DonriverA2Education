import { CarList } from '../CarList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.component.html',
  styleUrls: ['./toyota.component.css']
})
export class ToyotaComponent implements OnInit {

   models: Set<String>;
  constructor(public items: CarList) {
    this.models = new Set<String>();
    this.items.list.filter(car => car.vendor.match('Toyota')).forEach(item => this.models.add(item.model));
   }

  ngOnInit() {
  }

}
