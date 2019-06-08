import React from "react";
import "./App.css";
import AddHire from './components/AddHire';
import EditHire from './components/EditHire';
import HireList from './components/HireList';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={HireList} />
        <Route path='/add' exact component={AddHire} />
        <Route path='/edit/:id' exact component={EditHire} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
