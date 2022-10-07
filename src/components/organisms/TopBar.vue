<template>
  <ContainerDefault class="flex items-center justify-between bg-white">
    <div class="flex w-full items-center mr-2">
      <LogoIcon class="w-28 mr-8 lg:w-44" />
      <SearchBar />
    </div>
    <ButtonDefault label="Login" variant="secondary" @onClick="onClick" />
  </ContainerDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonDefault from '../atoms/ButtonDefault.vue';
import ContainerDefault from "../atoms/ContainerDefault.vue";
import SearchBar from '../atoms/SearchBar.vue';
import LogoIcon from "../../assets/logo.svg?inline";

export default defineComponent({
  name: 'TobBar',
  components: {
    ButtonDefault,
    ContainerDefault,
    SearchBar,
    LogoIcon
  },
  methods: {
    onClick: () => {
      console.log('Button click');
    }
  }
})
</script>

<style scoped>
.btn {
  @apply px-12 md:px-16 lg:px-18
}
</style>