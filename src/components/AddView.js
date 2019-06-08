//@ts-check
import React, {useReducer} from "react";
import { reducer } from "../reducer/reducer";

const initialState  = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: ""
}

const AddView =(onAdd)=> {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIdChange = event => {
        dispatch({
            type: ACTION_TYPES.ID,
            payload: event.target.value
        })
    }
    const handleFirstNameChange = event => {
        dispatch({
            type: ACTION_TYPES.FIRST_NAME,
            payload: event.target.value
        })
    }
    const handleLastNameChange = event => {
        dispatch({
            type: ACTION_TYPES.LAST_NAME,
            payload: event.target.value
        })
    }
    const handleEmailChange = event => {
        dispatch({
            type: ACTION_TYPES.EMAIL,
            payload: event.target.value
        })
    }

    const handlePhoneChange = event => {
        dispatch({
            type: ACTION_TYPES.PHONE,
            payload: event.target.value
        })
    }

    const handleSubmit = () => {
        onAdd(state)
    }

    return (
        <div className="container">
            <h3>Add Details</h3>
            <form onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <div>
                        <label>ID</label>
                        <input type="text" className="id" value={state.id} onChange={handleIdChange}/ >
                    </div>
                    <div>
                        <label>First Name</label>
                        <input type="text" className="first_name" value={state.first_name} onChange={handleFirstNameChange}/ >
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" className="last_name" value={state.last_name} onChange={handleLastNameChange}/ >
                    </div>
                    <div>
                        <label>Email Address</label>
                        <input type="text" className="email" value={state.email} onChange={handleEmailChange}/ >
                    </div>
                    <div>
                        <label>Phone</label>
                        <input type="text" className="phone" value={state.phone} onChange={handlePhoneChange}/ >
                    </div>
                </div>
                <div className="col-md-6">
                    second block
                </div>
                <button type="submit" className="btn-secondary">Save</button>
            </form>
        </div>
    );
}

const ACTION_TYPES = {
    ID: 'id',
    FIRST_NAME: 'first_name',
    LAST_NAME: 'last_name',
    EMAIL: 'email',
    PHONE: 'phone'
}

export default AddView;
