import React, { useState } from 'react';

function Button({title}) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      {title}
      </button>
    </div>
  );
}

export default Button;