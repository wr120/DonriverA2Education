import { Observable } from 'rxjs/Rx';
import { CarList } from '../CarList';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../../Car';

@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit, OnDestroy {

  model: string;
  vendor: string;
  filteredList: Car[];
  subscriber1$;
  constructor(private route: ActivatedRoute, public list: CarList) {
    this.subscriber1$ = route.params.subscribe(params => { this.model = params['model']; this.filterValues(); });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriber1$.unsubscribe();
    console.log('destroy');
  }

  filterValues() {
    this.filteredList = new Array<Car>();
      if (this.model !== undefined) {
          this.filteredList = this.list.list.filter(item => item.model.match(this.model));
      }
  }
}
