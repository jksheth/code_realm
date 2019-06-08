import React, { useEffect, useState } from 'react';
import useFetch from '../../use-fetch';
import Rows from '../rows/rows';
// import { currentUser, isEditing } from '../context/context';

const UserList = (props) => {

   let [data, loading] = useFetch('../../assignment.json');
   
   // To keep a list of selected users via click of a checkbox
   let [selected, setSelected] = useState([]);

   // To keep the local userlist after deletion and edit etc.
   let [userList, setUserList] = useState([]);



   useEffect(() => {
    data.forEach((row, index) => {
        row['id'] = index + 1;
    })
    setUserList(data);
   }, [data])

    const gotoAdd = () => {
        window.location.href = '/addoredit';
    }

    const deleteUsers = () => {
        
    }

    const addToSelected = (index) => {
        if (selected.indexOf(index) >= 0) {
            setSelected(selected.splice(index, 1));
        } else {
            setSelected(selected.concat(index));
        }
        console.log('selected is', selected);
    }

    return (
        <div className="user-list">
            {
                loading && 'User list is still loading, please wait'
            }
            {
                !loading && 
                <div>
                    <table >
                        <thead>
                            <tr>
                                <td>&nbsp;</td>
                                <td>ID</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>Phone Number</td>
                            </tr>
                        </thead>
                        <tbody>
                                <Rows addToSelected={addToSelected} data={userList}></Rows>
                        </tbody>
                    </table>

                    <br/>
                    <br/>
                    <div className="action-buttons">
                        <button onClick={gotoAdd}>Add</button>
                        <button disabled= {selected.length === 1 ? '': 'disabled' } onClick={gotoAdd}>Edit</button>
                        <button disabled= {selected.length ? '': 'disabled' } >Delete</button>
                    </div>
                </div>
            }
        </div>
        )
}

export default UserList;