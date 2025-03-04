
//Created types so that information could easily be passed as parameters to methods instead of having to specify each value
//ie for creating a new user, you pass a User into params instead of name, email, password, date of birth, mobile, address, state, zipcode...

type User = {
    title: string,
    name: {
        firstName: string,
        lastName: string},
    email: string,
    password: string,
    dateOfBirth: {
        day: number,
        month: string,
        year: string
    }
    newsletters: boolean,
    specialoffers: boolean,
    addressInfo: AddressInfo,
    mobileNumber: string
}

type AddressInfo = {
    firstName: string,
    lastName: string,
    company: string, 
    address: string,
    address2: string,
    country: string,
    state: string,
    city: string,
    zipcode: string,
}

type Card = {
    name: string,
    number: string,
    cvc: string,
    expiryMonth: string,
    expiryYear: string
}