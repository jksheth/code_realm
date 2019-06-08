import React from "react";

function HireList(props) {
    console.log("props: ", props);
    return (
        <div className="hire-list">
            <h3>Hire List</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <TableRow employeeList={props.employeeList} />
                </tbody>
            </table>
        </div>
    );
}

export default HireList;

function TableRow(props) {
    return props.employeeList.map((item, i) => {
        return <tr key={i}>
            <td>{i}</td>
            <td>{item.firstName}</td>
            <td>{item.LastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    })
}
