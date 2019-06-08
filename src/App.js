import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddScreen from "./components/addScreen";
import EditScreen from "./components/editScreen";
import MainScreen from "./components/mainScreen";

function App() {
  return (
    <div className="App">
      
      <Router>
        <Route path="/" exact component={MainScreen} />
        <Route path="/Add" exact component={AddScreen} />
        <Route path="/Edit" exact component={EditScreen} />
      </Router>
      
    </div>
  );
}

export default App;
