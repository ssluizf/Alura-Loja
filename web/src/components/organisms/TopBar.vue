<template>
  <ContainerDefault class="relative flex items-center justify-items-stretch bg-white">
    <RouterLink to="/">
      <LogoIcon class="w-28 mr-8 lg:w-44" />
    </RouterLink>
    <div class="order-last md:order-none">
      <SearchBar />
    </div>
    <div class="grid grow">
      <ButtonDefault v-if="!isLogged" label="Login" variant="secondary" className="justify-self-end px-12 md:px-16 lg:px-18" to="/login" />
    </div>
  </ContainerDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import ButtonDefault from '../atoms/ButtonDefault.vue';
import ContainerDefault from "../atoms/ContainerDefault.vue";
import SearchBar from '../atoms/SearchBar.vue';
import LogoIcon from "../../assets/logo.svg?inline";

export default defineComponent({
  name: 'TobBar',
  data() {
    return {
      isLogged: false
    }
  },
  components: {
    RouterLink,
    ButtonDefault,
    ContainerDefault,
    SearchBar,
    LogoIcon
  },
})
</script>

<style scoped>

</style>