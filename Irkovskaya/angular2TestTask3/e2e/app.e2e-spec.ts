import { Angular2TestTask3Page } from './app.po';

describe('angular2-test-task3 App', function() {
  let page: Angular2TestTask3Page;

  beforeEach(() => {
    page = new Angular2TestTask3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
