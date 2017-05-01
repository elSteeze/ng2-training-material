import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

interface ILocationFormState {
  city: string;
  state: string;
}

@Component({
  selector: 'abc-page',
  templateUrl: './location.html'
})
export class LocationComponent {
  city: FormControl = new FormControl();
  state: FormControl = new FormControl();

  cityValue: string = '';
  stateValue: string = '';

  constructor() {

    const cityChanges: Observable<string> = this.city.valueChanges;

    cityChanges.subscribe(val => this.cityValue = val);

    const stateChanges: Observable<string> = this.state.valueChanges;

    stateChanges.subscribe(val => this.stateValue = val);

    // Demonstrative usage of map
    stateChanges
      .map(val => val.toUpperCase())
      .subscribe(upperVal => console.log(upperVal));
  }

}
