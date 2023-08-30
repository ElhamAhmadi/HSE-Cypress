import {Given, When, Then, DataTable, Before, After} from '@badeball/cypress-cucumber-preprocessor'
import {occupationalIdentityPage} from "../../e2e/Pages/occupationalIdentityPage";
import {sharedPages} from "../../e2e/pages/sharedPages";


let occupationalIdentity = new occupationalIdentityPage()
let shared = new sharedPages()

Then('user see disable Register button', () => {
    shared.validateVisibilityOfRegisterBtn()
})

Then('user should be redirected occupational list', () => {
    shared.validateLoadOfGrid()
})

Then(/^user click on "([^"]*)"$/, function (text) {
    shared.clickOnSpanWithText(text)

});

Then(/^user search on "([^"]*)" drop down with "([^"]*)" text$/, function (matLable, text) {

    shared.selectDropDownWithMat(matLable)
    shared.searchContentInDropDown(text)
});

Then(/^the following info should be listed:$/, function (datatable) {
    datatable.rows().forEach(text => {
        shared.ValidateInfo(text)
    })

});

Then(/^user enter "([^"]*)" in "([^"]*)" input$/, function (text, date) {

    shared.clickOnMatLableWithText(text, date)

});


Then(/^user select "([^"]*)" day in "([^"]*)" filed$/, function (date, text) {
    shared.selectDatepicker(text)
    shared.selectDay(date)
});


Then(/^user type "([^"]*)" in activity field$/, function (text) {
    occupationalIdentity.typeText(text)
});


Then(/^user select "([^"]*)" item in tree$/, function (text) {

    occupationalIdentity.clickDanger()
    shared.addItemInTree(text)

});