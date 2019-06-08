import React from 'react';
import {ConnectedRouter} from 'react-router-redux';
import ApplicationRoutes from './routes/Routes';
import "./App.css";

const App = ({history}) => (
    <ConnectedRouter history={history}>
        <ApplicationRoutes />
    </ConnectedRouter>
);

export default App;
