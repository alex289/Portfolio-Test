describe('Index page', () => {
  it('Should load page', () => {
    cy.visit('/');
  });

  it('Should have a profile image', () => {
    cy.get(`img[alt="Profile picture"]`).should('be.visible');
  });

  it('Should have content', () => {
    cy.get('h1').contains('Hey, I’m Alexander Konietzko');

    cy.get('h2').should('not.be.empty');

    cy.get('#about').should('be.visible');

    cy.get('#projects');

    cy.get('a').contains('Portfolio');
  });

  it('External links should work', () => {
    cy.get('#nav-projects').click();

    cy.get('p').contains('Portfolio');
  });
});
