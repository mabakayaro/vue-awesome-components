<template>
  <div class="wrapper" v-attributes="'wrapper'">
    <input
      class="form-control"
      :accept="fieldOptions.accept"
      :disabled="disabled"
      :id="fieldID"
      :multiple="fieldOptions.multiple"
      :name="inputName"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="schema.required"
      @change="onChange"
      type="file"
      v-attributes="'input'"
    />
  </div>
</template>

<script>
import abstractField from '../abstractField';
import { isFunction } from 'lodash';

export default {
  name: 'field-upload',
  mixins: [abstractField],
  methods: {
    onChange($event) {
      if (isFunction(this.fieldOptions.onChanged)) {
        // Schema has defined onChange method.
        this.fieldOptions.onChanged.call(this, this.model, this.schema, $event, this);
      }
    }
  }
};
</script>

<style lang="scss">
.vue-form-generator .field-input {
  .wrapper {
    width: 100%;
  }
  .helper {
    margin: auto 0.5em;
  }
}
</style>
