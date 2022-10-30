import { mount } from "@vue/test-utils";
import ButtonDefault from "./ButtonDefault.vue";

test("displays message", () => {
  const wrapper = mount(ButtonDefault, {
    props: {
      label: "Hello world",
    },
  });

  expect(wrapper.text()).toContain("Hello world");
});

test("passing none variant", () => {
  const wrapper = mount(ButtonDefault, {
    props: {
      label: "Hello world",
    },
  });

  expect(wrapper.classes("btn-primary")).toBe(true);
});

test("passing variant", () => {
  const wrapper = mount(ButtonDefault, {
    props: {
      label: "Hello world",
      variant: "secondary"
    },
  });

  expect(wrapper.classes("btn-secondary")).toBe(true);
});

test('emits an event when clicked', () => {
  const wrapper = mount(ButtonDefault)

  wrapper.find('button').trigger('click')

  expect(wrapper.emitted()).toHaveProperty('onClick')
})
