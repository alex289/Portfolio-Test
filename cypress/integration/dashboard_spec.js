describe('Dashboard page', () => {
  it('should load page', () => {
    cy.visit('/dashboard', {
      auth: {
        username: 'alex289',
        password: '2002alexK#',
      },
    });
  });

  it('Should have a navbar', () => {
    cy.get('nav');
  });

  it('Should have a footer', () => {
    cy.get('footer');
  });

  it('Dark/Light mode should work', () => {
    cy.get('html').then((item) => {
      if (item.hasClass('dark')) {
        cy.get('#dark-mode-toggle').click().click();

        cy.get('html.light').should('exist');
      } else if (item.hasClass('light')) {
        cy.get('#dark-mode-toggle').click().click();

        cy.get('html.dark').should('exist');
      }
    });
  });

  it('Should have data', () => {
    cy.contains('No data').should('not.exist');

    cy.get('#status').should('exist');
  });

  it('Should switch language to de', () => {
    cy.get('#switch-lang').contains('DE').click();
    cy.get('#switch-lang').contains('EN');

    cy.get('#powered-by').contains(
      'Geschrieben mit Next.js und TailwindCss. Bereitgestellt auf Vercel.'
    );
  });
});
