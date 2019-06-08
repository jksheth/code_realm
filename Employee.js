import React from 'react';
import './Employee.css';

const employee = (props) => {
    return (
        <div className="Employee">
            <div className="block">{props.key}</div>
            <div className="block">{props.employee.firstName}</div>
            <div className="block">{props.employee.LastName}</div>
            <div className="block">{props.employee.email}</div>
            <div className="block">{props.employee.phone}</div>
        </div>
    )
}

export default employee;