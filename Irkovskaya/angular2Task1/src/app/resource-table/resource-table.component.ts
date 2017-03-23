import { FormGroup } from '@angular/forms';
import { Cell } from '../cell';

import { Car } from 'app/car';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.css']
})
export class ResourceTableComponent{

  @Input() carList: Car[];
  @Output() onCarSelected: EventEmitter<Car>;

  constructor() {
    this.onCarSelected = new EventEmitter();
  }

    clicked(position: number): void {
      if (position > 0) {
        this.carList.forEach(function(car){ car.selected = false; });
        this.carList[position].selected = true;
        this.onCarSelected.emit(this.carList[position]);
      }
    }
}
