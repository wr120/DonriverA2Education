import { Angular2Forms2Page } from './app.po';

describe('angular2-forms2 App', () => {
  let page: Angular2Forms2Page;

  beforeEach(() => {
    page = new Angular2Forms2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
