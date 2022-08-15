describe('Feed page', () => {
  it('Should load page', () => {
    cy.request('/feed.xml')
      .as('feed')
      .its('headers')
      .its('content-type')
      .should('include', 'text/xml');

    cy.get('@feed').should((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.exist;
      expect(res.body).to.have.length.above(1);
    });
  });
});
