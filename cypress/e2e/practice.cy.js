/// <reference types = 'cypress'/>

describe('create gmail account functionality',()=>{
    it('verify the gmail account',()=>{
        cy.visit("https://www.google.com/")
        cy.url().should("include","https://www.google.com/")
        cy.get('div[class="SDkEP"]').find("div").eq(2).type('gmail signup{enter}') /// to press enter key 
        // Example using each to loop through elements
        cy.get('h3[class="LC20lb MBeuO DKV0Md"]').each(($element) => {
        // Check if the current element has the expected text
        if ($element.text().includes('Sign in – Google accounts')) {
      // Perform your assertions or actions for the matching element
        cy.wrap($element).should('have.text', 'Sign in – Google accounts').click();
    }
  });
  
    })
    it.only('Create crickbuzz Account',()=>{
        cy.visit("https://www.cricbuzz.com/")
        cy.get('#cb-plus-user-icon').click()
        cy.get('#cb-plus-signup-option').click()
        cy.get('#cb-user-email-input').type('shekhawat.bs13@gmail.com')
        cy.get('#email-continue-button').click()
        // cy.get('#digit-1').type('5')
        // cy.get('#digit-2').type('5')
        // cy.get('#digit-3').type('5')
        // cy.get('#digit-4').type('5')
        // cy.get('#digit-5').type('5')
        // cy.get('#digit-6').type('5')
        cy.get('.cb-text-center]').type('343434')
    })
})