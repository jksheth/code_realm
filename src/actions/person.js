export const showPerson = () => ({
    'type': 'SHOW_ALL',
});

export const showPersonSuccess = payloadList => ({
    'type': 'SHOW_SUCCESS',
    payloadList
});

export const showPersonError = error => ({
    'type': 'SHOW_ERROR',
    error
});

export const deletePerson = () => ({
    'type': 'DELETE_PERSON'
});

export const togglePerson = (id) => ({
    'type': 'TOGGLE_PERSON',
    'id': id
});

