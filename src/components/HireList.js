import React from 'react';
import { BrowserRouter , Route } from "react-router-dom";
import List from './List';
import CandidateAdd from './candidateAdd'
import CandidateEdit from './CandidateEdit';
import { HireProvider } from '../context/HireContext';

import useFetch from '../hooks/fetchData';






const HireList  = () => {
    const [isLoaded, state, dispatch] = useFetch('./assignment.json');

    if(isLoaded) {
        return (
            <HireProvider value={{
                state: state,
                dispatch: dispatch
            }}>
                <BrowserRouter>
            
            <Route path="/" exact component={List} />
            <Route path="/add" exact component={CandidateAdd} />
            <Route path="/edit" exact component={CandidateEdit} />
            </BrowserRouter>
            </HireProvider>
            
        )
    } else {
        return (
            <div>Fetching Data...</div>
        )
    }
    

}

export default HireList;