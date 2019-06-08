import React from 'react';
import { Link } from "react-router-dom";

function ActionBar() {
    return (
        <>
            <button ><Link to={'/add/'}>Add</Link></button>
            <button ><Link to={'/edit/'}>Add</Link></button>
            <button >Delete</button>
        </>
    );
}

export default ActionBar;