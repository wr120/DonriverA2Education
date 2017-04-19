import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.css']
})
export class ModelListComponent implements OnInit {

  @Input()
  models: Set<String>;
  @Input()
  vendor: string;
  constructor() { }

  ngOnInit() {
  }

}
