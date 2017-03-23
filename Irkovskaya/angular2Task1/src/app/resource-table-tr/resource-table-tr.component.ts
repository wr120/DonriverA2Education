import { FormGroup } from '@angular/forms';
import { Car } from '../car';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-table-tr',
  templateUrl: './resource-table-tr.component.html',
  styleUrls: ['./resource-table-tr.component.css']
})
export class ResourceTableTrComponent implements OnInit {

  @Input() item: Car;
  @Input() rowIndex: number;

  constructor() { }

  ngOnInit() {
  }

}
