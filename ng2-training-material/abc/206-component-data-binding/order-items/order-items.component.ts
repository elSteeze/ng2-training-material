import { Component, Input } from '@angular/core';

import { IItem } from '../api-types';

@Component({
  selector: 'order-items',
  moduleId: __moduleName,
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent {
  @Input() items: IItem[];
}
