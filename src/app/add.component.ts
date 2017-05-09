import { Component, ApplicationRef } from '@angular/core';

import { NgRedux } from '@angular-redux/store';
import { addEmployee } from '../actions';
import { RootState } from '../reducers';

import { Employee } from '../models';




@Component({
  selector: 'app-add',
  template:
  `<div>
      <div>
        First Name:<input [(ngModel)]="newEmp.firstName">
      </div>
      <div>
        Last Name:<input [(ngModel)]="newEmp.lastName">
      </div>
      <div>
        Age:<input [(ngModel)]="newEmp.age">
      </div>
      <div>
        Department:<input [(ngModel)]="newEmp.department">
      </div>
      <div>
        <div *ngIf="formError">
          Name and departments should not be blank and age should be atleast 18
        </div>
        <button (click)="addEmployee()">Save</button>
      </div>
    </div>`,
  styles: [],
})
export class AddComponent {
  formError: boolean = false;
  newEmp: Employee = { firstName: '', lastName: '', age: 0, department: '' };


  constructor(
    private ngRedux: NgRedux<RootState>, private appRef: ApplicationRef) {
  }


  addEmployee() {
    if (this.newEmp.firstName === '' ||
      this.newEmp.department === '' ||
      this.newEmp.lastName === '' ||
      this.newEmp.age < 17) {
      this.formError = true;
      this.appRef.tick();
      return;
    }
    this.formError = false;
    this.ngRedux.dispatch<any>(addEmployee(this.newEmp));
  }

}

