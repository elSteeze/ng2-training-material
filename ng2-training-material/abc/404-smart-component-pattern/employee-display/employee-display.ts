import { Component, Input } from '@angular/core';

import { IEmployee } from '../employee-loader';

@Component({
  selector: 'employee-display',
  moduleId: __moduleName,
  templateUrl: './employee-display.html'
})
export class EmployeeDisplayComponent {
  @Input() employee: IEmployee;
}
