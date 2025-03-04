/// <reference types="cypress" />

//Created command as data-qa was used frequently and was an ideal locator
Cypress.Commands.add('getDataQa', (dataQaSelector: string) => {
    return cy.get(`[data-qa="${dataQaSelector}"]`);
})

Cypress.Commands.add('getHref', (href: string) => {
    return cy.get(`a[href="${href}"]`);
})

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }