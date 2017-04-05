import { Videoitem } from '../video.item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input()
  itemsList: Videoitem[];
  constructor() { }

  ngOnInit() {
  }

}
