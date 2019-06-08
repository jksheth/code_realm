import React from "react";
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Hire from './components/Hire';

function App() {
  return (
    <div className="App container top-margin">
      <BrowserRouter>
        <Hire></Hire>
      </BrowserRouter>
    </div>
  );
}

export default App;
