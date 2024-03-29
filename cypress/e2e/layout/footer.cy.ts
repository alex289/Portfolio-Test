describe('Footer component', () => {
  it('Should load page', () => {
    cy.visit('/en');
  });

  it('Should have a navbar', () => {
    cy.get('footer');

    cy.get('footer')
      .get('p')
      .contains('Powered by Next.js and TailwindCSS. Hosted on Vercel.');
  });

  it('Should have working links', () => {
    cy.get('[id="footer.about"]').should('be.visible');

    cy.get('[id="footer.home"]').should('be.visible');

    cy.get('[id="footer.projects"]').should('be.visible');

    cy.get('footer').get('a').contains('Guestbook').should('be.visible');
    cy.get('footer').get('a').contains('Blog').should('be.visible');

    cy.get('footer')
      .get('a')
      .contains('GitHub')
      .should('have.attr', 'href')
      .and('include', 'https://github.com/alex289');

    cy.get('footer')
      .get('a')
      .contains('My dotfiles')
      .should('have.attr', 'href')
      .and('include', 'https://github.com/alex289/dotfiles');

    cy.get('footer')
      .get('a')
      .contains('Source code')
      .should('have.attr', 'href')
      .and('include', 'https://github.com/alex289');

    cy.get('footer')
      .get('a')
      .contains('Contact')
      .should('have.attr', 'href')
      .and('include', 'mailto:me@alexanderkonietzko.com');
  });
});
