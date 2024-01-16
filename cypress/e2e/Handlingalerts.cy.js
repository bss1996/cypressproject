/// <reference types = 'Cypress' />

describe('Handling of Alerts in cypress', ()=>{

    it('hanlding of Basic Alert',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get(':nth-child(1) > button').click()
        cy.on('window:alert',(alertText)=>{
            expect(alertText).to.contains('I am a JS Alert')
        })



    })

    it('hanlding of Confirm Alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get(':nth-child(2) > button').click();

        cy.on('window:alert',(AcceptConfirm)=>{
            expect(AcceptConfirm).to.contains('I am a JS Alert')
        })
    })
    it('hanlding of Confirm Alert Cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get(':nth-child(3) > button')
        cy.on('window:confirm',(CancelPopup)=>{
        return false; 
        })
    })
})