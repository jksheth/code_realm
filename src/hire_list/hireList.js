import React, { useState, useEffect } from 'react';
// import {fetchHireListData} from '../shared-library/hire-list/fetchData'
import './hireList.css';

export default function HireList() {

    let [listData, setOutput] = useState([]);

    useEffect(() => {
        fetch('/assignment.json').then((response) => {
            return response.json();
        }).then((json) => {
            setOutput(json)
        }).catch((er) => {
            return {};
        })
    })
    return (
        <div>
            <div className="container">
                <div className="hireListHeading">
                    Hire List
                    </div>
                <div className="listTable">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">{listData[0].firstName}</th>
                                    <th scope="col">{listData[0].lastName}</th>
                                    <th scope="col">{listData[0].email}</th>
                                    <th scope="col">{listData[0].phone}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listData.map((row, i) => {
                                    return (
                                        <tr>
                                            <td>{i++}</td>
                                            <td>{row.firstName}</td>
                                            <td>{row.lastName}</td>
                                            <td>{row.email}</td>
                                            <td>{row.phone}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}
