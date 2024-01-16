/// <reference types = 'Cypress' />

describe('Handling Iframes', ()=>{

    it('Validate that user should be able to write a text inside the available area,', ()=>{

        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.get('#mce_0_ifr').then(($iframe)=>{

            let iframebody = $iframe.contents().find('body')
            cy.wrap(iframebody)
            .clear()
            .type("Welcome to cypress tutorial by testing on Handling Iframes")
            .type('{selectall}')
            cy.get('[aria-label="Bold"] > .tox-icon > svg').click()
        })




    })
})