import React, { useState, useEffect } from 'react'

const EditForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
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
            <button>Update</button> &nbsp;&nbsp;
            <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </form>
  )
}

export default EditForm