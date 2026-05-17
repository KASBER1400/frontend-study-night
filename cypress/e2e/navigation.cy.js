describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to Card Set page when clicking "Card Sets"', () => {
    cy.get('[data-cy="nav-card-sets"]').click();
    cy.contains('Study Set Library').should('be.visible');
  });

  it('should navigate to About page when clicking "About"', () => {
    cy.get('[data-cy="nav-about"]').click();
    cy.contains('About Study Night').should('be.visible');
  });

  it('should navigate to Home page when clicking "Home"', () => {
    cy.get('[data-cy="nav-home"]').click();
    cy.contains('A Digital Study Solution').should('be.visible');
  });
});