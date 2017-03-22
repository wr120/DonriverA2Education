import { FormsTaskPage } from './app.po';

describe('forms-task App', () => {
  let page: FormsTaskPage;

  beforeEach(() => {
    page = new FormsTaskPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
