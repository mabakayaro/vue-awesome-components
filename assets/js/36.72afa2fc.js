(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{580:function(e,n,t){"use strict";t.r(n);var i=t(42),s=Object(i.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[n("h1",{attrs:{id:"configuration-of-a-schema-field"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-of-a-schema-field"}},[this._v("#")]),this._v(" Configuration of a schema field")]),this._v(" "),n("p",[this._v("The awesome crud configuration schema.")]),this._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[this._v("{\n  $id: 'http://enyosolutions.com/schema.json',\n  type: 'object',\n  properties: {\n    title: {\n      title: 'The title of the field',\n      description: ' used in listing, and form labelling',\n      type: 'string',\n    },\n    type: {\n      title: 'The type of the field',\n      description: 'expect a json schema type',\n      type: ['string', 'array'],\n      default: 'string',\n      enum: ['string', 'number', 'array', 'object', 'integer', 'boolean', 'date', 'null', 'any'],\n      items: {\n        type: 'string'\n      }\n    },\n    description: {\n      type: ['null', 'string'],\n      default: 'string',\n    },\n    enum: {\n      title: 'Possible values for the field',\n      type: 'array',\n      items: {\n        type: 'string',\n      },\n      description: 'The list of values to use for the select.',\n    },\n    default: {\n      type: ['string', 'number', 'boolean', 'null', 'array', 'object'],\n      title: 'Default value',\n      nullable: true,\n      description: 'The object that this property is related to',\n      examples: ['user'],\n      additionalProperties: true,\n    },\n    nullable: {\n      type: ['boolean'],\n      title: 'Can we send null as a value ?',\n      description: '',\n      default: false\n    },\n    relation: {\n      title: 'relation',\n      type: ['null', 'string'],\n      description: 'The object that this property is related to',\n      examples: ['user'],\n    },\n    relationKey: {\n      title: 'relationKey',\n      type: ['null', 'string'],\n      description:\n        'The field of the object that this property is related to (eg relation[foreignKey]). Leave empty to use the relation.primaryKeyField',\n      examples: ['id']\n    },\n    relationLabel: {\n      title: 'relationLabel',\n      type: ['null', 'string'],\n      description:\n        'The field of the relation used to display. Leave empty to use the relation.displayField',\n      examples: ['user']\n    },\n    relationUrl: {\n      title: 'relationUrl',\n      type: ['null', 'string'],\n      description:\n        'the url to use to fetch the foreign object',\n      examples: ['user']\n    },\n    field: {\n      type: 'object',\n      title: 'Configuration of the behavior of the property in forms',\n      properties: {\n        title: {\n          type: 'string',\n          title: 'Title',\n          description: 'The title of the field',\n        },\n        type: {\n          type: 'string',\n          title:\n            'Field type',\n          description: 'The type of the field Case sensisitive. custom types are also supported.',\n          enum: ['string',\n            'input',\n            'number',\n            'list-of-value',\n            'list-of-data',\n            'vSelect',\n            'dateTime',\n            'DateRange',\n            'textArea',\n            'JsonTextarea',\n            'date',\n            'datetime',\n            'time',\n            'ImagePicker',\n            'FilePicker',\n            'FileInput',\n            'Base64Upload',\n            'array',\n            'EnyoSelect',\n\n          ],\n        },\n\n        inputType: {\n          type: 'string',\n          title:\n            'Input type',\n          description: 'Text input comming from https://vue-generators.gitbook.io/vue-generators/fields',\n        },\n        required: {\n          title: 'Required',\n          type: ['boolean', 'string'],\n          description: 'Form field value is required',\n        },\n        /*\n        hidden: {\n          title: 'Hidden',\n          type: ['boolean', 'string'],\n          description: 'Form field is displayed',\n        },\n        */\n        visible: {\n          title: 'Visible',\n          type: ['boolean', 'string'],\n          description: 'Form field is displayed',\n        },\n        disabled: {\n          title: 'Disabled',\n          type: ['boolean', 'string'],\n          description: 'Field is disabled',\n        },\n        readonly: {\n          title: 'Readonly',\n          type: ['boolean', 'string'],\n          description: 'Field is read only',\n        },\n\n        styleClasses: {\n          type: 'string',\n          title: 'Css classes (@deprecated use classes)',\n          description: 'The class that will be around the field',\n          examples: ['col-md-12']\n        },\n        classes: {\n          type: 'string',\n          title: 'Css classes of the field',\n          description: 'The class that will be around the field',\n          examples: ['col-md-12', 'card']\n        },\n        labelClasses: {\n          type: 'string',\n          title: 'Css classes for the label',\n          description: 'The class that will be around the label',\n          examples: ['text-danger']\n        },\n        innerClasses: {\n          type: 'string',\n          title: 'Css classes for the inner block',\n          description: 'The class that will be around the block (usefull for cols and row padding)',\n          examples: ['card-body']\n        },\n        min: {\n          type: 'number',\n          title: 'Minimum number of characters',\n          description: 'the minimum number of characters',\n        },\n        max: {\n          type: 'number',\n          title: 'Maximum number of characters',\n          description: 'the maximum number of characters',\n        },\n        cols: {\n          type: 'number',\n          title: 'Width of the field (cols)',\n          description: 'the number of grid columns the item takes (1 - 12)',\n          enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\n\n        },\n        fieldOptions: {\n          title: 'Field options',\n          description: 'Options to be used on custom forms fields like multiselect, toggle etc',\n          type: 'object',\n          properties: {\n            multiple: {\n              type: 'boolean',\n              title: 'Multiple select',\n              description: 'If the select is multiple (for selects)',\n            },\n            taggable: {\n              type: 'boolean',\n              title: 'Select accept new items',\n              description: 'Select accept new items [vSelect]',\n              examples: ['/user'],\n            },\n            enum: {\n              type: ['array', 'string'],\n              title: 'Values',\n              description: `The list of values to use for the select. If the value is string\n                and starts with $store then the value is taken from the vuejs $store`,\n              examples: ['$store.listOfValues.users'],\n            },\n            url: {\n              type: 'string',\n              title: 'Api url',\n              description: 'The url to use to load the data for the select (ajax) [vSelect]',\n              examples: ['/user'],\n            },\n\n            trackBy: {\n              type: 'string',\n              title: 'The field to use as the value in the select',\n              examples: ['_id'],\n            },\n            label: {\n              type: 'string',\n              title: 'The field to use as the Label in the select',\n              examples: ['username'],\n            },\n            disableRelationActions: {\n              type: 'boolean',\n              title: 'disableRelationActions on the select',\n            },\n            prefix: {\n              type: 'string',\n              title: 'Prefix',\n              description: 'Text displayed before the value. example : £',\n              examples: ['username']\n            },\n\n            suffix: {\n              type: 'string',\n              title: 'Suffix',\n              description: 'Text displayed after the value. example : cm | €',\n              examples: ['username']\n            },\n\n            validator: {\n              type: ['array', 'string'],\n              title: 'Validators',\n              items: {\n                type: 'string'\n              },\n              description:\n                'the validators used to validate fields https://vue-generators.gitbook.io/vue-generators/validation/built-in-validators'\n            },\n\n            displayOptions: {\n              title: 'Display options',\n              type: 'object',\n              description: 'Options to be used specifically on view mode',\n              properties: {\n                type: {\n                  type: 'string',\n                  title: 'Field type',\n                  enum: [\n                    'string',\n                    'number',\n                    'boolean',\n                    'url',\n                    'image',\n                    'date',\n                    'datetime',\n                    'checkbox',\n                    'relation',\n                    'object',\n                  ],\n                  description:\n                    'The type that links to the display',\n                },\n                prefix: {\n                  type: 'string',\n                  title: 'Prefix',\n                  description: 'Text displayed before the value. example : £',\n                  examples: ['username']\n                },\n\n                suffix: {\n                  type: 'string',\n                  title: 'Suffix',\n                  description: 'Text displayed after the value. example : cm | €',\n                  examples: ['username']\n                },\n                format: {\n                  title: 'Format',\n                  description: 'The format to use for custom rendering this field (for objects, dates and text)',\n                  examples: 'example :  {{ currentItem.firstname + \" \" + currentItem.lastname }} | \"DD / MM / YYYY\"',\n                },\n                component: {\n                  title: 'The component to use to display this field (for objects, dates and text)',\n                  type: ['string', 'object'],\n                  description: 'example : \"MapDisplay\" | \"GalleryComponent\"',\n                  examples: ['MapDisplay', 'GalleryComponent']\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n\n    column: {\n      type: 'object',\n      title: 'Column configuration',\n      description: 'Configuration of the behavior of the property in lists',\n      properties: {\n        title: {\n          type: 'string',\n          title: 'The title of the field'\n        },\n        type: {\n          title: 'Column type',\n          description:\n            'The type of the column, comming from https://vue-generators.gitbook.io/vue-generators/fields',\n          type: 'string',\n          enum: ['string', 'number', 'date', 'datetime', 'image', 'html', 'relation', 'object', 'boolean', 'url'],\n        },\n        hidden: {\n          title: 'Hide this column',\n          type: 'boolean',\n          description: 'If the form field is displayed',\n          default: false\n        },\n        prefix: {\n          title: 'Text displayed before the value',\n          type: 'string',\n          description: 'example : £',\n          examples: ['username']\n        },\n\n        suffix: {\n          title: 'Text displayed before the value',\n          type: 'string',\n          description: 'example : cm | €',\n          examples: ['username']\n        },\n        format: {\n          title: 'Format',\n          description: 'The format to use for custom rendering this field (for objects, dates and text)',\n          examples: 'example :  {{ currentItem.firstname + \" \" + currentItem.lastname }} | \"DD / MM / YYYY\"',\n        },\n        component: {\n          title: 'The component to use to display this field (for objects, dates and text)',\n          type: ['string', 'object'],\n          description: 'example : \"MapDisplay\" | \"GalleryComponent\"',\n          examples: ['MapDisplay', 'GalleryComponent']\n        }\n      }\n    },\n  },\n}\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);