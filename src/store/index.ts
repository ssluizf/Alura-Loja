import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'
import products from "../mocks/products";
import groupBy from "../utils/groupBy";

interface ProductType {
  id: number,
  title: string,
  price: number,
  imgUrl: string,
  categoryId: number
}

export interface State {
  products: ProductType[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    products,
  },
  getters: {
    getProductsByCategoryId: (state) => (id: any) => {
      return groupBy(state.products, "categoryId")[id]
    }
  }
})

export function useStore () {
  return baseUseStore(key)
}
