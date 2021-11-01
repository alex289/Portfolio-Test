describe('404 page', () => {
  it('should load page', () => {
    cy.visit('/404', { failOnStatusCode: false });
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
        cy.get('#dark-mode-toggle').trigger('mouseover').click();

        cy.get('html.light').should('exist');
      } else if (item.hasClass('light')) {
        cy.get('#dark-mode-toggle').trigger('mouseover').click();

        cy.get('html.dark').should('exist');
      }
    });
  });

  it('Should have 404 title', () => {
    cy.get('h1').contains('404');
  });

  it('Should switch language to de', () => {
    cy.get('option[selected]').contains('EN');

    // Comment out till Vercel fixed their issue with this

    // cy.get('#switch-lang').select('DE');

    // cy.get(
    //   'p[class="text-gray-500 dark:text-gray-400 text-sm mx-auto"]'
    // ).contains(
    //   'Geschrieben mit Next.js und TailwindCss. Bereitgestellt auf Vercel.'
    // );
  });

  it('Should get back', () => {
    // cy.get('a').contains('Zurück zur Startseite').click();
    // cy.url().should('eq', 'https://alexanderkonietzko.vercel.app/de');
  });
});
