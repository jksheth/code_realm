import React, { useState, useEffect } from 'react';
import AddEditUser from './addEditUser';
import { Route } from 'react-router-dom';
import initialState from '../state';

const HireList = (props) => {

    let [state, setState] = useState(initialState);

    const validateAndEnableButtons = () => {
        let checkedCount = 0, shouldEdit = false, shouldDelete = false;
        state.userList.forEach((user) => {
            if (user.isChecked) {
                checkedCount ++;
            }
        });
        if (checkedCount == 1) {
            shouldEdit = shouldDelete = true;
        } else if (checkedCount > 1) {
            shouldDelete = true;
        }
        if (checkedCount > 0) {
            setState({
                ...state,
                editEnabled: shouldEdit,
                deleteEnabled: shouldDelete,
            });
        }
    }
    
    useEffect(() => {
        validateAndEnableButtons();
    }, [state.userList, state, setState, validateAndEnableButtons]);

    

    const handleAdd = () => {
        props.history.push('/add');
    }


    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    const handleChecked = (id) => {
        let users = state.userList;
        users.find(user => user.id == id).isChecked = true;
        setState({
            ...state,
            userList: users
        });
    }

    let userList = state.userList.map((user) => {
        return <tr key={user.id}>
            <td><input type="checkbox" onChange={() => handleChecked(user.id)}/>&nbsp;</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.firstName}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
        </tr>;
    });

    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <td><input type="checkbox" disabled={true} />&nbsp;</td>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                    </tr>
                </thead>
                <tbody>
                    {userList}
                </tbody>
            </table>
            <input type="button" onClick={handleAdd} value='Add'></input>
            <input type="button" disabled={!state.editEnabled} onClick={handleEdit} value='Edit'></input>
            <input type="button" disabled={!state.deleteEnabled} onClick={handleDelete} value='Delete'></input>
            <Route path={`${props.match.path}/add`} components={AddEditUser}/>
        </div>
    );
};

export default HireList;