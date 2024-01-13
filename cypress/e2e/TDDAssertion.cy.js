/// <reference types = 'Cypress' />

describe('Validate complex data using Assert',()=>{

    it('Assert Functionality',()=>{
        cy.visit('https://www.google.com')

        // Asserting strings

        let firstName = 'Bhawanisingh'
        assert.equal(firstName,'Bhawanisingh')
    })
})