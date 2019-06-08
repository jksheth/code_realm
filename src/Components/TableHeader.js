import React from 'react';

function TableHeader() {
  return (
    <tr>
      <th><input type="checkbox" /></th>
      <th>ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone Number</th>
    </tr>
  )
}

export default TableHeader;