import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { ManagerComponent } from './manager.component';
import { WorkerComponent } from './worker.component';

@NgModule({
  declarations: [
    ManagerComponent,
    WorkerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule
  ],
  bootstrap: [ManagerComponent]
})
export class AppModule { }
