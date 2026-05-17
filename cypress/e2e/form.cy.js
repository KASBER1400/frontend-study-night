describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="nav-card-sets"]').click();
  });

  describe('Create Set Form', () => {
    it('should successfully submit with valid input (happy path)', () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"] input[name="titleInput"]').type('My New Set');
      cy.get('[data-cy="set_form"] input[type="submit"]').click();
    });

    it('should show error when submitting empty string (unhappy path)', () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"] input[type="submit"]').click();
      cy.get('[data-cy="error"]').should('be.visible');
    });
  });

  describe('Add Card Form', () => {
    beforeEach(() => {
      cy.get('[data-cy="1"]').click();
    });

    it('should successfully add card with valid input (happy path)', () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="card_form"] input[name="termInput"]').type('Test Term');
      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').type('Test Description');
      cy.get('[data-cy="card_form"] input[type="submit"]').click();
    });

    it('should show error when submitting empty term (unhappy path)', () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="card_form"] input[name="descriptionInput"]').type('Some description');
      cy.get('[data-cy="card_form"] input[type="submit"]').click();
      cy.get('[data-cy="error"]').should('be.visible');
    });

    it('should show error when submitting empty description (unhappy path)', () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="card_form"] input[name="termInput"]').type('Some term');
      cy.get('[data-cy="card_form"] input[type="submit"]').click();
      cy.get('[data-cy="error"]').should('be.visible');
    });
  });
});