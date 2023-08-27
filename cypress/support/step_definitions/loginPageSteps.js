import {Given, When, Then, DataTable, Before, After} from '@badeball/cypress-cucumber-preprocessor'
import {loginPage} from "../../e2e/Pages/loginPage"
import {occupationalIdentityPage} from "../../e2e/Pages/occupationalIdentityPage";

let login = new loginPage()
let occupationalIdentity =new  occupationalIdentityPage()

Given('user is in login page', () => {
    login.openLoginPage()
})

When('user enter valid username and password', () => {
    login.enterUsername()
    login.enterPassword()
})

When('user click on login button', () => {
    login.clickOnLoginButton()

})

When('user click HSE Link', () => {
    login.clickOnHSELink()
})

Then('user should logged in and redirected', () => {
    login.verifyUserLoggedIn()
})

Given('user is in risk management occupational identity', () => {
    //occupationalIdentity.openRiskManagementLink()
    //  occupationalIdentity.openIoccupationalIdentityLink()

})

