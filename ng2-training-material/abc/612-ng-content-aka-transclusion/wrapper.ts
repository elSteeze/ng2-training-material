import {Component} from '@angular/core';

@Component({
  selector: 'content-wrapper',
  template: `
  <section class="card">
    <div class="card-content">
      <div class="card-title">I wrap content</div>
      <ng-content></ng-content>
    </div>
  </section>
  `
})
export class WrapperComponent {

}

@Component({
  selector: 'abc-page',
  template: `
    <content-wrapper>
      <p>
        This is a p tag. Its only job is to be transcluded into the wrapper directive.
      </p>
    </content-wrapper>
  `
})
export class AppComponent { }
