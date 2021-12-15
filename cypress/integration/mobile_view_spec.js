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
    cy.get('#mobile-nav-home').should('not.visible');
    cy.get('#mobile-nav-about').should('not.visible');
    cy.get('#mobile-nav-projects').should('not.visible');

    cy.get('#burger').should('be.visible').click();

    cy.get('#mobile-nav-home').should('be.visible');
    cy.get('#mobile-nav-about').should('be.visible');
    cy.get('#mobile-nav-projects').should('be.visible');
  });

  it('Should have workin links in mobile menu', () => {
    cy.get('#burger').click();

    cy.get('#mobile-nav-about').click();

    cy.get('#about').should('be.visible');
  });

  it('Dark/Light mode should work', () => {
    cy.get('html').then((item) => {
      if (item.hasClass('dark')) {
        cy.get('#dark-mode-toggle').click().click();

        cy.get('html.light').should('exist');
      } else if (item.hasClass('light')) {
        cy.get('#dark-mode-toggle').click().click();

        cy.get('html.dark').should('exist');
      }
    });
  });

  it('Should switch language to de', () => {
    cy.get('h1').contains('Hey, I’m Alexander Konietzko');

    cy.get('#switch-lang').contains('DE').click();
    cy.get('#switch-lang').contains('EN');

    cy.get('h1').contains('Hey, ich bin Alexander Konietzko');
  });
});
