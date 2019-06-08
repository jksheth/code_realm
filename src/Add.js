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

function Add() {
    const [state, dispatch] = useReducer(reducer, initialState);

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
            <CandidateForm onSubmit={()=>{ dispatch({type:"Add", data:newData}) }} />
        </>
    );
}

export default Add;