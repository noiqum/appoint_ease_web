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
  it('should login with valid credentials and redirect to dashboard in desktop', () => {
    cy.viewport(1440, 900)
    cy.visit('/')
    cy.get('.navigation__menu').within(() => {
      cy.get('a[href="/login"]').click()
    })

    cy.get("input[name='email']").type('mike@gmail.com')
    cy.get("input[name='password']").type('test1234')
    cy.get("button[type='submit']").click()
    cy.url({ timeout: 10000 }).should('eq', 'http://localhost:3000/dashboard')
  })
  it('should not login with invalid credentials in desktop and get error', () => {
    cy.viewport(1440, 900)
    cy.visit('/')
    cy.get('.navigation__menu').within(() => {
      cy.get('a[href="/login"]').click()
    })

    cy.get("input[name='email']").type('mike')
    cy.get("input[name='password']").type('test1234')
    cy.get("button[type='submit']").click()
    cy.get('.text-destructive').contains('Please enter a valid email address')
    cy.url().should('eq', 'http://localhost:3000/login')
  })
})
