import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { SwService } from './sw.service';

@Component({
  selector: 'abc-page',
  templateUrl: './abc-page.component.html'
})
export class AbcPageComponent {
  someNumber: number = 12;
  team: Observable<any[]>;

  constructor(sw: SwService) {
    this.team = sw.getList();
  }
}
