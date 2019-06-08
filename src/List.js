import React, { useEffect } from "react";
import useFetchData from "./fetch";
const tableHeaders = [
  { type: "checkbox" },
  { type: "", data: "ID" },
  { type: "", data: "First Name" },
  { type: "", data: "Last Name" },
  { type: "", data: "Email" },
  { type: "", data: "Phone Number" }
];

function List() {
  const [loading, data] = useFetchData();
  useEffect(() => {
    // like component did mount
  }, []);
  return (
    <table className="table">
      <thead>
        <tr>
          {tableHeaders.map(({ type, data }, index) => {
            return renderTableColumnHeaders({type, data});
          })}
        </tr>
      </thead>
      <tbody>
        {data && renderTableRows(data)}
      </tbody>
    </table>
  );
}

function renderTableColumnHeaders({type, data}) {
    
  switch (type) {
    case "checkbox":
      return (
        <th scope="col"> 
          <input type="checkbox" value={data} />
        </th>
      );
    default:
      return <th  scope="col" key={data}>{data}</th>;
  }
}

function renderTableRows(data) {
    
  return data.map((employee, index) => {
    return <tr key={index}>
      <td>
          <input type="checkbox" value={employee.checked} />
        </td>
        <td >{employee.id}</td>
        <td >{employee.firstName}</td>
        <td >{employee.LastName}</td>
        <td >{employee.email}</td>
        <td >{employee.phone}</td>

    </tr>
  })
}
export default List;
