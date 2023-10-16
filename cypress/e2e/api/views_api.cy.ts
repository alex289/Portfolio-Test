describe('Views api', () => {
  it('Should load api request', () => {
    cy.request('/api/views')
      .as('views')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');

    cy.get('@views').should((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.exist;
    });
  });
});
