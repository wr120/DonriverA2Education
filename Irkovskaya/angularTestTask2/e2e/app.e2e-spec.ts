import { AngularTestTask2Page } from './app.po';

describe('angular-test-task2 App', function() {
  let page: AngularTestTask2Page;

  beforeEach(() => {
    page = new AngularTestTask2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
