import React from "react";
import { useFetch } from "./fetch";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function Dashboard() {

    // const url = "../assignment.json"
    const [data, loading] = useFetch("https://raw.githubusercontent.com/jksheth/code_realm/master/assignment.json");

    const selectedData = [];

    const changeHandler = (event) => {
        // alert(parseInt(event.target.id) + 1);
        let Data = data.filter(ele => {
            return ele.email == event.target.id;
        })
        console.log("Data", Data);
        selectedData.push(Data[0]);
        console.log("selectedData", selectedData[selectedData.length-1]);

    }

    return (
        < div>
            <style>{`
                table,tr,th,td{
                    border:1px solid black;
                }
            `}</style>
            <h1 > Hire List</h1>
            {loading ? (
                "Loading..."
            ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>checkBox</th>
                                <th>ID</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>PhoneNO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((ele, index) => (
                                <tr key={index}>
                                    <td ><input id={ele.email} type="checkbox" onClick={changeHandler} /></td>
                                    <td >{index}</td>
                                    <td >{ele.firstName}</td>
                                    <td >{ele.lastName}</td>
                                    <td >{ele.email}</td>
                                    <td >{ele.phone}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                )}
            <Router>
                <button><Link to="/adduser">Add</Link></button>
                <button><Link to="/edit">Edit</Link></button>
                <button><Link to="/delete">Delete</Link></button>
                <Route path="/adduser/" render={() => (<AddUser data={selectedData[selectedData.length-1]} Edit={false} />)} />
                <Route path="/edit/" render={() => (<AddUser data={selectedData[selectedData.length-1]} Edit={false} />)} />
            </Router>
        </div>
    )
}

export default Dashboard;