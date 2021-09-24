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
        cy.get(`button[aria-label="Toggle Dark Mode"]`)
          .trigger('mouseover')
          .click();

        cy.get('html.light').should('exist');
      } else if (item.hasClass('light')) {
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

  it('Should switch language to de', () => {
    cy.get('option[selected]').contains('EN');
    cy.get('h1').contains('Hey, I’m Alexander Konietzko');

    cy.get('select').select('DE');

    cy.get('h1').contains('Hey, ich bin Alexander Konietzko');
  });
});