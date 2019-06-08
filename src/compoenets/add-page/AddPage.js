import React, { Component } from 'react'
import InputFiled from './InputFiled'

class AddPage extends Component {
    constructor(props) {
        super(props)
        this.inputRefID = React.createRef();
        this.inputRefFName = React.createRef();
        this.inputRefLName = React.createRef();
        this.inputRefEmail = React.createRef();
        this.inputRefPhone = React.createRef();
        this.inputRefSeekingJ = React.createRef();
        this.inputRefAge = React.createRef();
        this.inputRefWork = React.createRef();
        this.inputRefAddresss = React.createRef();
    }
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <InputFiled name={"ID"} ref={this.inputRefID} />
                    <InputFiled name={"Frist Name"} ref={this.inputRefID} />
                    <InputFiled name={"Last Name"} ref={this.inputRefID} />
                    <InputFiled name={"Phone"} ref={this.inputRefID} />
                </div>
                <div>
                    <div>
                        <lable>
                            Seeking Job
                 </lable>
                        <select ref={this.inputRefSeekingJ}>
                            <option>Acctively Applying</option>
                        </select>
                    </div>
                    <InputFiled name={"Age"} ref={this.inputRefAge} />
                </div>
                <div>
                    <lable>Work Remotely</lable>
                </div>


            </form>
        )
    }
}
export default AddPage