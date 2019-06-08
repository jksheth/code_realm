import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HireList from './HireList/HireList';
import AddHire from './AddHire';
import EditHire from './EditHire';
import "./App.css";

function Header() {
  return (
      <h2 className="header_custom">
        Hire List
      </h2>
  );
}


function App() {
  return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={HireList} />
          <Route path="/add" component={AddHire} />
          <Route path="/edit/:id" component={EditHire} />
        </div>
      </Router>
  );
}

export default App;