import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HireList from "./HireList/hireList.component";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HireList} />
      </div>
    </Router>
  );
}

export default App;
