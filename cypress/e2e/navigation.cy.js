describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('should navigate to Card Set page when clicking "Card Sets" in side menu', () => {
    cy.contains('Card Sets').click();
    // Verify that the Card Sets page content appears
    cy.contains('Study Set Library').should('be.visible');
    cy.contains('Web Dev Flash Cards').should('be.visible');
  });

  it('should navigate to About page when clicking "About" in side menu', () => {
    cy.contains('About').click();
    // Verify that the About page content appears
    cy.contains('About Study Night').should('be.visible');
    cy.contains('Flash Cards Anywhere Anytime').should('be.visible');
  });

  it('should navigate to Home page when clicking "Home" in side menu', () => {
    cy.contains('About').click(); // First go to About page
    cy.contains('Study Night').should('be.visible');
    cy.contains('Home').click();
    // Verify that the Home page content appears
    cy.contains('A Digital Study Solution for the Modern World').should('be.visible');
  });
});