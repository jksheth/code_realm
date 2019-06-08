import React,{ useState,useEffect } from "react";
import useFetch from "../service/useFetch";
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';  

const TableDesktop=(props)=>{
    const [editField,seteditField]=useState(0);
    const [isLoading, data]=useFetch(true);
    return(
        <div>
            {isLoading && "Loading..."}
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
               <tbody>{data}</tbody>
            </table>
            <Link className="btn btn-primary" to={"/create"}>Add</Link>
            <Link className="btn btn-primary" to={"/edit"}>Edit</Link>
            <Link className="btn btn-primary" to={"/delete"}>Delete</Link>
        </div>
    )

}
export default TableDesktop;