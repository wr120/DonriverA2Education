import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  showCar(type: string): void {
    const calcType: string = '/' + type.toLowerCase();
    this.router.navigate([calcType]);
  }
}
