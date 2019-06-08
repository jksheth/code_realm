//@ts-check
import React, {useState} from "react";

const ListView =({history})=> {
    const [hasSelectAll, setHasSelectAll] = useState(false)

    const handleSelectAll = (event) => {
        setHasSelectAll(!hasSelectAll)
    }

    return (
        <div className="container">
            <h3>Hire List</h3>
            <table>
                <thead>
                    <th><input type="checkbox" className="selectAll" value={hasSelectAll} onChange={handleSelectAll} /></th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            <button type="button" onClick={history.push('/add')}>Add</button>
        </div>
    );
}

export default ListView;
