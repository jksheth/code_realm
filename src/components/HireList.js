import React, {useState, useEffect} from "react";
import Actions from './Actions';

const HireList = () => {
    const [candidates, setCandidate] = useState([]);
    const [checked, setCheckChange] = useState([{}]);
    const addCandidateHandler = (firstName, lastName, emailAddress, phone, age, address) => {
      
      let newCandidate = {
        firstName: firstName, 
        LastName: lastName, 
        email: emailAddress, 
        phone: phone, 
        age: age, 
        address: address
      }
      let allCandidate = [...candidates, newCandidate];
      setCandidate(allCandidate);
      
    }
  useEffect(()=>{
    setCandidate([
        {
          "firstName": "Micheal",
          "LastName": "Zane",
          "phone": "+12490450934",
          "email": "micheal.zane@xyz.com",
          "address": "Time Square, New York",
          "workRemotely": true,
          "date": "12/3/19",
          "jobSeeking": "Not open to offers",
          "age": "30"
        },
        {
          "firstName": "Martin",
          "LastName": "st",
          "phone": "+232490450934",
          "email": "martin.st@xyz.com",
          "address": "Time Square, New York",
          "workRemotely": false,
          "date": "15/06/19",
          "jobSeeking": "Actively Applying",
          "age": "33"
        },
        {
          "firstName": "Gabrial",
          "LastName": "macht",
          "phone": "+75490450934",
          "email": "gabrial.macht@xyz.com",
          "address": "Time Square, New York",
          "workRemotely": true,
          "date": "2/9/19",
          "jobSeeking": "Actively Applying",
          "age": "28"
        },
        {
          "firstName": "Dave",
          "LastName": "Joe",
          "phone": "+12490450934",
          "email": "dave.joe@xyz.com",
          "address": "Time Square, New York",
          "workRemotely": false,
          "date": "12/12/19",
          "jobSeeking": "Actively Applying",
          "age": "38"
        },
        {
          "firstName": "Saad",
          "LastName": "Ulde",
          "phone": "+24490450934",
          "email": "saad.ulde@xyz.com",
          "address": "Globant, Pune",
          "workRemotely": true,
          "date": "1/1/19",
          "jobSeeking": "Causally looking",
          "age": "26"
        },
        {
          "firstName": "Akshay",
          "LastName": "Kharche",
          "phone": "+67490450934",
          "email": "akshay.kharche@xyz.com",
          "address": "Globant, Pune",
          "workRemotely": false,
          "date": "14/9/19",
          "jobSeeking": "Actively Applying",
          "age": "24"
        },
        {
          "firstName": "Supriya",
          "LastName": "Singh",
          "phone": "+52490450934",
          "email": "supriya.singh@xyz.com",
          "address": "Globant, Pune",
          "workRemotely": true,
          "date": "28/10/19",
          "jobSeeking": "Causally looking",
          "age": "27"
        },
        {
          "firstName": "Ashish",
          "LastName": "Ingle",
          "phone": "+12490450934",
          "email": "ashish.ingle@xyz.com",
          "address": "Globant, Pune",
          "workRemotely": false,
          "date": "22/7/19",
          "jobSeeking": "Not looking, but open to offers",
          "age": "30"
        },
        {
          "firstName": "Patrick",
          "LastName": "Adams",
          "phone": "+12490450934",
          "email": "patrick.adams@xyz.com",
          "address": "Metlife, New York",
          "workRemotely": true,
          "date": "1/5/19",
          "jobSeeking": "",
          "age": "35"
        },
        {
          "firstName": "Rick",
          "LastName": "Hoffman",
          "phone": "+12490450934",
          "email": "rick.hoffman@xyz.com",
          "address": "Metlife, New York",
          "workRemotely": true,
          "date": "",
          "jobSeeking": "Not open to offers",
          "age": ""
        }
      ]
      )
  },[]);
  
  
    return (
            <div className='hire-list' style={{maxWidth:'750px', margin:'0 auto', fontSize:'1.1rem'}}>
                <h1 style={{display:'flex', justifyContent:'center'}}> Hire List</h1>
            <table border="1" width="100%"  style={{ marginBottom:'1.2rem'}}>
                <thead>
                <tr>
                    <th style={{textAlign:'center'}}><input onChange={(e)=>{if(e.checked){setCheckChange(e.checked)}}} type="checkbox" /></th>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
                </thead>
        <tbody>
        {
        
            candidates.map((candidate,index)=>{
                
                return (
                    
                    <tr key={index+1}>
                        <td style={{textAlign:'center'}}><input type="checkbox" /></td>
                        <td>{index}</td>
                        <td>{candidate.firstName}</td>
                        <td>{candidate.LastName}</td>
                        <td>{candidate.email}</td>
                        <td>{candidate.phone}</td>

                    </tr>

                )
            })
        }
        </tbody>
        </table>

        
        </div>
        )
}

export default HireList;