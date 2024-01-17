/// <reference types = 'Cypress' />


describe('', () => {
    it('', () => {
        cy.fixture('example').then((data)=>{
            globalThis.data = data
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get('input[name="username"]').type(data.username)
            cy.get('input[name="password"]').type(data.password)
            cy.get('button[type="submit"]').click()
        })
    });
});