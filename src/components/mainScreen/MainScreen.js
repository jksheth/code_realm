import React from 'react';
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import CustomTable from '../customTable';
import useFetch from '../service/service';
export const RecordsContext = React.createContext();
/**
 * Main screen used to display Table and action buttons
 * TODO react router on click is not working due to functional component (converted to make use of useFetch custom hook) however on 'http://localhost:3000/Add' add page is displyed
 */
function MainScreen () {

    const [isLoading, output] = useFetch('/assignment.json');
    
        return (
            <div> 
                 
                     
                 <Router >
                    <header className="App-header">        
                            <p>Hire List</p>
                        </header>
                        <RecordsContext.Provider value={output}>
                            {isLoading && <div>Please Wait, data is been fetched</div>}
                        {!isLoading && <CustomTable />}
                        </RecordsContext.Provider>
                        {/* <Switch> */}
                    <Link to="/Add"><button > Add </button></Link>
                    <Link to="/Edit"><button > Edit </button></Link>
                    {/* </Switch> */}
                    <button > Delete </button> 
                    
                        </Router>
                 
                
            </div>
            
        );
}





export default MainScreen;