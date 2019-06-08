import React from 'react';
import { connect } from 'react-redux';
import { showPerson, deletePerson } from '../../actions';
import './style.css';
import { Link } from 'react-router-dom';

class HireList extends React.Component {

    componentDidMount() {
        this.props.show();
    }

    render() {
        return (
            <div>
                <br />
                <table className='hire-table' border='1'>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                   <tbody>
                    {this.props.person.map(p => {
                        return (<tr key={p.email}>
                            <td><input type='checkbox' value={p.isSelected}></input></td>
                            <td>{p.id}</td>
                            <td>{p.firstName}</td>
                            <td>{p.LastName}</td>
                            <td>{p.email}</td>
                            <td>{p.phone}</td>
                            </tr>)
                    })
                    }
                </tbody>
                </table>
                <div>
                    <Link to="/add">Add</Link>
                    <button>Edit</button>
                    <button onClick={this.props.deletePerson}>Delete</button>
                </div>              
            </div>
        );
    }
} 


const mapStatesToProps = state => ({
    'person': state.person
}),

  mapdispatchToProps = dispatch => ({
    'show': () => {
        dispatch(showPerson());
    },
    'deletePerson': () => {
        dispatch(deletePerson());
    }
});
export default connect(mapStatesToProps, mapdispatchToProps)(HireList);