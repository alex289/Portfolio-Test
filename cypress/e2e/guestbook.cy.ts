describe('Guestbook page', () => {
  it('Should load page', () => {
    cy.visit('/guestbook');
  });

  it('Should have a title', () => {
    cy.get('h1').contains('Guestbook').should('be.visible');
  });

  it('Should have login button', () => {
    cy.get('button').contains('Login').should('be.visible');
  });
});
