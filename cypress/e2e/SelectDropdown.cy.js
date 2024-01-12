/// <reference types ='cypress' />

describe('Validate Dropdowns',()=>{


    it('Validate select based dropdown',()=>{

        cy.visit('https://rahulshettyacademy.com/dropdownsPractise/')
        cy.get('#autosuggest').type('Ind')
        cy.wait(3000)
        cy.get("#ui-id-4").click({force:true}) 
        cy.get('#ctl00_mainContent_rbtnl_Trip_1').check()
        // cy.get('.ui-menu-item').each(($ele,index,$list)=>{
        // const list = $ele.text()
        // const country = "India"
        // cy.log(list)
        // if(list === country){
            
        //     $ele.trigger("click")
        // }
        // })
        
    })

})