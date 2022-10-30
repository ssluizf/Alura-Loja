<template>
  <MainApp>
    <ProductCreateForm />
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainApp from '../templates/MainApp.vue'
import ProductCreateForm from '../organisms/ProductCreateForm.vue'

export default defineComponent({
  name: 'ProductCreate',
  components: {
    MainApp,
    ProductCreateForm
}
})
</script>

<style>
</style>