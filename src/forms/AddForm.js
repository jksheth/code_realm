import React, { useState } from 'react'

const AddForm = props => {
	const initialFormState = { id: null, firstname: '', lastname: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
        <div className="container">
		<form
            className="form-horizontal"
			onSubmit={event => {
				event.preventDefault()
				if (!user.firstname || !user.lastname) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>   
            <div className="form-group">
                <label className="control-label col-sm-2">First Name</label>
                <input className="control-label col-sm-4" type="text" name="firstname" value={user.firstname} onChange={handleInputChange} />
            </div>
            <div className="form-group">
                <label className="control-label col-sm-2">Last Name</label>
                <input className="control-label col-sm-4" type="text" name="lastname" value={user.lastname} onChange={handleInputChange} />
            </div>
            <button className="control-label col-sm-2">Add</button>
		</form>
        </div>
	)
}

export default AddForm