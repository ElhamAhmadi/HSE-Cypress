import {LoginElement} from "../e2e/elements/loginElement";

let loginElement = new LoginElement()

Cypress.Commands.add('LoginWithApi', (email,password) => {
    cy.session('loginWithValidUser', () => {
        cy.request('GET', 'http://staging.icico.net.ir/api/users/current',
            {email: "email", password: "password"})
            .then(($resp) => {
                expect($resp.status).to.eq(200)
                console.log($resp.body.bod)
                debugger
                window.localStorage.setItem('auth-token', $resp.body.body)
            })
    })
})


Cypress.Commands.add('LoginWithUi', (email,password) => {
    cy.session('loginWithValidUser', () => {
        cy.intercept('GET', 'http://staging.icico.net.ir/hse-backend/api/dashboard/v1/all/1502590751').as('reqAlias')
        cy.visit('http://staging.icico.net.ir')
        cy.get(loginElement.LOGINPAGE_USERNAME_INPUT).type(email)
        cy.get(loginElement.PASSWORD_INPUT).type(password)
        cy.get(loginElement.LOGIN_BUTTON).click()
        cy.get(loginElement.USER_LABLE, {timeout: 2000}).contains('اکبر تقی پور')
        cy.get(loginElement.HSE_Link, {timeout: 2000}).contains('بهداشت، ایمنی و محیط زیست (HSE) ').click()
        cy. wait('@reqAlias')
        // cy.location('pathname').should('eq','/#/system')
    })
})