<template>
  <div class="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 lg:gap-y-16" :class="!showAll && 'list-container'">
    <div v-for="product in getProducts(categoryId)" :key="product.id">
      <ProductCardEditable v-if="editable" :product="product" />
      <ProductCard v-else :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import ProductCard from '../atoms/ProductCard.vue'
import ProductCardEditable from '../atoms/ProductCardEditable.vue'

export default defineComponent({
  name: 'ProductList',
  computed: mapGetters(['getProductByCategory']),
  methods: {
    getProducts(categoryId: any) {
      let products = [];

      if (categoryId) {
        products = this.getProductByCategory(categoryId)
      } else {
        products = this.$store.state.products
      }

      return products
    }
  },
  props: {
    categoryId: Number,
    editable: Boolean,
    showAll: Boolean,
  },
  components: {
    ProductCard,
    ProductCardEditable
  }
})
</script>

<style>
.list-container>div {
  display: none;
}

.list-container>div:nth-child(-n+4) {
  display: block;
}

@media (min-width: 992px) {
  .list-container>div:nth-child(-n+6) {
    display: block;
  }
}
</style>