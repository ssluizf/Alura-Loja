<template>
  <div class="list-container grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '../atoms/ProductCard.vue';
import { useStore } from '../../store/index';

export default defineComponent({
  name: 'ProductSection',
  setup(props) {
    const store = useStore();
    const products = store.getters.getProductsByCategoryId(props.categoryId)

    return {
      products
    }
  },
  props: {
    categoryId: Number
  },
  components: {
    ProductCard
  }
})
</script>

<style>
.list-container > div {
  display: none;
}

.list-container > div:nth-child(-n+4) {
  display: block;
}

@media (min-width: 992px) {
  .list-container > div:nth-child(-n+6) {
    display: block;
  }
}
</style>