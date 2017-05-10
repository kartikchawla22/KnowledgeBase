import { KnowledgeBaseAngular2Page } from './app.po';

describe('knowledge-base-angular2 App', () => {
  let page: KnowledgeBaseAngular2Page;

  beforeEach(() => {
    page = new KnowledgeBaseAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
