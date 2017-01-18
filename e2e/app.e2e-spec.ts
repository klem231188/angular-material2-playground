import {LesFermiersDuNetPage} from "./app.po";

describe('les-fermiers-du-net App', function() {
  let page: LesFermiersDuNetPage;

  beforeEach(() => {
    page = new LesFermiersDuNetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
