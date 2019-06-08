import React, {useState} from 'react';

function AddScreen() {
    const [id, setID] = useState('1');
    const [firstName, setFirstName] = useState('');

        return (
            <div>
                <header> Add Details</header>
                <form > 
                    <p> Id <input id="id-input" value={id} disabled/></p>
                    <p> First name <input id="first-name-input" value={firstName}/></p>
                    <p> Last name <input id="last-name-input"/></p>
                    <p> Email Address <input id="email-input"/></p>
                    <p> Phone <input id="first-name-input"/></p>
                    <p> Seeking job <select> 
                        <option> Actively seeking</option>
                        </select></p>
                    <p> Age <input id="age-input"/></p>
                    <p> Work remotely <input id="work-remotely-input"/></p>
                </form>
                
            </div>
        )
    }

export default AddScreen;