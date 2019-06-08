import React, {useReducer} from 'react';
import CandidateForm from "./CandidateForm";

function Add({data, dispatch}) {
    var newData = {
        "firstName": "Martin",
        "LastName": "st",
        "phone": "+232490450934",
        "email": "martin.st@xyz.com",
        "address": "Time Square, New York",
        "workRemotely": false,
        "date": "15/06/19",
        "jobSeeking": "Actively Applying",
        "age": "33"
      };
    return (
        <>
            <CandidateForm onSubmit={()=>{ dispatch({type:"add", data:newData}) }} />
        </>
    );
}

export default Add;