import { mount } from "cypress/vue";
import SearchTextField from "./SearchTextField.vue";

describe("SearchTextField", () => {
  it("should render text from props", () => {
    const text = "Test text";
    mount(SearchTextField, {
      props: {
        modelValue: text,
      },
    });

    cy.get("input").should("have.value", text);
  });

  it("should emit changes", () => {
    const originalValue = "Test text";
    const newValue = "Test text changed";
    mount(SearchTextField, {
      props: {
        modelValue: originalValue,
      },
    });

    cy.get("input").should("have.value", originalValue);
    cy.get("input").clear();
    cy.get("input")
      .type(newValue)
      .then(() => {
        cy.wrap(Cypress.vueWrapper.emitted()).should("have.property", "input");
        cy.get("input").should("have.value", newValue);
      });
  });
});
