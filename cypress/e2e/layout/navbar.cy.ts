describe('Navbar component', () => {
  it('Should load page', () => {
    cy.visit('/');
  });

  it('Should have a navbar', () => {
    cy.get('nav');
  });

  it('Should have working links', () => {
    cy.get('#nav-about').should('be.visible');

    cy.get('#nav-home').should('be.visible');

    cy.get('#nav-projects').should('be.visible');

    cy.get('#nav-blog').should('be.visible');
  });

  it('Should not have mobile menu visible', () => {
    cy.get('#burger').should('exist');
  });

  it('Dark/Light mode should work', () => {
    cy.get('#dark-mode-toggle', { timeout: 10000 }).should('be.visible');
    cy.get('#dark-mode-toggle').click();
    cy.get('html').should('have.class', 'dark');
  });

  it('Should switch language to de', () => {
    cy.get('h2').contains('Software Engineer and Student at Netgo');

    cy.get('#switch-lang').contains('DE').click();
    cy.get('#switch-lang').contains('EN');

    cy.get('h2').contains('Software Entwickler und Student bei Netgo');
  });
});
