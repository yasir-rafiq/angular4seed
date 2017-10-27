import { Angular4seedPage } from './app.po';

describe('angular4seed App', function() {
  let page: Angular4seedPage;

  beforeEach(() => {
    page = new Angular4seedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
