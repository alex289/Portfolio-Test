describe('Now playing api', () => {
  it('Should load api request', () => {
    cy.request('/api/now-playing')
      .as('playing')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');

    cy.get('@playing').should((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.exist;
      expect(res.body).to.have.property('isPlaying');
    });
  });
});
