import {occupationalIdentityElements} from "../elements/occupationalIdentityElements";
import {sharedElements} from "../elements/sharedElement";

let occupationalIdentityElemnts = new occupationalIdentityElements()
let sharedElemnts = new sharedElements()


export class occupationalIdentityPage {


    clickOnSpanWithText(text){
        return cy.contains(sharedElemnts.SPAN,text ).click({force: true})

    }
    clickOnMatLableWithText(text,data){
        return cy.contains(sharedElemnts.MAR_LABLE,text ).type(data)

    }

    validateVisibilityOfRegisterBtn(){
        return cy.get(occupationalIdentityElemnts.REGISTER_BTN).should('have.attr','ng-reflect-disabled', 'true')
    }

    validateLoadOfGrid(){
        return cy.get(sharedElemnts.GRID).should('be.visible')
    }

    selectDropDownWithMat(text){
        return cy.contains(sharedElemnts.MAR_LABLE,text).click({force: true})
    }

    searchContentInDropDown(content){
        return cy.get(sharedElemnts.MAT_OPTION).type(content)
    }

    ValidateInfo(lable){
        return  cy.get('span').should('include.text',lable)

    }

    selectDatepicker(text){

        return cy.get(sharedElemnts.MAR_LABLE).contains(text).siblings(sharedElemnts.datepicker).click()

    }
    selectDate(date){

        return cy.get(sharedElemnts.currentDate).contains(date).click()

    }
    TypeText(text){

         return cy.get(occupationalIdentityElemnts.create_occupational).type(text)

    }

    clickDanger(){

        return cy.get(occupationalIdentityElemnts.create_occupational_danger).click()
    }
    selectDanger(text){

        return cy.get(occupationalIdentityElemnts.create_occupational_danger).click()
    }

}

