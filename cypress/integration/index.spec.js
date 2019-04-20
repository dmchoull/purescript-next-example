describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5000/");
  });

  it("renders correctly", () => {
    cy.contains("Hello from PureScript, World!").should("be.visible");
  });
});
