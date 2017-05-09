import { addEmployee, deleteEmployees, getEmployees, searchEmployees } from './employee';
import { EMPLOYEES } from '../constants/api';
import { Employee } from '../models';


import * as localforage from 'localforage';


describe('Add Employee Test', function () {
  const emp: Employee = {
    age: 18,
    department: 'Any',
    firstName: 'Any',
    lastName: 'Any'
  }
  beforeEach(async (done) => {
    await localforage.removeItem(EMPLOYEES);
    done();
  });

  it('When add is successful', function (done) {
    try {
      addEmployee(emp).then(async () => {
        const emps = await localforage.getItem(EMPLOYEES) as Employee[];
        expect(emps).toEqual([emp]);
        done();
      });
    } catch (e) {
      done();
    }
  });



});
describe('Search Employee Test', function () {

  beforeEach(async (done) => {
    await localforage.removeItem(EMPLOYEES);
    const emp: Employee = {
      age: 20,
      department: 'Any',
      firstName: 'Any',
      lastName: 'Any'
    }
    await addEmployee(emp);
    emp.department = emp.firstName = emp.lastName = 'Any1';
    await addEmployee(emp);
    emp.department = emp.firstName = emp.lastName = 'Some1';
    await addEmployee(emp);
    done();
  });

  it('When search is successful with Any', function (done) {
    searchEmployees('Any').then(async (emps) => {
      expect(emps.length).toBe(2);
      done();
    });
  });

  it('When search is successful with 1', function (done) {
    searchEmployees('1').then(async (emps) => {
      expect(emps.length).toBe(2);
      done();
    });
  });

  it('When search is successful with some', function (done) {
    searchEmployees('Some').then(async (emps) => {
      expect(emps.length).toBe(1);
      done();
    });
  });

});
describe('Get Employee Test', function () {

  beforeEach(async (done) => {
    await localforage.removeItem(EMPLOYEES);
    const emp: Employee = {
      age: 18,
      department: 'Any',
      firstName: 'Any',
      lastName: 'Any'
    }
    await addEmployee(emp);
    emp.department = emp.firstName = emp.lastName = 'AnyAny1';
    await addEmployee(emp);
    emp.department = emp.firstName = emp.lastName = 'Some1';
    await addEmployee(emp);
    const a = await getEmployees();
    done();
  });

  it('When search is successful', function (done) {
    getEmployees().then(async (emps) => {
      expect(emps.length).toBe(3);
      done();
    });

  });

});

describe('Delete Employee Test', function () {
  const emp: Employee = {
    age: 18,
    department: 'Any',
    firstName: 'Any',
    lastName: 'Any'
  }
  beforeEach(async (done) => {
    await localforage.removeItem(EMPLOYEES);

    await addEmployee(emp);
    done();
  });

  it('When get is successful', function (done) {


    deleteEmployees(emp).then(async () => {
      const emps = await localforage.getItem(EMPLOYEES) as Employee[];
      expect(emps.length).toBe(0);
      done();
    });
  });

});
