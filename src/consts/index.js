const ACTION_TYPES = {
    GET_CONTACT_DETAILS: 'GET_CONTACT_DETAILS',
    SEARCH_CONTACT: 'SEARCH_CONTACT',
    EDIT_CONTACT: 'EDIT_CONTACT',
    ADD_NEW_CONTACT: 'ADD_NEW_CONTACT',
    DELETE_CONTACT: 'DELETE_CONTACT'
};

const MODAL_FORM_LABEL = {
    ADD_CONTACT: 'Add Contact',
    UPDATE_CONTACT: 'Update Contact',
    DELETE_CONTACT: 'Delte Contact',
    ADD: 'Add',
    UPDATE: 'Update',
    CLOSE: 'Close',
    DELETE: 'Delete',
    CONTACT_FIRST_NAME: 'First Name',
    CONTACT_LAST_NAME: 'Last Name',
    CONTACT_EMAIL: 'Email',
    CONTACT_PHONE: 'Phone',
    CONTACT_ID: 'ID',
    SEEKING_JOB: 'Seeking Job',
    CONTACT_AGE: 'Age',
    CONTACT_WORKING_STATUS: 'Working Remotely'
};

const FORM_VALIDATION = {
    MIN_LENGTH: 2,
    MAX_LENGTH: 20,
    INVALID_EMAIL: 'Please enter valid email id',
    INVALID_PHONE: 'Please enter valid Phone number',
    INVALID_NAME: 'Please enter min 2 and max 20 character name'
};

export {
    ACTION_TYPES,
    MODAL_FORM_LABEL,
    FORM_VALIDATION
};