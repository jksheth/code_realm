import React, {useReducer} from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import reducer from "./reducer";


import HiringData from "./HiringData";
import Add from "./Add";
import Edit from "./Edit";

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Router>
        <Route path="/" exact 
          render={(props) => <HiringData data={state.data} />} />
        <Route path="/edit/" 
          render={(props) => <Edit data={state.data[0]} dispatch={dispatch} />}/>
        <Route path="/add/"
          render={(props) => <Add dispatch={dispatch} />} />
      </Router>
      
    </div>
  );
}

export default App;
