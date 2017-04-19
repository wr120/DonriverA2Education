import { CarList } from '../CarList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nissan',
  templateUrl: './nissan.component.html',
  styleUrls: ['./nissan.component.css']
})
export class NissanComponent implements OnInit {

   models: Set<String>;
  constructor(public items: CarList) {
    this.models = new Set<String>();
    this.items.list.filter(car => car.vendor.match('Nissan')).forEach(item => this.models.add(item.model));
   }

  ngOnInit() {
  }

}
