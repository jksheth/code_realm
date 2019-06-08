import React from 'react';

const Row = ({ data, id }) => {
  // console.log(data)
  let i = 0;
  return (
    <tr>
      <input type="checkbox" id={id}/>
      <td key={i} id={id}>{id}</td>
      {Object.keys(data).map(function (column) {
        if(column === 'firstName' || column === 'LastName' || column === 'phone' || column === 'email') {
          console.log(data[column])
          i = i + 1;
          return <td key={i} id={id}>{data[column]}</td>;
        }
      })}
    </tr>
  );
}

export default Row;