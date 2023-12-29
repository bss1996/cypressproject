/// <reference types = 'Cypress' />

describe('handling alerts',()=>{

    it('handling alerts',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsAlert()"]').click()
        
        cy.on('window:alert',(p)=>{
            expect(p).to.contains('I am a JS Alert')
        })

    })
    it('handling confirm alerts',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsConfirm()"]')

        cy.on('window:alert',(p)=>{
            expect(p).to.contains('I am a JS Alert')
        
        })
        cy.on('window:confirm',()=>true)
    })
    it('handling JS Prompt',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{failOnStatusCode: false},{
            auth: {
                username: "admin",
                password: "admin"
            }
        })
    })
})