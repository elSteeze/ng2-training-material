import { Component } from '@angular/core';

import { IOrder, fakeApiOrderData } from '../api-types';

@Component({
  selector: 'order-manager',
  moduleId: __moduleName,
  templateUrl: './order-manager.component.html'
})
export class OrderManagerComponent {
  orderList: IOrder[];
  selectedOrder: IOrder;

  constructor() {
    this.orderList = fakeApiOrderData;
  }

  setOrder(order: IOrder) {
    this.selectedOrder = order;
  }
}
