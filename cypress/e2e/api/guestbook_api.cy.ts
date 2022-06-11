describe('Guestbook api', () => {
  it('Should load api request', () => {
    cy.request('/api/guestbook')
      .as('guestbook')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');

    cy.get('@guestbook').should((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.exist;
      expect(res.body).to.have.length.above(0);
    });
  });
});
