import React from 'react';
import { Route } from 'react-router-dom';

const Button = ({ title, redirectTo }) => (
    <Route render={({ history }) => (
        <button
            type='button'
            onClick={() => { history.push( `/${redirectTo}`) }}
        >
            {title}
      </button>
    )} />
)

export default Button;