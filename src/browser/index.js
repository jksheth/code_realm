import React from 'react';
import { hydrate } from 'react-dom/server';

import App from '../App';

hydrate (
    <App />, document.getElementById('root')
);