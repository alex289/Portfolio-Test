describe('Sitemap page', () => {
  it('Should load page', () => {
    cy.request('/sitemap.xml')
      .as('sitemap')
      .its('headers')
      .its('content-type')
      .should('include', 'text/xml');

    cy.get('@sitemap').should((res) => {
      expect(res.status).to.equal(200);
      expect(res.body).to.exist;
      expect(res.body).to.have.length.above(1);
    });
  });
});
