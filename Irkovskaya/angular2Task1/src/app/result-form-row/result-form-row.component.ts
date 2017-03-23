import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-form-row',
  templateUrl: './result-form-row.component.html',
  styleUrls: ['./result-form-row.component.css']
})
export class ResultFormRowComponent implements OnInit {

  @Input() title: string;
  @Input() control: any;
  constructor() { }

  ngOnInit() {
  }

}
