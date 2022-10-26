describe('Og image api', () => {
  it('Should load api request', () => {
    cy.request('/api/og')
      .as('og')
      .its('headers')
      .its('content-type')
      .should('include', 'image/png');

    cy.get('@og').should((res) => {
      expect(res.status).to.equal(200);
    });
  });
});
