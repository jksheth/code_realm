import React, {Component} from 'react';
import DataGrid from './components/DataGrid';
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';

class App extends Component {
  state = {
  candidates:this.GetCandidates()
}


  GetCandidates() {
    return [
  { "Id":1,
    "firstName": "Micheal",
    "LastName": "Zane",
    "phone": "+12490450934",
    "email": "micheal.zane@xyz.com",
    "address": "Time Square, New York",
    "workRemotely": true,
    "date": "12/3/19",
    "jobSeeking": "Not open to offers",
    "age": "30"
  },
  {
    "Id":2,
    "firstName": "Martin",
    "LastName": "st",
    "phone": "+232490450934",
    "email": "martin.st@xyz.com",
    "address": "Time Square, New York",
    "workRemotely": false,
    "date": "15/06/19",
    "jobSeeking": "Actively Applying",
    "age": "33"
  },
  {
    "Id":3,
    "firstName": "Gabrial",
    "LastName": "macht",
    "phone": "+75490450934",
    "email": "gabrial.macht@xyz.com",
    "address": "Time Square, New York",
    "workRemotely": true,
    "date": "2/9/19",
    "jobSeeking": "Actively Applying",
    "age": "28"
  },
  {
    "Id":4,
    "firstName": "Dave",
    "LastName": "Joe",
    "phone": "+12490450934",
    "email": "dave.joe@xyz.com",
    "address": "Time Square, New York",
    "workRemotely": false,
    "date": "12/12/19",
    "jobSeeking": "Actively Applying",
    "age": "38"
  },
  {
    "Id":5,
    "firstName": "Saad",
    "LastName": "Ulde",
    "phone": "+24490450934",
    "email": "saad.ulde@xyz.com",
    "address": "Globant, Pune",
    "workRemotely": true,
    "date": "1/1/19",
    "jobSeeking": "Causally looking",
    "age": "26"
  }
]

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hire List</h2>
        </header>
        <DataGrid candidates = {this.state.candidates}/>
        <div className="btnPanel">
         <button>Add</button>
         <button>Edit</button>
          <button>Delete</button>
          </div>

    </div>
        );
        }
        }
export default App;
