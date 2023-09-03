import {Given, When, Then, DataTable, Before, After} from '@badeball/cypress-cucumber-preprocessor'
import {occupationalIdentityPage} from "../../e2e/Pages/occupationalIdentityPage";
import {sharedPages} from "../../e2e/pages/sharedPages";


let occupationalIdentity = new occupationalIdentityPage()
let sharedPage = new sharedPages()

Then('user see disable Register button', () => {
    sharedPage.validateDisableRegisterBtn()
})

Then('user should be redirected occupational list', () => {

    sharedPage.validateLoadOfGrid()
})

Then(/^user click on "([^"]*)"$/, function (text) {
    sharedPage.clickOnSpanWithText(text)

});

Then(/^user search on "([^"]*)" drop down with "([^"]*)" text$/, function (matLable, text) {
    sharedPage.SearchDropDownWithPlaceHolder(matLable)
    sharedPage.searchContentInDropDown(text)
});

Then(/^the following info should be listed:$/, function (datatable) {
    datatable.rows().forEach(text => {
        sharedPage.ValidateInfo(text)
    })

});

Then(/^user enter "([^"]*)" in "([^"]*)" input$/, function (text, date) {
    sharedPage.clickOnMatLableWithText(text, date)

});


Then(/^user select "([^"]*)" day in "([^"]*)" filed$/, function (date, text) {
    sharedPage.selectDatepicker(text)
    sharedPage.selectDay(date)
});


Then(/^user type "([^"]*)" in activity field$/, function (text) {
    occupationalIdentity.typeText(text)
});

Then(/^user select "([^"]*)" item in tree$/, function (text) {
    occupationalIdentity.clickDanger()
    sharedPage.addItemInTree(text)

});

Then(/^user Add danger to list$/, function () {
    sharedPage.cliClickAddBtn()

});

Then(/^user see enable Register button$/, function () {
 sharedPage.validateEnableRegisterBtn()
});

Then(/^user can see with del button in the table$/, function (datatable) {
    datatable.rows().forEach(text => {
        sharedPage.ValidateInfo(text)
    })
    sharedPage.validateVisiablityDelBtn()

    });
Then(/^user select create button$/, function () {

    sharedPage.clickOnRegisterbtn()

});

Then(/^user can sees "([^"]*)" the created identity in grid correctly$/, function (row,datatable ) {

    datatable.rows().forEach(text => {
        sharedPage.validateTextInGrid(row,text)
    })

});
