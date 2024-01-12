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
    it('Create crickbuzz Account',()=>{
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
    it('',()=>{
        cy.visit("https://www.cricbuzz.com/");
    cy.get("div.cb-user-itm span").click();
    cy.location("href").should("eq", "https://www.cricbuzz.com/premium-subscription/user/login");
    cy.get("#cb-user-email-input").click();
    cy.get("#cb-plus-signup-option").click();
    cy.location("href").should("eq", "https://www.cricbuzz.com/premium-subscription/user/sign-up");
    cy.get("#cb-user-email-input").click();
    cy.get("#cb-user-email-input").type("shekhawat.bs13@gmail.com");
    cy.get("#email-continue-button").click();
    cy.get("#cb-signup-email-otp input:nth-of-type(1)").click();
    cy.get("#cb-signup-email-otp input:nth-of-type(1)").type("1");
    cy.get("#cb-signup-email-otp input:nth-of-type(2)").type("2");
    cy.get("#cb-signup-email-otp input:nth-of-type(3)").type("3");
    cy.get("#cb-signup-email-otp input:nth-of-type(4)").type("4");
    cy.get("#cb-signup-email-otp input:nth-of-type(5)").type("5");
    cy.get("#cb-signup-email-otp input:nth-of-type(6)").type("6");
    cy.get("#cb-signup-email-otp button").click();
    })
    it.only('Create cricbuzz Account', () => {
        cy.visit("https://www.cricbuzz.com/");
        cy.get('#cb-plus-user-icon').click();
        cy.get('#cb-plus-signup-option').click();
        cy.get('#cb-user-email-input').type('shekhawat.bs13@gmail.com');
        cy.get('#email-continue-button').click();
        typeOtp('#digit-', '768908'); // Change '555555' to your actual OTP
    });
    
    function typeOtp(selectorPrefix, otp) {
        for (let i = 0; i < otp.length; i++) {
            cy.get(`${selectorPrefix}${i + 1}`).type(otp[i]);
        }
    }
    
})