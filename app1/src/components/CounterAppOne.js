import React, { useState } from 'react';

const IncrementCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        Add by one with each click 
      </p>
      <p>Click count : {count} </p>

      <button onClick={() => setCount(prevCount => prevCount + 1)}>Click me</button>

      &nbsp;
      &nbsp;

      <button onClick={() => setCount(0)}>Clear</button>
    </div>
  );
};

export default IncrementCounter;
