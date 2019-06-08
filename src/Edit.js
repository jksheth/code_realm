import React, {useReducer} from 'react';
import CandidateForm from "./CandidateForm";

import reducer from "./reducer";
const initialState = { 
    data: [{
      "firstName": "Micheal",
      "LastName": "Zane",
      "phone": "+12490450934",
      "email": "micheal.zane@xyz.com",
      "address": "Time Square, New York",
      "workRemotely": true,
      "date": "12/3/19",
      "jobSeeking": "Not open to offers",
      "age": "30"
    }]
  };

function Edit() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <CandidateForm onSubmit={()=>{dispatch({type:"Edit", data:{}})}} />
        </>
    );
}

export default Edit;