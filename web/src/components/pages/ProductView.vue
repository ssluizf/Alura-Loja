<template>
  <MainApp>
    <div v-if="product">
      <ProductDetails :product="product" />
      <ProductSection title="Produtos similares" :categoryId="product.categoryId" />
    </div>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import MainApp from '../templates/MainApp.vue';
import ProductSection from '../organisms/ProductSection.vue';
import ProductDetails from '../organisms/ProductDetails.vue';

export default defineComponent({
  name: "ProductView",
  mounted() {
    const id = this.$route.params.id;
    if (id) this.fetchProductById(id);

    this.fetchProducts();
  },
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  methods: mapActions(['fetchProductById', 'fetchProducts']),
  components: { MainApp, ProductSection, ProductDetails },
})
</script>

<style>

</style>