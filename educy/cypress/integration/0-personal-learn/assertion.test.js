/// <reference types="cypress" />

describe('My First Test', () => { 
    // it('Should load correct url', () => {
    //     cy.visit('https://example.com/', {timeout: 10000})
    // });

    // it('Should check correct url', () => {
    //     cy.url().should('include', 'example.com')
    // });

    // it('Should check for correct element on the page', () => {
    //     cy.get('h1').should('be.visible')
    // });

    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        cy.pause()

        cy.contains('type').click()

        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')

        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email').type('dimas@email.com').should('have.value', 'dimas@email.com')


    });
})