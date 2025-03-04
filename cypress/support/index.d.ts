declare namespace Cypress {
    interface Chainable<Subject = any> {
        getDataQa(dataQaSelector: string): Chainable<any>;
        getHref(href: string): Chainable<any>;
      }
}