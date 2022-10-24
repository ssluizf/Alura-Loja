<template>
  <ContainerDefault class="flex items-center justify-between bg-white">
    <div class="flex w-full items-center mr-2">
      <RouterLink to="/">
        <LogoIcon class="w-28 mr-8 lg:w-44" />
      </RouterLink>
      <SearchBar />
    </div>
    <ButtonDefault v-if="!isLogged" label="Login" variant="secondary" className="px-12 md:px-16 lg:px-18" to="/login" />
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