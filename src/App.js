import React from "react";
import "./App.css";
import HireEmployeeData from './components/HireEmployeeData'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router';
import EditDetailComponent from "./components/EditDetailComponent";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Code Realm</p>
      </header> */}
      <Router>
        <Switch>
          <Route exact path='' component={HireEmployeeData}/>
          <Route path='/editdetails' component={EditDetailComponent}/>
        </Switch>
      </Router>
      {/* <HireEmployeeData/> */}
    </div>
  );
}

export default App;
