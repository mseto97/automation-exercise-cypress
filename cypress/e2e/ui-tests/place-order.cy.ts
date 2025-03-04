import { LoginPage } from "../../pages/loginPage";
import { SignupPage } from "../../pages/signUpPage";
import { AccountCreatedPage } from "../../pages/accountCreatedPage";
import { TopNavigation } from "../../pages/topNavigation";
import { ProductComponent } from "../../pages/productComponent";
import { CartPage } from "../../pages/cartPage";
import { CheckOutPage } from "../../pages/checkOutPage";
import { OrderPlacedPage } from "../../pages/orderPlacedPage";
import { PaymentPage } from "../../pages/paymentPage";
import { AccountDeletedPage } from "../../pages/accountDeletedPage";
import { HomePage } from "../../pages/homePage";
import { generateNewUserAccountDetails, generateNewCardDetails } from "../../support/utils/data-generation-utils";

describe("UI Testing tasks 14 and 15 from https://automationexercise.com/test_cases", () => {

    //Page object instances
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const signupPage = new SignupPage();
    const accountCreatedPage = new AccountCreatedPage();
    const topNavigation = new TopNavigation();
    const productComponent = new ProductComponent();
    const cartPage = new CartPage();
    const paymentPage = new PaymentPage();
    const orderPlacedPage = new OrderPlacedPage();
    const accountDeletedPage = new AccountDeletedPage();
    const checkOutPage = new CheckOutPage();

    //Helper functions to reduce code duplication for same flows
    const signUpAndLogin = (accountDetails: User) => {
        loginPage.initiateNewUserSignup(`${accountDetails.name.firstName} ${accountDetails.name.lastName}`, accountDetails.email);
        signupPage.signUpNewUser(accountDetails);
        accountCreatedPage.elements.createdHeader().should('be.visible').and('contain.text', 'Account Created!');
        accountCreatedPage.continue();
        topNavigation.elements.usersName().should('contain.text', `${accountDetails.name.firstName} ${accountDetails.name.lastName}`).and('be.visible');
    };

    const deleteAccount = () => {
        topNavigation.deleteAccount();
        accountDeletedPage.elements.accountDeletedTitle().should('be.visible').and('contain.text', 'Account Deleted!');
        accountDeletedPage.continue();
    };

    const addProductsToCartAndInitiateCheckout = () => {
        productComponent.addProductToCart('Rs. 1000');
        productComponent.addProductToCart('Rs. 400');
        topNavigation.goToCart();
        cartPage.elements.pageUrl().should('include', '/view_cart');
        cartPage.proceedToCheckout();
    }

    const verifyOrderDetailsAndCompleteCheckout = (accountDetails: User, card: Card) => {
        checkOutPage.verifyDeliveryDetails(accountDetails.title, accountDetails.addressInfo, accountDetails.mobileNumber);
        checkOutPage.verifyBillingDetails(accountDetails.title, accountDetails.addressInfo, accountDetails.mobileNumber);

        checkOutPage.enterOrderComment('Adding comment to the order');
        checkOutPage.placeOrder();

        paymentPage.enterCardDetails(card);
        paymentPage.payAndConfirmOrder();
        //paymentPage.elements.successAlert().should('be.visible').and('contain.text', 'Your order has been placed successfully!' )

        orderPlacedPage.elements.orderPlacedTitle().should('be.visible').and('contain.text', 'Order Placed!');
        orderPlacedPage.elements.successMessage().should('be.visible').and('contain.text', 'Congratulations! Your order has been confirmed');
    }

    beforeEach(() => {
        //1. Launch browser
        //2. Navigate to url
        cy.visit(Cypress.env('baseUrl'));

        //3. Verify that home page is visible successfully
        homePage.elements.carousel().should('be.visible');
    });

    it('Test Case 15: Place Order: Register before Checkout and delete account', () => {
        const accountDetails = generateNewUserAccountDetails();
        const cardDetails = generateNewCardDetails()

        //4. Click 'Signup / Login' button
        topNavigation.goToSignupLogin();
        
        //Steps 5-7
        signUpAndLogin(accountDetails);

        //Steps 8-11. Add products to cart, go to cart
        addProductsToCartAndInitiateCheckout();

        //Steps 12 16 (Verify address details, make car payment, verify checkout)
        verifyOrderDetailsAndCompleteCheckout(accountDetails, cardDetails);

        //17. Click 'Delete Account' button
        //18. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        deleteAccount();

    });

    it('Test Case 14: Place Order: Register while Checkout', () => {
        const accountDetails = generateNewUserAccountDetails();
        const cardDetails = generateNewCardDetails()
        
        //Steps 4-7
        addProductsToCartAndInitiateCheckout()

        //8. Click 'Register / Login' button
        cartPage.goToRegisterOrLogin();

        //Steps 9-11
        signUpAndLogin(accountDetails);

        //12. Click 'Cart' button
        topNavigation.goToCart();

        //13. Click 'Proceed to Checkout' button
        cartPage.proceedToCheckout();

        //Steps 14-18 (Verify address details, make car payment, verify checkout)
        verifyOrderDetailsAndCompleteCheckout(accountDetails, cardDetails);

        //19. Click 'Delete Account' button
        //20. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        deleteAccount();
    })
})

