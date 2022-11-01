describe('Index page', () => {
  it('Should load page', () => {
    cy.visit('/');
  });

  it('Should have a profile image', () => {
    cy.get(`img[alt="Alexander Konietzko"]`).should('be.visible');
  });

  it('Should have content', () => {
    cy.get('h1').contains('Alexander Konietzko');

    cy.get('h2').should('not.be.empty');

    cy.get('h3').contains('Featured Posts').should('be.visible');

    cy.get('h3').contains('Projects').should('be.visible');

    cy.get('h2').find('div').should('have.length', 9);
  });

  it('External links should work', () => {
    cy.get('#nav-projects').click();

    cy.get('#Portfolio').should('exist');
  });
});
