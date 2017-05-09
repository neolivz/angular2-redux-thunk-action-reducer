import { Component, ApplicationRef } from '@angular/core';

import { NgRedux } from '@angular-redux/store';
import { deleteEmployees, loadEmployees, searchEmployees } from '../actions';
import { RootState, EmployeeStore } from '../reducers';

import { Employee } from '../models';


@Component({
  selector: 'app-root',
  template:
  `<div>
      <app-search></app-search>
      <app-add></app-add>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Age</th>
            <th></th>
          </tr>
        </thead>
        <tr *ngFor="let em of employees">
          <td>{{em.firstName}}</td>
          <td>{{em.lastName}}</td>
          <td>{{em.department}}</td>
          <td>{{em.age}}</td>
          <td><button (click)="deleteEmployees(em)">Delete</button></td>
        </tr>
      </table>
    </div>`,
  styles: [],
})
export class AppComponent {
  employees: Employee[];
  search: string;
  subscription;

  constructor(
    private ngRedux: NgRedux<RootState>, private appRef: ApplicationRef) {
    this.subscription = ngRedux.select<EmployeeStore>('employees')
      .subscribe((employeeStore) => {
        this.employees = employeeStore.store;
        this.appRef.tick();
      });
    this.loadEmployees();
  }



  deleteEmployees(employee: Employee) {
    this.ngRedux.dispatch<any>(deleteEmployees(employee));
  }

  filter() {
    this.ngRedux.dispatch<any>(searchEmployees(this.search));
  }

  loadEmployees() {
    this.ngRedux.dispatch<any>(loadEmployees());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
