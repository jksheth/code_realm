import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './../fetch';

import Row from './Row';


const Table = () => {
  // const [isLoading, data] = useFetch('./../../assignment.json');
  // will be replaced with actual data

  // console.log(dataColumns[0])

  let data = [{
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
    "firstName": "Martin",
    "LastName": "st",
    "phone": "+232490450934",
    "email": "martin.st@xyz.com",
    "address": "Time Square, New York",
    "workRemotely": false,
    "date": "15/06/19",
    "jobSeeking": "Actively Applying",
    "age": "33"
  }];
  var tableHeaders = (
    <thead>
      <tr>
        <th></th>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
      </tr>
    </thead>);


  let i = 0;

  let tableBody = data.map(function (row) {
    i = i + 1;
    return <Row data={row} key={i} id={i}/>  
  });

  // var tableBody = <tr></tr>

  return (
    <div>
      <h2>Hire List</h2>
      <table>
        {tableHeaders}
        <tbody>
          {tableBody}
        </tbody>
      </table>
      <div>
        <Link to='add'><button>Add</button></Link>
        <Link to='edit'><button>Edit</button></Link>
        <Link to='delete'><button>Delete</button></Link>
      </div>
    </div>
  );
}

export default Table;