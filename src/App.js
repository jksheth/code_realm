import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/add/" component={Add} />
        <Route exact path="/edit/" component={Edit} />
      </Switch>
    </div>
  )
}

export default App
