import { mount } from "@vue/test-utils";
import Banner from "./Banner.vue";

test("displays title", () => {
  const wrapper = mount(Banner, {
    props: {
      title: "Hello World"
    },
  });

  expect(wrapper.text()).toContain("Hello World");
});

test("displays description", () => {
  const wrapper = mount(Banner, {
    props: {
      description: "Hello World"
    },
  });

  expect(wrapper.text()).toContain("Hello World");
});

test("displays btnLabel", () => {
  const wrapper = mount(Banner, {
    props: {
      btnLabel: "Hello World"
    },
  });

  expect(wrapper.text()).toContain("Hello World");
});

