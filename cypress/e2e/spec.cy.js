/// <reference types = "Cypress" />
const fs = require('fs').promises;

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.xpath("//input[@name='username']").type('Admin')
    // cy.xpath("//input[@name='password']").type('admin123')
    cy.get("button[type='submit']").click()
})
})