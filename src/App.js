import React, { useEffect, useState } from 'react';
import Table from './Components/Table';
import Controls from './Components/Controls';
import SelectionProvider from './Components/SelectionProvider';
import './App.css';

function App() {
  const [rows, updateRows] = useState([]);

  useEffect(() => {
    fetch('../assignment.json')
      .then(res => res.json())
      .then(res => updateRows(res));
  }, []);

  return (
    <div className="app">
      <SelectionProvider>
        <h1 className="title">Hire List</h1>
        <Table rows={rows} />
        <Controls />
      </SelectionProvider>
    </div>
  );
}

export default App;
