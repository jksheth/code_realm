import React from 'react';
// import { TableRow } from 'components/TableRow';

const List = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <table border="1">
                <thead>
                    {props.actions && <th></th>}
                    {props.headers && props.headers.map((header) => (<th>{header}</th>))}
                </thead>
                {props.items.map((item, k) => (
                    // <TableRow item={item} />
                    <tr ke={k}>
                        {props.actions && <td></td>}
                        <td>{++k}</td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;