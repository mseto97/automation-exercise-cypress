import { faker } from "@faker-js/faker"

//Generates random account user details using faker library and returns it as type User
export const generateNewUserAccountDetails = (): User => {
    const fName = faker.person.firstName();
    const lName = faker.person.lastName();

    const title = Math.random() < 0.5 ? "Mr" : "Mrs"
    const countries = [
        "India", "New Zealand", "United States", "Israel", "Singapore",
        "Canada", "Australia"
    ];

    // Randomly select a country from the allowed list
    const country = countries[Math.floor(Math.random() * countries.length)];

    return {
        title: title,
        name: {
            firstName: fName,
            lastName: lName
        },
        email: faker.internet.email(),
        password: Cypress.env('password'),
        dateOfBirth: {
            day: generateRandomNumber(1, 28),
            month: faker.date.month(),
            year: String(generateRandomNumber(1925, 2010))
        },
        newsletters: faker.datatype.boolean(),
        specialoffers: faker.datatype.boolean(),
        addressInfo: {
            firstName: fName,
            lastName: lName,
            company: faker.company.name(),
            address: faker.location.streetAddress(),
            address2: faker.location.secondaryAddress(),
            country: country,
            state: faker.location.state(),
            city: faker.location.city(),
            zipcode: faker.location.zipCode(),
        },
        mobileNumber: faker.phone.number()
    };
}

//generates random card details and returns type Card
export const generateNewCardDetails = (): Card => {
    return {
        name: faker.person.fullName(),
        number: faker.finance.creditCardNumber(),
        cvc: faker.finance.creditCardCVV(),
        expiryMonth: String(generateRandomNumber(1, 12)),
        expiryYear: String(generateRandomNumber(2026, 2035))
    }
}

//Generates random number between specified min and max
export const generateRandomNumber = (minimum: number, maximum: number) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}