/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';




describe('AddComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgReduxTestingModule
      ],
      declarations: [
        AddComponent,
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should not have an errod by default`, async(() => {
    const fixture = TestBed.createComponent(AddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.formError).toBeFalsy();
  }));

  it(`should not have a default search string`, async(() => {
    const fixture = TestBed.createComponent(AddComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.newEmp).toEqual({ firstName: '', lastName: '', age: 0, department: '' });
  }));

});
