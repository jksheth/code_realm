import React from "react";

function AddUser(props) {

    const saveUser = () => {
        console.log(props)
    }

    const formStyle={
        float:"left"
    }

    return (
        <div className="App">
            <form style={formStyle}>
                <p>Id </p> <input type="text" name="Id" required disabled />
                <p>First Name</p> <input type="text" name="firstName" required value={props.data.firstName}/>
                <p>Last Name</p> <input type="text" name="lastName" required value={props.data.LastName}/>
                <p>Email Address</p> <input type="text" name="email" required value={props.data.email}/>
                <p>Phone</p> <input type="text" name="phone" required value={props.data.phone}/>
                <p>Seeking Job</p> 
                <select value={props.data}>
                  <option value="seekingJob">seeking Job</option>
                  <option value="activelyApplying">Actively Applying</option>
                  <option value="causallyLooking">Causally looking</option>
                  <option value="notOpenToOffers">Not open to offers</option>
                  
                </select>
                <p>Age</p> <input type="text" name="age" required value={props.data.LastName}/>
                <p>Work Remotely</p><input type="radio" name="gender" value="male" /> Male<input type="radio" name="gender" value="female" /> Female<br />
                <p>Address</p> <textarea rows="4" cols="50" value={props.data.address}></textarea>
                <input type="submit" onClick={saveUser} />Save
            </form>
        </div>
    );
}

export default AddUser;
