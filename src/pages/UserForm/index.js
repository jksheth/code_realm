import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';

import {ADD_USER, UPDATE_USER} from '../../utils/actionTypes';
import {UserContext} from "../../utils/UserContextProvider";
import {isFor} from "@babel/types";

const isValidEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
    let re = /^\d{10}$/;
    return re.test(phone);
};

const isValidAge = (phone) => {
    let re = /^\d{2}$/;
    return re.test(phone);
};

const UserForm = (props) => {
    const {state, dispatch} = useContext(UserContext);
    const userId = props.match.params.id ? parseInt(props.match.params.id) : 1;
    const selectedUser = state.users.find(user => user.id === userId);

    console.log("state.users", state.users, props.match.params);

    const [user, setUser] = useState(selectedUser ? {...selectedUser} : {worKRemotely: 'no', id: userId});
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    };

    const validateFields = () => {
        return user.firstName && user.lastName
            && isValidEmail(user.email) && isValidPhone(user.phone)
            && user.jobSeeking && user.worKRemotely
            && isValidAge(user.age) && user.address;
    };

    const saveUser = (e) => {
        setFormSubmitted(true);
        if (!validateFields()) return;
        console.log("form submit");
        if (selectedUser) {
            dispatch({type: UPDATE_USER, payload: user});
        } else {
            dispatch({type: ADD_USER, payload: user});
        }
        e.preventDefault();
        props.history.push('/');
    };

    console.log("user", user);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">
                        {props.match.params.id ? 'Edit' : 'Add'}
                        Details
                    </h1>
                    <div className="form-container mt-5">
                        <form action="" onSubmit={saveUser} >
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-md-3">ID</label>
                                        <div className="col-md-9">
                                            <input type="text" className="form-control" disabled name="id"
                                                   value={user.id} onChange={onChange}/>

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3">First Name</label>
                                        <div className="col-md-9">
                                            <input type="text"
                                                   className={`form-control ${isFormSubmitted && !user.firstName ? 'is-invalid' : ''}`}
                                                   name="firstName"
                                                   value={user.firstName} onChange={onChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3">Last Name</label>
                                        <div className="col-md-9">
                                            <input type="text"
                                                   className={`form-control ${isFormSubmitted && !user.LastName ? 'is-invalid' : ''}`}
                                                   name="LastName"
                                                   value={user.LastName} onChange={onChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3">Email Address</label>
                                        <div className="col-md-9">
                                            <input type="email"
                                                   className={`form-control ${isFormSubmitted && !isValidEmail(user.email) ? 'is-invalid' : ''}`}
                                                   name="email"
                                                   value={user.email} onChange={onChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3">Phone</label>
                                        <div className="col-md-9">
                                            <input type="text"
                                                   className={`form-control ${isFormSubmitted && !isValidPhone(user.phone) ? 'is-invalid' : ''}`}
                                                   name="phone"
                                                   value={user.phone} onChange={onChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group row">
                                        <label className="col-md-3">Seeking Job</label>
                                        <div className="col-md-9">
                                            <select name="jobSeeking"
                                                    className={`form-control ${isFormSubmitted && !user.jobSeeking ? 'is-invalid' : ''}`}
                                                    value={user.jobSeeking} onChange={onChange}>
                                                <option value="">Please Select</option>
                                                <option value="Actively Applying">Actively Applying</option>
                                                <option value="Not open to offers">Not open to offers</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3">Age</label>
                                        <div className="col-md-9">
                                            <input type="number"
                                                   className={`form-control ${isFormSubmitted && !isValidAge(user.age) ? 'is-invalid' : ''}`}
                                                   name="age"
                                                   value={user.age} onChange={onChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3">Work Remotely</label>
                                        <div className="col-md-9">
                                            <div className="radio-container">
                                                <div>
                                                    <input type="radio"
                                                           name="worKRemotely"
                                                           value="yes"
                                                           checked={user.worKRemotely && user.worKRemotely === 'yes'}
                                                           onChange={onChange}/>
                                                    <label>Yes</label>
                                                </div>
                                                <div>
                                                    <input type="radio" className="form-control" name="worKRemotely"
                                                           value="no"
                                                           checked={user.worKRemotely && user.worKRemotely === 'no'}
                                                           onChange={onChange}/>
                                                    <label>No</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-md-3">Address</label>
                                        <div className="col-md-9">
                                            <textarea className="form-control" name="address"
                                                      onChange={onChange}
                                                      className={`form-control ${isFormSubmitted && !user.address ? 'is-invalid' : ''}`}>{user.address}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div className="button-wrapper">
                                        <Link className="btn btn-primary" to="/">
                                            Back
                                        </Link>
                                        <button className="btn btn-primary" type="submit">
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UserForm;