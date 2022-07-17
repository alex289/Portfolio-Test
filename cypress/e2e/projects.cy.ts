describe('Projects page', () => {
  it('Should load page', () => {
    cy.visit('/projects');
  });

  it('Should have a title', () => {
    cy.get('h1').contains('Projects').should('be.visible');
  });
});
