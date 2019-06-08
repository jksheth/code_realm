import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./App.css";

import { useFetch } from "./api/usefetch"
import { MainContext } from "./MainContext"
import HireListPanel from "./containers/HireListPanel"

const initialState = {
    selectedUser: null,
    users: []
};

const Home = () => (<h2>Home</h2>);
const EditUser = () => (<h2>Edit</h2>);
const AddUser = () => (<h2>Add</h2>);

function App() {
    const [ users ] = useFetch("./assignment.json");
    console.log(users);
    return (
        <div className="App">
            <BrowserRouter>
                <MainContext.Provider value={users}>
                    <Route exact path="/" component={HireListPanel} />
                    <Route exact path="/edit" component={EditUser} />
                    <Route exact path="/add" component={AddUser} />
                </MainContext.Provider>
            </BrowserRouter>
        </div>
    );
}

export default App;
