export const reducer = (state, action) => {
  switch (action.type) {
    case 'insert':
      return [action.row, ...state.rows];
    case 'delete':
      return state.rows.filter(row => action.selectedRows.indexOf(row.id) !== -1);
    default:
      return [...state.rows];
  }
};
