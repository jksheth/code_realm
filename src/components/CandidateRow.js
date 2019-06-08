import React, {useState, useContext} from 'react';
import { HireContext } from '../context/HireContext';

const CandidateRow = (props) => {
    const _context = useContext(HireContext);

    const {isCandidateSelected , id, firstName, LastName, email, phone} = props.candidate;
    const [isSelected, setSelectedState] = useState(isCandidateSelected);
    
    const selectionHandler = () => {
        setSelectedState(!isSelected);
        if(isSelected) {
            _context.dispatch({
                type: 'SELECT_CANDIATE',
                candidate: props.candidate
    
            })
        } else {
            _context.dispatch({
                type: 'SELECT_CANDIATE', //Temp Unselect was causing problems
                candidate: props.candidate
    
            }) 
        }
       
    }
    
    return (
        <tr>
            <td className="row-selector"><input type="checkbox" value={isSelected} onChange={selectionHandler}></input></td>
            <td>{id}</td>
            <td>{firstName}</td>
            <td>{LastName}</td>
            <td>{email}</td>
            <td>{phone}</td>

        </tr>
    )
}

export default CandidateRow;