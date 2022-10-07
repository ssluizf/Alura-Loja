import { mount } from "@vue/test-utils";
import ContainerDefault from "./ContainerDefault.vue";

test("passing more classes", () => {
  const wrapper = mount(ContainerDefault, {
    props: {
      class: "container",
    },
  });

  expect(wrapper.classes("container")).toBe(true);
});
