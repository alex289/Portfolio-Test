describe('Dashboard page', () => {
  it('should load page', () => {
    cy.visit('/dashboard');
  });

  it('Should have a navbar', () => {
    cy.get('nav');
  });

  it('Should have a footer', () => {
    cy.get('footer');
  });

  it('Dark/Light mode should work', () => {
    cy.get('html.dark').should('exist');

    // Click twice to handle next-themes bug
    cy.get(`button[aria-label="Toggle Dark Mode"]`)
      .trigger('mouseover')
      .click();

    cy.get(`button[aria-label="Toggle Dark Mode"]`)
      .trigger('mouseover')
      .click();

    cy.get('html.light').should('exist');
  });

  it('Should have data', () => {
    cy.contains('No data').should('not.exist');
  });
});
