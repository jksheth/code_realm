import React from 'react';
import { Link } from "react-router-dom";

function CandidateForm() {
    return (
        <>
            <form>
                <div className={"input-group"}>
                    <label>ID</label>
                    <input type="text"  />
                </div>
                <div className={"input-group"}>
                    <label>First Name</label>
                    <input type="text" />
                </div>
                <div className={"input-group"}>
                    <label>Last Name</label>
                    <input type="text"  />
                </div>
                <div className={"input-group"}>
                    <label>Email Address</label>
                    <input type="text"  />
                </div>
                <div className={"input-group"}>
                    <label>Phone</label>
                    <input type=""  />
                </div>
                <div className={"input-group"}>
                    <label>Seeking Job</label>
                    <select >
                        <option>Actively Applying</option>
                        <option>Causally looking</option>
                        <option>Not looking, but open to offers</option>
                        <option>Not open to offers</option>
                        <option></option>
                    </select>
                </div>
                <div className={"input-group"}>
                    <label>Age</label>
                    <input type="text" />
                </div>
                <div className={"input-group"}>
                    <label>Work Remotely</label>
                    <input type="radio"  /> Yes
                    <input type="radio"  /> No
                </div>
                <div className={"input-group"}>
                    <label>Address</label>
                    <textarea  />
                </div>

                <button >Save</button>
                <button ><Link to={'/'}>Back</Link></button>
            </form>
        </>
    );
}

export default CandidateForm;