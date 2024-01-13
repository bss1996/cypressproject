/// <reference types = 'cypress' />



describe('BDD Style Assertion',()=>{

    it('Validate OrangeHRM login page',()=>{


        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.url().should('include', '/auth/login')
        cy.title().should('eq','OrangeHRM')
        cy.get('.oxd-text--h5').should('include.text', 'Login')
        cy.get('.oxd-text--h5').should('not.contain.text', 'Logout')

    })
})