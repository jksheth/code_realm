import React from 'react';
import { connect } from 'react-redux';

class AddPerson extends React.Component {
    constructor(props) {
        super(props);
        this.gotoHome = this.gotoHome.bind(this);
        this.save = this.save.bind(this);
    }

    gotoHome() {
        console.log("going to home page");
    }

    save() {
        console.log("save");
    }

    render() {
        return (
            <div>
                <div>
                    <label>Id</label>
                    <input type='text'></input>
                </div>

                <div>
                    <label>First Name</label>
                    <input type='text'></input>
                </div>

                <div>
                    <label>Last Name</label>
                    <input type='text'></input>
                </div>

                <div>
                    <label>Email Address</label>
                    <input type='text'></input>
                </div>

                <div>
                    <label>Phone</label>
                    <input type='text'></input>
                </div>

                <div>
                    <label>Seeking Job</label>
                    <select>
                        <option>Actively Applying</option>
                    </select>
                </div>

                <div>
                    <label>Age</label>
                    <input type='number'></input>
                </div>

                <div>
                    <label>Working</label>
                   
                </div>

                <div>
                    <label>Address</label>
                    <textarea></textarea>
                </div>
            <div>
                <button onClick={this.gotoHome}>Cancel</button>
                <button onClick={this.save}>Save</button>
            </div>
            </div>
        )
    }

}

const mapStatesToProps = state => ({
    'person': state.person
}),

  mapdispatchToProps = dispatch => ({
    'add': () => {
        
    },
});
export default connect(mapStatesToProps, mapdispatchToProps)(AddPerson);