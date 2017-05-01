import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { SharedData } from './sharedData';

@Component({
  selector: 'layer-three',
  templateUrl: 'layer-three.component.html'
})
export class LayerThreeComponent implements OnInit, OnDestroy {
  unsharedValue: number = 0;
  myFormGroup: FormGroup;
  sub: Subscription;

  constructor(public shared: SharedData, private fb: FormBuilder) { }

  ngOnInit() {
    this.myFormGroup = this.fb.group({
      'theData': ['']
    });
    this.sub = this.myFormGroup.get('theData').valueChanges
      .subscribe(value => this.shared.userInput = value);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  incUnshared() {
    this.unsharedValue++;
  }
}
