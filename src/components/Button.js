import React from "react";

const Button = ({ action, onClick }) => {
    return (<button onClick={(e) => { onClick(action.toLowerCase()) }}> {action}</button>);
}

export default Button;