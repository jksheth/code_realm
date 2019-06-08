import React from 'react';

function HireTable() {
    var hireData = [{
        "firstName": "Micheal",
        "LastName": "Zane",
        "phone": "+12490450934",
        "email": "micheal.zane@xyz.com",
        "address": "Time Square, New York",
        "workRemotely": true,
        "date": "12/3/19",
        "jobSeeking": "Not open to offers",
        "age": "30"
    }];
    const tableRows = hireData.map((row)=>{
        return (
            <tr>
                <td>
                    <input type="checkbox" value={row.isSelected} />
                </td>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
            </tr>
        );
    });
    return (
        <>
            <h2>Hire List</h2>
            <table>
                {tableRows}
            </table>
        </>
    );
}

export default HireTable;