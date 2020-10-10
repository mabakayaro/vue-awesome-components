import axios from 'axios';
import { directive as vClickOutside } from 'vue-clickaway';
import _ from 'lodash'
import FieldEnyoSelect from './components/crud/fields/FieldEnyoSelect.vue';
import FieldFileInput from './components/crud/fields/FieldFileInput.vue';
import FieldJsonTextarea from './components/crud/fields/FieldJsonTextarea.vue';
import FieldDateTime from './components/crud/fields/fieldDateTime.vue';
import FieldVSelect from './components/crud/fields/FieldVSelect.vue';
// import FieldDateRange from './components/crud/fields/fieldDateRange.vue';
import AwesomeCrud from './components/crud/AwesomeCrud.vue';
import AwesomeForm from './components/crud/AwesomeForm.vue';
import AwesomeKanban from './components/table/AwesomeKanban.vue';

import FormGenerator from './components/form/form-generator';

import EnyoSelect from './components/form/EnyoSelect.vue';
import UploadButton from './components/form/UploadButton.vue';
import LiveEdit from './components/form/LiveEdit.vue';

import EnyoCard from './components/card/EnyoCard.vue';
import EnyoStatsCard from './components/card/EnyoStatsCard.vue';
import TableAndChartsCard from './components/card/TableAndChartsCard.vue';

import EnyoCrudStatsSection from './components/misc/EnyoCrudStatsSection.vue';
import AwesomeTable from './components/table/AwesomeTable.vue';




import {
  Datetime
} from 'vue-datetime';
/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const install = (Vue, options) => {
  // if (!Vue.$root.$options.components.multiselect) {
  //   // eslint-disable-next-line
  //   console.error("'vue-multiselect' is missing. Please download from https://github.com/monterail/vue-multiselect and register the component globally!");
  // }


  if (options) {

    // if (options.global) {
    //   [FieldEnyoSelect,
    //     FieldFileInput,
    //     FieldJsonTextarea,
    //     FieldDateTime,
    //     FieldVSelect,
    //     AwesomeCrud,
    //     AwesomeForm,
    //     AwesomeKanban,
    //     FormGenerator,
    //     EnyoSelect,
    //     UploadButton,
    //     LiveEdit,
    //     EnyoCard,
    //     EnyoStatsCard,
    //     TableAndChartsCard,
    //     EnyoCrudStatsSection,
    //     AwesomeTable,].forEach(comp => {
    //       comp.props = _.merge(AwesomeCrud.props, options.global.props);
    //     })
    // }
    if (options['AwesomeCrud'] && options['AwesomeCrud'].props) {
      AwesomeCrud.props = _.merge(AwesomeCrud.props, options['AwesomeCrud'].props);
    }

    if (options['AwesomeTable'] && options['AwesomeTable'].props) {
      AwesomeTable.props = _.merge(AwesomeTable.props, options['AwesomeTable'].props);
    }
    if (options['FieldVSelect'] && options['FieldVSelect'].props) {
      FieldVSelect.props = _.merge(FieldVSelect.props, options['FieldVSelect'].props);
    }
  }

  Vue.use(FormGenerator, {
    fields: _.values(FormGenerator.fieldsLoader),
    options,
  });

  Vue.component('enyo-card', EnyoCard);
  Vue.component('enyo-stats-card', EnyoStatsCard);
  Vue.component('enyo-stats', EnyoCrudStatsSection);
  Vue.component('enyo-table-and-charts-card', TableAndChartsCard);

  Vue.component('datetime', Datetime); //todo better re

  Vue.component('upload-button', UploadButton);
  Vue.component('enyo-select', EnyoSelect);
  Vue.component('live-edit', LiveEdit);

  Vue.component('fieldDateTime', FieldDateTime);
  // Vue.component('fieldDateTime', FieldDateRange);
  Vue.component('fieldEnyoSelect', FieldEnyoSelect);
  Vue.component('fieldVSelect', FieldVSelect);
  Vue.component('fieldFileInput', FieldFileInput);
  Vue.component('fieldJsonTextarea', FieldJsonTextarea);

  Vue.component('ajax-table', AwesomeTable);
  Vue.component('enyo-ajax-table', AwesomeTable);
  Vue.component('AwesomeTable', AwesomeTable);

  Vue.component('AwesomeForm', AwesomeForm);


  Vue.component('crud-component', AwesomeCrud);
  Vue.component('awesome-crud', AwesomeCrud);

  Vue.component('awesome-kanban', AwesomeKanban);

  if (!Vue.prototype.$http) {
    Vue.prototype.$http = axios.create({});
  }

  // DIRECTIVES
  Vue.directive('click-outside', vClickOutside);
};

export default install;
