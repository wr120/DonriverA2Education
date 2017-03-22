import { ImageDimensions } from '../image-form-component/image-form-component.component';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {
  myForm: FormGroup;
  @Input()
  imageDimensions: ImageDimensions;

  constructor(fb: FormBuilder) {

    this.myForm = fb.group({
      'imageHeight': ['',  Validators.compose([ Validators.pattern('\\d+'), this.evenValidator])] ,
      'imageWidth': ['', Validators.compose([ Validators.pattern('\\d+'), this.evenValidator])] ,
    });
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    this.imageDimensions.imageWidth = form.imageWidth;
    this.imageDimensions.imageHeight = form.imageHeight;
    console.log('Our form value is ', form);
  }

   evenValidator(control: FormControl): { [s: string]: boolean } {
  if (control.value % 2 !=0) {
    return { notEven: true };
   }
   }

}
