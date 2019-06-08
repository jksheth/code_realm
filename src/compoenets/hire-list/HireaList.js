import React from 'react'
import useFetch from './fetch'
import dataLists from './hirelist/hirelist'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
const HireList = (props) => {

  // const [isLoading,data] = useFetch('./assignment.json')
  console.log(typeof data)
  
  const handleAddClick = () => {
    props.history.push(`/AddPage`)
    
  }
  const handleEditClick = () => {

  }
  const handleDeletesClick = () => {

  }
  return (
    <React.Fragment>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Frist Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {dataLists.map((value, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{value.firstName}</td>
                  <td>{value.LastName}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                </tr>)
            })}
          </tbody>
        </table>

              </div>
              <div>
                <button onClick={handleAddClick}>Add</button>
              </div>
              <div>
                <button onClick={handleEditClick}>Edit</button>
              </div>
              <div>
                <button onClick={handleDeletesClick}>Delete</button>
                </div>
        </React.Fragment>
      )
  }
  
export default HireList