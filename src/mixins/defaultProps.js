export const defaultActions = {
  noActions: false,
  search: true,
  filter: true,
  create: false,
  edit: true,
  view: true,
  delete: true,
  export: false,
  exportLocal: false,
  import: false,
  dateFilter: false,
  refresh: true,
  autoRefresh: true,
  advancedFiltering: true,
  columnsFilters: true,
  bulkDelete: true,
  bulkEdit: true,
  itemsPerRow: true,
  editLayout: true,
  collapse: true,
  formPagination: true,
  pagination: true,
  changeDisplayMode: true,
};

export const defaultKanbanOptions = {
  scrollSensitivity: 200,
  animation: 200,
  moveList: false,
  moveCard: true,
  fields: {
    title: '',
    subtitle: '',
    image: '',
    description: '',
    labels: '',
    users: '',
  },
  splittingField: '',
  splittingValues: null,
  sortField: '',
  sortOrder: 'asc'
};