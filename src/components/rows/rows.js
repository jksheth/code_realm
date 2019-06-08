import React from 'react';

const Rows = (props) => {
    let rows = props.data.map((row, index) => 
        <tr key={index}>
            <React.Fragment>
                <td> <input onClick={() => props.addToSelected(index)} type='checkbox'/></td>
                <td>{row.id} </td>
                <td>{row.firstName}</td>
                <td>{row.LastName}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
            </React.Fragment>
        </tr>
    ) 

    return (
        <React.Fragment>
            {rows}
        </React.Fragment>
    )
}

export default Rows;


   