/// <reference types = 'cypress-downloadfile' />

describe('This is file download tutorial',()=>{
    
    it('Learn Cypress file Download',()=>{

        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg', 'mydownloads','example.jpg')
    })
})