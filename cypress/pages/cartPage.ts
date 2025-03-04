export class CartPage {

    elements = {
        proceedToCheckoutButton: () => cy.get('#cart_items #do_action a').contains('Proceed To Checkout'),
        pageUrl: () => cy.url(),
        checkoutModalRegisterLoginLink: () => cy.get('#checkoutModal a')
    }

    proceedToCheckout() {
        this.elements.proceedToCheckoutButton().click()
    }

    getUrl() {
        this.elements.pageUrl();
    }

    goToRegisterOrLogin() {
        this.elements.checkoutModalRegisterLoginLink().click();
    }
}