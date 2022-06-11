describe('Repos api', () => {
  it('Should load api request', () => {
    cy.request('/api/repos')
      .as('repos')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');

    cy.get('@repos').should((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.exist;
      expect(res.body).to.have.length.above(2);
    });
  });
});
