export const defaultActions = {
  advancedFiltering: true,
  autoRefresh: true,
  bulkDelete: true,
  bulkEdit: true,
  changeDisplayMode: true,
  collapse: true,
  columnsFilters: true,
  create: false,
  dateFilter: false,
  delete: true,
  edit: true,
  editLayout: true,
  export: false,
  exportLocal: false,
  filter: true,
  formPagination: true,
  import: false,
  itemsPerRow: true,
  noActions: false,
  pagination: true,
  refresh: true,
  search: true,
  tableConfiguration: true,
  view: true,
};

export const defaultKanbanOptions = {
  scrollSensitivity: 500,
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