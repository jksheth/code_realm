import React, {useState} from "react";
import hires from "../hires";
import { Link } from "react-router-dom";

function HireList(){
  const [items, setItems] = useState(hires);
  const [selectedListItem, setSelectedListItem] = useState(hires);


  let handleInputChange=(event)=> {
    setSelectedListItem(event.target.checked);
  };

  return(
      <div>
        <table style={{margin:"auto"}}>
          <thead>
          <tr>
            <th>check</th>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          </thead>
          <tbody>
          {
            items.map((item,index)=>
                <tr>
                  <td>
                    <input
                        name="selectedListItem"
                        type="checkbox"
                        checked={item.checked}
                        onChange={handleInputChange} />
                  </td>
                  <td>{index}</td>
                  <td>{item.firstName}</td>
                  <td>{item.LastName}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
            )
          }
          </tbody>
        </table>

        <div style={{marginTop:"32px"}}>
          <div className="button-container">
            <Link to="/add">
              <button
                  type="button"
                  className="btn btn-primary">
                Add
              </button>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/add">
            <button type="button" className="btn btn-primary">Edit</button>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/add">
            <button type="button" className="btn btn-primary">Delete</button>
            </Link>
          </div>

        </div>

      </div>

  );
}

export default HireList;