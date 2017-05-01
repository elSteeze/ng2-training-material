import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AbcPageComponent } from './abc-page';
import { EmployeeListComponent } from './employee-list/employee-list';
import { EmployeeDetailComponent } from './employee-detail/employee-detail';
import { EmployeeDisplayComponent } from './employee-display/employee-display';
import { EmployeeLoader } from './employee-loader';
import { APP_ROUTER_MODULE } from './routes';

@NgModule({
  declarations: [
    AbcPageComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeDisplayComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTER_MODULE,
    HttpModule
  ],
  providers: [EmployeeLoader],
  bootstrap: [AbcPageComponent]
})
export class AppModule { }
