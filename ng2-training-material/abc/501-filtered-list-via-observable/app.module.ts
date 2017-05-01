import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeListComponent } from './employee-list/employee-list';
import { EmployeeDetailComponent } from './employee-detail-view/employee-detail-view';
import { EmployeeListTableViewComponent } from './employee-list-table-view/employee-list-table-view';
import { EmployeeLoader } from './employee-loader';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeListTableViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  bootstrap: [EmployeeListComponent],
  providers: [EmployeeLoader]
})
export class AppModule { }
