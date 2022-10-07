import { mount } from "@vue/test-utils";
import Input from "./Input.vue";

test("displays message", () => {
  const wrapper = mount(Input, {
    props: {
      label: "Hello world",
    },
  });

  expect(wrapper.text()).toContain("Hello world");
});

test("passing none variant", () => {
  const wrapper = mount(Input, {
    props: {
      label: "Hello world",
    },
  });

  expect(wrapper.find("#field-input").exists()).toBe(true);
});

test("passing variant", () => {
  const wrapper = mount(Input, {
    props: {
      label: "Hello world",
      variant: "textarea"
    },
  });

  expect(wrapper.find("#field-textarea").exists()).toBe(true);
});