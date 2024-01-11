describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.automationteststore.com/')
    cy.title().should("include",'A place to practice your automation skills')     /// to verify the title
    cy.url().should("include",'https://www.automationteststore.com/')  /// to verify the url
    cy.get("a[href$='contact']").click()  
    cy.url().should("include",'contact')  /// to verify the contact url
    cy.get("#ContactUsFrm_first_name").type('bhawani')
    cy.get("#ContactUsFrm_email").type('shekhawat.bs13@gmail.com')
    cy.get("#ContactUsFrm_enquiry").type('i am indian')
    cy.get("button[title='Submit']").click()
   // cy.get('textarea[name="enquiry"]')

  })

  })