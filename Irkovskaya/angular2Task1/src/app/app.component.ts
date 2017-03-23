import { CustomVilidators } from './customvalidators';
import { Cell } from './cell';
import { Car } from './car';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  carList: Car[];
  selectedCar: Car;
  headerList: Cell[];
  resourceForm: FormGroup;
  resultForm: FormGroup;
  isPopupOpened: boolean;

  constructor(fb: FormBuilder) {
    this.populateForms(fb);
    this.populateBody();
    this.isPopupOpened = false;
  }

  populateForms(fb: FormBuilder) {
    this.resourceForm = fb.group({'vendor':  [''],
                                  'model': [''],
                                  'price': [''],
                                  'mileage':  [''],
                                  'vin-code': [''],
                                  'items-stock': [''],
                                  'days-live': ['']});
    this.resourceForm.valueChanges.subscribe(
      (data) => {
        this.filterCars();
    });
    this.resultForm = fb.group({'vendor':  ['', Validators.required],
                                'model': ['', Validators.required],
                                'price': ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.maxLength(7)])],
                                'mileage': ['', Validators.required],
                                'vin-code': ['', Validators.compose([Validators.required, Validators.maxLength(17)])],
                                'items-stock': ['', Validators.required],
                                'days-live': ['', Validators.required]});
  }
  filterCars() {
    const filterValues: string[] = [];
    this.carList.forEach(item => {
      if (filterValues == null || filterValues.length === 0) {
        item.properties.forEach(property => {
          filterValues.push(property.filter._value.toString());
        });
      } else {
        let index = 0;
        let notCompatible = false;
        item.properties.forEach(property => {
          if (!String(property.value).startsWith(filterValues[index] == null ? '' : filterValues[index])) {
            notCompatible = true;
          }
          index++;
        });
        if (notCompatible) {
          item.visible = false;
        } else {
          item.visible = true;
        }
      }
    });
  }
  populateBody() {
    this.carList = new Array<Car>();
    this.populateHeader();
    this.carList.push(new Car(0, this.headerList, false));

    this.addCarItem(1, 'Chevrolet', 'Malibu', 5);
    this.addCarItem(6, 'Chevrolet', 'Malibu', 8);
    this.addCarItem(14, 'Chevrolet', 'Tahoe', 6);

    this.addCarItem(20, 'Ford', 'Taurus', 12);
    this.addCarItem(32, 'Ford', 'Explorer', 11);

    this.addCarItem(41, 'Nissan', 'Maxima', 9);
    this.addCarItem(50, 'Nissan', 'Frontier', 6);

    this.addCarItem(56, 'Toyota', '4-Runner', 7);
    this.addCarItem(63, 'Toyota', 'Camry', 15);
    this.addCarItem(76, 'Toyota', 'Avalon', 13);

    const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 1; i < this.carList.length; i++) {
      this.carList[i].addProperty(new Cell(Math.round(Math.random() * 55000 + 15000), true));
      this.carList[i].addProperty(new Cell((Math.random() * 80000 + 5000).toFixed(1), true));
      let text = Array(17).join().split(',').map(
        function() { return s.charAt(Math.floor(Math.random() * s.length)); }
      ).join('');
      this.carList[i].addProperty(new Cell(text, true));
      text = Array(7).join().split(',').map(
        function() { return s.charAt(Math.floor(Math.random() * s.length)); }
      ).join('');
      this.carList[i].addProperty(new Cell(text, true));
      this.carList[i].addProperty(new Cell(Math.round(Math.random() * 90 + 1), true));
    }
  }
  populateHeader() {
    this.headerList = new Array<Cell>();
    this.headerList.push(new Cell('Vendor', true).addFilter(this.resourceForm.controls['vendor']));
    this.headerList.push(new Cell('Model', true).addFilter(this.resourceForm.controls['model']));
    this.headerList.push(new Cell('Price', true).addFilter(this.resourceForm.controls['price']));
    this.headerList.push(new Cell('Mileage', true).addFilter(this.resourceForm.controls['mileage']));
    this.headerList.push(new Cell('VIN Code', true).addFilter(this.resourceForm.controls['vin-code']));
    this.headerList.push(new Cell('Items Stock', true).addFilter(this.resourceForm.controls['items-stock']));
    this.headerList.push(new Cell('Days Live', true).addFilter(this.resourceForm.controls['days-live']));
  }
  addCarItem(id: number, vendor: string, model: string, count: number) {
    for (let i = 0; i < count; i++) {
      const car = new Car(id + i, new Array<Cell>(), false);
      car.addProperty(new Cell(vendor, true)).addProperty(new Cell(model, true));
      this.carList.push(car);
    }
  }
  populateProperties(car: Car) {
      this.selectedCar = car;
      this.resultForm.get('vendor').setValue(this.selectedCar.properties[0].value);
      this.resultForm.get('model').setValue(this.selectedCar.properties[1].value);
      this.resultForm.get('price').setValue(this.selectedCar.properties[2].value);
      this.resultForm.get('mileage').setValue(this.selectedCar.properties[3].value);
      this.resultForm.get('vin-code').setValue(this.selectedCar.properties[4].value);
      this.resultForm.get('items-stock').setValue(this.selectedCar.properties[5].value);
      this.resultForm.get('days-live').setValue(this.selectedCar.properties[6].value);
      this.isPopupOpened = true;
  }
  saveChangeToTable(car: Car) {
    this.carList.forEach(item => {
      if (item.id == this.selectedCar.id) {
        item.properties = car.properties;
      };
    });
    this.isPopupOpened = false;
    console.log(car);
  }

  closePopUp() {
    this.isPopupOpened = false;
  }
}

