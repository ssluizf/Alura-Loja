<template>
  <MainApp>
    <div class="bg-black-25">
      <Banner :title="banner.title" :description="banner.description" :btnLabel="banner.btnLabel"
        :image="banner.image" />
      <div v-for="category in categories" :key="category.id">
        <ProductSection :title="category.title" :categoryId="category.id" />
      </div>
    </div>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainApp from '../templates/MainApp.vue';
import Banner from '../molecules/Banner.vue';
import bannerImage from "../../assets/mushroom.jpg";
import categories from "../../mocks/categories.js";
import ProductSection from '../organisms/ProductSection.vue';

export default defineComponent({
  name: 'HomeView',
  data() {
    return {
      banner: {
        title: "Dezembro Promocional",
        description: "Produtos selecionados com 33% de desconto",
        btnLabel: "Ver Consoles",
        image: bannerImage,
      },
      categories,
    }
  },
  components: {
    MainApp,
    Banner,
    ProductSection
  },
})
</script>

<style>

</style>