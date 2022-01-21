// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('insertBets', () => {
  cy.visit('http://localhost:3000/login') 
  cy.get('#email').focus().type('any_email@mail.com')
  cy.get('#password').focus().type('any_password')
  cy.get('.btn').click()
  cy.get('.green').click()
  cy.get('#Lotofácil').click()
  cy.get('#complete').click()
  cy.get('#addtocart').click()
  cy.get('#Megasena').click()
  cy.get('#complete').click()
  cy.get('#addtocart').click()
  cy.get('#Lotomania').click()
  cy.get('#complete').click()
  cy.get('#addtocart').click()
  cy.get('#Lotoinski').click()
  cy.get('#complete').click()
  cy.get('#addtocart').click()
  cy.get('#save').click()
})
