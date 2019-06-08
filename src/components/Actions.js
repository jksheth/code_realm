import React from 'react';
import {Link} from 'react-router-dom';

const Actions = ({addCandidateHandler}) =>{
    console.log(addCandidateHandler);
    return (
        <div className='action-list' style={{display:'flex', justifyContent:'space-around'}}>
            <Link style={{backgroundColor:'blue', color: 'white', flex:'1 1 20px',textDecoration:'none'}} to='/add' addCandidateHandler={addCandidateHandler}>Add</Link>
            <button style={{backgroundColor:'blue', color: 'white', flex:'1 1 30px',textDecoration:'none'}}>Edit</button>
            <button style={{backgroundColor:'blue', color: 'white', flex:'1 1 30px', alignItem:'center',textDecoration:'none'}}>Delete</button>
        </div>
    )
}
export default Actions;