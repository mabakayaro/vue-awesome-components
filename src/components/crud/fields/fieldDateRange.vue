<template>
  <div class="input-group">
    <input type="date" ref="dateInput" />

    <div class="input-group-addon">
      <i class="fa fa-calendar"></i>
    </div>
  </div>
</template>

<script>
import VueFormGenerator from '../../form/form-generator';
import dayjs from 'dayjs';
import $ from 'jquery';

import customParseFormat from 'dayjs/plugin/customParseFormat.js';

dayjs.extend(customParseFormat);

const inputFormat = 'YYYY-MMHH:mm:ssZ';

export default {
  mixins: [VueFormGenerator.abstractField],
  mounted() {
    $(this.$refs.dateInput).daterangepicker(this.props);
  },
  computed: {
    pickerType() {
      return (this.schema.fieldOptions && this.schema.fieldOptions.type) || 'datetime';
    }
  },
  methods: {
    getDateFormat() {
      if (this.schema.fieldOptions && this.schema.fieldOptions.format) {
        return this.schema.fieldOptions.format;
      }
      return inputFormat;
    },

    formatValueToField(value) {
      if (value != null) {
        let dt;
        if (typeof this.fieldOptions.format !== 'undefined') {
          dt = dayjs(value, this.fieldOptions.format).toDate();
        } else {
          dt = new Date(value);
        }
        return dayjs(dt).format(this.getDateFormat());
      }

      return value;
    },

    formatValueToModel(value) {
      if (value != null) {
        value = dayjs(value).format(this.getDateFormat());
      }
      return value;
    }
  },

  beforeDestroy() {}
};
</script>

<style lang="scss">
.vdatetime.form-group {
  margin-bottom: 0;
}
</style>
