import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DirectivesComponent } from './directives';
import { BlinkDirective } from './blink';
import { BounceDirective } from './bounce';
import { DragDirective } from './drag';

@NgModule({
  declarations: [
    DirectivesComponent,
    BlinkDirective,
    BounceDirective,
    DragDirective
  ],
  imports: [BrowserModule],
  bootstrap: [DirectivesComponent]
})
export class AppModule { }
