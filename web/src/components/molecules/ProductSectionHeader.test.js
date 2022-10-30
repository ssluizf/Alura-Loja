import { mount } from "@vue/test-utils";
import ProductSectionHeader from "./ProductSectionHeader.vue";

test("displays title", () => {
  const wrapper = mount(ProductSectionHeader, {
    props: {
      title: "Hello World",
    },
  });

  expect(wrapper.text()).toContain("Hello World");
});
