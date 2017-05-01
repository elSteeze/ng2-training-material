import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list';
import { EmployeeDetailComponent } from './employee-detail/employee-detail';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/:employeeId', component: EmployeeDetailComponent }
];

export const APP_ROUTER_MODULE = RouterModule.forRoot(routes, { useHash: true });
