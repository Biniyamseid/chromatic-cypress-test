describe("Check if server is live", () => {
  it("server is live", () => {
    cy.visit("http://localhost:3000");
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("already existing user (in memory database)", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get("#email-field").clear("place@holder.com");
    cy.get("#email-field").type("place@holder.com");
    cy.get(".gap-4 > .gradient").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it("register new user (in memory database)", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("localhost:3000");
    cy.get("#email-field").clear("new");
    cy.get("#email-field").type("new@gmail.com");
    cy.get(".gap-4 > .gradient").click();
    cy.get(".justify-between > .relative > .flex").click();
    cy.get("#terms-checkbox").check();
    cy.get("#name").clear("A");
    cy.get("#name").type("Test User");
    cy.get("#surname").click();
    cy.get("#name").clear("Test Ad");
    cy.get("#name").type("User");
    cy.get("#surname").clear("User");
    cy.get("#surname").type("User");
    cy.get(":nth-child(6) > .group > #password").clear("s");
    cy.get(":nth-child(6) > .group > #password").type("string");
    cy.get(":nth-child(7) > .group > #password").clear("s");
    cy.get(":nth-child(7) > .group > #password").type("string");
    cy.get(".py-1\\.5 > .gradient").click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Logintest', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('#email-field').clear('te');
    cy.get('#email-field').type('testuser1@gmail.com');
    cy.get('.gap-4 > .gradient').click();
    cy.get('#name').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('RegistrationTest', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('#email-field').clear('tes');
    cy.get('#email-field').type('test@gmail.com');
    cy.get('.mx-auto > :nth-child(1)').click();
    cy.get(':nth-child(2) > .flex-1').click();
    cy.get(':nth-child(3) > .flex-1').click();
    cy.get('.gap-4 > .gradient').click();
    cy.get('#name').clear('a');
    cy.get('#name').type('test');
    cy.get('#surname').clear('use');
    cy.get('#surname').type('user');
    cy.get(':nth-child(6) > .group > #password').clear('A');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Registrationandlogintest', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('#email-field').clear('us');
    cy.get('#email-field').type('usertesting@gmail.com');
    cy.get('.gap-4 > .gradient').click();
    cy.get('#name').click();
    /* ==== End Cypress Studio ==== */
  });
});
