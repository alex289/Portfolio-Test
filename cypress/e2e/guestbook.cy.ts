describe('Guestbook page', () => {
  it('Should load page', () => {
    cy.visit('/en/guestbook');
  });

  it('Should have a title', () => {
    cy.get('h1').contains('Guestbook').should('be.visible');
  });

  it('Should have login button', () => {
    cy.get('button').contains('Sign in with GitHub').should('be.visible');
    cy.get('button').contains('Sign in with Google').should('be.visible');
  });
});
