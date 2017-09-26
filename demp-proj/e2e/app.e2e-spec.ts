import { DempProjPage } from './app.po';

describe('demp-proj App', () => {
  let page: DempProjPage;

  beforeEach(() => {
    page = new DempProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
