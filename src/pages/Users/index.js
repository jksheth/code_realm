import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';

import {REMOVE_USERS} from '../../utils/actionTypes';
import {UserContext} from "../../utils/UserContextProvider";

const columns = [
    {key: 'id', label: 'ID'},
    {key: 'firstName', label: 'First Name'},
    {key: 'LastName', label: 'Last Name'},
    {key: 'phone', label: 'Phone'},
    {key: 'email', label: 'Email'},
];


const Users = (props) => {
    const {state, dispatch} = useContext(UserContext);
    const [selectedIds, setSelectedIds] = useState([]);

    const onCheckId = (checked, id) => {
        if (checked) {
            setSelectedIds(selectedIds.concat(id));
        } else {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        }
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">Hire List</h1>

                    {state.isLoading &&
                    <h4 className="text-center mt-5">
                        Loading....
                    </h4>
                    }
                    {!state.isLoading && <React.Fragment>
                        <div className="table-container mt-5">
                            <table className="table table-bordered">
                                <thead>
                                <tr>
                                    <th></th>
                                    {columns.map(column => <th key={column.key}>{column.label}</th>)}
                                </tr>
                                </thead>
                                <tbody>
                                {state.users.map((row, index) =>
                                    <tr key={`ROW_${index}`}>
                                        <td>
                                            <input type="checkbox" checked={selectedIds.includes(index + 1)}
                                                   onChange={(e) => onCheckId(e.target.checked, index + 1)}/>
                                        </td>
                                        {columns.map(column =>
                                            <td key={`ROW_${index}_${column.key}`}>
                                                {row[column.key]}
                                            </td>
                                        )}
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                        <div className="button-container mt-5">
                            <div className="row">
                                <div className="col-md-6 offset-md-3">
                                    <div className="button-wrapper">
                                        <Link
                                            to={`/user/${state.users.length > 0 ? state.users[state.users.length - 1].id + 1 : 1}`}
                                            className="btn btn-primary">
                                            Add
                                        </Link>
                                        <button className="btn btn-primary" onClick={() => {
                                            props.history.push(`/user/${selectedIds[0]}`)
                                        }} disabled={selectedIds.length !== 1}>
                                            Edit
                                        </button>
                                        <button className="btn btn-primary" onClick={() => {
                                            dispatch({type: REMOVE_USERS, payload: selectedIds});
                                            setSelectedIds([]);
                                        }}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>}
                </div>
            </div>
        </div>
    )

};

export default Users;