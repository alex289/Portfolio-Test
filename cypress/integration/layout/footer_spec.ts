describe('Footer component', () => {
  it('Should load page', () => {
    cy.visit('/');
  });

  it('Should have a navbar', () => {
    cy.get('footer');

    cy.get('footer')
      .get('p')
      .contains('Powered by Next.js and TailwindCss. Hosted on Vercel.');
  });

  it('Should have working links', () => {
    cy.get('#footer-about').click();
    cy.get('#about').should('be.visible');

    cy.get('#footer-home').click();
    cy.get('h1').contains('Hey, I’m Alexander Konietzko').should('be.visible');

    cy.get('#footer-projects').click();
    cy.get('#projects').should('be.visible');

    cy.get('footer')
      .get('a')
      .contains('Portfolio')
      .should('have.attr', 'href')
      .and('include', 'https://github.com/Alex289');

    cy.get('footer')
      .get('a')
      .contains('My setup')
      .should('have.attr', 'href')
      .and('include', 'https://github.com/Alex289/My-config-setup');

    cy.get('footer')
      .get('a')
      .contains('Source code')
      .should('have.attr', 'href')
      .and('include', 'https://github.com/Alex289');

    cy.get('footer')
      .get('a')
      .contains('Contact')
      .should('have.attr', 'href')
      .and(
        'include',
        'https://github.com/Alex289/Alex289/issues/new?assignees=Alex289&labels=Contact&template=contact-template.md&title=%5BContact%5D+Your-title-here'
      );

    cy.get('footer')
      .get('a')
      .contains('Dashboard')
      .should('have.attr', 'href')
      .and('include', '/dashboard');
  });
});
