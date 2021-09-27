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

    cy.get('h3').contains('About');

    cy.get('h3').contains('Projects');

    cy.get('div[class="grid lg:grid-cols-4 md:grid-cols-2 gap-4 my-3 p-3"]')
      .its('length')
      .should('be.gte', 1);
  });

  it('External links should work', () => {
    cy.get('nav').get('a').contains('Projects').click();

    cy.get('a')
      .contains('Alex289')
      .should('have.attr', 'href')
      .and('include', 'https://github.com/Alex289/Alex289');

    cy.get('a')
      .contains('Portfolio')
      .should('have.attr', 'href')
      .and('include', 'https://github.com/Alex289/Portfolio');
  });
});
