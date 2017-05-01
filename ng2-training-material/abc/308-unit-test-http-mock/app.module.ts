import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AbcPageComponent } from './abc-page.component';
import { SwService } from './sw.service';
import { ToCapsPipe, ContainsXPipe, CheckmarkPipe, FieldRangePipe } from './pipes';

@NgModule({
  declarations: [
    AbcPageComponent,
    ToCapsPipe,
    ContainsXPipe,
    CheckmarkPipe,
    FieldRangePipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    SwService
  ],
  bootstrap: [AbcPageComponent]
})
export class AppModule { }
