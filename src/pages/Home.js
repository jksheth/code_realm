import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import useLoadData from '../hooks/LoadData';
import { MyConsumer } from '../context';

const Home = () => {

    const [data] = useLoadData('https://github.com/jksheth/code_realm/blob/master/assignment.json');
    

    const onDelete = () => {

    }
    return (
            <>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col"></th>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => {
                                return (
                                <tr key={index}>
                                    <td><input className="form-check-input" type="checkbox"></input></td>
                                    <td>{index}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.LastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>)
                            })
                        }
                        
                        
                    </tbody>
                </table>
                <div className="btn-container">
                    <Link to="/add" className="btn btn-primary">
                        Add
                    </Link>
                    <Link to="/edit" className="btn btn-primary">
                        Edit
                    </Link>
                    <button className="btn btn-primary" onClick={onDelete}>Delete</button>
                </div>
            </>
    )
}

export default Home
