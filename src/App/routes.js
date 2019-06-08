import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HireList from './screens/HireList/index';
import User from './screens/User/index';

export default (
  <Router>
    <Switch>
      <Route exact path="/user/new" component={User} />
      <Route path="/user/:ID" component={User} />
      <Route path="/" component={HireList} />
    </Switch>
  </Router>
);
