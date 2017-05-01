import { Component } from '@angular/core';

import { GreetingCalculator } from './greetingCalculator';

@Component({
  selector: 'abc-page',
  templateUrl: './greeter.html'
})
export class GreeterComponent {
  greeting: string;

  constructor(gc: GreetingCalculator) {
    this.greeting = gc.greeting();
  }
}
