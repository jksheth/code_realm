import React, {useState} from 'react'
import {Link} from 'react-router-dom';

const AddHire = ({addCandidateHandler}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [seekingJob, setSeekingJob] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');


    const saveCandidate = (e) => {
        e.preventDefault();
        console.log(firstName);
        debugger;
        addCandidateHandler(firstName, lastName, emailAddress, phone, age, address);
    }
    return (<div className='add-hire'>
        <h1 style={{textAlign:'center'}}>Add Details</h1>
        
        <div className="container">
            <form onSubmit={e=>saveCandidate(e)}>
            <div className="row">
                <div className="col-md-2">
                    <label htmlFor="id">ID</label>
                </div>
                <div className="col-md-4">
                    <input type="text" readonly name="id"  />
                </div>
                <div className="col-md-2">
                    <label htmlFor="seeking-job">Seeking Job</label>
                </div>
                <div className="col-md-4">
                    <select onChange={(e)=>{setSeekingJob(e.target.value)}}>
                        <option value="1">Actively Applying</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <label htmlFor="firstname">First Name</label>
                </div>
                <div className="col-md-4">
                    <input type="text" name="firstname" value={firstName} onChange={e=>setFirstName(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label htmlFor="age">Age</label>
                </div>
                <div className="col-md-4">
                    <input type="number" name="age" value={age} onChange={e=>setAge(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <label htmlFor="lastname">Last Name</label>
                </div>
                <div className="col-md-4">
                    <input type="text"  name="lastname" value={lastName} onChange={e=>setLastName(e.target.value)} />
                </div>
               </div> 
            <div className="row">
                <div className="col-md-2">
                    <label htmlFor="id">Email Address</label>
                </div>
                <div className="col-md-4">
                    <input type="text"  name="emailaddress"  value={emailAddress} onChange={e=>setEmailAddress(e.target.value)} />
                </div>
                <div className="col-md-2">
                    <label htmlFor="address">Address</label>
                </div>
                <div className="col-md-4">
                    <textarea rows="12" cols="20" name="address"  value={address} onChange={e=>setAddress(e.target.address)} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <label htmlFor="id">Phone</label>
                </div>
                <div className="col-md-4">
                    <input type="text"  name="phone"  value={phone} onChange={e=>setPhone(e.target.value)} />
                </div>
                
            </div>
            <Link to='/'>Back</Link>
            <button type="submit">Save</button>
            </form>
            </div>
            
    </div>)
}

export default AddHire;