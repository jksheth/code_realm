import React from "react";
import { Route } from 'react-router-dom'
import "./App.css";
import HireList from './compoenets/hire-list/HireaList'
import AddPage from '../src/compoenets/add-page/AddPage'
import EditPage from '../src/compoenets/edit-page/EditPage'

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={HireList} />
      <Route path="/AddPage" exact component={AddPage} />
      <Route path="/EditPage" exact component={EditPage} />
    </div>
  );
}

export default App;