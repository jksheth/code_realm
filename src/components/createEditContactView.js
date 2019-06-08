import React, {Component} from 'react';
import {isEmpty as _isEmpty} from 'lodash';
import _maxBy from 'lodash/maxBy';
import {Field, reduxForm} from 'redux-form';
import FieldView from "./fieldView";
import {required, validateContactName, isEmail} from "../utils";
import {MODAL_FORM_LABEL} from "../consts";

class addEditContactModal extends Component {

    constructor(props) {
        super(props);
        this.resetHandler = this.resetHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
    }

    deleteHandler() {
        const {deleteContact, initialValues} = this.props;
        deleteContact(initialValues);
    }

    submitHandler(values) {
        const {addContact, editContact, isEdit, contacts} = this.props;
        const maxId = _maxBy(contacts, function(contact) {
            return contact.id;
        });
        const payload = {
            id: maxId.id + 1,
            seekingJob: values.job,
            firstname: values.firstname,
            Lastname: values.lastname,
            workRemotely: values.workStatus,
            email: values.email,
            address: values.address,
            phone: values.phone
        };
        !isEdit ? addContact(payload) : editContact(values);
    };

    resetHandler() {
        const {reset, closeModal} = this.props;
        reset();
        closeModal();
    };

    render() {
        const {isEdit, messages} = this.props;
        const {handleSubmit} = this.props;
        return (
            <div className="Contact">
                <form onSubmit={handleSubmit(this.submitHandler)}>
                    <div className="form-row">
                        <Field
                            name="id"
                            type="text"
                            component={FieldView}
                            label={MODAL_FORM_LABEL.CONTACT_ID}
                            disable={true}
                        />
                        <Field
                            name="job"
                            type="text"
                            component={FieldView}
                            label={MODAL_FORM_LABEL.SEEKING_JOB}
                        />
                    </div>
                    <div className="form-row">
                        <Field
                            name="firstname"
                            type="text"
                            placeholder="Enter First Name"
                            component={FieldView}
                            label={MODAL_FORM_LABEL.CONTACT_FIRST_NAME}
                            validate={[required, validateContactName]}
                        />
                        <Field
                            name="age"
                            type="text"
                            placeholder="Enter Age"
                            component={FieldView}
                            label={MODAL_FORM_LABEL.CONTACT_AGE}
                            validate={[required]}
                        />
                    </div>
                    <div className="form-row">
                        <Field
                            name="lastname"
                            type="text"
                            placeholder="Enter Last Name"
                            component={FieldView}
                            label={MODAL_FORM_LABEL.CONTACT_LAST_NAME}
                            validate={[required, validateContactName]}
                        />
                        <div>
                            <label>{MODAL_FORM_LABEL.CONTACT_WORKING_STATUS}</label>
                            <div>
                                <label>
                                    <Field
                                        name="workStatus"
                                        component="input"
                                        type="radio"
                                        value="yes"
                                    />{' '}
                                    Yes
                                </label>
                                <label>
                                    <Field
                                        name="workStatus"
                                        component="input"
                                        type="radio"
                                        value="no"
                                    />{' '}
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <Field
                            name="email"
                            id="email"
                            type="text"
                            placeholder="Enter Email"
                            component={FieldView}
                            label={MODAL_FORM_LABEL.CONTACT_EMAIL}
                            validate={[required, isEmail]}
                        />
                        <Field
                            name="address"
                            component="textarea"
                            validate={[required]}
                        />
                    </div>
                    <div className="form-row">
                        <Field
                            name="phone"
                            id="phone"
                            type="text"
                            placeholder="Enter Phone Number"
                            component={FieldView}
                            label={MODAL_FORM_LABEL.CONTACT_PHONE}
                            validate={[required]}
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default reduxForm({
    form: 'AddEditForm'
})(addEditContactModal);
