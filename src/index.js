import React from 'react';
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store, {routerHistory} from './store';
import App from './App';
import './index.css';

render(
    <Provider store={store}>
        <App history={routerHistory}/>
    </Provider>,
    document.getElementById('root')
);

