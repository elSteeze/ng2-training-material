import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

import { EmployeeLoader, IEmployee } from './employee-loader';

@Injectable()
export class EmployeeRetriever implements Resolve<IEmployee> {

  constructor(private loader: EmployeeLoader) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log('started retrieving employee');
    return this.loader.getDetails(route.params['employeeId'])
      .delay(3000)  // Simulate backend latency
      .do(x => console.log('employee information arrived'));
  }
}
