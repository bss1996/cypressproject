/// <reference types = 'Cypress' />
const fs = require('fs').promises;


describe('Ecommerce Website',()=>{

    it('passes',()=>{
        cy.visit("https://www.automationteststore.com/") 
        cy.get('#customer_menu_top > li > a').click()
        cy.xpath("//input[@id='loginFrm_loginname']").type('bhawani')
        cy.xpath("//input[@id='loginFrm_password']").type('singh')
        cy.xpath("//button[@title='Login']//i[@class='fa fa-lock']").click()
    })
})