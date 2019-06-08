import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

function Table({ rows }) {
  return (
    <table className="table">
      <thead>
        <TableHeader />        
        <TableRow rows={rows} />
      </thead>
    </table>
  );
}

export default Table;
