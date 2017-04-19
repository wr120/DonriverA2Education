import { CarList } from '../CarList';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  model: string;
  vendor: string;
  filteredList: Car[];
  constructor(private route: ActivatedRoute, public list: CarList) {
    route.params.subscribe(params => { this.model = params['model']; this.filterValues(); });
    route.parent.url.subscribe(url => { this.vendor = url.toString(); });
  }

  ngOnInit() {
  }

  filterValues() {
    this.filteredList = new Array<Car>();
      if (this.model !== undefined) {
          this.filteredList = this.list.list.filter(item => item.model.match(this.model));
      }
  }
}
