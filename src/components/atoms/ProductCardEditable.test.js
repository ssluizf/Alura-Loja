import { mount } from "@vue/test-utils";
import ProductCardEditable from "./ProductCardEditable.vue";
import convertCurrency from '../../utils/convertCurrency'

const productTest = {
  id: "1",
  title: "Produto XYZ",
  price: 10,
  imgUrl: "",
  categoryId: 1
}

test("displays title", () => {
  const wrapper = mount(ProductCardEditable, {
    props: {
      product: productTest
    },
  });

  expect(wrapper.text()).toContain(productTest.title);
});

test("displays price", () => {
  const wrapper = mount(ProductCardEditable, {
    props: {
      product: productTest
    },
  });

  expect(wrapper.text()).toContain(convertCurrency(productTest.price));
});

test("displays id", () => {
  const wrapper = mount(ProductCardEditable, {
    props: {
      product: productTest
    },
  });

  expect(wrapper.text()).toContain("#" + productTest.id);
});
