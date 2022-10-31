import { getProducts, getProductById, getProductByCategory, getProductByFilter } from './../providers/products.api';
import { getCategories } from '../providers/categories.api';
import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import groupBy from '../utils/groupBy';

export interface CategoryType {
  categoryId: number,
  title: string,
}

interface ProductType {
  id: number,
  title: string,
  description: string,
  price: string,
  imgUrl?: string,
  categoryId: number
}
export interface State {
  products: ProductType[];
  categories: CategoryType[];
  product: ProductType | null
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    products: [],
    categories: [],
    product: null
  },
  getters: {
    getProductByCategory: (state) => (id: any) => {
      return groupBy(state.products, "categoryId")[id];
    },
  },
  actions: {
    async fetchCategories({ commit }) {      
      const response = await getCategories();

      commit('setCategories', response);
    },
    async fetchProducts({ commit }, filter) {
      if (filter) {
        const response = await getProductByFilter(filter);
        
        commit('setProducts', response);
      }
      
      const response = await getProducts();

      commit('setProducts', response);
    },
    async fetchProductById({ commit }, id) {
      const response = await getProductById(id)

      commit('setProduct', response);
    },
    async fetchProductByCategory({ commit }, categoryId) {
      const response = await getProductByCategory(categoryId);

      commit('setProducts', response);
    },
  },
  mutations: {
    setCategories: (state, categories) => {
      state.categories = categories;
    },
    setProducts: (state, products) => {
      state.products = products;
    },
    setProduct: (state, product) => {
      state.product = product;
    },
  }
});

export function useStore() {
  return baseUseStore(key);
}
