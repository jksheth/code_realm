const rootReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO": return {
            ...state,

        }
        case "EDIT_TODO": return {
            ...state
        }
        default:
            return state;
    }
}

export default rootReducer;