<template>
  <div class="flex items-center justify-between pb-4">
    <p class="font-bold text-2xl text-black">{{ title }}</p>
    <a href="/products" class="flex items-center text-blue">
      <span class="font-bold text-sm mr-1 md:text-base md:mr-2 lg:mr-3">Ver tudo</span>
      <ArrowRightIcon class="icon-size-arrow-right" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArrowRightIcon from 'vue-material-design-icons/ArrowRight.vue';
import ButtonDefault from '../atoms/ButtonDefault.vue';
import ContainerDefault from '../atoms/ContainerDefault.vue';

export default defineComponent({
  name: 'ProductSectionHeader',
  props: {
    title: String,
  },
  components: {
    ArrowRightIcon,
    ButtonDefault,
    ContainerDefault
  },
})
</script>

<style>

</style>