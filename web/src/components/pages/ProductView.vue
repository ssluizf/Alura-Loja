<template>
  <MainApp>
    <ProductDetails :product="product" />
    <ProductSection title="Produtos similares" :categoryId="product.categoryId" />
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../../store/index';
import MainApp from '../templates/MainApp.vue';
import ProductSection from '../organisms/ProductSection.vue';
import ProductDetails from '../organisms/ProductDetails.vue';

export default defineComponent({
  name: "ProductView",
  data() {
    const store = useStore();
    const product = store.getters.getProductById(this.$route.params.id)

    return {
      product
    }
  },
  components: { MainApp, ProductSection, ProductDetails },
})
</script>

<style>

</style>