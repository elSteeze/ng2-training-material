import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { LayerComponent } from './layers';
import { LayerOneComponent } from './layer-one.component';
import { LayerTwoComponent } from './layer-two.component';
import { LayerThreeComponent } from './layer-three.component';
import { SharedData } from './sharedData';

@NgModule({
  declarations: [
    LayerComponent,
    LayerOneComponent,
    LayerTwoComponent,
    LayerThreeComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  bootstrap: [LayerComponent],
  providers: [SharedData]
})
export class AppModule { }
