import React, { useReducer, useEffect } from "react";
import List from "./components/List";
import Button from "./components/Button";
import { Redirect } from 'react-router'
// import {reducer} from "./reducer";



function reducer(state, action) {
  switch (action.type) {
    case 'unselect':
      return { ...state, selectedUsers: state.selectedUsers.filter((user) => user !== action.payload) }
    case 'select':
      return { ...state, selectedUsers: [...state.selectedUsers, action.payload] }
    case 'list':
      return { users: action.payload, selectedUsers: [] };
    case 'delete':
      return { ...state, users: state.users.filter((user, k) => !state.selectedUsers.includes(++k)), selectedUsers: [] }
    default:
      throw new Error();
  }
}

function App() {
  const initialState = { users: [], selectedUsers: [] };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // Update the document title using the browser API
    fetch("assignment.json").then(response => response.json())
      .then(data => {
        dispatch({ "type": "list", payload: data });
      });
  }, [dispatch]);

  const onCheck = (id, event) => {
    if (event) {
      dispatch({ "type": "select", payload: id });
    } else {
      dispatch({ "type": "unselect", payload: id });
    }
  }

  const onButtonClick = (action) => {
    switch (action) {
      // case 'delete':
      //   dispatch({ "type": action });
      //   break;
      case 'edit':
        return <Redirect to='/somewhere' />;
        break;
      default:
        dispatch({ "type": action });

    }
  }

  return (
    <div className="App">
      {state.users && <List onAction={onCheck} headers={["ID", "First Name", "Last Name", "Email", "Phone Number"]} items={state.users} title={"Hire List"} actions={true} />}
      <div className="actions">
        <Button action="Add x" onClick={onButtonClick} />
        <Button action="Edit x" onClick={onButtonClick} />
        <Button action="Delete working " onClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
