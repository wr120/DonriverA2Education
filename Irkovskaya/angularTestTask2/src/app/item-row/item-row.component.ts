import { Videoitem } from '../video.item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-row',
  templateUrl: './item-row.component.html',
  styleUrls: ['./item-row.component.css']
})
export class ItemRowComponent implements OnInit {

  @Input()
  item: Videoitem;
  constructor() { }

  ngOnInit() {
  }

}
