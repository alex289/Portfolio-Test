describe('Navbar component', () => {
  it('Should load page', () => {
    cy.visit('/');
  });

  it('Should have a navbar', () => {
    cy.get('nav');
  });

  it('Should have working links', () => {
    cy.get('#nav-about').click();
    cy.get('h3').contains('About').should('be.visible');

    cy.get('#nav-home').click();
    cy.get('h1').contains('Hey, I’m Alexander Konietzko').should('be.visible');

    cy.get('#nav-projects').click();
    cy.get('h3').contains('Projects').should('be.visible');
  });

  it('Should not have mobile menu visible', () => {
    cy.get('#burger').should('not.visible');
    cy.get('#mobile-nav-home').should('not.visible');
    cy.get('#mobile-nav-about').should('not.visible');
    cy.get('#mobile-nav-projects').should('not.visible');
  });

  it('Dark/Light mode should work', () => {
    cy.get('#dark-mode-toggle').click().click();
    // cy.get('html').should('have.class', 'light');
  });

  it('Should switch language to de', () => {
    cy.get('h1').contains('Hey, I’m Alexander Konietzko');

    cy.get('#switch-lang').contains('DE').click();
    cy.get('#switch-lang').contains('EN');

    cy.get('h1').contains('Hey, ich bin Alexander Konietzko');
  });
});
