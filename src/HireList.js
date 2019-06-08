import React from "react";
import useFetchData from "./fetch";
import List from "./List";
import "./HireList.css";
import { Link } from "react-router-dom";

class HireList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        HireList
        <List />
        <div className="list-actions-container">
        <Link className="action-link m-2 button" to="/add">Add</Link>
        <Link to="/edit" className="action-link m-2 button">Edit</Link>
        <Link to="/" className="action-link m-2 button">Delete</Link>
        </div>
      </div>
    );
  }
}

export default HireList;
