import React from "react";
import "./App.css";
import HireList from './components/hirelist';
import { Router, Route } from 'react-router-dom';
import history from './history';

export const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <Route exact path="/" component={HireList} />
      </Router>
    </div>
  );
}

export default App;
