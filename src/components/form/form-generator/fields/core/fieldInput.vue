<template>
  <div class="wrapper" v-attributes="'wrapper'">
    <input
      class="form-control"
      :accept="fieldOptions.accept"
      :alt="fieldOptions.alt"
      :autocomplete="fieldOptions.autocomplete"
      :checked="fieldOptions.checked"
      :class="fieldClasses"
      :dirname="fieldOptions.dirname"
      :disabled="disabled"
      :files="fieldOptions.files"
      :formaction="fieldOptions.formaction"
      :formenctype="fieldOptions.formenctype"
      :formmethod="fieldOptions.formmethod"
      :formnovalidate="fieldOptions.formnovalidate"
      :formtarget="fieldOptions.formtarget"
      :height="fieldOptions.height"
      :id="fieldID"
      :list="fieldOptions.list"
      :max="fieldOptions.max"
      :maxlength="fieldOptions.maxlength"
      :min="fieldOptions.min"
      :minlength="fieldOptions.minlength"
      :multiple="fieldOptions.multiple"
      :name="inputName"
      :pattern="fieldOptions.pattern"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="schema.required"
      :size="fieldOptions.size"
      :src="fieldOptions.src"
      :step="fieldOptions.step"
      :type="inputType"
      :value="value"
      :width="fieldOptions.width"
      @blur="onBlur"
      @change="schema.onChange || null"
      @input="onInput"
      v-attributes="'input'"
    />
    <span class="helper" v-if="inputType === 'color' || inputType === 'range'" v-text="value"></span>
  </div>
</template>

<script>
import abstractField from '../abstractField';
import { debounce, get as objGet, isFunction, isNumber } from 'lodash';
import dayjs from 'dayjs';

const DATETIME_FORMATS = {
  date: 'YYYY-MM-DD',
  datetime: 'YYYY-MM-DD HH:mm:ss',
  'datetime-local': 'YYYY-MM-DDTHH:mm:ss'
};

export default {
  name: 'field-input',
  mixins: [abstractField],
  computed: {
    inputType() {
      if (typeof this.fieldOptions.inputType === 'string') {
        return this.fieldOptions.inputType.toLowerCase();
      } else {
        console.warn('Missing inputType', this.fieldOptions, this.fieldOptions.inputType);
        return '';
      }
    }
  },
  methods: {
    formatValueToModel(value) {
      if (value != null) {
        switch (this.inputType) {
          case 'date':
          case 'datetime':
          case 'datetime-local':
          case 'number':
          case 'range':
            // debounce
            return (newValue, oldValue) => {
              this.debouncedFormatFunc(value, oldValue);
            };
        }
      }

      return value;
    },
    formatDatetimeToModel(newValue, oldValue) {
      let defaultFormat = DATETIME_FORMATS[this.inputType];
      let m = dayjs.parse(newValue, defaultFormat);
      if (m !== false) {
        if (this.schema.format) {
          newValue = dayjs.format(m, this.schema.format);
        } else {
          newValue = m.valueOf();
        }
      }
      this.updateModelValue(newValue, oldValue);
    },
    formatNumberToModel(newValue, oldValue) {
      if (!isNumber(newValue)) {
        newValue = NaN;
      }
      this.updateModelValue(newValue, oldValue);
    },
    onInput($event) {
      let value = $event.target.value;
      switch (this.inputType) {
        case 'number':
        case 'range':
          if (isNumber(parseFloat($event.target.value))) {
            value = parseFloat($event.target.value);
          }
          break;
      }
      this.value = value;
    },
    onBlur() {
      if (isFunction(this.debouncedFormatFunc)) {
        this.debouncedFormatFunc.flush();
      }
      this.$emit('blur', this.model[this.schema.model], this.schema.model);
    }
  },

  mounted() {
    switch (this.inputType) {
      case 'number':
      case 'range':
        this.debouncedFormatFunc = debounce(
          (newValue, oldValue) => {
            this.formatNumberToModel(newValue, oldValue);
          },
          parseInt(objGet(this.schema, 'debounceFormatTimeout', 1000)),
          {
            trailing: true,
            leading: false
          }
        );
        break;
      case 'date':
      case 'datetime':
      case 'datetime-local':
        // wait 1s before calling 'formatDatetimeToModel' to allow user to input data
        this.debouncedFormatFunc = debounce(
          (newValue, oldValue) => {
            this.formatDatetimeToModel(newValue, oldValue);
          },
          parseInt(objGet(this.schema, 'debounceFormatTimeout', 1000)),
          {
            trailing: true,
            leading: false
          }
        );
        break;
    }
  },

  created() {
    if (this.inputType === 'file') {
      console.warn('The "file" type in input field is deprecated. Use "file" field instead.');
    }
  }
};
</script>

<style lang="scss">
.vue-form-generator .field-input {
  .wrapper {
    width: 100%;
  }
  input[type='radio'] {
    width: 100%;
  }
  input[type='color'] {
    width: 60px;
  }
  input[type='range'] {
    padding: 0;
  }

  .helper {
    margin: auto 0.5em;
  }
}
</style>
