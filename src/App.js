import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HireList from "./HireList";
import EditItem from "./EditItem";
import AddItem from "./AddItem";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HireList} />
        <Route path="/edit" component={EditItem} />
        <Route path="/add" component={AddItem} />
      </Router>
    </div>
  );
}

export default App;
