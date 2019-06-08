import React, { useEffect, useState } from 'react';

export default function useCounter(step = 1) {
  const [counter, setCounter] = useState(() => {
    // Do heavy calc
    return step;
  });

  useEffect(() => {}, []); //Should run only once while intial mount

  const incerement = () => setCounter(counter + step);
  const decrement = () => setCounter(counter - step);
  return {
    counter,
    incerement,
    decrement
  };
}
