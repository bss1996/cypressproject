/// <reference types ='Cypress' />

describe('Find case sensitive search on the paper',()=>{

    it('verify exact match case in Cypress',()=>{
        cy.visit('https://www.amazon.ae')
        cy.contains('best seller',{matchCase: false}).click()
    })
})