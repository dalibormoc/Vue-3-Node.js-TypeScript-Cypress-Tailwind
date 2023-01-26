import { mount } from "cypress/vue";
import { h } from "vue";

import Modal from "./Modal.vue";

describe("Modal", () => {
  it("should render given slots", () => {
    const slotText = "Slot test text";

    mount(Modal, {
      props: {},
      slots: {
        default: () => h("p", { class: "test-text-class" }, slotText),
      },
    });

    cy.get(".modal").find(".test-text-class").should("contain.html", slotText);
  });
});
