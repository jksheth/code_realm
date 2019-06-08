import React from 'react';
import TableRow from './TableRow';

const TableComponent = ({data}) => {
  return (
      <table class="table table-striped">
          <thead>
              <th></th>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
          </thead>
        {data && data.map((row,index)=><TableRow rowData={row} rowId={index+1} key={index}/>)}
      </table> 
  )
};
export default TableComponent;