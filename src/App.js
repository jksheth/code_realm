import React, {useReducer} from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HiringData from "./HiringData";
import Add from "./Add";
import Edit from "./Edit";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={HiringData} />
        <Route path="/edit/" component={Edit} />
        <Route path="/add/" component={Add} />
      </Router>
      
    </div>
  );
}

export default App;
