
Cypress.Commands.add('login', (userName, password) => {
    cy.get('input[formcontrolname="userName"]').type(userName)
    cy.get('input[formcontrolname="password"]').type(password, {log: false})
    cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('registro', (fullName, userName, password, email) => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get('input[formcontrolname="email"]').type(email)
    cy.get('input[formcontrolname="userName"]').type(userName)
    cy.get('input[formcontrolname="fullName"]').type(fullName)
    cy.get('input[formcontrolname="password"]').type(password, {log: false})
    cy.contains('button', 'Register').click()
})