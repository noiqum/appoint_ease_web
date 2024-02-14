describe('Login', () => {
  it('should login with valid credentials', () => {
    cy.visit('/login')

    cy.get('input[name="email"]').type('mike@gmail.com')
    cy.get('input[name="password"]').type('test1234')

    cy.get('button[type="submit"]').click()

    cy.url().should('eq', 'http://localhost:3000/dashboard')
  })
})
