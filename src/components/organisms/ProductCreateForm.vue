<template>
  <ContainerDefault class="lg:py-16">
    <div class="flex flex-col space-y-4 mx-auto lg:w-3/5">
      <p class="text-xl font-bold text-black lg:text-3xl">Adicionar novo produto</p>
      <Input label="URL da imagem" />
      <Input label="Categoria" />
      <Input label="Nome do produto" />
      <Input label="Preço do produto" />
      <Input placeholder="Descrição do produto" variant="textarea" />
      <ButtonDefault label="Adicionar Produto" to="/products" />
    </div>
  </ContainerDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContainerDefault from '../atoms/ContainerDefault.vue';
import Input from '../atoms/Input.vue';
import ButtonDefault from '../atoms/ButtonDefault.vue';

export default defineComponent({
  name: 'ProductCreateForm',
  components: { ContainerDefault, Input, ButtonDefault }
})
</script>

<style>

</style>