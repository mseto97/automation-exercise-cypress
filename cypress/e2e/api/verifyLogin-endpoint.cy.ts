import { makeRequest, verifyRequestResponseCodeAndMessage } from "../../support/utils/api-utils";
import { generateNewUserAccountDetails } from "../../support/utils/data-generation-utils";

const url = Cypress.env("apiUrl");
const verifyLoginUrl = `${url}/verifyLogin`;

const userDetails = generateNewUserAccountDetails();

//details that need to be passed to create a new user in the before()
const accountDetails = {
    name: `${userDetails.name.firstName} ${userDetails.name.lastName}`,
    email: userDetails.email,
    password: userDetails.password,
    title: userDetails.title,
    birth_date: userDetails.dateOfBirth.day,
    birth_month: userDetails.dateOfBirth.month,
    birth_year: userDetails.dateOfBirth.year,
    firstname: userDetails.addressInfo.firstName,
    lastname: userDetails.addressInfo.lastName,
    company: userDetails.addressInfo.company,
    address1: userDetails.addressInfo.address,
    address2: userDetails.addressInfo.address2,
    country: userDetails.addressInfo.country,
    zipcode: userDetails.addressInfo.zipcode,
    state: userDetails.addressInfo.state,
    city: userDetails.addressInfo.city,
    mobile_number: userDetails.mobileNumber,
};

describe("API tests for verifying the /verifyLogin endpoint. Covers tasks 7,8,9 and 10 from https://automationexercise.com/api_list ", () => {

    //Create a new account
    //This is run once before executing the tests
    before(() => {
        makeRequest('POST', `${url}/createAccount`, accountDetails)
            .then((response) => {
                verifyRequestResponseCodeAndMessage(response, 201, 'User created!')
            });
    });

    it("API-7: POST to Verify Login with valid details. Expect 200 status code", () => {

        //details to send in the POST request to verifyLogin below
        const requestBody = {
            email: accountDetails.email,
            password: accountDetails.password,
        }

        //make request to /verifyLogin using email and password
        makeRequest('POST', verifyLoginUrl, requestBody)
            .then((response) => {
                verifyRequestResponseCodeAndMessage(response, 200, 'User exists!');
            });
    });


    it("API-8: POST to Verify Login without email parameter. Expect 400 status code", () => {
        const requestBody = { password: accountDetails.password }

        //make request to .verifyLogin only sending only password information
        makeRequest('POST', verifyLoginUrl, requestBody)
            .then((response) => {
                verifyRequestResponseCodeAndMessage(response, 400, 'Bad request, email or password parameter is missing in POST request.')
            });
    });


    it("API-9: DELETE to Verify Login. Expect 405 status code", () => {

        //make invalid delete request to /verifyLogin
        makeRequest('DELETE', verifyLoginUrl, {})
            .then((response) => {
                verifyRequestResponseCodeAndMessage(response, 405, "This request method is not supported.");
            });
    });


    it("API-10: POST to Verify Login with invalid details. Expect 404 status code", () => {

        const requestBody = {
            email: "pretendsdgdfh@gfhrt546u6gfd.ctrytom",
            password: "pasffgffwe",
        }

        //make request to /verifyLogin with user credentials that do not exist on system
        makeRequest('POST', verifyLoginUrl, requestBody)
            .then((response) => {
                verifyRequestResponseCodeAndMessage(response, 404, "User not found!");
            });
    });
});
