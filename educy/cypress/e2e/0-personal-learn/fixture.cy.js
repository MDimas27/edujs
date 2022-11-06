/// <reference types="cypress" />

describe('first test saucedemo', () => {

    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
    });


    it('Should try to login', () => {
        cy.fixture("user").then(user => {
            const password = user.password

            cy.get('input[name="user-name"]').clear()
            cy.get('input[name="user-name"]').type('standard_user')

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('input[name="login-button"]').click()

            cy.url().should('include', '/inventory')

            cy.pause()

            cy.visit('https://www.saucedemo.com/')

            cy.get('input[name="user-name"]').clear()
            cy.get('input[name="user-name"]').type('locked_out_user')

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('input[name="login-button"]').click()

            cy.get('h3').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')

            cy.pause()

            cy.get('input[name="user-name"]').clear()
            cy.get('input[name="user-name"]').type('problem_user')

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('input[name="login-button"]').click()

            cy.pause()

            cy.visit('https://www.saucedemo.com/')

            cy.get('input[name="user-name"]').clear()
            cy.get('input[name="user-name"]').type('performance_glitch_user')

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('input[name="login-button"]').click({ timeout: 10000 })

            cy.url().should('include', '/inventory')

            cy.pause()

        })

    });

})

