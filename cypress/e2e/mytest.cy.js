/// <reference types = "Cypress" />
const fs = require('fs').promises;

describe('my first test', () => {
  it('passes', () => {
    cy.visit("https://rahulshettyacademy.com/dropdownsPractise/") // 
    cy.get("#autosuggest").type("Ind") // click input box
    cy.wait(3000)
    cy.get("#ui-id-5").click({force:true}) // to click hidden element
    cy.xpath("//input[@id='ctl00_mainContent_rbtnl_Trip_1']").click() // Click radio button
    cy.get("#ctl00_mainContent_ddl_originStation1_CTXT").click()
    cy.xpath("//a[@value='DEL']").click()
    cy.wait(3000)
    cy.xpath("//input[@id='ctl00_mainContent_ddl_destinationStation1_CTXT']").click()
    cy.get("#ctl00_mainContent_ddl_destinationStation1_CTXTaction").eq(0).click()

    // cy.get("#ctl00_mainContent_ddl_destinationStation1_CTXT")
    cy.get('a[text="Jaipur (JAI)"]').eq(1).click()
    
    
    
    
    
    
    
    // cy.get('input[type="radio"]').eq(1).check()
  })
})