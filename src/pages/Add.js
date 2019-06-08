import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { MyConsumer } from '../context';

const Add = () => {
    let ctx = useContext(MyConsumer);
    const onAdd = () => {

    }
    return (
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">ID</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" disabled />
                
            </div>   
            <div className="form-group">
                <label for="exampleInputEmail1">First Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" />
                
            </div>   
            <div className="form-group">
                <label for="exampleInputEmail1">Last Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter last Name" />
                
            </div>   
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                
            </div>   
            <div className="form-group">
                <label for="exampleInputEmail1">Phone</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phoen" />                
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Seeking Job</label>
                <select>
                    <option value="Seeking">Seeking</option>
                </select>
                
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Phone</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phoen" />
                
            </div>

            <button className="btn btn-primary" onClick={onAdd}>Save</button>            
            <Link className="btn btn-primary" to="/">
                Back
            </Link>
        </form>
    )
}

export default Add
