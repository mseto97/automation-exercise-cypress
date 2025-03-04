export class AccountDeletedPage {

    elements = {
        accountDeletedTitle: () => cy.getDataQa('account-deleted'),
        continueButton: () => cy.getDataQa('continue-button'),
        accountDeletedMessage: () => cy.get('#form p')
    }

    continue() {
        this.elements.continueButton().click();
    }
}