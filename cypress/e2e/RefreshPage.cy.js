/// <reference types = 'Cypress' />

describe('Refresh page in Cypress',()=>{

    it('Refresh page',()=>{
        cy.visit('https://www.amazon.ae/')
        cy.contains('Best Seller').should('be.visible')
        cy.reload()
        cy.contains('Best Seller').should('be.visible')

        cy.reload(true)
        cy.contains('Best Seller').should('be.visible')

        cy.reload({pageloadtimeout:5000})
        cy.contains('Best Seller').should('be.visible')



    })
})
