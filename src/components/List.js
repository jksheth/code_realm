import React, {useContext} from 'react';
import {  Link } from "react-router-dom";
import CandidateRow from './CandidateRow';
import { HireContext } from '../context/HireContext';


const List = (props) => {
    var state = useContext(HireContext).state
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {state.list.map((element) => {
                        return  <CandidateRow key={element.id} candidate={element}></CandidateRow>
                    })} 
                </tbody>
                  
            </table>
            <div className="actions">
                    <button><Link to="/add">Add</Link></button>
                    <button><Link to="/edit">Edit</Link></button>
                    <button>Delete</button>
            </div>
            </div>
    )
}

export default List;