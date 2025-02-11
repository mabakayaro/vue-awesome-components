import axios from 'axios';
import _ from 'lodash'
import VModal from 'vue-js-modal';

import FieldEnyoSelect from './components/crud/fields/FieldEnyoSelect.vue';
import FieldFileInput from './components/crud/fields/FieldFileInput.vue';
import fieldTextArea from './components/form/form-generator/fields/core/fieldTextarea.vue';
import FieldJson from './components/crud/fields/FieldJsonTextarea.vue';
import FieldDateTime from './components/crud/fields/fieldDateTime.vue';
import FieldVSelect from './components/crud/fields/FieldVSelect.vue';
import FieldImagePicker from './components/crud/fields/FieldImagePicker.vue';
import FieldArray from './components/crud/fields/FieldArray.vue';
import FieldComponent from './components/crud/fields/FieldComponent.vue';
// import FieldDateRange from './components/crud/fields/fieldDateRange.vue';
import AwesomeCrud from './components/crud/AwesomeCrud.vue';
import AwesomeLayout from './components/crud/layout/AwesomeLayout.vue';
import AwesomeForm from './components/crud/AwesomeForm.vue';
import AwesomeKanban from './components/table/AwesomeKanban.vue';
import AwesomeList from './components/table/AwesomeList.vue';
import AwesomeTable from './components/table/AwesomeTable/AwesomeTable.vue';

import FormGenerator from './components/form/form-generator';

import EnyoSelect from './components/form/EnyoSelect.vue';
import UploadButton from './components/form/UploadButton.vue';
import LiveEdit from './components/form/LiveEdit.vue';

import EnyoCard from './components/card/EnyoCard.vue';
import EnyoStatsCard from './components/card/EnyoStatsCard.vue';
import TableAndChartsCard from './components/card/TableAndChartsCard.vue';

import EnyoCrudStatsSection from './components/misc/EnyoCrudStatsSection.vue';

import notificationsMixin from './mixins/notificationsMixin.js';


/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const install = (Vue, options = {}) => {
  if (options) {
    //    const { exclude } = options;
    Vue.prototype.awComponentsConfig = {
      displayLabelsCache: {},
      relationsAreClickable: true,
      primaryKey: 'id',
      modelsStorePath: '',
      rolesStorePath: '',
      extendedRolesStorePath: '',
      hideIdsInSelect: false,
    };

    if (options.config) {
      Vue.prototype.awComponentsConfig = _.merge(Vue.prototype.awComponentsConfig, options.config);
    }

    if (options['AwesomeCrud'] && options['AwesomeCrud'].props) {
      AwesomeCrud.props = _.merge(AwesomeCrud.props, options['AwesomeCrud'].props);
    }
    if (options['AwesomeForm'] && options['AwesomeForm'].props) {
      AwesomeForm.props = _.merge(AwesomeForm.props, options['AwesomeForm'].props);
    }
    if (options['AwesomeList'] && options['AwesomeList'].props) {
      AwesomeList.props = _.merge(AwesomeList.props, options['AwesomeList'].props);
    }
    if (options['AwesomeTable'] && options['AwesomeTable'].props) {
      AwesomeTable.props = _.merge(AwesomeTable.props, options['AwesomeTable'].props);
    }
    if (options['FieldVSelect'] && options['FieldVSelect'].props) {
      FieldVSelect.props = _.merge(FieldVSelect.props, options['FieldVSelect'].props);
    }

  }

  Vue.use(VModal);

  Vue.use(FormGenerator, {
    fields: _.values(FormGenerator.fieldsLoader),
    options,
  });


  Vue.component('enyo-card', EnyoCard);
  Vue.component('enyo-stats-card', EnyoStatsCard);
  Vue.component('enyo-stats', EnyoCrudStatsSection);
  Vue.component('enyo-table-and-charts-card', TableAndChartsCard);


  Vue.component('upload-button', UploadButton);
  Vue.component('enyo-select', EnyoSelect);
  Vue.component('live-edit', LiveEdit);

  Vue.component('fieldDateTime', FieldDateTime);
  // Vue.component('fieldDateTime', FieldDateRange);
  Vue.component('fieldEnyoSelect', FieldEnyoSelect);
  Vue.component('fieldVSelect', FieldVSelect);
  Vue.component('fieldFileInput', FieldFileInput);
  Vue.component('fieldFilePicker', FieldFileInput);
  Vue.component('fieldJsonTextarea', FieldJson);
  Vue.component('field-textarea', fieldTextArea);
  Vue.component('field-json-textarea', FieldJson);
  Vue.component('field-json', FieldJson);
  Vue.component('fieldImagePicker', FieldImagePicker);
  Vue.component('fieldComponent', FieldComponent);
  Vue.component('field-array', FieldArray);

  Vue.component('ajax-table', AwesomeTable);
  Vue.component('enyo-ajax-table', AwesomeTable);
  Vue.component('AwesomeTable', AwesomeTable);
  Vue.component('AwesomeList', AwesomeList);
  Vue.component('AwesomeLayout', AwesomeLayout);

  Vue.component('AwesomeForm', AwesomeForm);

  Vue.component('crud-component', AwesomeCrud);
  Vue.component('awesome-crud', AwesomeCrud);

  Vue.component('awesome-kanban', AwesomeKanban);

  if (!Vue.prototype.$awEventBus) {
    Vue.prototype.$awEventBus = new Vue();
  }

  if (!Vue.prototype.$awApi) {
    if (options && options.$awApi) {
      Vue.prototype.$awApi = options.$awApi;
    }
    else if (Vue.prototype.$http) {
      Vue.prototype.$awApi = Vue.prototype.$http;
    }
    else {
      Vue.prototype.$awApi = axios.create({});
    }
  }
  //  conflicts with existing methods
  // if (!Vue.prototype.$notify) {
  //   Vue.prototype.$notify = notificationsMixin.methods.$awNotify;
  // }

  //  conflicts with existing methods
  // if (!Vue.prototype.$confirm) {
  //   Vue.prototype.$confirm = notificationsMixin.methods.$confirm;
  // }


  // DIRECTIVES
  // Vue.directive('click-outside', vClickOutside);

  // MIXINS
  Vue.mixin(notificationsMixin);
};

export default install;
