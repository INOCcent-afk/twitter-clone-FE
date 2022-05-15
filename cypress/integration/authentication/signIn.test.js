/// <reference types="cypress" />

describe("Twitter Landing Page", () => {
  it("test one", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=landing-title")
      .contains("Happening now")
      .should("exist");
  });
});
