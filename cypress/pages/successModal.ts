// cypress/pages/successModal.ts

export class SuccessModal {
    static continueShoppingButton = '#cartModal button';  // Continue shopping button
    static viewCartLink = '#cartModal a';  // Go to cart button
  
    // Method to click on the "Continue Shopping" button
    static continueShopping(): void {
      cy.get(SuccessModal.continueShoppingButton).click();
    }
  
    // Method to click on the "Go to Cart" button
    static viewCart(): void {
      cy.get(SuccessModal.viewCartLink).click();
    }
  
    // Method to verify the success modal is visible
    static verifyModalIsVisible(): void {
      cy.get('#cartModal').should('be.visible');
    }
  }
  