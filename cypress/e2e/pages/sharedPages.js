import {occupationalIdentityElements} from "../elements/occupationalIdentityElements";
import {sharedElements} from "../elements/sharedElement";

let occupationalIdentityElemnts = new occupationalIdentityElements()
let sharedElemnts = new sharedElements()


export class sharedPages {

// Button  Actions -------------------------------------------------------------------

    cliClickAddBtn(){
        return cy.get(sharedElemnts.Add).click()
}

    validateDisableRegisterBtn() {
        return cy.get(occupationalIdentityElemnts.REGISTER_BTN).should('have.attr', 'ng-reflect-disabled', 'true')
    }
    clickOnRegisterbtn() {
        return cy.get(occupationalIdentityElemnts.REGISTER_BTN).click()
    }
    validateEnableRegisterBtn() {
        return cy.get(occupationalIdentityElemnts.REGISTER_BTN).should('have.attr', 'ng-reflect-disabled', 'false')
    }

    validateVisiablityDelBtn(){
        return cy.get(sharedElemnts.deleteBtn).should('have.length',2)
    }


// Tree  Actions -------------------------------------------------------------------

    addItemInTree(input) {
        return cy.get(sharedElemnts.li).parents(sharedElemnts.TreeNodes).within(() => {
            cy.get(sharedElemnts.getItemWithTitle(input)).within(() => {
                cy.get(sharedElemnts.AddToggleInTree).click()

            })
        })
    }

// Span Actions ------------------------------

    clickOnSpanWithText(text) {
        return cy.contains(sharedElemnts.SPAN, text).click({force: true})

    }

    ValidateInfo(lable) {
        return cy.get(sharedElemnts.SPAN).should('include.text', lable)

    }

// Lable Actions ------------------------------

    clickOnMatLableWithText(text, data) {
        return cy.contains(sharedElemnts.PlaceHolder, text).type(data)

    }

// Grid  Actions ------------------------------'21024402'

    validateLoadOfGrid() {
        return cy.get(sharedElemnts.GRID).should('be.visible')
    }
    validateTextInGrid(row,text) {
        return cy.get(sharedElemnts.SPAN).contains(row).parents(sharedElemnts.Row_Grid)
            .within( ()=> {
            cy.get(sharedElemnts.SPAN). should('contain.text',text)

        })

    }

// DropDown  Actions ------------------------------

    SearchDropDownWithPlaceHolder(text) {
        return cy.contains(sharedElemnts.PlaceHolder, text).click({force: true})
    }

    searchContentInDropDown(content) {
        return cy.get(sharedElemnts.Option).type(content)
    }

// DatePicker  Actions ------------------------------

    selectDatepicker(text) {

        return cy.get(sharedElemnts.PlaceHolder).contains(text).siblings(sharedElemnts.DatePicker).click()

    }

    selectDate(date) {

        return cy.get(sharedElemnts.CurrentDay).contains(date).click()

    }

    selectDay(date) {

        return cy.get(sharedElemnts.DayInCalender).contains(date).click()

    }
}