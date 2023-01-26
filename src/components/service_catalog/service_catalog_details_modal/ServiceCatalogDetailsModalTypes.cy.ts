import { mount } from "cypress/vue";
import ServiceCatalogDetailsModalTypes from "./ServiceCatalogDetailsModalTypes.vue";

describe("ServiceCatalogDetailsModalTypes", () => {
  it("should highlight the HTTP type", () => {
    mount(ServiceCatalogDetailsModalTypes, {
      props: {
        type: "HTTP",
      },
    });

    cy.get(".types").find(".type-http").should("have.class", "bg-[#BDD3F9]");
    cy.get(".types")
      .find(".type-rest")
      .should("not.have.class", "bg-[#BDD3F9]");
  });

  it("should highlight the REST type", () => {
    mount(ServiceCatalogDetailsModalTypes, {
      props: {
        type: "REST",
      },
    });

    cy.get(".types")
      .find(".type-http")
      .should("not.have.class", "bg-[#BDD3F9]");
    cy.get(".types").find(".type-rest").should("have.class", "bg-[#BDD3F9]");
  });
});
