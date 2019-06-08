// @flow

import * as React from 'react';
import routes from './routes';
import {AppProvider} from './context/app-context'

import './App.scss';

function App() {
  return (
    <div className="app">
      <AppProvider>
        {routes}
      </AppProvider>
    </div>
  )
}

export default App;
