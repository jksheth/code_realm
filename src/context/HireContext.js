import React from 'react';

const HireContext = React.createContext({
    list: []
})
const HireProvider = HireContext.Provider;

export {HireContext, HireProvider};