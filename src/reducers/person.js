const person = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            return state;

        case 'SHOW_SUCCESS':
            return [
                ...state,
                ...action.payloadList
            ];
        case 'TOGGLE_PERSON':
            return [
                ...state,
               // state.find({id: action.id})
            ]; 
        case 'DELETE_PERSON':
            return state.filter(p => !p.isSelected);
        default:
            return state;
    }
};
export default person;
