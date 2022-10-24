<template>
  <ContainerDefault>
    <div class="flex flex-col items-center mx-auto space-y-4 w-72 pt-24 pb-16 md:pt-11 md:pb-16 lg:w-96">
      <p class="text-base font-bold text-black lg:text-lg">Iniciar Sessão</p>
      <Input placeholder="Escreva seu email" class="lg:h-16 lg:pt-4 lg:pb-6" />
      <Input placeholder="Escreva sua senha" class="lg:h-16 lg:pt-4 lg:pb-6" />
      <ButtonDefault label="Entrar" to="/products" className="px-8 lg:px-0 lg:w-full" />
    </div>
  </ContainerDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContainerDefault from '../atoms/ContainerDefault.vue';
import Input from '../atoms/Input.vue';
import ButtonDefault from '../atoms/ButtonDefault.vue';

export default defineComponent({
  name: 'LoginForm',
  components: { ContainerDefault, Input, ButtonDefault }
})
</script>

<style>

</style>