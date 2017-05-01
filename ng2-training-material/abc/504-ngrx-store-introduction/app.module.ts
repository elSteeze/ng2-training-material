import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { ExampleComponent } from './example';
import { CounterDisplayComponent } from './counter-display';
import { appReducer } from './state';

@NgModule({
  declarations: [
    ExampleComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.provideStore(appReducer)
  ],
  bootstrap: [ExampleComponent]
})
export class AppModule { }
