import { FilterPage } from './app.po';

describe('filter App', () => {
  let page: FilterPage;

  beforeEach(() => {
    page = new FilterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
