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
    cy.get('a[text="Jaipur (JAI)"]').eq(1).click() 
    cy.wait(3000)
    cy.xpath("//input[@id='ctl00_mainContent_view_date1']").click()
    cy.get('td[data-handler="selectDay"]').contains('30').click()
    cy.wait(3000)
    cy.xpath("//input[@id='ctl00_mainContent_view_date2']").click()
    // cy.get("//a[@class='ui-state-default ui-state-active ui-state-hover']").click()
    cy.xpath("//input[@id='ctl00_mainContent_view_date2']").click()
    cy.wait(1000)
    cy.xpath("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()
    cy.xpath("(//a[normalize-space()='10'])[1]").click()
    cy.wait(2000)
    cy.xpath("//div[@id='divpaxinfo']").click()
    cy.wait(1000)
    const add = "//span[@id='hrefIncAdt']"
    for (let i=1;i<5;i++)
    cy.xpath(add).click()
    cy.wait(1000)
    cy.xpath("//span[@id='hrefIncChd']").click()
    const add1 = "//span[@id='hrefIncChd']"
    for (let i=1;i<4;i++)
    cy.xpath(add1).click()
    cy.wait(1000)
    cy.xpath("//span[@id='hrefIncInf']").click()
    const add2 = "//span[@id='hrefIncInf']"
    for (let i=1;i<4;i++)
    cy.xpath(add2).click()
    cy.wait(1000)
    cy.xpath("//input[@id='btnclosepaxoption']").click()
    cy.wait(1000)
    cy.get("#ctl00_mainContent_DropDownListCurrency").select('AED')

    // cy.xpath("//span[@id='hrefIncAdt']").click()












    // cy.get('input[type="radio"]').eq(1).check()
  })
})