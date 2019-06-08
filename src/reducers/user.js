const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
          
            };
        case 'edit':
            return {
                ...state,
            };
        case 'delete':
            return {

            }
        default:
            return state;
    }
};

export default reducer;
