import { shallowMount } from "@vue/test-utils";

import ProductList from "./ProductList.vue";
import { store } from "../../store/index";

test("check showAll", () => {
  const wrapper = shallowMount(ProductList, {
    props: {
      showAll: true,
    },
    global: {  
      mocks: {
        $store: store,
      }
    }
  });

  expect(wrapper.classes("list-container")).toBe(false);
});
