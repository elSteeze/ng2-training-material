import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageComponent } from './page';
import { APP_ROUTER_MODULE } from './app.routes';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTER_MODULE
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }
