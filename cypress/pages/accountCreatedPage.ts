export class AccountCreatedPage {

    elements = {
        createdHeader: () => cy.getDataQa('account-created'),
        continueButton: () => cy.getDataQa('continue-button'),
        accountCreatedText: () => cy.get('#form')
    }

    continue() {
        this.elements.continueButton().click();
    }


}