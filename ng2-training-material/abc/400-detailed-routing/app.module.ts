import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PageComponent } from './page';
import { APP_ROUTER_MODULE, ROUTED_COMPONENTS } from './app.routes';

@NgModule({
  declarations: [
    PageComponent,
    ...ROUTED_COMPONENTS
  ],
  imports: [
    BrowserModule,
    APP_ROUTER_MODULE
  ],
  bootstrap: [PageComponent]
})
export class AppModule { }

// Example of hash route
// http://example.com/#/product/12

// Example of HTML5 route
// http://example.com/product/12

// base-href must be set either in the index.html, or via
// code; here is an older way to do this:
//   bind(APP_BASE_HREF).toValue(location.pathname)]);
// HTML5 routes can be demonstrated with live-server --entry-file=index.html
