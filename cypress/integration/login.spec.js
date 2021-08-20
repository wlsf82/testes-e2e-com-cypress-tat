it('successfully logs in', () => {
  cy.intercept('GET', '**/notes').as('getNotes')

  cy.login()

  cy.wait('@getNotes')
})
