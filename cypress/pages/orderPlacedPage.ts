export class OrderPlacedPage {

    elements = {
        orderPlacedTitle: () => cy.getDataQa('order-placed'),
        continueButton: () => cy.getDataQa('continue-button'),
        successMessage: () => cy.get('#form p')
    }
}