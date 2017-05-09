import { AngularEmployeesPage } from './app.po';

describe('angular-employees App', () => {
  let page: AngularEmployeesPage;

  beforeEach(() => {
    page = new AngularEmployeesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
