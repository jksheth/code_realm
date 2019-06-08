import React, { useContext, useEffect, useState } from "react"
import { MainContext } from "../MainContext"
import CNTable from "../components/CNTable";
import { Link } from "react-router-dom"

export default React.memo(function HireListPanel() {
    const [ tabelHeaders, setTableHeaders ] = useState([]);
    const users = useContext(MainContext);

    const rows = users.map((user, index) => {
        return {
            id: index+1,
            firstName: user.firstName,
            lastame: user.LastName,
            email: user.email,
            phone: user.phone
        }
    })

    useEffect(() => {
        console.log("called tabl eharder");
        setTableHeaders([
            "ID", "First Name", "Last Name", "Email", "Phone Number"
        ])
    }, []);

    return (
        <div className="hire-list-panel">
            <h3>Hire List</h3>
            <CNTable
                headers={tabelHeaders}
                rows={rows}
            />
            <div>
                <button><Link to="/add">Add</Link></button>
                <button><Link to="/edit">Edit</Link></button>
                <button>Delete</button>
            </div>
        </div>
    )
});