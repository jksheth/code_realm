import React, { useReducer } from 'react';
import { SelectionContext } from './SelectionProvider';
import { reducer } from '../reducers/reducer';

function Controls() {
  const [state, dispatch] = useReducer(reducer);

  return (
    <SelectionContext.Consumer>
      {context => (
        <div className="controls">
          <button>Add</button>
          <button>Edit</button>
          <button onClick={() => dispatch({ type: 'delete', selectedRows: context.selectedRows })}>Delete</button>
        </div>
      )}
    </SelectionContext.Consumer>
  );
}

export default Controls;
