import { mount } from "cypress/vue";
import { h } from "vue";

import Pagination from "./Pagination.vue";

describe("Pagination", () => {
  it("should disable/enable back and next buttons", () => {
    mount(Pagination, {
      props: {
        pagination: {
          totalCount: 100,
          from: 20,
          to: 20,
          canGoBack: false,
          canGoForward: true,
        },
      },
    });

    cy.get(".pagination").find(".back-btn").should("be.disabled");
    cy.get(".pagination").find(".next-btn").should("not.be.disabled");
  });

  it("should disable/enable back and next buttons", () => {
    const expectedText = "15 to 24";

    mount(Pagination, {
      props: {
        pagination: {
          totalCount: 100,
          from: 15,
          to: 24,
          canGoBack: false,
          canGoForward: true,
        },
      },
    });

    cy.get(".pagination")
      .find(".page-items")
      .should("contain.html", expectedText);
  });
});
