import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import UserList from './components/user-list/user-list';
import AddEdit from './components/addEdit/addEdit';

// TODO: Use Context here to check the global state of user being edited/added 
// and the current user on which edit operation is going on, if any.

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={UserList} />
        <Route path="/addoredit" component={AddEdit} />
      </div>
    </Router>
  );
}

export default App;
