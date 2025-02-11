/**
 * Mixin for components that render lists from an arg or an api
 */

export default {
  mixins: [],
  props: {
    savePaginationState: { type: Boolean, default: false, description: 'Whether we should save the state of the navigation page, perPage' },
    saveColumnsState: { type: Boolean, default: false, description: 'Whether we should save the state of the navigation (columns, sort etc' },
  },
  data() {
    return {};
  },
  computed: {
    isSaveStateEnabledCpt() {
      return this.saveColumnsState || this.savePaginationState;
    },
    _saveStateKey() {
      return `${this.identity}-${this.$options.name}-${window.location.pathname}-state`;
    }
  },

  watch: {},


  // mounted() {
  //   this.restoreComponentState();
  //   if (this.connectRouteToPagination) {
  //     this.connectRouteToPagination(this.$route);
  //   }
  // },
  beforeDestroy() {
    this.$awEventBus && this.$awEventBus.$off('aw-table-needs-refresh', this.refreshLocalData);

  },
  methods: {
    saveComponentState() {
      if (this.isSaveStateEnabledCpt && this.identity && window.localStorage) {
        try {
          const columnsState = { ...this.columnsState };
          delete columnsState.__ACTIONS;
          // @fixme probably not a good idea to save the state of filters
          localStorage.setItem(this._saveStateKey, JSON.stringify({
            routeQueryParams: this.savePaginationState ? { ...this.routeQueryParams, filters: undefined } : undefined,
            columnsState: this.saveColumnsState ? columnsState : undefined,
            columnsFilterState: this.saveColumnsState ? this.columnsFilterState : undefined,
            columnFilters: this.saveColumnsState ? this.columnFilters : undefined,
            advancedFilters: this.saveColumnsState ? this.advancedFilters : undefined,
            listingDisplayMode: this.listingDisplayMode
          }));
        }
        catch (err) {
          console.warn('saveComponentState', err.message);
        }
      }
    },

    async restoreComponentState() {
      if (this.isSaveStateEnabledCpt && this.identity && window.localStorage) {
        try {
          let parsedState = await localStorage.getItem(this._saveStateKey);
          if (parsedState) {
            parsedState = JSON.parse(parsedState);
            if (this.savePaginationState) {
              this.routeQueryParams = parsedState.routeQueryParams;
            }
            if (parsedState.columnsState && this.saveColumnsState) {
              this.columnsState = parsedState.columnsState;
            }
            if (parsedState.columnsFilterState && this.saveColumnsState) {
              this.columnsFilterState = parsedState.columnsFilterState;
            }
            if (parsedState.listingDisplayMode && this.listingDisplayMode) {
              this.listingDisplayMode = parsedState.listingDisplayMode;
              //       console.log('restored', this.listingDisplayMode);
            }
            // @fixme
            // this.pushChangesToRouter();
          }
        }
        catch (err) {
          console.warn(err.message);
        }
      }
    },

    clearComponentState() {
      try {
        window.localStorage && localStorage.removeItem(this._saveStateKey);
      }
      catch (err) {
        console.warn(err);
      }
    },
  }
};