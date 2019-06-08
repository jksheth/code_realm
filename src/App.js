import React from "react";
import "./App.css";
import HireEmployeeData from './components/HireEmployeeData'
import { BrowserRouter,Route} from 'react-router-dom';
import {Switch} from 'react-router';
import EditDetailComponent from "./components/EditDetailComponent";

function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Route exact path='/' component={HireEmployeeData}/>
              <Route  path='/editdetails' component={EditDetailComponent}/>
          </BrowserRouter>
    </div>
  );
}

export default App;
