import {occupationalIdentityElements} from "../elements/occupationalIdentityElements";
import {sharedElements} from "../elements/sharedElement";

let occupationalIdentityElemnts = new occupationalIdentityElements()
let sharedElemnts = new sharedElements()


export class sharedPages {

// Button  Actions -------------------------------------------------------------------

    clickAddBtn() {
        return cy.get(sharedElemnts.Add).click()
    }

    clickCancelBtn() {
        return cy.get(occupationalIdentityElemnts.CANCEL_BTN).contains('لغو و بازگشت').click({force:true})
    }
    clickConfirmCancelBtn() {
        return cy.get(sharedElemnts.hseButtonCancel).contains('بلی').click({force:true})
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

    validateVisiablityDelBtn() {
        return cy.get(sharedElemnts.deleteBtn).should('have.length', 2)
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

    ValidateDetail(lable) {

        return cy.get(sharedElemnts.HseTopSheet).within(() => {
            cy.get(sharedElemnts.SPAN).should('include.text', lable)
        })

    }

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

// Grid  Actions ------------------------------

    validateValuesInDetailGrid(text) {
        return cy.get(sharedElemnts.HseGrid)
            .within(() => {
                cy.get(sharedElemnts.SPAN).should('contain.text', text)

            })
    }

    validateLoadOfGrid() {
        return cy.get(sharedElemnts.GRID).should('be.visible')
    }

    validateTextInGrid(row, text) {
        return cy.get(sharedElemnts.GridRow).each(function ($es) {
            if ($es.text() === row)
                cy.get($es.text()).should('contain.text', text)
        })
    }

    ValidateCountOfRows() {
        return cy.get(sharedElemnts.GridRow).each(function ($el, index) {
            cy.wrap($el).should('have.length', 1)
        })
    }

    ClickDetailInGrid(text, row) {
        return cy.get(sharedElemnts.SPAN).contains(row).parents(sharedElemnts.Row_Grid)
            .within(() => {
                cy.get(sharedElemnts.A).contains(text).click()
            })
    }

    validateInfoInGrid(text) {
        return cy.get(sharedElemnts.Row_Grid_Detail)
            .each(function ($el, index, $list) {
                cy.get(sharedElemnts.HseGridOld).within(() => {
                    cy.get(sharedElemnts.SPAN).should('contain.text', text)
                })
            })
    }

    validateValuesInGrid(text) {
        return cy.get(sharedElemnts.SPAN).parents(sharedElemnts.Row_Content)
            .within(() => {
                cy.get(sharedElemnts.SPAN).should('contain.text', text)

            })
    }

    SearchInfield(text, field) {

        return cy.get(sharedElemnts.titleInGrid).each(function ($el, index, $list) {
            cy.log($el.text())
            if ($el.text() === field) {
                cy.log(sharedElemnts.searchBoxInGrid)
                cy.get(sharedElemnts.searchBoxInGrid).eq(index).type(text)
            }
        })
    }

// DropDown  Actions -----------------------------------------------------------------

    SearchDropDownWithPlaceHolder(text) {
        return cy.contains(sharedElemnts.PlaceHolder, text).click({force: true})
    }

    searchContentInDropDown(content) {
        return cy.get(sharedElemnts.Option).type(content)
    }

// DatePicker  Actions ----------------------------------------------------------------------

    selectDatepicker(text) {

        return cy.get(sharedElemnts.PlaceHolder).contains(text).siblings(sharedElemnts.DatePicker).click()

    }

    selectDate(date) {

        return cy.get(sharedElemnts.CurrentDay).contains(date).click()

    }

    selectDay(date) {

        return cy.get(sharedElemnts.DayInCalender).contains(date).click()

    }

    clickOnMoreInfo() {
        return cy.get(sharedElemnts.p).contains('مشاهده اطلاعات بیشتر').click()
    }

// Toast Actions ----------------------------------------------------------------------

    ValidateTextInTost(text) {
        return cy.get(sharedElemnts.HseSnackbar).within(function () {
            cy.contains(text)
        })
    }

    closeToast(){
        return cy.get(sharedElemnts.HseSnackbar).contains('close').click({force:true})
    }

// Toast Actions ----------------------------------------------------------------------

    getPostInfoWithApi(text) {
        return cy.request({
            url: '/hse-backend/api/post/v1/search-post-in-hrm-all-data',
            encoding: 'binary',
        }).then((response) => {
            cy.writeFile('path/to/save/document.pdf', response.body, 'binary')
        })

        const items = []
        cy.cy.request({
            url: '/hse-backend/api/post/v1/search-post-in-hrm-all-data',
        })
            .each((response) => items.push(response.body))
            .then(() => {
                cy.log(items.join(', '))
            })
    }

}

