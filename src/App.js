import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';

import {UserProvider} from './utils/UserContextProvider';
import Users from './pages/Users';
import UserForm from './pages/UserForm';
import "./App.css";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <UserProvider>
                    <div className="container">
                        <Route path="/user/:id" component={UserForm}/>
                        <Route exact path="/" component={Users}/>
                    </div>
                </UserProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;
