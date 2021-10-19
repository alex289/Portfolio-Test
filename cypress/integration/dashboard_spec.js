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

  it('Should have data', () => {
    cy.contains('No data').should('not.exist');

    cy.get('#status').should('exist');
  });

  it('Should switch language to de', () => {
    cy.get('option[selected]').contains('EN');

    cy.get('#switch-lang').select('DE');

    cy.get(
      'p[class="text-gray-500 dark:text-gray-400 text-sm mx-auto"]'
    ).contains(
      'Geschrieben mit Next.js und TailwindCss. Bereitgestellt auf Vercel.'
    );
  });
});
