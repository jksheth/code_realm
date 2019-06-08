import React from "react";
import { Provider } from 'react-redux';
import "./App.css";
// import 'bootstrap';
import store from './store';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import HireList from './components/HireList';
import AddPerson from './components/AddPerson';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component= {HireList}></Route>
        <Route path="/add" component= {AddPerson}></Route>
      </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
