import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'abc-page',
  templateUrl: './singleControl.html'
})
export class SingleControlComponent {
  myFormControl: FormControl;
  outputValue: string;

  constructor() {
    this.myFormControl = new FormControl('', Validators.required);
  }

  setValue() {
    this.myFormControl.setValue('Set from code');
  }

  useValue() {
    this.outputValue = 'testing 123 - ' + this.myFormControl.value;
  }
}
