import React, { useState, useEffect } from 'react';

const Hirelist = () => {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('assignment.json')
      .then(res => res.json())
      .then(
        (result) => {
          setUser(result);
          setIsLoading(false);
        }
      )
  }, [users]);
  return (
    <div>
      <h2> {'HireList'}</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, index) => (
              <tr>
                <td>{index}</td>
                <td>{item.firstName}</td>
                <td>{item.LastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>

              </tr>
            )
            )
          }
        </tbody>
      </table>

    </div>
  )
}

export default Hirelist;

// function Table() {
//   const [count, setCount] = useState(0);

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     fetch('/assignment')
//     .then(res => res.json())
//     .then(


//   });

//   return (
//     <div>

//     </div>
//   );
// }