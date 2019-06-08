import {connect} from 'react-redux'
import {getContactDetails, deleteContact, addContact, editContact, searchContact} from '../actions/index'
import DesktopView from './desktopView';

const mapStateToProps = (state) => {
    return {
        contacts: state.app.contacts,
        allContacts: state.app.allContacts,
        totalContacts: state.app.totalContacts,
        contact: state.app.contact
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getContactDetails: () => dispatch(getContactDetails()),
        addContact: (data)  => dispatch(addContact(data)),
        editContact: (data) => dispatch(editContact(data)),
        deleteContact: (data) => dispatch(deleteContact(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DesktopView)