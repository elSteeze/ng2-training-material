import { Component, Input } from '@angular/core';

import { IEmployee } from '../employee';

@Component({
  selector: 'employee-detail-view',
  moduleId: __moduleName,
  templateUrl: './employee-detail-view.html'
})
export class EmployeeDetailComponent {
  @Input() employee: IEmployee;
}
