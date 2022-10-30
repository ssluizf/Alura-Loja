<template>
  <div class="ml-4 bg-white flex items-center h-full md:mx-0 md:h-10 md:bg-black-25 md:rounded-3xl md:w-64 lg:w-96"
    :class="isSearchActivate && 'absolute z-10 left-0 right-0 top-0 mr-4'">
    <input class="md:block md:ml-4 text-black-400 outline-none w-full leading-4 text-sm bg-transparent mr-1"
      :class="isSearchActivate ? 'block' : 'hidden'" placeholder="O que deseja encontrar?" @keyup.enter="handleSearch()"
      v-model="searchTerm" />
    <button class="md:mr-4 outline-none pointer" :onClick="onClick">
      <MagnifyIcon class="text-black md:text-black-400" />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import router from '../../router';
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue';

export default defineComponent({
  name: 'SearchBar',
  components: {
    MagnifyIcon
  },
  data() {
    return {
      searchTerm: "",
      isSearchActivate: false
    }
  },
  methods: {
    onClick() {
      if (this.isSearchActivate) {
        this.handleSearch();
      }

      if (innerWidth < 768) {
        this.isSearchActivate = !this.isSearchActivate;
      }
    },
    handleSearch() {
      if (this.searchTerm) {
        router.push({ path: '/products', query: { searchTerm: this.searchTerm } })
      }
    }
  }
})
</script>

<style>

</style>