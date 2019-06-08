import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { HireList } from './HireList';
import { HireAdd } from './HireAdd';

const Hire = () => {

    const hireList = [
        {
            firstName: "Micheal",
            LastName: "Zane",
            phone: "+12490450934",
            email: "micheal.zane@xyz.com",
            address: "Time Square, New York",
            workRemotely: true,
            date: "12/3/19",
            jobSeeking: "Not open to offers",
            age: "30"
        }
    ]

    const hireAdd = {
        firstName: "",
        LastName: "",
        phone: 0,
        email: "",
        address: "",
        workRemotely: true,
        date: "",
        jobSeeking: "",
        age: 0
    }

    const [hireListState, setHireList] = useState(hireList);

    const [hireAddState, addHireCandidate] = useState(hireAdd);

    const submitForm = (e) => {
        console.log(e)
    }

    const handleChange = (e) => {
        console.log(e)
    }

    return (
        <React.Fragment>
            <Switch>
                <Route path="/hire/list"
                    render={() =>
                        <HireList hireList={hireListState}></HireList>
                    }
                />
                <Route path="/hire/add"
                    render={() =>
                        <HireAdd submitForm={submitForm} handleChange={handleChange} ></HireAdd>
                    }
                />
                <Redirect from="*" to="/hire/list" />
            </Switch>
        </React.Fragment>
    )

}

export default Hire;