import { Component } from '@angular/core';

@Component({
    selector: 'yellow-card',
    template: `
    <div class="simple-card yellow white-text">
      <h4>I am a yellow card ({{x}})</h4>
    </div>
  `
})
export class YellowCardComponent {
    x = Math.round(Math.random() * 10000);
}
