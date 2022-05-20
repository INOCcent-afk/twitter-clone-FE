/// <reference types="cypress" />

describe("Twitter signup form", () => {
  // We can't test creating an account because we can't reset our DB every test
  // We will focus on User interaction for now :)

  const username = "test";
  const tel = "09000000000";
  const month = "january";
  const day = "1";
  const year = "2022";

  const email = "test@gmail.com";
  const password = "passwordtest";

  it("should fill out step 1 of 3 without errors", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=signup-button]").click();

    cy.get("h2").contains("Create your account");

    cy.url().should("include", "/flow/signup");

    cy.get("[data-testid=next-button]").should("be.disabled");

    cy.get("input[name=username]").type(username);

    cy.get("input[name=tel]").type(tel);

    cy.get("select[name=month]").select(month);

    cy.get("select[name=day]").select(day);

    cy.get("select[name=year]").select(year);

    cy.get("[data-testid=next-button]").should("not.be.disabled");

    cy.get("[data-testid=next-button]").click();
  });

  it("should fill out step 2 out of 3 without errors", () => {
    cy.get("[data-testid=step]").contains("Step 2 of 3");

    cy.get("[data-testid=next-button]").click();
  });

  it("should fill out step 3 out of 3 without errors", () => {
    cy.get("[data-testid=step]").contains("Step 3 of 3");

    cy.get("[data-testid=submit-button]").should("be.disabled");

    cy.get("input[name=email]").type(email);

    cy.get("input[name=password]").type(password);

    cy.get("[data-testid=submit-button]").should("not.be.disabled");
  });

  it("should be able to close modal without errors", () => {
    cy.get("body").trigger("keydown", { keyCode: 27 });

    cy.url().should("include", "/");
  });
});
