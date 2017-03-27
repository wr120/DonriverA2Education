import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textForm: FormGroup;
  fragmentForm: FormGroup;
  textControl: AbstractControl;
  fragmentControl: AbstractControl;
  textValue: String;
  fragmentValue: string;
  occurences = 0;

  constructor(fb: FormBuilder) {
    this.textForm = fb.group({
      'textControl': ['', Validators.compose([Validators.required, this.textValidator])],
    });
    this.fragmentForm = fb.group({
      'fragmentControl': ['', Validators.required]
    });
    this.textControl = this.textForm.controls['textControl'];
    this.fragmentControl = this.fragmentForm.controls['fragmentControl'];

    this.textControl.valueChanges.subscribe(value => {
      this.textValue = value;
      this.checkTheOccurrences();
    });

    this.fragmentControl.valueChanges.subscribe(value => {
      this.fragmentValue = value;
      this.checkTheOccurrences();
    });
  }

  textValidator(control: FormControl): {[s: string]: boolean} {
    if ((control.value as String).includes('\\')) {
      return {invalidText: true};
    }
  }

  checkTheOccurrences(): void {
    if (this.textControl.hasError('required')) { return; }
    if (this.fragmentValue === '') {
      this.occurences = 0;
    } else {
      this.occurences = this.textValue.split(this.fragmentValue).length - 1;
    }
  }
}
