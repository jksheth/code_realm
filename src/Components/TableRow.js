import React from 'react';
import { SelectionContext } from './SelectionProvider';

function TableRow({ rows }) {
  return rows.map((row, i) => (
    <SelectionContext.Consumer>
      {context => (
        <tr key={i}>
          <td><input onChange={() => context.select(row.id)} type="checkbox" /></td>
          <td>{row.id}</td>
          <td>{row.firstName}</td>
          <td>{row.LastName}</td>
          <td>{row.email}</td>
          <td>{row.phone}</td>
        </tr>
      )}
    </SelectionContext.Consumer>
  ));
}

export default TableRow;
