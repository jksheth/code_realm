import React, {useReducer, useEffect} from 'react';

import {ADD_USER, UPDATE_USER, SET_USERS, REMOVE_USERS} from './actionTypes';

const initialState = {users: [], isLoading: true};
const UserContext = React.createContext(initialState);

let reducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return {users: action.payload, isLoading: false};
        case ADD_USER:
            return {users: state.users.concat(action.payload)};
        case UPDATE_USER:
            console.log("action", action);
            const users = state.users;
            users[action.payload.id - 1] = action.payload;
            return {users};
        case REMOVE_USERS:
            return {users: state.users.filter(user => !action.payload.includes(user.id))};
        default:
            return initialState;
    }

};

const UserProvider = (props) => {
    let [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        fetch('/assignment.json')
            .then(response => response.json())
            .then(jsonResponse => {
                console.log("response", jsonResponse);
                const users = jsonResponse.map((item, index) => {
                    return {
                        ...item,
                        id: index + 1
                    }
                });
                dispatch({type: SET_USERS, payload: users});
            })
            .catch(() => {

            });

    }, []);
    return (
        <UserContext.Provider value={{state, dispatch}}>
            {props.children}
        </UserContext.Provider>
    )
};

export {UserContext, UserProvider};