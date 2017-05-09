import { AsyncActiveStore, reducerActionGroupFactory, initialActiveState } from 'redux-thunk-action-reducer';

import { handleActions } from 'redux-actions';
import * as ActionConstants from '../../constants/actions';
import { Employee } from '../../models';

export type EmployeeStore = AsyncActiveStore<Employee[]>;

const commonEmpReducer = reducerActionGroupFactory<Employee>();

export const employeeReducer = handleActions<EmployeeStore, Employee[]>({
  [ActionConstants.ADD_EMPLOYEE]: commonEmpReducer,
  [ActionConstants.DELETE_EMPLOYEE]: commonEmpReducer,
  [ActionConstants.LOAD_EMPLOYEES]: commonEmpReducer,
  [ActionConstants.SEARCH_EMPLOYEES]: commonEmpReducer,
}, initialActiveState);

export default employeeReducer;
