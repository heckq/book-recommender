describe('E2E Test for GenreNav and SearchBar', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('http://localhost:3000/');
  });


  it('should navigate to the correct page when clicking on a genre', () => {
    // Test navigation for each genre link
    cy.get('a[href="/horror"]').click();
    cy.url().should('include', '/horror'); // Verify if the URL contains '/horror'

    cy.get('a[href="/adventure"]').click();
    cy.url().should('include', '/adventure'); // Verify if the URL contains '/adventure'

    cy.get('a[href="/romance"]').click();
    cy.url().should('include', '/romance'); // Verify if the URL contains '/romance'

    cy.get('a[href="/war"]').click();
    cy.url().should('include', '/war'); // Verify if the URL contains '/war'

    cy.get('a[href="/comedy"]').click();
    cy.url().should('include', '/comedy'); // Verify if the URL contains '/comedy'
  });


});
