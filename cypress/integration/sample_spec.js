describe('Home testing', () => {
  it('should navigate to the themes tab when I click the themes button', () => {
    cy.visit('http://localhost:5000');
    cy.contains('themes').click();
    cy.contains('Get Themes').click();
    cy.wait(500);
    cy.get('.theme').should('have.length', 9);
  });
});
