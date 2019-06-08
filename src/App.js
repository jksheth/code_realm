import React from "react";
import { Route, Switch } from 'react-router-dom';

import "./App.css";

import Add from "./Form/Form";
import Edit from "./Form/Edit";
import Table from "./Table/Table";

function App() {
  return (
    <div className="App">
      <p>Code Realm</p>
      <Switch>
        <Route path='/edit' component={Edit}/>
        <Route path='/add' component={Add}/>
        <Route path='/' component={Table} />
      </Switch>
    </div>
  );
}

export default App;
