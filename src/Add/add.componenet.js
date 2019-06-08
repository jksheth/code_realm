import React from "react";
import "./add.css";

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    renderForm = () => (
        <p>Add Form</p>
    )
    render() {
        return (
            <div className="Align-center">
                {this.renderForm()}
            </div>
        );
    }
}

export default Add;
