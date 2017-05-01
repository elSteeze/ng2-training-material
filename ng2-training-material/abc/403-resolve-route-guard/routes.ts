import { RouterModule, Routes } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list';
import { EmployeeDetailComponent } from './employee-detail/employee-detail';
import { EmployeeRetriever } from './employee-retriever';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  {
    path: 'employee/:employeeId',
    component: EmployeeDetailComponent,
    resolve: { employee: EmployeeRetriever }
  }
];

export let APP_ROUTER_MODULE = RouterModule.forRoot(routes, { useHash: true });

// As of 2.0.0, this was a reasonable way to provide services needed for resolve,
// but best practices have yet to emerge.
APP_ROUTER_MODULE.providers.push(EmployeeRetriever);
