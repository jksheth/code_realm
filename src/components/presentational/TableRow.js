import React from 'react';

const TableRow = ({rowData,rowId}) => { 
    return(
        <tr scope="row">
            <td><input type="checkbox"/></td>
            <td>{rowId}</td>
            <td>{rowData.firstName}</td>
            <td>{rowData.LastName}</td>
            <td>{rowData.email}</td>
            <td>{rowData.phone}</td>
        </tr>
    )
}

export default TableRow;