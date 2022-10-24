<template>
  <div class="w-full items-center h-10 bg-black-25 rounded-3xl xs:hidden md:w-64 md:flex lg:w-96">
    <input class="text-black-400 outline-none w-full leading-4 text-sm bg-transparent ml-4 mr-1"
      placeholder="O que deseja encontrar?" />
    <div class="mr-4">
      <MagnifyIcon class="text-black-400" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';

export default defineComponent({
  name: 'SearchBar',
  components: {
    MagnifyIcon
  }
})
</script>

<style>

</style>