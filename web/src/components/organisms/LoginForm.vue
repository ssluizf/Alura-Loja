<template>
  <ContainerDefault>
    <div class="flex flex-col items-center mx-auto space-y-4 w-72 pt-24 pb-16 md:pt-11 md:pb-16 lg:w-96">
      <p class="text-base font-bold text-black lg:text-lg">
        Iniciar Sessão
      </p>

      <FormGroup :validations="v$.email">
        <template v-slot="{ errors }">
          <Input placeholder="Escreva seu email" class="lg:h-16 lg:pt-4 lg:pb-6" v-model="email" />
          <span v-for="error in errors" class="error">
            {{ error }}
          </span>
        </template>
      </FormGroup>

      <FormGroup :validations="v$.password">
        <template v-slot="{ errors }">
          <Input type="password" placeholder="Escreva sua senha" class="lg:h-16 lg:pt-4 lg:pb-6" v-model="password" />
          <span v-for="error in errors" class="error">
            {{ error }}
          </span>
        </template>
      </FormGroup>

      <ButtonDefault label="Entrar" :onClick="submitForm" className="px-8 lg:px-0 lg:w-full" />
    </div>
  </ContainerDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

import ContainerDefault from '../atoms/ContainerDefault.vue';
import Input from '../atoms/Input.vue';
import FormGroup from '../templates/FormGroup.vue';
import ButtonDefault from '../atoms/ButtonDefault.vue';

export default defineComponent({
  name: 'LoginForm',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  validations() {
    return {
      email: { required, email },
      password: { required }
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
  components: { ContainerDefault, Input, FormGroup, ButtonDefault }
})
</script>

<style>

</style>