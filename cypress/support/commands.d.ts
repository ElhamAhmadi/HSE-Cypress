declare namespace Cypress {
    interface Chainable {

        LoginWithApi(email: string, password: string): Cypress.Chainable
        LoginWithUi(email: string, password: string): Cypress.Chainable
    }
}