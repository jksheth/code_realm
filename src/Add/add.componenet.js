import React, { useState, form, input, label } from "react";
import Button from "../CommonComponents/buttons";
import "./add.css";

function renderForm(firstName, lastName, email) {
    return (
        <div>
            <form>
                <label>
                    First Name:<input type="text" name="firstName" />
                </label>
                <input type="submit" value="Save" />
                <Button title="Back" redirectTo="" />
            </form>
        </div>
    )
}

function Add() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div className="Align-center">
            {renderForm(firstName, lastName, email)}
        </div>
    );
}

export default Add;
