<template>
  <div class="bg-blue-50">
    <ContainerDefault class="md:py-8 lg:py-16">
      <div class="grid md:grid-cols-[0.4fr_0.6fr] lg:grid-cols-2">
        <div class="grid justify-center md:justify-start lg:grid-cols-2">
          <RouterLink to="/">
            <LogoIcon class="w-44 mb-4" />
          </RouterLink>
          <div class="flex flex-col space-y-4 mb-8 text-center text-black md:text-left md:space-y-6 md:mb-0">
            <a href="">
              Quem somos nós
            </a>
            <a href="">
              Política de privacidade
            </a>
            <a href="">
              Programa fidelidade
            </a>
            <a href="">
              Quero ser franqueado
            </a>
            <a href="">
              Anuncie aqui
            </a>
          </div>
        </div>
        <form class="space-y-2 w-full">
          <p class="text-black font-bold">Fale conosco</p>
          <div class="space-y-4 last:mb-0">
            <FormGroup :validations="v$.name">
              <template v-slot="{ errors }">
                <Input label="Nome" v-model="name" />
                <span v-for="error in errors" class="error">
                  {{ error }}
                </span>
              </template>
            </FormGroup>
            <FormGroup :validations="v$.description">
              <template v-slot="{ errors }">
                <Input variant="textarea" placeholder="Escreva sua mensagem" v-model="description" />
                <span v-for="error in errors" class="error">
                  {{ error }}
                </span>
              </template>
            </FormGroup>
          </div>
          <ButtonDefault label="Enviar mensagem" :onClick="submitForm" />
        </form>
      </div>
    </ContainerDefault>
  </div>
  <div class="bg-white">
    <ContainerDefault class="py-6">
      <p class="w-60 mx-auto text-center">Desenvolvido por Fulana de Tal 2021</p>
    </ContainerDefault>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core';
import { required, alpha } from '@vuelidate/validators';

import { RouterLink } from "vue-router"
import LogoIcon from "../../assets/logo.svg?inline";
import ButtonDefault from '../atoms/ButtonDefault.vue';
import ContainerDefault from '../atoms/ContainerDefault.vue';
import Input from '../atoms/Input.vue';
import FormGroup from '../templates/FormGroup.vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      name: "",
      description: ""
    }
  },
  validations() {
    return {
      name: { required, alpha },
      description: { required }
    }
  },
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate();

      if (isFormCorrect) {
        console.log("Form submit");
      }
    }
  },
  components: {
    RouterLink,
    LogoIcon,
    ButtonDefault,
    ContainerDefault,
    Input,
    FormGroup
},
})
</script>

<style>

</style>