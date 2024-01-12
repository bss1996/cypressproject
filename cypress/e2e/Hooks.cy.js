/// <reference types = 'cypress'/>


describe('Smoke Test',()=>
{

    before(function()
    {

        cy.visit('https://www.saucedemo.com/')
    })

    beforeEach(function(){

        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    
    })

    it('Validate link',()=>
    {
        cy.get("a[id='item_4_title_link'] div[class='inventory_item_name ']").click()
    })

    
    it('Validate add to cart ',()=>
    
    {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
    })

    afterEach(function(){

        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
})