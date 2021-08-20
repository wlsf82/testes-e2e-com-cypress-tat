it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.visit('/login')
  cy.get('#email').type(Cypress.env('USER_EMAIL'))
  cy.get('#password').type(Cypress.env('USER_PASSWORD'))
  cy.contains('button', 'Login').click()

  cy.wait('@getNotes')
  cy.contains('h1', 'Your Notes').should('be.visible')
})
