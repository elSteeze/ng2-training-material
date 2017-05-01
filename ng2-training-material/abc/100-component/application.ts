import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // tells ng to run in browser
import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'abc-page',
  template: '<h1> Hello</h1>'
})
class FirstComponent { }

@NgModule({
  declarations: [FirstComponent],
  imports: [BrowserModule],
  bootstrap: [FirstComponent] // first component to start with
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
