describe('Health api', () => {
  it('Should load api request', () => {
    cy.request('/api/health').as('health');

    cy.get('@health').should((res) => {
      expect(res.body).to.exist;
      expect(res.status).to.equal(200);
    });
  });
});
