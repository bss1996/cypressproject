/// <reference types= 'cypress'/>

describe('Validate login functionality',()=>{
    it.only('Validate login with valid credential',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]').type('Admin')
        cy.get(".oxd-form-row >div >div > input[name='password']").type('admin123')
        cy.get("div[class='oxd-form-actions orangehrm-login-action'] >button").click()
        //cy.xpath()/^E\w+/
        cy.get(".oxd-main-menu > li >a").contains('Leave').click()
        // cy.get(".oxd-topbar-body-nav > ul").contains(/^E\w+/).click()
        cy.get("div[class='oxd-topbar-body'] li:nth-child(5)").click()
    })
    it('',()=>{
        
    })
})