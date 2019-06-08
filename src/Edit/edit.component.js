import React from "react";
import "./edit.css";


class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderForm = () => (
        <p> Edit Form</p>
    )
    render() {
        return (
            <div className="Align-center">
                {this.renderForm()}
            </div>
        );
    }
}

export default Edit;
