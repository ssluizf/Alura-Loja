<script lang="ts">
import { template, templateSettings } from "lodash";

import lang from "../../support/locales/pt-br";

// curly brace syntax
templateSettings.interpolate = /{{([\s\S]+?)}}/g;

interface TEMPLATES_MAP_TYPE {
  email: string,
  minLength: string,
  required: string,
}

const TEMPLATES_MAP: TEMPLATES_MAP_TYPE = lang.validation;

export default {
  props: {
    validations: {
      required: true,
      type: Object,
    },
  },

  computed: {
    errors() {
      if (!this.invalid) {
        return [];
      }

      return this.validations.$errors.reduce(
        (errors: Object[], error: { $validator: string }) => {
          if (this.validations[error.$validator]) {
            const compiled = template(TEMPLATES_MAP[error.$validator as keyof TEMPLATES_MAP_TYPE]);

            errors.push(compiled(this.validations[error.$validator].$params));
          }

          return errors;
        },
        []
      );
    },

    invalid() {
      return this.validations.$dirty && this.validations.$invalid;
    },
  },

  render() {
    return this.$slots.default?.({
      errors: this.errors,
      invalid: this.invalid,
    });
  },
};
</script>
