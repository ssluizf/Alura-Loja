<template>
  <ContainerDefault class="pt-0 px-0 md:py-8 lg:py-16">
    <div class="md:grid md:grid-cols-5 md:items-center lg:grid-cols-2">
      <div class="bg-black-200 w-full md:col-span-2 lg:col-auto lg:h-96">
        <img v-if="product.imgUrl" class="w-full h-48 object-cover md:h-min-content lg:h-auto lg:max-h-96"
          :src="product.imgUrl" alt="Product Image" />
      </div>
      <div class="p-4 space-y-2 md:py-0 md:pr-0 md:w-full md:col-span-3 lg:col-auto">
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
    convertCurrency
  }
})
</script>

<style>

</style>