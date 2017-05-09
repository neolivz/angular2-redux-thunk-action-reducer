import { Component } from '@angular/core';

import { NgRedux } from '@angular-redux/store';
import { searchEmployees } from '../actions';
import { RootState } from '../reducers';




@Component({
  selector: 'app-search',
  template:
  `<div>
      <div>Search | Filter</div>
      <div> <input [(ngModel)]="search" (ngModelChange)=filter()></div>
    </div>`,
  styles: [],
})
export class SearchComponent {
  search: string;

  constructor(
    private ngRedux: NgRedux<RootState>) {
  }

  filter() {
    this.ngRedux.dispatch<any>(searchEmployees(this.search));
  }

}

