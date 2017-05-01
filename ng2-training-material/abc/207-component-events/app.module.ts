import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AbcPageComponent } from './abc-page.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderHeaderComponent } from './order-header/order-header.component';
import { OrderItemsComponent } from './order-items/order-items.component';

@NgModule({
  declarations: [
    AbcPageComponent,
    OrderManagerComponent,
    OrderListComponent,
    OrderDetailsComponent,
    OrderHeaderComponent,
    OrderItemsComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AbcPageComponent]
})
export class AppModule { }
