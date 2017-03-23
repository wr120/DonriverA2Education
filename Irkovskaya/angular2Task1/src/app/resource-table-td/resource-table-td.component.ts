import { FormGroup } from '@angular/forms';
import { Cell } from '../cell';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-table-td',
  templateUrl: './resource-table-td.component.html',
  styleUrls: ['./resource-table-td.component.css']
})
export class ResourceTableTdComponent {

  @Input() cell: Cell;
  @Input() rowIndex: number;
  @Input() columnIndex: number;

  constructor() { }

}
