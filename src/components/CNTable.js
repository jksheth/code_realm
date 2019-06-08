import React from "react"


const CNTable  = React.memo(({ headers, rows }) => {
    const renderHeaders = (headers) => (
        <tr>
            {
                headers.map((header) => (
                    <th key={header}>{header}</th>
                ))
            }
        </tr>
    );

    const renderRow = (rows) => rows.map((row) => (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastame}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
            </tr>
        )
    );

    return(
        <table className="table table-bordered">
            <thead>
                {renderHeaders(headers)}
            </thead>
            <tbody>
                {renderRow(rows)}
            </tbody>
        </table>
    )
});

export default CNTable;