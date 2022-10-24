<template>
  <div class="text-black relative flex flex-col space-y-2">
    <img class="w-full h-44 object-cover" :src="getImageUrl(product.imgUrl)" alt="Product Image" />
    <p class="text-sm">{{ product.title }}</p>
    <span class="font-bold">{{ convertCurrency(product.price) }}</span>
    <span>#{{ product.id }}</span>
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
import getImageUrl from '../../utils/getImageUrl'
import PencilIcon from 'vue-material-design-icons/Pencil.vue'
import DeleteIcon from 'vue-material-design-icons/Delete.vue'

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
    getImageUrl
  },
  components: {
    PencilIcon,
    DeleteIcon
  }
})
</script>

<style scoped>

</style>