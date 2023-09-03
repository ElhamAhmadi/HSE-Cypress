import {LoginElement} from "../e2e/elements/loginElement";

let Elements = new LoginElement()

Cypress.Commands.add('LoginWithApi', (email,password) => {
    cy.session('loginWithValidUser', () => {
        cy.request('GET', 'http://stagingf.icico.net.ir/api/users/current',
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
        cy.get(Elements.LOGINPAGE_USERNAME_INPUT).type(email)
        cy.get(Elements.PASSWORD_INPUT).type(password)
        cy.get(Elements.LOGIN_BUTTON).click()
        cy.get(Elements.USER_LABLE, {timeout: 2000}).contains('اکبر تقی پور')
        cy.get(Elements.HSE_Link, {timeout: 2000}).contains('بهداشت، ایمنی و محیط زیست (HSE) ').click()
        cy. wait('@reqAlias')
        // cy.location('pathname').should('eq','/#/system')
    })
})