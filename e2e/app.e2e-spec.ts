import { WwwLittlepairingsComPage } from './app.po';

describe('www-littlepairings-com App', function() {
  let page: WwwLittlepairingsComPage;

  beforeEach(() => {
    page = new WwwLittlepairingsComPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
