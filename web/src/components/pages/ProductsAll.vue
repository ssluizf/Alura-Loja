<template>
  <MainApp>
    <ContainerDefault class="py-8 lg:py-16">
      <div class="flex flex-col items-start md:flex-row md:items-center md:justify-between mb-4">
        <p class="font-bold text-2xl text-black mb-4 md:mb-0">Todos os produtos</p>
        <ButtonDefault label="Adicionar produto" to="/create" />
      </div>
      <ProductList :filter="filter" editable showAll />
    </ContainerDefault>
  </MainApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductList from "../molecules/ProductList.vue"
import MainApp from "../templates/MainApp.vue"
import ContainerDefault from "../atoms/ContainerDefault.vue"
import ButtonDefault from "../atoms/ButtonDefault.vue"

export default defineComponent({
  name: 'ProductAll',
  data() {
    return {
      filter: (this.$route.query.searchTerm || "").toString()
    }
  },
  components: {
    ProductList,
    ContainerDefault,
    MainApp,
    ButtonDefault
  }
})
</script>

<style>

</style>