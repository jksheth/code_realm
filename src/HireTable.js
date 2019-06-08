import React from 'react';

function HireTable({data}) {
    const tableRows = data.map((row)=>{
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