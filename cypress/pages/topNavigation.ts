export class TopNavigation {

  elements = {
    signupLink: () => cy.getHref('/login'),  // Signup/Login button
    homeLink: () => cy.getHref('/'),  // Home button
    productsLink: () => cy.getHref('/products'),  // Products button
    cartLink: () => cy.get('.shop-menu.pull-right [href="/view_cart"]'),  // View Cart button
    logoutLink: () => cy.getHref('/logout'),  // Logout button (only visible if logged in)
    usersName: () => cy.get('a:has(.fa.fa-user) b'),
    deleteAccountLink: () => cy.getHref('/delete_account')
  }
  // Method to click on the 'Signup / Login' button
  goToSignupLogin(): void {
    this.elements.signupLink().click();
  }

  // Method to navigate to the home page
  goToHome(): void {
    this.elements.homeLink().click();
  }

  // Method to navigate to the products page
  goToProducts(): void {
    this.elements.productsLink().click();
  }

  // Method to navigate to the cart
  goToCart(): void {
    this.elements.cartLink().click();
  }

  // Method to log out (if logged in)
  logout(): void {
    this.elements.logoutLink().click();
  }

  // Method to log out (if logged in)
  deleteAccount(): void {
    this.elements.deleteAccountLink().click();
  }

}