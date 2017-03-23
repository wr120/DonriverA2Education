import { AngularTestTask1Page } from './app.po';

describe('angular-test-task1 App', function() {
  let page: AngularTestTask1Page;

  beforeEach(() => {
    page = new AngularTestTask1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
