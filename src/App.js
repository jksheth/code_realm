import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TableDesktop from "./components/TableDesktop";
import Create from './components/create';
import MyContext from './themeContext';
/* 
import Edit from './Components/edit';
import Index from './Components/delete'; */
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
     <MyContext.Provider value={{

     }}>
    <div className="App">
        <div className="container">
        <Switch>
            <Route exact path='/' component={TableDesktop }/>
            <Route exact path='/create' component={Create}/>
        </Switch>
        </div>
    </div>
    </MyContext.Provider> 
    </Router>
  );
}

export default App;


