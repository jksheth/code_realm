import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './HireAdd.module.css';

import * as CONSTANTS from '../constants/constants';

export const HireAdd = (props) => {

    return (
        <React.Fragment>
            <div className="form-group row">
                <label htmlFor="id" className="col-sm-2 col-form-label col-form-label-sm">{CONSTANTS.id}</label>
                <div className="col-sm-4">
                    <input type="text" disabled className="form-control form-control-sm" id="id" placeholder={CONSTANTS.id} value={1} />
                </div>
                <label htmlFor="job" className="col-sm-2 col-form-label col-form-label-sm">{CONSTANTS.seekingJob}</label>
                <div className="col-sm-4">
                    <select id="job">
                        <option value="Y">{CONSTANTS.yes}</option>
                        <option value="N">{CONSTANTS.no}</option>
                    </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="first-name" className="col-sm-2 col-form-label col-form-label-sm">{CONSTANTS.name}</label>
                <div className="col-sm-4">
                    <input type="text" onChange={props.handleChange} className="form-control form-control-sm" id="first-name" placeholder={CONSTANTS.name} />
                </div>
                <label htmlFor="age" className="col-sm-2 col-form-label col-form-label-sm">{CONSTANTS.age}</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control form-control-sm" id="age" placeholder={CONSTANTS.age} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="last-name" className="col-sm-2 col-form-label col-form-label-sm">{CONSTANTS.lastName}</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control form-control-sm" id="last-name" placeholder={CONSTANTS.lastName} />
                </div>
                <label htmlFor="last-name" className="col-sm-2 col-form-label col-form-label-sm">{CONSTANTS.workRemotely}</label>
                <div className="col-sm-4">

                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="email" className="col-sm-2 col-form-label col-form-label-sm">{CONSTANTS.emailAddress}</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control form-control-sm" id="email" placeholder={CONSTANTS.emailAddress} />
                </div>
                <label htmlFor="address" className="col-sm-2 col-form-label col-form-label-sm">{CONSTANTS.address}</label>
                <div className="col-sm-4">
                    <textarea type="text" className="form-control form-control-sm" id="address" placeholder={CONSTANTS.address} />
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="phone" className="col-sm-2 col-form-label col-form-label-sm">{CONSTANTS.phone}</label>
                <div className="col-sm-4">
                    <input type="text" className="form-control form-control-sm" id="phone" placeholder={CONSTANTS.phone} />
                </div>
            </div>

            <NavLink to="/hire/list" exact className="btn btn-secondary" >
                {CONSTANTS.back}
            </NavLink>
            <button type="button" onClick={props.submitForm} className="btn btn-primary">{CONSTANTS.save}</button>

        </React.Fragment>
    )

}