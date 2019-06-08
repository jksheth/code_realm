import React, {useState, useContext} from 'react';
import { HireContext } from '../context/HireContext';


const CandidateEdit = (props) => {
    const _context = useContext(HireContext);
    const [candidate, updateCandidate] = useState(_context.state.selected)
    return (
        <div>
            <div><span>id</span> <span><input disabled value={candidate.id} /></span></div>
            <div><span>First Name</span> <span>
                <input onChange={
                    (event) =>{
                        updateCandidate({...candidate, firstName: event.target.value})
                    }
                }></input>
            </span></div>
            <div><span>Last Name</span> <span>
            <input onChange={
                    (event) =>{
                        updateCandidate({...candidate, LastName: event.target.value})
                    }
                }></input>
            </span></div>
            <div><span>Email</span> <span>
            <input onChange={
                    (event) =>{
                        updateCandidate({...candidate, email: event.target.value})
                    }
                }></input>
            </span></div>
            <div><span>Phone</span> <span>
            <input onChange={
                    (event) =>{
                        updateCandidate({...candidate, phone: event.target.value})
                    }
                }></input>
            </span></div>
            <button onClick={()=> {_context.dispatch({
                type: 'EDIT_CANDIDATE',
                candidate: candidate
            })
            props.history.push('/')
            }}>Add</button>
        </div>
    )
}

export default CandidateEdit;
