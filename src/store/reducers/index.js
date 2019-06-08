import {ACTION_TYPES} from '../../consts';

const appReducer = (state = [], action) => {
    const {type, payload} = action;
    let newState = {};

    switch (type) {
        case ACTION_TYPES.GET_CONTACT_DETAILS:
        case ACTION_TYPES.SEARCH_CONTACT:
        case ACTION_TYPES.EDIT_CONTACT:
        case ACTION_TYPES.ADD_NEW_CONTACT:
        case ACTION_TYPES.DELETE_CONTACT:
            newState = {
                contacts: {
                    ...state,
                    ...payload
                }
            };
            return newState;
        default:
            return state
    }
};

export default appReducer