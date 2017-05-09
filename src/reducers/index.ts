import { combineReducers } from 'redux';

import { employeeReducer as employees, EmployeeStore } from './Employee';


export interface RootState {
  employees: EmployeeStore;
}

export {
  EmployeeStore,
};

export default combineReducers<RootState>({
  employees
});
