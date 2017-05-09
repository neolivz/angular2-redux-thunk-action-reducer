
import { createAsyncAction } from 'redux-thunk-action-reducer';
import {Employee} from '../../models';


import {
    addEmployee as addEmployeeAPI,
    getEmployees as getEmployeesAPI,
    searchEmployees as searchEmployeesAPI,
    deleteEmployees as deleteEmployeesAPI
} from '../../apis';
import { ADD_EMPLOYEE, LOAD_EMPLOYEES, SEARCH_EMPLOYEES, DELETE_EMPLOYEE } from '../../constants/actions'



export const addEmployee = createAsyncAction<ADD_EMPLOYEE, Employee, Employee[]>(ADD_EMPLOYEE, addEmployeeAPI);

export const loadEmployees = createAsyncAction<LOAD_EMPLOYEES, undefined, Employee[]>(LOAD_EMPLOYEES, getEmployeesAPI);

export const deleteEmployees = createAsyncAction<DELETE_EMPLOYEE, Employee, Employee[]>(DELETE_EMPLOYEE, deleteEmployeesAPI);

export const searchEmployees = createAsyncAction<SEARCH_EMPLOYEES, string, Employee[]>(SEARCH_EMPLOYEES, searchEmployeesAPI);

