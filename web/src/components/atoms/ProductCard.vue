<template>
  <div class="flex flex-col space-y-2">
    <div class="flex items-center w-full h-44 bg-black-200">
      <img v-if="product.imgUrl" class="w-full h-44 object-cover" :src="product.imgUrl" alt="Product Image" />
    </div>
    <p class="text-black text-sm">{{ product.title }}</p>
    <span class="text-black font-bold">{{ convertCurrency(product.price) }}</span>
    <a class="text-blue text-sm font-bold" :href="'product/' + product.id">Ver produto</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import convertCurrency from '../../utils/convertCurrency'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  methods: {
    convertCurrency
  },
})
</script>

<style scoped>

</style>