export class CheckOutPage {

    elements = {
        deliveryNameInput: () => cy.get('#address_delivery .address_firstname.address_lastname'),
        deliveryCityStateCode: () => cy.get('#address_delivery .address_city.address_state_name.address_postcode'),
        deliveryAddressInput: () => cy.get('#address_delivery .address_address1.address_address2'),
        deliveryCountryInput: () => cy.get('#address_delivery .address_country_name'),
        deliveryPhone: () => cy.get('#address_delivery .address_phone'),

        billingNameInput: () => cy.get('#address_invoice .address_firstname.address_lastname'),
        billingCityStateCode: () => cy.get('#address_invoice .address_city.address_state_name.address_postcode'),
        billingAddressInput: () => cy.get('#address_invoice .address_address1.address_address2'),
        billingCountryInput: () => cy.get('#address_invoice .address_country_name'),
        billingPhone: () => cy.get('#address_invoice .address_phone'),

        commentTextArea: () => cy.get('#ordermsg > textarea'),
        placeOrderLink: () => cy.getHref('/payment'),
    }

    private removeExtraSpaces(text: string): string {
        return text.replace(/\s+/g, ' ').trim();
    }
    verifyDeliveryDetails(title: string, deliveryDetails: AddressInfo, mobile: string) {
        this.elements.deliveryNameInput().should('contain.text', `${title}. ${deliveryDetails.firstName} ${deliveryDetails.lastName}`);
        this.elements.deliveryAddressInput().first().should('contain.text', deliveryDetails.company);
        this.elements.deliveryAddressInput().eq(1).should('contain.text', deliveryDetails.address);
        this.elements.deliveryAddressInput().eq(2).should('contain.text', deliveryDetails.address2);
        this.elements.deliveryCityStateCode().invoke('text').then((text) => {
            const removedMultiSpacesText = this.removeExtraSpaces(text)
            expect(removedMultiSpacesText).to.include(`${deliveryDetails.city} ${deliveryDetails.state} ${deliveryDetails.zipcode}`);
        });
        this.elements.deliveryCountryInput().should('contain.text', deliveryDetails.country);
        this.elements.deliveryPhone().should('contain.text', mobile)
    }

    verifyBillingDetails(title: string, billingDetails: AddressInfo, mobile: string) {
        this.elements.billingNameInput().should('contain.text', `${title}. ${billingDetails.firstName} ${billingDetails.lastName}`);
        this.elements.billingAddressInput().first().should('contain.text', billingDetails.company);
        this.elements.billingAddressInput().eq(1).should('contain.text', billingDetails.address);
        this.elements.billingAddressInput().eq(2).should('contain.text', billingDetails.address2);
        this.elements.billingCityStateCode().invoke('text').then((text) => {
            const removedMultiSpacesText = this.removeExtraSpaces(text)
            expect(removedMultiSpacesText).to.include(`${billingDetails.city} ${billingDetails.state} ${billingDetails.zipcode}`);
        });
        this.elements.billingCountryInput().should('contain.text', billingDetails.country);
        this.elements.billingPhone().should('contain.text', mobile)
    }

    enterOrderComment(message: string) {
        this.elements.commentTextArea().type(message);
    }

    placeOrder() {
        this.elements.placeOrderLink().click();
    }

}