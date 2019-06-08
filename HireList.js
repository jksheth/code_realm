import React , {Component , useContext} from 'react';
import axios from 'axios';

import jsonFile from '../assignment.json';
import Employee from '../components/Employee';

/*const CurrentRoute = React.createContext({
    employees : jsonFile
  });
  */

class HireList extends Component {

    state = {
        employees : []
    }

   

    componentDidMount () {

        console.log('jsonFile:',jsonFile);
        if(jsonFile){
            this.setState({
            employees : jsonFile
           });
       }

       //let currentRoute = useContext(CurrentRoute);
       //console.log("currentRoute:",currentRoute);
    }

    add = () => {
       // console.log(this.props);
        //this.props.history.push('/add');
    }

    edit = () => {

    }

    delete = () => {

    }

    render() {

        var employeeArray = this.state.employees.map((employee,index)=>{
            return (
                <Employee 
                    key= {index+1}
                    employee = {employee}
                    />
            )

        });

        return (
        <div>
            <h1>HireList</h1>
            {employeeArray}
            <button onClick={this.add}>Add</button>
            <button onClick={this.edit}>Edit</button>
            <button onClick={this.delete}>Delete</button>
        </div>
        )
    }
        
}

export default HireList;