/* eslint-disable jest/valid-expect-in-promise */
/// <reference types="cypress" />

describe('Lottery', () => {
  it('Should sign up a new user', () => {
    cy.visit('http://localhost:3000/signup')
    cy.get('#name').focus().type('any_name')
    cy.get('#email').focus().type('any_email@mail.com')
    cy.get('#password').focus().type('any_password')

    cy.intercept('POST', '**/signup').as('postSignup')

    cy.get('.btn').click()

    cy.wait('@postSignup').then((xhr) => {
      expect(xhr.response.statusCode).equal(201)
    })
  })

  it('Should login a user', () => {
    cy.get('#email').focus().type('any_email@mail.com')
    cy.get('#password').focus().type('any_password')

    cy.intercept('POST', '**/login').as('postLogin')

    cy.get('.btn').click()

    cy.wait('@postLogin').then((xhr) => {
      expect(xhr.response.statusCode).equal(200)
      expect(xhr.response.body).property('token')
      expect(xhr.response.body.token).not.equal('')
    })
  })

  it('Should logout a user', () => {
    cy.get('a > .gray').click()
    cy.url().should('include', '/login')
  })
  
  it('Should recover password', () => {
    cy.get('.forget-password > .col > a').click()
    cy.get('#email').focus().type('any_email@mail.com')
    cy.get('.btn').click()
    cy.url().should('include', '/login')
  })

  it('Should create a random bet', () => {
    cy.get('#email').focus().type('any_email@mail.com')
    cy.get('#password').focus().type('any_password')
    cy.get('.btn').click()
    cy.get('.green').click()
    cy.get('#Megasena').click()
    cy.get('#complete').click()
    cy.get('#addtocart').click()
    cy.get('.card-body').find('.p-3 > :nth-child(1)')
  })

})