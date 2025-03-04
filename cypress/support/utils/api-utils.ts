

//Function for making requests
//This was created as all post requires require the content type header and was a means for slight code duplication
export const makeRequest = (method: string, url: string, body?: any) => {
    return cy.request({
        method: method.toUpperCase(),
        url,
        body,
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
    })
}

//Extracting a JSON object from a string of HTML content, which is the format of request responses to these end points
export const extractJSONObject = (response: { body: any; }) => {
    const htmlBody = response.body;                     //get HTML content from response
    const jsonStringMatch = htmlBody.match(/{.*}/);     //find JSON string inside HTML using regex
    return JSON.parse(jsonStringMatch[0])               //Return the parsed JSON object
}

//Function to verify the response properties (responseCode, message)
//The response is not formatted in JSON where you can directly access the properties using dot notation directly from the response
export const verifyRequestResponseCodeAndMessage = (response: Cypress.Response<any>, expectedCode: number, expectedMessage: string) => {
    const responseContent = extractJSONObject(response);
    expect(responseContent.responseCode, 'responseCode').to.equal(expectedCode);
    expect(responseContent.message, 'message').to.equal(expectedMessage);
};
