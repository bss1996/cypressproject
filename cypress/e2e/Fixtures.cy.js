/// <reference types ='cypress' />

describe('', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('', () => {
        cy.fixture('example.json').then((testdata) => {
            if (Cypress._.isArray(testdata)) {
                testdata.forEach((data) => {
                    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
                    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
                });
            } else {
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testdata.username)
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(testdata.password)
                
            }
        })
        cy.get('.oxd-button').click()
    })
})
