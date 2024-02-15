describe('Login', () => {
  it('should login with valid credentials and redirect to dashboard in mobile', () => {
    cy.viewport(375, 812)
    cy.visit('/')
    cy.get('.navigation__hamburger').click()
    cy.get('.navigation__aside').within(() => {
      cy.get("a[href='/login']").click()
    })

    cy.get("input[name='email']").type('mike@gmail.com')
    cy.get("input[name='password']").type('test1234')
    cy.get("button[type='submit']").click()
    cy.url({ timeout: 10000 }).should('eq', 'http://localhost:3000/dashboard')
  })
})
