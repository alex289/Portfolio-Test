describe('Mobile view', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
    cy.visit('/');
  });

  it('Should have a navbar', () => {
    cy.get('nav');
  });

  it('Should not have normal navbar visible', () => {
    cy.get('#nav-home').should('not.visible');
    cy.get('#nav-about').should('not.visible');
    cy.get('#nav-projects').should('not.visible');
  });

  it('Should have burger menu', () => {
    cy.get('#burger').should('be.visible');
  });

  it('Should have workin links in mobile menu', () => {
    cy.get('#burger').click();

    cy.get('#mobile-nav-about').click();

    cy.location().should((location) => {
      expect(location.pathname).to.eq('/about');
    });
  });

  it('Dark/Light mode should work', () => {
    cy.get('#dark-mode-toggle').click();
    // cy.get('html').should('have.class', 'light');
  });

  it('Should switch language to de', () => {
    cy.get('h2').contains('Software Engineer and Student at Netgo');

    cy.get('#switch-lang').contains('DE').click();
    cy.get('#switch-lang').contains('EN');

    cy.get('h2').contains('Software Entwickler und Student bei Netgo');
  });
});
