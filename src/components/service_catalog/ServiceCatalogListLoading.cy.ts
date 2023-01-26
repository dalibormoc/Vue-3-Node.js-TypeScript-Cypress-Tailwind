import { mount } from "cypress/vue";

import ServiceCatalogListLoading from "./ServiceCatalogListLoading.vue";

describe("ServiceCatalogListLoading", () => {
  it("should render the correct amount of loading items", () => {
    mount(ServiceCatalogListLoading, {
      props: {
        itemsPerPage: 5,
      },
    });

    cy.get(".loading").find(".loading-item").should("have.length", 5);
  });
});
