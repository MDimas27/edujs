/// <reference types="cypress" />

describe('My First Test', () => { 
    // it('Visit the kitchen sink', () => {
    //     cy.visit('https://example.cypress.io')
    //     cy.get('h1').contains('Kitchen Sink')
    //     cy.contains('get').click()
    //     cy.url().should('include', '/commands/querying')
    // }); 

    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()


        // Should be on a new URL which includes '/commands/actions'
        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email').type('dimas@email.com').should('have.value', 'dimas@email.com')
    });

})
