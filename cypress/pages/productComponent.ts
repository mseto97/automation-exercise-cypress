import { SuccessModal } from "./successModal"

export class ProductComponent {
    elements = {
        products: () => cy.get('.single-products')
    }

    addProductToCart(productName: string): void {
        this.elements.products().find('h2').contains(productName).parentsUntil('.single-products').find('a').click()
        SuccessModal.verifyModalIsVisible();
        SuccessModal.continueShopping();
    }

}