import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-image',
  templateUrl: './item-image.component.html',
  styleUrls: ['./item-image.component.css']
})
export class ItemImageComponent implements OnInit {

  @Input()
  imageurl: string;
  constructor() { }

  ngOnInit() {
  }

}
