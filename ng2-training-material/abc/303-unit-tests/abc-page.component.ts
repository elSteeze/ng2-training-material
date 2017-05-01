import { Component } from '@angular/core';

import { HelloService } from './hello.service';

@Component({
  selector: 'abc-page',
  templateUrl: './abc-page.component.html'
})
export class AbcPageComponent {
  greeting: string;

  constructor(hello: HelloService) {
    this.greeting = hello.calculateHello('world');
  }

}
