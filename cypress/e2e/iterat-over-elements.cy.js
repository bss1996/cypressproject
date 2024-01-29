/// <reference types = "cypress" /> 

describe('Iterate over elements',()=>{
    it('Navigating to specific product pages',()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('#categorymenu >nav>ul>li >a').contains("Hair Care").click()
        // cy.xpath('//*[@id="categorymenu"]/nav/ul/li[7]/a').click()
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
            cy.log("Index:" + index + " : " + $el.text())
        })

    })

    it('Add specific product to basker',()=>{
        cy.visit("https://automationteststore.com/")
        cy.get('#categorymenu >nav>ul>li >a').contains("Hair Care").click()
    
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
            if($el.text().includes('Pantene Pro-V Conditioner, Classic Care')){
                cy.wrap($el).click()
            }


        })
    
    
    })

})