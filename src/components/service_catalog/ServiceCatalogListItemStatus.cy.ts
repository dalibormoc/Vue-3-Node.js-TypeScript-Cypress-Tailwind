import { mount } from "cypress/vue";
import ServiceCatalogListItemStatus from "./ServiceCatalogListItemStatus.vue";

describe("ServiceCatalogListItemStatus", () => {
  it("should render the correct status", () => {
    mount(ServiceCatalogListItemStatus, {
      props: {
        status: "published",
      },
    });

    cy.get(".status").find(".published").should("exist");
    cy.get(".status").find(".unpublished").should("not.exist");
    cy.get(".status").find(".pending").should("not.exist");
  });

  it("should render the correct status", () => {
    mount(ServiceCatalogListItemStatus, {
      props: {
        status: "unpublished",
      },
    });

    cy.get(".status").find(".published").should("not.exist");
    cy.get(".status").find(".unpublished").should("exist");
    cy.get(".status").find(".pending").should("not.exist");
  });

  it("should render the correct status", () => {
    mount(ServiceCatalogListItemStatus, {
      props: {
        status: "pending",
      },
    });

    cy.get(".status").find(".published").should("not.exist");
    cy.get(".status").find(".unpublished").should("not.exist");
    cy.get(".status").find(".pending").should("exist");
  });
});
