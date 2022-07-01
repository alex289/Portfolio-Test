describe('Blog page', () => {
  it('Should load page', () => {
    cy.visit('/blog');
  });

  it('Should have a title', () => {
    cy.get('h1').contains('Blog').should('be.visible');
    cy.get('h2').contains('All Posts').should('be.visible');
  });

  it('Should have working links', () => {
    cy.get('h3').first().click({ force: true });
    expect(cy.url()).to.not.equal('https://alexanderkonietzko.vercel.app/blog');
  });
});
