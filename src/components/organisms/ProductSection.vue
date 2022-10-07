<template>
  <ContainerDefault>
    <div class="flex items-center justify-between pb-4">
      <p class="font-bold text-2xl text-black">{{ title }}</p>
      <a href="/products" class="flex items-center text-blue">
        <span class="font-bold text-sm mr-1">Ver tudo</span>
        <ArrowRightIcon />
      </a>
    </div>
    <ProductList :categoryId="categoryId" />
  </ContainerDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArrowRightIcon from "../../assets/arrow_right.svg?inline";
import ProductList from "../molecules/ProductList.vue";
import ContainerDefault from "../atoms/ContainerDefault.vue";

export default defineComponent({
  name: 'ProductSection',
  props: {
    title: String,
    categoryId: Number,
  },
  components: {
    ArrowRightIcon,
    ProductList,
    ContainerDefault
}
})
</script>

<style>

</style>