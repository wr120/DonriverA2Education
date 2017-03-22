import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageDimensions } from '../image-form-component/image-form-component.component';

@Component({
  selector: 'app-image-rotate-form',
  templateUrl: './image-rotate-form.component.html',
  styleUrls: ['./image-rotate-form.component.css']
})
export class ImageRotateFormComponent implements OnInit {
  rotateForm: FormGroup;
  @Input()
  imageDimensions: ImageDimensions;

   constructor(fb: FormBuilder) {

    this.rotateForm = fb.group({
      'rotateRight': [''],
      'rotateLeft': ['']

    });
  }

  ngOnInit() {
  }

}
