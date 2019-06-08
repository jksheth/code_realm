import React, { Component } from "react";
import "./hirelist.css"
import { Mycontext } from "../App"
// const Mycontext = React.createContext();

// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
// import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
// import 'react-table/react-table.css';
// import ReactTable from 'react-table';

function onSelectRow(row, isSelected, e) {
    if (isSelected) {
      alert(`You just selected '${row['name']}'`);
    }
  }
   
  const selectRowProp = {
    mode: 'checkbox',
    clickToSelect: true,
    unselectable: [2],
    selected: [1],
    onSelect: onSelectRow,
    bgColor: 'white'
  };
   

class Hirelist extends Component {

    constructor(props) {
        super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
     }

     renderTableData(dataArray) {
        console.log("dataArray : ", dataArray);

        return dataArray.map((data, index) => {
           const { id, firstname, lastname, email, phonenumber } = data 
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{firstname}</td>
                 <td>{lastname}</td>
                 <td>{email}</td>
                 <td>{phonenumber}</td>
              </tr>
           )
        })
     }

     renderTableHeader(dataArray) {
        console.log("dataArray : ", dataArray);

        let header = Object.keys(dataArray[0]);
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

    render() {
        return (
            <div>
                <Mycontext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <p>Name : {context.data[0].firstname}</p>
                            <table id='students'>
                                <tbody>
                                <tr>{this.renderTableHeader(context.data)}</tr>
                                    {this.renderTableData(context.data)}
                                </tbody>
                            </table>
                            
                        </React.Fragment>
                    )}
                </Mycontext.Consumer>
                <div>
                    <button id='button'>Add</button>
                    <button id='button'>Edit</button>
                    <button id='button'>Delete</button>
                </div>
            </div>
         )
    }
  }
   
  export default Hirelist;