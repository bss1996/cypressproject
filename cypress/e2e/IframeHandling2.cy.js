/// <reference types = 'Cypress' />

describe('Handling Iframes', ()=>{

    it('Validate that user should be able to click iframe', ()=>{

        cy.visit('https://www.google.com/')
        cy.get('iframe[name="c"]').should('be.visible').then(($iframe)=>{
            cy.iframe($iframe).then(($iframeBody) => {
                $iframeBody.find('.some-button-selector-inside-iframe').click();
            })
        })
            })
    })