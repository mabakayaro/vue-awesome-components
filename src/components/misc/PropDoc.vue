<template>
  <article v-if="merged && merged.name" class="propdoc">
    <h2 class="title">
      {{ merged.name }}
    </h2>
    <h3 v-if="merged.introduction" class="subtitle">
      {{ merged.introduction }}
    </h3>
    <slot name="pre-use" />
    <div class="use">
      <div v-if="merged.description" class="description" v-html="merged.description" />
      <div v-if="merged.token" class="token">
        <pre><code data-lang="vue">{{ merged.token }}</code></pre>
      </div>
    </div>
    <slot name="pre-props" />
    <section v-if="merged.props" class="props">
      <div class="proprow labels">
        <div class="propcol name required">
          name
          <span>(required)</span>
        </div>
        <div class="propcol type">
          type
        </div>
        <div class="propcol default">
          default
        </div>
        <div class="propcol notes">
          notes
        </div>
      </div>
      <div v-for="(propinfo, propname) in merged.props" :key="propname" class="proprow" :id="'prop-' + propname">
        <div class="propcol name" :class="{ required: propinfo.required }">
          <span>{{ propname }}</span>
        </div>
        <div class="propcol type">
          {{ propinfo.type }}
        </div>
        <div class="propcol default">
          <!--optionally you can output this: {{ propinfo.defaultTypeStr }} -->
          <code v-if="typesForCodeTag.includes(propinfo.defaultTypeStr)" style="white-space: pre-wrap;">{{
            propinfo.default
          }}</code>
          <span v-else>{{ propinfo.default }}</span>
        </div>
        <div class="propcol notes">
          {{ propinfo.description || propinfo.note }}
        </div>
      </div>
    </section>
    <section v-if="merged.emits" class="props">
      <div class="proprow labels">
        <div class="propcol name required">
          Event
          <span>(required)</span>
        </div>
        <div class="propcol type">
          type
        </div>
        <div class="propcol notes">
          notes
        </div>
      </div>
      <div v-for="event in merged.emits" :key="event" class="proprow" :id="'prop-' + event">
        <div class="propcol name">
          <span>{{ event }}</span>
        </div>
        <div class="propcol notes">
          {{ event.description || event.note }}
        </div>
      </div>
    </section>
  </article>
</template>
<script>
import marked from 'marked';

export default {
  name: 'PropDoc',
  props: {
    component: {
      type: Object,
      required: true
    },
    documentation: {
      type: Object
    },
    ignoreMixins: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      merged: this.process(this.component, this.documentation),
      typesForCodeTag: ['array', 'object', 'function']
    };
  },
  getDoc(component, documentation, ignoreMixins) {
    return this.methods.process(component, documentation, ignoreMixins);
  },
  methods: {
    process(component, documentation, ignoreMixins) {
      const m = this.merge(component, documentation);
      if (m.token) m.token = this.sanitize(m.token);
      if (m.description) m.description = marked(m.description);
      if (!(ignoreMixins || this.ignoreMixins)) {
        if (m.mixins) m.props = this.merge(this.getPropsFromMixins(m.mixins), m.props);
      }
      if (m.props) m.props = this.processProps(m.props);
      return m;
    },
    sanitize(text) {
      text = text.trim();
      const match = text.match(/^[ \t]*(?=\S)/gm);
      if (!match) return text;
      const indent = Math.min.apply(
        Math,
        match.map((x) => x.length)
      );
      const re = new RegExp(`^[ \\t]{${indent}}`, 'gm');
      return indent > 0 ? text.replace(re, '') : text;
    },
    getPropsFromMixins(mixins) {
      return mixins.reduce((map, mixin) => {
        Object.assign(map, mixin.props);
        return map;
      }, {});
    },
    processProps(props) {
      const keys = Array.isArray(props) ? props : Object.keys(props);
      return keys.reduce((map, k) => {
        const v = new Proxy(props[k] || {}, this.basicArrayProxy);
        let objInfo = {};

        objInfo = Object.assign(objInfo, {
          type: this.getType(v.type),
          required: v.required || false,
          default: this.getDefault(v.default, v.type, objInfo),
          // defaultTypeStr - this will be sets from the function which is on line above (getDefault)
          note: v.note || ''
        });

        map[k] = objInfo;

        return map;
      }, {});
    },
    basicArrayProxy(target, name) {
      return name in target ? target[name] : undefined;
    },
    getDefault(d, type, objInfo) {
      const typeStr = this.getType(type);
      const dTypeStr = getTypeString(d);

      if (typeof d === 'undefined') return 'undefined';

      // if default is function
      if (dTypeStr === 'function') {
        // if there are types object or array and not function
        if (['array', 'object'].some((i) => typeStr.includes(i)) && !typeStr.includes('function')) {
          // get result from function
          const dResult = d();

          objInfo.defaultTypeStr = getTypeString(dResult);
          return JSON.stringify(dResult, null, 2);
        }

        objInfo.defaultTypeStr = 'function';
        // if not array or object then just get function in text format
        return d.toString();
      }

      objInfo.defaultTypeStr = dTypeStr;
      // for all other types
      return JSON.stringify(d);
    },
    // works for all types
    getType(t) {
      // for null and undefined
      if (t == undefined) return 'any';

      if (getTypeString(t) === 'function') {
        return getTypeString(t());
      }
      if (Array.isArray(t)) {
        return t.map(this.getType).join('|');
      }

      return getTypeString(t);
    },
    merge(a, b) {
      return Object.assign({}, a, b);
    },
    hasMixins(component) {
      return typeof component.mixins !== 'undefined';
    }
  }
};

function getTypeString(variable) {
  return Object.prototype.toString
    .call(variable)
    .slice(8, -1)
    .toLowerCase();
}
</script>
