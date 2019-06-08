import React, {useReducer} from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HireList from './components/HireList';
import EmployeeForm from './components/EmployeeForm';
import { initialState, reducer } from './store';

function App() {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
        <BrowserRouter>
          <Switch>
            <Route 
              exact 
              path="/" 
              render={
                (props)=><HireList {...props} employeeList={state.employeeList} dispatch={dispatch} />} />
            <Route 
              exact 
              path="/addDetails" 
              render={(props)=><EmployeeForm {...props} employeeList={state.employeeList} dispatch={dispatch} />} />
            <Route 
              exact 
              path="/editDetails" 
              render={(props)=><EmployeeForm {...props} employeeList={state.employeeList} dispatch={dispatch} />} />
            <Route 
              path="*" 
              component={() => "404 NOT FOUND"} />
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
