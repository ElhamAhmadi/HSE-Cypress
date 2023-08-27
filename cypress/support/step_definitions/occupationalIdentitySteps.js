import {Given, When, Then, DataTable, Before, After} from '@badeball/cypress-cucumber-preprocessor'
import {occupationalIdentityPage} from "../../e2e/Pages/occupationalIdentityPage";


let occupationalIdentity = new occupationalIdentityPage()

Then('user see disable Register button', () => {
    occupationalIdentity.validateVisibilityOfRegisterBtn()
})

Then('user should be redirected occupational list', () => {
    occupationalIdentity.validateLoadOfGrid()
})

Then(/^user click on "([^"]*)"$/, function (text) {
    occupationalIdentity.clickOnSpanWithText(text)

});

Then(/^user search on "([^"]*)" drop down with "([^"]*)" text$/, function (matLable, text) {

    occupationalIdentity.selectDropDownWithMat(matLable)
    occupationalIdentity.searchContentInDropDown(text)
});

Then(/^the following info should be listed:$/, function (datatable) {
    datatable.rows().forEach(text => {
        occupationalIdentity.ValidateInfo(text)
    })

});

Then(/^user enter "([^"]*)" in "([^"]*)" input$/, function (text, date) {

    occupationalIdentity.clickOnMatLableWithText(text, date)

});


Then(/^user select "([^"]*)" day in "([^"]*)" filed$/, function (date, text) {
    occupationalIdentity.selectDatepicker(text)
    occupationalIdentity.selectDate(date)
});


Then(/^user type "([^"]*)" in activity field$/, function (text) {
    occupationalIdentity.TypeText(text)
});


Then(/^user select "([^"]*)" danger$/, function (text) {

    occupationalIdentity.clickDanger()
    occupationalIdentity.clickOnSpanWithText(text)

});