<template>
  <div
    class="relative flex items-end h-48 md:h-96 bg-[url('/src/assets/mushroom.jpg')] bg-cover bg-center after:bg-banner-gradient after:absolute after:w-full after:h-full after:z-10">
    <ContainerDefault class="grid auto-rows-min w-full space-y-2 z-20 md:py-8 md:space-y-4">
      <p class="text-white font-bold text-2xl md:text-[3.25rem] md:leading-[61px]">{{ title }}</p>
      <span class="text-white font-semibold text-sm md:text-[1.375rem] md:leading-[26px]">{{ description }}</span>
      <div>
        <ButtonDefault :label="btnLabel" />
      </div>
    </ContainerDefault>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonDefault from '../atoms/ButtonDefault.vue';
import ContainerDefault from '../atoms/ContainerDefault.vue';

export default defineComponent({
  name: 'Banner',
  props: {
    title: String,
    description: String,
    btnLabel: String,
  },
  components: {
    ButtonDefault,
    ContainerDefault
  },
})
</script>

<style>

</style>