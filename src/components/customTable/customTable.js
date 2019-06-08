import React, { useContext } from 'react';
import "./customTable.css";
import { RecordsContext } from '../mainScreen/MainScreen';
/**
 * Custom Table to dispaly data using useContext API
 */
function CustomTable () {
    let isLoading = false;
    const value = useContext(RecordsContext);
    
    return (

            <div>
                { value!== '{}' &&!isLoading && <table>
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email ID</th>
                                    <th>Phone Number</th>
                                </tr>
                               { JSON.parse(value).map((record,index) => <tr>
                                    <td>{index}</td>
                                    <td>{record.firstName}</td>
                                    <td>{record.LastName}</td>
                                    <td>{record.email}</td>
                                    <td>{record.phone}</td>
                                    </tr>)}
                                
                            </table>}
            </div>
        
       

    );
}

export default CustomTable