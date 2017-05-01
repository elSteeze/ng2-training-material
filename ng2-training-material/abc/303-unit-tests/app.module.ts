import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AbcPageComponent } from './abc-page.component';
import { ScoreComponent } from './score/score.component';
import { HelloService } from './hello.service';

@NgModule({
  declarations: [
    AbcPageComponent,
    ScoreComponent
  ],
  imports: [BrowserModule],
  providers: [HelloService],
  bootstrap: [AbcPageComponent]
})
export class AppModule { }
