/// <reference types="cypress" />

describe("Twitter Landing Page", () => {
  const email = "test@gmail.com";
  const password = "passwordtest";

  it("should ", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=signin-button]").click();

    cy.get("input[name=identifier]").type(email);
    cy.get("input[name=password]").type(password);

    cy.get("[data-testid=submit-button]").click();

    cy.url().should("include", "home", () => {
      expect(localStorage.getItem("jwt")).to.exist();
    });
  });
});
