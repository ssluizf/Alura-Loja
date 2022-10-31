<template>
  <MainApp>
    <Banner :title="banner.title" :description="banner.description" :btnLabel="banner.btnLabel"
      :image="banner.image" />
    <div class="mt-16" v-for="category in categories" :key="category.id">
      <ProductSection :title="category.title" :categoryId="category.id" />
    </div>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex';
import MainApp from '../templates/MainApp.vue';
import Banner from '../molecules/Banner.vue';
import bannerImage from "../../assets/mushroom.jpg";
import ProductSection from '../organisms/ProductSection.vue';

export default defineComponent({
  name: 'HomeView',
  mounted() {
    this.fetchCategories()
    this.fetchProducts()
  },
  data() {
    return {
      banner: {
        title: "Dezembro Promocional",
        description: "Produtos selecionados com 33% de desconto",
        btnLabel: "Ver Consoles",
        image: bannerImage,
      },
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    }
  },
  methods: mapActions(['fetchCategories', 'fetchProducts']),
  components: {
    MainApp,
    Banner,
    ProductSection
  },
})
</script>

<style>

</style>