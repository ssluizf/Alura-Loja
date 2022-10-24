<template>
  <ContainerDefault class="pt-0 px-0 md:py-8 lg:py-16">
    <div class="md:flex md:items-center">
      <img class="w-full h-48 object-cover md:h-min-content md:w-4/12 lg:w-1/2 lg:h-auto lg:max-h-96" :src="getImageUrl(product.imgUrl)" alt="Product Image" />
      <div class="p-4 space-y-2 md:py-0 md:pr-0 md:w-8/12 lg:w-1/2">
        <p class="font-medium text-xl lg:text-5xl">{{ product.title }}</p>
        <p class="font-bold">{{ convertCurrency(product.price) }}</p>
        <p class="text-sm">{{ product.description }}</p>
      </div>
    </div>
  </ContainerDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContainerDefault from "../atoms/ContainerDefault.vue";
import getImageUrl from '../../utils/getImageUrl'
import convertCurrency from '../../utils/convertCurrency'

export default defineComponent({
  name: 'ProductDetails',
  props: {
    product: {
      type: Object,
      required: true
    },
  },
  components: {
    ContainerDefault
  },
  methods: {
    getImageUrl,
    convertCurrency
  }
})
</script>

<style>

</style>