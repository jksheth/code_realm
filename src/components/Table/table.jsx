import React from "react";

const UserTable = props => (
  <React.Fragment>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>
                <input type="checkbox" value="" />
              </td>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.LastName}</td>
              <td />
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
    <button
      onClick={() => {
        props.editRow();
      }}
      className="btn btn-primary"
    >
      Edit
    </button>
    <button onClick={() => props.deleteUser()} className="btn btn-primary">
      Delete
    </button>
  </React.Fragment>
);

export default UserTable;
