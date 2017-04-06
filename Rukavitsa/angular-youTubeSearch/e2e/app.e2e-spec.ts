import { AngularYouTubeSearchPage } from './app.po';

describe('angular-you-tube-search App', () => {
  let page: AngularYouTubeSearchPage;

  beforeEach(() => {
    page = new AngularYouTubeSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
