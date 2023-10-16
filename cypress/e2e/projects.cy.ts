describe('Projects page', () => {
  it('Should load page', () => {
    cy.visit('/en/projects');
  });

  it('Should have a title', () => {
    cy.get('h1').contains('Projects').should('be.visible');
  });
});
