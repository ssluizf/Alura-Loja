<template>
  <div class="text-black relative flex flex-col space-y-2">
    <div class="flex items-center w-full h-44 bg-black-200">
      <img v-if="product.imgUrl" class="w-full h-44 object-cover" :src="product.imgUrl" alt="Product Image" />
    </div>
    <p class="text-sm">{{ product.title }}</p>
    <span class="font-bold">{{ convertCurrency(product.price) }}</span>
    <span>#{{ paddingLeft(String(product.id), 6) }}</span>
    <div class="absolute flex space-x-4 right-0 m-2">
      <a href="">
        <DeleteIcon class="text-white" />
      </a>
      <a href="">
        <PencilIcon class="text-white" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import convertCurrency from '../../utils/convertCurrency'
import PencilIcon from 'vue-material-design-icons/Pencil.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'
import paddingLeft from '../../utils/paddingLeft'

export default defineComponent({
  name: 'ProductCardEditable',
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  methods: {
    convertCurrency,
    paddingLeft
  },
  components: {
    PencilIcon,
    DeleteIcon
  }
})
</script>

<style scoped>

</style>