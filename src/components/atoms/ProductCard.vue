<template>
  <div class="flex flex-col space-y-2">
    <img class="w-full h-44 object-cover" :src="getImageUrl(product.imgUrl)" alt="Product Image" />
    <p class="text-black text-sm">{{ product.title }}</p>
    <span class="text-black font-bold">{{ convertCurrency(product.price) }}</span>
    <a class="text-blue text-sm font-bold" :href="'product/' + product.id">Ver produto</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import convertCurrency from '../../utils/convertCurrency'
import getImageUrl from '../../utils/getImageUrl'

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  methods: {
    convertCurrency,
    getImageUrl
  },
})
</script>

<style scoped>
  * {
    @apply mb-1
  }
</style>