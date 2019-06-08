import React, { Component, useState, createContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { get } from "http";


// const MyContext = createContext();

// class MyProvider extends Component{
//   state={
//     userList:{}
//   }

//   render(){
//     return <div>
//       <MyContext.Provider value={this.state}>
//           {this.props.children}
//       </MyContext.Provider>
//     </div>
//   }
// };


function App() {
  const [ userList, getData ] = useState([]);

  useEffect(()=>{
    fetch("demo.json").then(function(response) {
      return response.json();
    })
    .then((result)=>{
      getData(JSON.stringify(result));
    });
  },[userList]);  


  return (
    <div className="App">
      <div>
          <h2>Hire List</h2>
          {userList}
          {/* {TableDisplay(userList)}    */}
        </div>

    </div>
  );
}

function TableDisplay(list){
 
  return  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Numbers</th>
    </tr>
  </thead>
  <tbody>
    {list.map((item,index)=>(
      <tr>
        <td>#</td>
        <td>{index}</td>
        <td>{item.firstName}</td>
        <td>{item.LastName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>
    ))};
  </tbody>
</table>
}
export default App;
