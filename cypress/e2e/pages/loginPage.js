import {LoginElement} from "../elements/loginElement";
import {sharedElements} from "../elements/sharedElement";



let  Elements = new LoginElement()


export class loginPage {


    openLoginPage() {
        return cy.visit('http://staging.icico.net.ir/')
    }

    enterUsername() {
        return cy.fixture('users.json').then((users) => {
            cy.log(JSON.stringify(users))
            cy.get(Elements.LOGINPAGE_USERNAME_INPUT).type(users.valid.username)
        })

    }

    enterPassword() {
        return cy.fixture('users.json').then((users) => {
            cy.log(JSON.stringify(users))
            cy.get(Elements.PASSWORD_INPUT).type(users.valid.password)
        })

    }

    clickOnLoginButton() {
        return cy.get(Elements.LOGIN_BUTTON).click()

    }

    clickOnHSELink() {
        return cy.get(Elements.HSE_Link, {timeout: 2000}).contains('بهداشت، ایمنی و محیط زیست (HSE) ').click()

    }

    verifyUserLoggedIn() {
        return cy.get(Elements.USER_LABLE, {timeout: 2000}).contains('اکبر تقی پور')
    }


}