<template>
  <MainApp>
    <LoginForm />
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainApp from '../templates/MainApp.vue';
import LoginForm from '../organisms/LoginForm.vue';

export default defineComponent({
  name: 'AuthLogin',
  components: {
    MainApp,
    LoginForm
  }
})
</script>

<style>

</style>