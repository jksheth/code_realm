import React, { Component } from 'react';
import {isEmpty as _isEmpty, isEqual as _isEqual} from 'lodash';

export default class DesktopView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentContact : {},
            id: 0,
            checked: false
        };
        this.props.getContactDetails(this);
        this.deleteContactHandler = this.deleteContactHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.addContactHandler = this.addContactHandler.bind(this);
        this.editContactHandler = this.editContactHandler.bind(this);
        this.openAddEditContactModal = this.openAddEditContactModal.bind(this);
        this.closeModalHandler = this.closeModalHandler.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }

    handleCheckboxChange(target) {
        this.setState({checked: target.target.value});
    }

    componentWillReceiveProps(newProps) {
        if (!_isEqual(this.props.contact, newProps.contact)) {
            this.props.getContactDetails();
        }
    }

    deleteContactHandler(payload) {
        this.props.deleteContact(payload);
        this.closeModalHandler();
    }

    addContactHandler(payload) {
        this.props.addContact(payload);
        this.closeModalHandler();
    }

    editContactHandler(payload) {
        this.props.editContact(payload);
        this.closeModalHandler();
    }

    closeModalHandler() {
        this.setState({show: '', currentContact: {}});
        this.props.getContactDetails(this);
    }

    onChangeHandler(e) {
        const state = {};
        state[e.target.id] = e.target.value;
        this.setState(state);
        let prevState = this.state.currentContact;
        prevState[e.target.id] = e.target.value;
        this.setState({
            currentContact : prevState
        });
    }

    openAddEditContactModal(editMode, obj) {
        this.setState({showMoisEdit: editMode, currentContact: obj});
    }

    render() {
        const { currentContact, isEdit, messages, show } = this.state;
        const {contacts} = this.props;
        return (
            <div className="ds-contact-details">
                <header className="ds-contact-details__head">
                    Hire List
                </header>
                <div className="contact-table">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                        {contacts && contacts.map((obj, index) => {
                            return (
                                <tr>
                                    <th scope="row">{index}</th>
                                    <td>
                                        <input
                                            type="checkbox"
                                            name="checkbox"
                                            checked={this.state.checked}
                                            onChange={(e) => this.handleCheckboxChange(e)}
                                        />
                                    </td>
                                    <td>{obj.firstName}</td>
                                    <td>{obj.LastName}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.phone}</td>
                                </tr>
                            )})
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}