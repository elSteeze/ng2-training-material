import { Component } from '@angular/core';

@Component({
  selector: 'blue-card',
  template: `
    <div class="simple-card blue white-text">
      <h4>I am a blue card ({{x}})</h4>
      <yellow-card></yellow-card>
    </div>
  `
})
export class BlueCardComponent {
  x = Math.round(Math.random() * 10000);
}
