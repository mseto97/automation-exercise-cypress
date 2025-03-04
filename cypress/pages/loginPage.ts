export class LoginPage {

   elements = {
      signUpNameInput: () => cy.getDataQa('signup-name'),
      signUpEmailInput: () => cy.getDataQa('signup-email'),
      signUpButton: () => cy.getDataQa('signup-button'),
      signUpErrorMessage: () => cy.get('.signup-form p')
   }

   initiateNewUserSignup(name: string, email: string): void {
      this.elements.signUpNameInput().type(name);
      this.elements.signUpEmailInput().type(email);
      this.elements.signUpButton().click();
   }

}


