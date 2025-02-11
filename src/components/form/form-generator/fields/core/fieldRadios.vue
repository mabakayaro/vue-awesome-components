<template>
  <div class="radio-list" :disabled="disabled" v-attributes="'wrapper'">
    <label
      v-for="item in items"
      :key="getItemValue(item)"
      :class="{ 'is-checked': isItemChecked(item) }"
      v-attributes="'label'"
    >
      <input
        :checked="isItemChecked(item)"
        :class="fieldClasses"
        :disabled="disabled"
        :id="fieldID"
        :name="id"
        :readonly="readonly"
        :required="required"
        :value="getItemValue(item)"
        @click="onSelection(item)"
        type="radio"
        v-attributes="'input'"
      />{{ getItemName(item) }}
    </label>
  </div>
</template>

<script>
import { isObject } from 'lodash';
import abstractField from '../abstractField';

export default {
  name: 'field-radios',
  mixins: [abstractField],

  computed: {
    items() {
      let values = this.schema.values;
      if (typeof values == 'function') {
        return values.apply(this, [this.model, this.schema]);
      } else {
        return values;
      }
    },
    id() {
      return this.schema.model;
    }
  },

  methods: {
    getItemValue(item) {
      if (isObject(item)) {
        if (typeof this.fieldOptions['value'] !== 'undefined') {
          return item[this.fieldOptions.value];
        } else {
          if (typeof item['value'] !== 'undefined') {
            return item.value;
          } else {
            throw '`value` is not defined. If you want to use another key name, add a `value` property under `fieldOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/radios.html#radios-field-with-object-values';
          }
        }
      } else {
        return item;
      }
    },
    getItemName(item) {
      if (isObject(item)) {
        if (typeof this.fieldOptions['name'] !== 'undefined') {
          return item[this.fieldOptions.name];
        } else {
          if (typeof item['name'] !== 'undefined') {
            return item.name;
          } else {
            throw '`name` is not defined. If you want to use another key name, add a `name` property under `fieldOptions` in the schema. https://icebob.gitbooks.io/vueformgenerator/content/fields/radios.html#radios-field-with-object-values';
          }
        }
      } else {
        return item;
      }
    },
    onSelection(item) {
      this.value = this.getItemValue(item);
    },
    isItemChecked(item) {
      let currentValue = this.getItemValue(item);
      return currentValue === this.value;
    }
  }
};
</script>

<style lang="scss">
.vue-form-generator .field-radios {
  .radio-list {
    label {
      display: block;
      input[type='radio'] {
        margin-right: 5px;
      }
    }
  }
}
</style>
