import { Component } from '@angular/core';

@Component({
  selector: 'abc-page',
  templateUrl: './bindings.html'
})
export class BindingsComponent {
  version: string;
  // Implicit public, equivalent to
  // public version: string;
  // (public is the default in TypeScript.)
  // Angular.io style guide recommends implicit public.
  person: string;
  stringWithHtml: string;
  personObject: { mother: string; father: string; };  // creating class on the fly using js
  private x: string = 'Only available inside';  // private cannot be used in template or html

  constructor() {
    this.version = 'Other';
    this.person = 'everyone';
    this.stringWithHtml = `
      <button onClick="console.log('hello from old-school HTML/JS');">
        Press Me
      </button>
      <i>Hello from <b>HTML</b></i>
    `;  // javascript feature - back ticks are multi-line strings
    this.personObject = { mother: 'Jane', father: 'Bob' };
    this.x = 'Hello World';
  }

  calculate(): number {
    console.log('calculating');
    return 22 / 7;
  }
}
