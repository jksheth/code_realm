import React, { useContext } from 'react';

let ISEditing = React.createContext(false);
let CurrentUser = React.createContext(null);
let isEditing = useContext(ISEditing);
let currentUser = useContext(CurrentUser);

// To be used throughout application to get the global states as if use is being edited or what is the current user.
export { isEditing, currentUser };