//@ts-check
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ListView from "./ListView";
import AddView from "./AddView";

const HireList =()=> {
  return (
      <Router>
        <Route exact path="/" component={ListView} />
        <Route exact path="/add" component={AddView} />
      </Router>
  );
}

export default HireList;
