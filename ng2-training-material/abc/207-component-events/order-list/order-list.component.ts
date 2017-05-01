import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IOrder } from '../api-types';

@Component({
  selector: 'order-list',
  moduleId: __moduleName,
  templateUrl: './order-list.component.html'
})
export class OrderListComponent {
  @Input() orders: IOrder[];

  @Output() selectOrder = new EventEmitter<IOrder>();

  // -------- external API above, internal implementation below

  select(order: IOrder) {
    this.selectOrder.emit(order);
  }
}
