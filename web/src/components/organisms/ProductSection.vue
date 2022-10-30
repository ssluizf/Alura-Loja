<template>
  <ContainerDefault class="md:py-8 lg:pt-0 lg:pb-16">
    <ProductSectionHeader :title="title" />
    <ProductList :categoryId="categoryId" />
  </ContainerDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductList from "../molecules/ProductList.vue";
import ProductSectionHeader from "../molecules/ProductSectionHeader.vue";
import ContainerDefault from "../atoms/ContainerDefault.vue";

export default defineComponent({
  name: 'ProductSection',
  props: {
    title: String,
    categoryId: Number,
  },
  components: {
    ProductList,
    ProductSectionHeader,
    ContainerDefault
}
})
</script>

<style>
.material-design-icon.icon-size-arrow-right > .material-design-icon__svg {
  @apply w-4 w-6
}
</style>