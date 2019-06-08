import React from 'react';


const AddEdit = () => {
    return (
        <div className="add-edit">
            <h1>Add Details</h1>
            <div className="fields">
                <div className="fieldColumn">
                    <label>ID</label>
                    <input type="text" />
                </div>
                <div className="fieldColumn">
                    <label>Seeking Job</label>
                    <select>
                        <option>Actively applying</option>
                        <option>Casually applying</option>
                    </select>
                </div>
                <div className="fieldColumn">
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div className="fieldColumn">
                    <label>Age</label>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default AddEdit;