import { Car } from '../car';
import { Cell} from '../cell';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-result-form',
  templateUrl: './result-form.component.html',
  styleUrls: ['./result-form.component.css']
})
export class ResultFormComponent {

  @Input() resultForm: FormGroup;
  @Output() saveChanges: EventEmitter<Car>;
  constructor() {
    this.saveChanges = new EventEmitter();
  }

  getTitle(title: string) {
    return title;
  }
  onSubmit(value): boolean {
    if (this.resultForm.valid) {
      const properties = [new Cell(value['vendor'], true),
                          new Cell(value['model'], true),
                          new Cell(value['price'], true),
                          new Cell(value['mileage'], true),
                          new Cell(value['vin-code'], true),
                          new Cell(value['items-stock'], true),
                          new Cell(value['days-live'], true)];
      this.saveChanges.emit(new Car(-1, properties, true));
    }
    return false;
  }
}
