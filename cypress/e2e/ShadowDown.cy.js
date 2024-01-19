/// <reference types = 'Cypress' />

describe('Shadow DOM elements', () => {

    it('Shadow dom handling', () => {
        cy.visit("https://selectorshub.com/xpath-practice-page/")

        cy.get('#userName').shadow().find('#app2').shadow().find('#pizza').type('Testing shadow DOM')
    })
})


/* 3 ways :

1=> .shadow()
2=> global config , "includeShadowDom":true
3=> test step level, {"includeShadowDom":true}

*/