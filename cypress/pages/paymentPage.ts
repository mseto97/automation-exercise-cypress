export class PaymentPage {

    elements = {
        nameOnCardInput: () => cy.getDataQa('name-on-card'),
        cardNumberInput: () => cy.getDataQa('card-number'),
        ccvInput: () => cy.getDataQa('cvc'),
        expiryMonthInput: () => cy.getDataQa('expiry-month'),
        expiryYearInput: () => cy.getDataQa('expiry-year'),
        payButton: () => cy.getDataQa('pay-button'),
    }

    //enter the card details and click pay button
    enterCardDetails(card: Card) {
        this.elements.nameOnCardInput().type(card.name);
        this.elements.cardNumberInput().type(card.number);
        this.elements.ccvInput().type(card.cvc);
        this.elements.expiryMonthInput().type(card.expiryMonth);
        this.elements.expiryYearInput().type(card.expiryYear);
    }

    payAndConfirmOrder() {
        this.elements.payButton().click()
    }
}