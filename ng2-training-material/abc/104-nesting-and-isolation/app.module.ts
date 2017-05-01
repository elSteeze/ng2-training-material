import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardSetComponent } from './card-set';
import { BlueCardComponent } from './blue-card';
import { YellowCardComponent } from "./yellow-card";

@NgModule({
  declarations: [
    CardSetComponent,
    BlueCardComponent,
    YellowCardComponent
  ],
  imports: [BrowserModule],
  bootstrap: [CardSetComponent]
})
export class AppModule { }
