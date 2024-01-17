/// <reference types = 'Cypress' />

describe('This is a drag and drop tutorial',()=>{
    
    
    it('Learn drag and drop',()=>{

        cy.visit('https://vishalok12.github.io/jquery-dragarrange/')
        cy.get('.d-1').trigger('mousedown').drag('.d-3')
        
    })
})