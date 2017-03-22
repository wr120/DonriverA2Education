import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-form-component',
  templateUrl: './image-form-component.component.html',
  styleUrls: ['./image-form-component.component.css']
})
export class ImageFormComponentComponent implements OnInit {
 imageDimensions: ImageDimensions;

  constructor() {
    this.imageDimensions = new ImageDimensions();
    this.imageDimensions.imageHeight = 150;
    this.imageDimensions.imageWidth = 200;
  }

  ngOnInit() {
  }

}

export class ImageDimensions {
  imageWidth: number;
  imageHeight: number;
  rotateDeg: number;


}
