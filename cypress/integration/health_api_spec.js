describe('Health api', () => {
  it('Should load api request', () => {
    cy.request('/api/health')
      .as('health')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');

    cy.get('@health').should((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.exist;
      expect(res.body).to.have.property('status', 'UP');
      expect(res.body).to.have.property('uptime');
      expect(res.body).to.have.property('mem');
    });
  });
});
