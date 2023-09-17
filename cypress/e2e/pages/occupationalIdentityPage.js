import {occupationalIdentityElements} from "../elements/occupationalIdentityElements";
import {sharedPages} from "./sharedPages";
import {sharedElements} from "../elements/sharedElement";


let occupationalIdentityElemnts = new occupationalIdentityElements()
let sharedElement = new sharedElements()

export class occupationalIdentityPage {

    typeText(text){

         return cy.get(occupationalIdentityElemnts.create_occupational).type(text)
    }

    clickDanger(){

              return cy.get(occupationalIdentityElemnts.create_occupational_danger).click()
    }

    selectDanger(text){
        occupationalIdentityElemnts.setCreateOccupationalDanger("dddd");

        return cy.get(occupationalIdentityElemnts.create_occupational_danger).click();
    }



}

