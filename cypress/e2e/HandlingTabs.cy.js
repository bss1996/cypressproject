/// <reference types = 'Cypress' />


describe('Handling Tabs',()=>{

    it('Testing tabs',()=>{

        cy.visit('https://www.google.com/gmail/about/')
        cy.get('.footer__links > :nth-child(2) > :nth-child(4) > .link').invoke('removeAttr', 'target').click()
        cy.get("#Learn more about how people work together with Google Workspace']").click()
    })
})