import {useState, useEffect, useReducer} from 'react';
import { nextId}  from '../utils/idGenerator';

const reducers  = (state, action) => {
    switch(action.type) {
        case 'ADD_LIST' : {
            return {...state, list : action.list};
        }
        case 'ADD_CANDIDATE' : {
            let _list = [...state.list, action.candidate];
            return {...state, list : _list};
        }
        case 'EDIT_CANDIATE' : {
            let _list = state.list.map((candidate) => {
                if(action.candidate.id === candidate.id) {
                    return action.candidate;
                } else {
                    return candidate;
                }
            });
            return {...state, list : _list};
        }
        case 'DELETE_CANDIDATE' : {
            let _list = state.list.map((candidate) => {
                if(action.candidate.id !== candidate.id) {
                    return state.candidate;
                }
            });
            return {...state, list : _list};
        }
        case 'SELECT_CANDIATE' : {
            
            return {...state, selected : action.candidate};
        }
        case 'UNSELECT_CANDIATE' : {
            
            return {...state, selected : undefined};
        }
        default: {
            return state;
        }
    }
}


const useFetch = (path) => {
    const [isLoaded , setLoaded] = useState(false);
    const [state, dispatch] = useReducer(reducers, {list: []})
    
    useEffect(()=>{
        if(!isLoaded) {
            fetch(path).then((data) => {
                data.json().then((parsedJson)=> {

                    setLoaded(true);
                    let _withId = parsedJson.map((person)=>{
                        person.id = nextId.next().value;
                        return person
                    });
                    dispatch({
                        type: 'ADD_LIST',
                        list: _withId
                    })
                })
            }).catch((ex)=>{
                //Use Error Boundary here
                alert(ex);
            })
        }
    })
    

    return [isLoaded, state, dispatch];
}

export default useFetch;