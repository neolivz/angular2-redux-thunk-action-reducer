import { employeeReducer, EmployeeStore } from './employee';
import { AsyncAction } from 'redux-thunk-action-reducer'
import { ADD_EMPLOYEE } from '../../constants/actions';
import { Employee } from '../../models';


describe('Add Employee', function () {
  beforeEach(async (done) => {
    done();
  });

  it('Add Employee', function (done) {
    const employee: Employee = { age: 20, department: 'Test', firstName: 'Test', lastName: 'Tst' }
    const action: AsyncAction<ADD_EMPLOYEE, undefined, Employee[]> = {
      type: ADD_EMPLOYEE, status: 'SUCCESS', request: undefined, response: [
        employee
      ]
    }
    const expectedOutput: EmployeeStore = {
      failure: false,
      store: [employee],
      working: false,
      open: false,
    }
    expect(employeeReducer(undefined, action)).toEqual(expectedOutput)
    done();
  });

});

