import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HireList from "./HireList/hireList.component";
import Add from "./Add/add.componenet";
import Edit from "./Edit/edit.component";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HireList} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/edit" component={Edit} />
      </div>
    </Router>
  );
}

export default App;
