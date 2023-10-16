describe('404 page', () => {
  it('should load page', () => {
    cy.visit('/en/404', { failOnStatusCode: false });
  });

  it('Should have a navbar', () => {
    cy.get('nav');
  });

  it('Should have a footer', () => {
    cy.get('footer');
  });

  it('Dark/Light mode should work', () => {
    cy.get('#dark-mode-toggle', { timeout: 10000 }).should('be.visible');
    cy.get('#dark-mode-toggle').click();
    cy.get('html').should('have.class', 'dark');
  });

  it('Should have Oops title', () => {
    cy.get('h1').contains('Oops');
  });

  it('Should switch language to de', () => {
    cy.get('#switch-lang').contains('DE').click();
    cy.get('#switch-lang').contains('EN');

    cy.get('#powered-by').contains(
      'Geschrieben mit Next.js und TailwindCSS. Bereitgestellt auf Vercel.',
    );
  });

  it('Should get back', () => {
    cy.get('a').contains('Zurück zur Startseite').click();
    cy.url().should('eq', Cypress.config('baseUrl') + '/de');
  });
});
