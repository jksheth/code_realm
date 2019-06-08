import React, {useReducer} from 'react';
import CandidateForm from "./CandidateForm";

function Edit({data, dispatch}) {
    // const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <CandidateForm onSubmit={()=>{dispatch({type:"edit", data:{}})}} />
        </>
    );
}

export default Edit;