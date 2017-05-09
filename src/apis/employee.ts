import * as localforage from 'localforage';

import { EMPLOYEES } from '../constants/api';

import { Employee } from '../models';


const stringExists = (inString: string, searchString: string): boolean => {
  const reg = new RegExp(
    `.*${searchString.toUpperCase().split('').reduce((first, second) => first + '.*' + second)}.*`
  );
  return reg.test(inString.toUpperCase());
}

export const addEmployee = async (employee: Employee): Promise<Employee[]> => {
  const employees: Employee[] =
    await localforage.getItem(EMPLOYEES) as Employee[] || [];
  const newEmployees = [...employees, employee]
  await localforage.setItem(EMPLOYEES, newEmployees);
  return newEmployees;
}



export const searchEmployees = async (field: string): Promise<Employee[]> => {
  const employees: Employee[] =
    await localforage.getItem(EMPLOYEES) as Employee[] || [];
  const newEmployees = employees.filter(
    (emp) => {
      return field === '' || stringExists(emp.department, field) ||
        stringExists(`${emp.firstName} ${emp.lastName}`, field)
    }
  )
  return newEmployees;
}
export const deleteEmployees = async (employee: Employee): Promise<Employee[]> => {
  const employees: Employee[] =
    await localforage.getItem(EMPLOYEES) as Employee[] || [];
  const newEmployees = employees.filter(
    (emp) => {
      return emp.age !== employee.age ||
        emp.department !== employee.department ||
        emp.firstName !== employee.firstName ||
        emp.lastName !== employee.lastName;
    }
  );
  await localforage.setItem(EMPLOYEES, newEmployees);
  return newEmployees;
};

export const getEmployees = async (): Promise<Employee[]> => {
  return await localforage.getItem(EMPLOYEES) as Employee[] || [];
};
