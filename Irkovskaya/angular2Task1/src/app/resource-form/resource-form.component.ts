import { EventTarget } from '@angular/platform-browser/src/facade/browser';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../car';
import { Cell } from '../cell';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resource-form',
  templateUrl: './resource-form.component.html',
  styleUrls: ['./resource-form.component.css']
})
export class ResourceFormComponent {

  @Input() carList: Car[];
  @Input() resourceForm: FormGroup;
  @Output() selectedRowEvent: EventEmitter<Car>;
  getFilteredCar() {
    const filteredCarList = new Array<Car>();
    this.carList.forEach(item => {
      if (item.visible) {
        filteredCarList.push(item);
      }
    });
    return filteredCarList;
  }
  constructor() {
    this.selectedRowEvent = new EventEmitter();
  }
  carWasSelected(car: Car) {
      this.selectedRowEvent.emit(car);
  }
}
