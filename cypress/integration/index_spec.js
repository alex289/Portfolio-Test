describe('Index page', () => {
  it('Should load page', () => {
    cy.visit('/');
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
        // Click twice to handle next-themes bug
        cy.get(`button[aria-label="Toggle Dark Mode"]`)
          .trigger('mouseover')
          .click();

        cy.get(`button[aria-label="Toggle Dark Mode"]`)
          .trigger('mouseover')
          .click();
        cy.get('html.light').should('exist');
      } else if (item.hasClass('light')) {
        // Click twice to handle next-themes bug
        cy.get(`button[aria-label="Toggle Dark Mode"]`)
          .trigger('mouseover')
          .click();

        cy.get(`button[aria-label="Toggle Dark Mode"]`)
          .trigger('mouseover')
          .click();
        cy.get('html.dark').should('exist');
      }
    });
  });

  it('Should have a profile image', () => {
    cy.get(`img[alt="Profile picture"]`).should('be.visible');
  });
});
