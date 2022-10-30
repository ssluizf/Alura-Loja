import { mount } from "@vue/test-utils";
import ProductDetails from "./ProductDetails.vue";
import convertCurrency from "../../utils/convertCurrency";

const productTest = {
  id: "1",
  title: "Produto XYZ",
  description: "Produto descrição",
  price: 10,
  imgUrl: "",
  categoryId: 1,
};

test("displays title", () => {
  const wrapper = mount(ProductDetails, {
    props: {
      product: productTest,
    },
  });

  expect(wrapper.text()).toContain(productTest.title);
});

test("displays price", () => {
  const wrapper = mount(ProductDetails, {
    props: {
      product: productTest,
    },
  });

  expect(wrapper.text()).toContain(convertCurrency(productTest.price));
});

test("displays description", () => {
  const wrapper = mount(ProductDetails, {
    props: {
      product: productTest,
    },
  });

  expect(wrapper.text()).toContain(productTest.description);
});
