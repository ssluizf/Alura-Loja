import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import products, { ProductType } from "../mocks/products";
import groupBy from "../utils/groupBy";
export interface State {
  products: ProductType[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    products,
  },
  getters: {
    getProductsByCategoryId: (state) => (id: any) => {
      return groupBy(state.products, "categoryId")[id];
    },
    getAllProducts: (state) => (filter: any) => {
      if (filter) {
        return state.products.filter((product) =>
          product.title.toLowerCase().includes(filter.toLowerCase())
        );
      }

      return state.products;
    },
    getProductById: (state) => (id: any) => {
      return state.products.find((product) => id === product.id);
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
