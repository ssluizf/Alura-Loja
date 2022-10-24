<template>
  <div>
    <TopBar />
    <div class="bg-black-25 text-black">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopBar from '../organisms/TopBar.vue';
import Footer from '../organisms/Footer.vue';

export default defineComponent({
  name: 'MainApp',
  components: {
    TopBar,
    Footer
  },
})
</script>

<style>

</style>