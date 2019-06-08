import React from 'react';

import styles from './HireList.module.css';

import * as CONSTANTS from '../constants/constants';

export const HireList = (props) => {

    const renderContactNames = () => {
        return props.hireList.map((person, index) => {
            return (
                <React.Fragment key={index} >
                    <div className={`${styles.hire_list_item} col-sm-1`} ></div>
                    <div className={`${styles.hire_list_item} col-sm-1`} >{index}</div>
                    <div className={`${styles.hire_list_item} col-sm-3`} >{person.firstName}</div>
                    <div className={`${styles.hire_list_item} col-sm-3`} >{person.LastName}</div>
                    <div className={`${styles.hire_list_item} col-sm-2`} >{person.email}</div>
                    <div className={`${styles.hire_list_item} col-sm-2`} >{person.phone}</div>
                </React.Fragment>
            )
        });
    }

    return (
        <div className={"row contacts_list"}>
            <div className={`${styles.hire_list_item_header} col-sm-1`} >{CONSTANTS.select}</div>
            <div className={`${styles.hire_list_item_header} col-sm-1`} >{CONSTANTS.id}</div>
            <div className={`${styles.hire_list_item_header} col-sm-3`} >{CONSTANTS.name}</div>
            <div className={`${styles.hire_list_item_header} col-sm-3`} >{CONSTANTS.lastName}</div>
            <div className={`${styles.hire_list_item_header} col-sm-2`} >{CONSTANTS.email}</div>
            <div className={`${styles.hire_list_item_header} col-sm-2`} >{CONSTANTS.phone}</div>
            {renderContactNames()}
        </div>
    )
}