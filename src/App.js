import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import UserTable from "./components/Table/table.jsx";

const usersDataWithID = users => {
  users.map((user, index) => (user.id = index + 1));
  return users;
};

const App = () => {
  // Data
  let usersData = require("./assignment.json");
  usersData = usersDataWithID(usersData);

  const initialFormState = { id: null, firstName: "", LastName: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      firstName: user.firstName,
      lastName: user.LastName
    });
  };

  return <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />;
};

export default App;
