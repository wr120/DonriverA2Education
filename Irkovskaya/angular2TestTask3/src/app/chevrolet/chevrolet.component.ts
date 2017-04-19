import { CarList } from '../CarList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chevrolet',
  templateUrl: './chevrolet.component.html',
  styleUrls: ['./chevrolet.component.css']
})
export class ChevroletComponent implements OnInit {

  models: Set<String>;
  constructor(public items: CarList) {
    this.models = new Set<String>();
    this.items.list.filter(car => car.vendor.match('Chevrolet')).forEach(item => this.models.add(item.model));
   }

  ngOnInit() {
  }

}
