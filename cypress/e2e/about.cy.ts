describe('About page', () => {
  it('Should load page', () => {
    cy.visit('/en/about');
  });

  it('Should have a title', () => {
    cy.get('h1').contains('About').should('be.visible');
  });

  it('Should have Content', () => {
    cy.get('h1').contains('Links').should('be.visible');
    cy.get('h1').contains('Tools').should('be.visible');
    cy.get('h1').contains('Timeline').should('be.visible');
    cy.get('h1').contains('Headshots').should('be.visible');
  });
});
