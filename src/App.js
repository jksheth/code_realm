import React, { useState, Fragment } from 'react'
import AddForm from './forms/AddForm'
import EditForm from './forms/EditForm'
import UserTable from './tables/UserTable'
import './App.css';

const App = () => {
  // Data
	const listData = [
		{ id: 1, firstname: 'Mahesh', lastname: 'Mahi1234' },
		{ id: 2, firstname: 'Yogita', lastname: 'Yogi1234' },
		{ id: 3, firstname: 'Shubham', lastname: 'Shubhu1234' },
  ]
  
	const initialFormState = { id: null, firstname: '', lastname: '' }

	// Setting state
	const [ users, setUsers ] = useState(listData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)
  const [ add, setAdd] = useState(false);
  const [ edit, setEdit] = useState(false);

	// CRUD operations
	const addUser = user => {
    setAdd(true)
    setEdit(false)
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
    setEditing(true)
    setAdd(false)
    setEdit(true)
		setCurrentUser({ id: user.id, firstname: user.firstname, lastname: user.lastname })
	}

	return (
		<div className="container">
    <h1>Hire List</h1>
      <div className="flex-large">
            <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </div>
      <div></div>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Details</h2>
							<EditForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Details</h2>
							<AddForm addUser={addUser} />
						</Fragment>
					)}
				</div>
			</div>
		</div>
	)
}

export default App