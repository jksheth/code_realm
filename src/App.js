import React, { useReducer, useEffect } from "react";
import List from "./components/List";
// import {reducer} from "./reducer";

const initialState = { users: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'list':
      return { users: action.payload };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    // Update the document title using the browser API
    fetch("assignment.json").then(response => response.json())
      .then(data => {
        dispatch({ "type": "list", payload: data });
      });
  }, [dispatch]);

  return (

    <div className="App">
      {state.users && <List headers={["ID", "First Name", "Last Name", "Email", "Phone Number"]} items={state.users} title={"Hire List"} actions={true}/>}
    </div>
  );
}

export default App;
