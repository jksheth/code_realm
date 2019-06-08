import React, { useRef, useReducer, useEffect } from 'react';
import isEqual from 'lodash/isEqual';

const fetchReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return Object.assign(
        {},
        {
          ...state,
          loading: true
        }
      );
    case 'FETCH_SUCCEDED':
      return Object.assign(
        {},
        {
          ...state,
          loading: false,
          data: action.data
        }
      );
    case 'FETCH_FAILED':
      return Object.assign(
        {},
        {
          ...state,
          loading: false,
          res: {},
          error: action.error
        }
      );
    default:
      throw new Error(`Bad action ${action.type} for fetchReducer reducer.`);
  }
};

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default function useFetch({ url, params }) {
  params = params || {};
  const [state, dispatch] = useReducer(fetchReducer, {
    loading: false,
    error: false,
    data: []
  });

  // Save to compare later
  const oldParams = usePrevious(params);

  useEffect(
    () => {
      // Deep compare params
      if (isEqual(oldParams, params)) {
        return;
      }
      dispatch({
        type: 'FETCH_START'
      });
      fetch(url, params)
        .then(res => res.json())
        .then(res => {
          dispatch({
            type: 'FETCH_SUCCEDED',
            data: res
          });
        })
        .catch(error => {
          dispatch({
            type: 'FETCH_FAILED',
            error: error
          });
        });
    },
    [url, params]
  );

  const { loading, error, data } = state;
  return { loading, error, data };
}
