/// <reference types = 'Cypress' />

describe('This is file upload tutorial', () => {


    it('Learn cypress file upload', () => {
        cy.visit('https://the-internet.herokuapp.com/upload')

        const documents = 'lalkila.jpg'
        cy.get('#file-upload').attachFile(documents)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('lalkila')
    });
});