/* tslint:disable:no-unused-variable */
import { getTestBed, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { NgReduxTestingModule, MockNgRedux } from '@angular-redux/store/testing';




describe('AppComponent', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgReduxTestingModule
      ],
      declarations: [
        AppComponent,
        SearchComponent,
        AddComponent
      ],
    });
    TestBed.compileComponents();
    MockNgRedux.reset();

  });
  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it('should create the app', (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should not have a default search string`, (() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app.search).toBeUndefined();
  }));

});
