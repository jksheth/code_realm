import React, { useState, Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hirelist from './Hirelist/hirelist';

export const Mycontext = React.createContext();

function App() {
  // const [data, setData] = useState([{id: 1, firstname: 'Gob', lastname:"whge", email: 'gf@g.com', phonenumber:"7654567894"}]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Hire List</p>

        <Mycontext.Provider value={{
            data : [{id: 1, firstname: 'Gob', lastname:"whge", email: 'gf@g.com', phonenumber:"7654567894"}],
          }}>
          <Hirelist />
        </Mycontext.Provider>
      </header>
    </div>
  );
}

export default App;
