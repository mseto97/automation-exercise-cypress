
export class SignupPage {
    
    elements = {

        titleRadioButtons: () => cy.get('[type="radio"]'),
        nameInput: () => cy.getDataQa('name'),
        emailInput: () => cy.getDataQa('email'),

        passwordInput: () => cy.getDataQa('password'),
        dobDaySelect: () => cy.getDataQa('days'),
        dobMonthSelect: () => cy.getDataQa('months'),
        dobYearSelext: () => cy.getDataQa('years'),

        firstNameInput: () => cy.getDataQa('first_name'),
        lastNameInput: () => cy.getDataQa('last_name'),
        companyInput: () => cy.getDataQa('company'),
        addressInput: () => cy.getDataQa('address'),
        addressInput2: () => cy.getDataQa('address2'),
        countrySelect: () => cy.getDataQa('country'),
        stateInput: () => cy.getDataQa('state'),
        cityInput: () => cy.getDataQa('city'),
        zipcodeInput: () => cy.getDataQa('zipcode'),

        mobileInput: () => cy.getDataQa('mobile_number'),
        createAccountButton: () => cy.getDataQa('create-account')
    }


    //method for entering user details into field and clicking
    signUpNewUser(userDetails: User) {

        this.elements.nameInput().should('contain.value', `${userDetails.name.firstName} ${userDetails.name.lastName}`);
        this.elements.emailInput().should('contain.value', userDetails.email);

        this.elements.titleRadioButtons().filter(`[value='${userDetails.title}']`).click();
        this.elements.passwordInput().type(userDetails.password);

        this.elements.dobDaySelect().select(userDetails.dateOfBirth.day)
        this.elements.dobMonthSelect().select(userDetails.dateOfBirth.month)
        this.elements.dobYearSelext().select(userDetails.dateOfBirth.year);

        this.elements.firstNameInput().type(userDetails.addressInfo.firstName);
        this.elements.lastNameInput().type(userDetails.addressInfo.lastName);
        this.elements.companyInput().type(userDetails.addressInfo.company);
        this.elements.addressInput().type(userDetails.addressInfo.address);
        this.elements.addressInput2().type(userDetails.addressInfo.address2);
        this.elements.countrySelect().select(userDetails.addressInfo.country);
        this.elements.stateInput().type(userDetails.addressInfo.state);
        this.elements.cityInput().type(userDetails.addressInfo.city);
        this.elements.zipcodeInput().type(userDetails.addressInfo.zipcode);

        this.elements.mobileInput().type(userDetails.mobileNumber);

        this.elements.createAccountButton().click();

    }


}