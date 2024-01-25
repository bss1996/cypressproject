/// <reference types = "cypress" /> 

describe('Iterate over elements',()=>{
    it('Navigating to specific product pages',()=>{
        cy.visit("https://automationteststore.com/")
        // cy.get('#categorymenu >nav>ul>li >a').contains("Hair Care").click()
        cy.xpath('//*[@id="categorymenu"]/nav/ul/li[7]/a').click()

    })
})