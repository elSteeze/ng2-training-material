import { Component } from '@angular/core';

@Component({
  selector: 'abc-page',
  templateUrl: './events.html'
})
export class EventsComponent {
  n: number = 0;

  increment() {
    this.n++;
  }

  over(x: MouseEvent): void {
    console.log('Over: ', x);
  }

  move(x: MouseEvent): void {
    this.n++;
    console.log('Move: ', x);
  }

  blur (event: FocusEvent) {
    console.log(event);
  }

  change (event: Event) {
    console.log(event);
  }
}
