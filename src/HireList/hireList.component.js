import React from "react";
import { Link } from "react-router-dom";
import "./hireList.css";
import Button from "../CommonComponents/buttons";

var data = [
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
];


class HireList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: data,
        }
    }

    renderListHeader = () => (
        <div className='row'>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Email</p>
            <p>Phone Number</p>
        </div>
    )
    renderList = (list) => {
        return list.map((item, index) => {
            return (
                <div key={index}>
                    <div className='row'>
                        <p>{item.firstName}</p>
                        <p>{item.LastName}</p>
                        <p>{item.email}</p>
                        <p>{item.phone}</p>
                    </div>
                </div>
            )
        })
    }
    renderAddButton = () => (
        <Button title="Add" redirectTo="add" />
    )
    renderEditButton = () => (
        <Button title="Edit" redirectTo="edit" />
    )    
    render() {
        const { list } = this.state;
        return (
            <div className="Conatiner">
                {this.renderListHeader()}
                {this.renderList(list)}
                {this.renderAddButton()}
                {this.renderEditButton()}
            </div>
        );
    }
}

export default HireList;
