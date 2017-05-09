import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { AppComponent } from './app.component';
import { SearchComponent } from './search.component';
import { AddComponent } from './add.component';

import rootReducer from '../reducers';
import { RootState } from '../reducers';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<RootState>) {
    ngRedux.configureStore(
      rootReducer, undefined, [logger, thunk]);
  }
}
