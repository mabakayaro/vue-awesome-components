(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{469:function(t,e,n){"use strict";n.r(e);var r,s=n(69),o=(n(304),n(411),n(412),n(52),n(38),n(47),n(298),n(417),n(409),n(465)),i=n.n(o),a=n(118),u=n(115),c=n(119),p=n(64),l=n(116),d=n(120),f=n(121),y=n(117),m=n(33),g=n(65),v=n(15),h=n(63),_={methods:{userIs:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(e=this.$store||e)&&e.state&&e.state.user&&e.state.user.roles&&e.state.user.roles.indexOf(t)>-1},userHasRole:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(e=this.$store||e)&&e.state&&e.state.userExtendedRoles&&e.state.userExtendedRoles.indexOf(t)>-1}}},C={FieldEnyoSelect:a.a,FieldFileInput:u.a,FieldJsonTextarea:c.a,CrudComponent:p.a,EnyoCrudComponent:p.a,TableAndChartsCard:l.a,EnyoSelect:d.a,UploadButton:f.a,EnyoCard:m.a,EnyoCrudStatsSection:g.a,EnyoAjaxTable:v.a,AjaxTable:v.a,LiveEdit:y.a,apiErrorsMixin:h.a,rolesMixin:_};function x(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}var b=(r={name:"ComponentDoc",props:{component:{type:[Object,String],required:!0},documentation:{type:Object},ignoreMixins:{type:Boolean,default:!1}},mounted:function(){},data:function(){return{_component:{},merged:this.process(this.component,this.documentation),typesForCodeTag:["array","object","function"]}},getDoc:function(t,e,n){return this.methods.process(t,e,n)}},Object(s.a)(r,"mounted",(function(){})),Object(s.a)(r,"methods",{process:function(t,e,n){var r;r="string"==typeof t&&C[t]?C[t]:t,console.log("m =>",t);var s=this.merge(r,e);return s.token&&(s.token=this.sanitize(s.token)),s.description&&(s.description=i()(s.description)),n||this.ignoreMixins||s.mixins&&(s.props=this.merge(this.getPropsFromMixins(s.mixins),s.props)),s.props&&(s.props=this.processProps(s.props)),s},sanitize:function(t){var e=(t=t.trim()).match(/^[ \t]*(?=\S)/gm);if(!e)return t;var n=Math.min.apply(Math,e.map((function(t){return t.length}))),r=new RegExp("^[ \\t]{".concat(n,"}"),"gm");return n>0?t.replace(r,""):t},getPropsFromMixins:function(t){return t.reduce((function(t,e){return Object.assign(t,e.props),t}),{})},processProps:function(t){var e=this;return(Array.isArray(t)?t:Object.keys(t)).reduce((function(n,r){var s=new Proxy(t[r]||{},e.basicArrayProxy),o={};return o=Object.assign(o,{type:e.getType(s.type),required:s.required||!1,default:e.getDefault(s.default,s.type,o),note:s.note||""}),n[r]=o,n}),{})},basicArrayProxy:function(t,e){return e in t?t[e]:void 0},getDefault:function(t,e,n){var r=this.getType(e),s=x(t);if(void 0===t)return"undefined";if("function"===s){if(["array","object"].some((function(t){return r.includes(t)}))&&!r.includes("function")){var o=t();return n.defaultTypeStr=x(o),JSON.stringify(o,null,2)}return n.defaultTypeStr="function",t.toString()}return n.defaultTypeStr=s,JSON.stringify(t)},getType:function(t){return null==t?"any":"function"===x(t)?x(t()):Array.isArray(t)?t.map(this.getType).join("|"):x(t)},merge:function(t,e){return Object.assign({},t,e)},hasMixins:function(t){return void 0!==t.mixins}}),r),j=n(3),S=Object(j.a)(b,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.merged&&t.merged.name?n("article",{staticClass:"propdoc"},[t.merged.props?n("table",{staticClass:"props"},[t._m(0),t._v(" "),t._l(t.merged.props,(function(e,r){return n("tr",{key:r,staticClass:"proprow"},[n("td",{staticClass:"propcol name",class:{required:e.required}},[n("span",[t._v(t._s(r))])]),t._v(" "),n("td",{staticClass:"propcol type"},[t._v("\n        "+t._s(e.type)+"\n      ")]),t._v(" "),n("td",{staticClass:"propcol default"},[t.typesForCodeTag.includes(e.defaultTypeStr)?n("code",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(e.default))]):n("span",[t._v(t._s(e.default))])]),t._v(" "),n("td",{staticClass:"propcol notes"},[t._v("\n        "+t._s(e.note)+"\n      ")])])}))],2):t._e()]):t._e()}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"proprow labels"},[n("th",{staticClass:"propcol name required"},[t._v("\n        name\n        "),n("span",[t._v("(required)")])]),t._v(" "),n("th",{staticClass:"propcol type"},[t._v("\n        type\n      ")]),t._v(" "),n("th",{staticClass:"propcol default"},[t._v("\n        default\n      ")]),t._v(" "),n("th",{staticClass:"propcol notes"},[t._v("\n        notes\n      ")])])}],!1,null,null,null);e.default=S.exports}}]);