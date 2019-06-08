import React from 'react';
// import { TableRow } from 'components/TableRow';

const List = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <table border="1">
                <thead>
                    <tr>
                        {props.actions && <th></th>}
                        {props.headers && props.headers.map((header, i) => (<th key={i}>{header}</th>))}
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, k) => (
                        // <TableRow item={item} />
                        <tr key={item.id}>
                            {props.actions && <td>
                                <input type="checkbox" onChange={(e) => {
                                    props.onAction(item.id, e.target.checked)
                                }} />
                            </td>}
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;