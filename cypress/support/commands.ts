/// <reference types="cypress" />
import * as constants from '../../src/types/constants';

Cypress.Commands.add('login', () => { 
    cy.clearCookies();
    cy.visit('http://localhost:3000/login');
    cy.get('#login-username').should('be.visible').clear().type('lili');
    cy.get('#login-password').should('be.visible').clear().type('lili');
    cy.get('#login-btn-submit').should('be.visible').click();

    cy.request('POST', 'http://127.0.0.1:8000/authentication/token/obtain/', {
        username: 'lili',
        password: 'lili',
      }).then((response)=> {
        cy.setCookie('user-token-get-outside', response.body.access)
        cy.setCookie('user-refresh-token-get-outside', response.body.refresh)
      })

      cy.getCookie(constants.AUTH_TOKEN).should('exist');
      cy.getCookie(constants.AUTH_REFRESH_TOKEN).should('exist');

      cy.url().should('eq', 'http://localhost:3000/home');
})



declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>
    }
  }
}

export {};
