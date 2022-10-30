<template>
  <ContainerDefault class="lg:py-16">
    <div class="flex flex-col space-y-4 mx-auto lg:w-3/5">
      <p class="text-xl font-bold text-black lg:text-3xl">Adicionar novo produto</p>
      <FormGroup :validations="v$.imageUrl">
        <template v-slot="{ errors }">
          <Input label="URL da imagem" v-model="imageUrl" />
          <span v-for="error in errors" class="error">
            {{ error }}
          </span>
        </template>
      </FormGroup>
      <FormGroup :validations="v$.category">
        <template v-slot="{ errors }">
          <Input label="Categoria" v-model="category" />
          <span v-for="error in errors" class="error">
            {{ error }}
          </span>
        </template>
      </FormGroup>
      <FormGroup :validations="v$.productName">
        <template v-slot="{ errors }">
          <Input label="Nome do produto" v-model="productName" />
          <span v-for="error in errors" class="error">
            {{ error }}
          </span>
        </template>
      </FormGroup>
      <FormGroup :validations="v$.productPrice">
        <template v-slot="{ errors }">
          <Input label="Preço do produto" v-model="productPrice" />
          <span v-for="error in errors" class="error">
            {{ error }}
          </span>
        </template>
      </FormGroup>
      <FormGroup :validations="v$.productDescription">
        <template v-slot="{ errors }">
          <Input variant="textarea" placeholder="Descrição do produto" v-model="productDescription" />
          <span v-for="error in errors" class="error">
            {{ error }}
          </span>
        </template>
      </FormGroup>
      <ButtonDefault label="Adicionar Produto" :onClick="submitForm" />
    </div>
  </ContainerDefault>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core';
import { required, alpha } from '@vuelidate/validators';

import ContainerDefault from '../atoms/ContainerDefault.vue';
import Input from '../atoms/Input.vue';
import ButtonDefault from '../atoms/ButtonDefault.vue';
import FormGroup from '../templates/FormGroup.vue';

export default defineComponent({
  name: 'ProductCreateForm',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      imageUrl: "",
      category: "",
      productName: "",
      productPrice: "",
      productDescription: "",
    }
  },
  validations() {
    return {
      imageUrl: { required },
      category: { required },
      productName: { required, alpha },
      productPrice: { required },
      productDescription: { required },
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
  components: { ContainerDefault, Input, ButtonDefault, FormGroup }
})
</script>

<style>

</style>