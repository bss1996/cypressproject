/// <reference types = 'Cypress'/>

// import { data } from "cypress/types/jquery"

describe('Read Write Test Suite',()=>{

    it('Write to a file',()=>{
        cy.writeFile('firstTest.text','Cypress Test \n')
        cy.writeFile('firstTest.text','Hello World',{ flag: "a+"
        })
        
        cy.writeFile("Test1.json",{ data1: "Test1", data2: "Test2"})

    })

    it('Read File',()=>{
        cy.readFile("firstTest.text").then((data) =>{
            cy.log("++print++", data)
        })

        cy.readFile("firstTest.text").should("exist").and('contain', "Test")
    })
})