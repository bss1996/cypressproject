/// <reference types ='cypress'/>

describe("crickbuzz signup", () => {
    it("tests crickbuzz signup", () => {
      cy.viewport(1263, 150);
      cy.visit("https://www.cricbuzz.com/");
      cy.get("div.cb-user-itm span").click();
      cy.location("href").should("eq", "https://www.cricbuzz.com/premium-subscription/user/login");
      cy.get("#cb-user-email-input").click();
      cy.get("#cb-plus-signup-option").click();
      cy.location("href").should("eq", "https://www.cricbuzz.com/premium-subscription/user/sign-up");
      cy.get("#cb-user-email-input").click();
      cy.get("#cb-user-email-input").type("shekhawat.bs13@gmail.com");
      cy.get("#email-continue-button").click();
      cy.get("#cb-signup-email-otp input:nth-of-type(1)").click();
      cy.get("#cb-signup-email-otp input:nth-of-type(1)").type("1");
      cy.get("#cb-signup-email-otp input:nth-of-type(2)").type("2");
      cy.get("#cb-signup-email-otp input:nth-of-type(3)").type("3");
      cy.get("#cb-signup-email-otp input:nth-of-type(4)").type("4");
      cy.get("#cb-signup-email-otp input:nth-of-type(5)").type("5");
      cy.get("#cb-signup-email-otp input:nth-of-type(6)").type("6");
      cy.get("#cb-signup-email-otp button").click();
    });
  });
  