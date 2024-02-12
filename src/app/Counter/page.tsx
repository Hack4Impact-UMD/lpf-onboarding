'use client'
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      <br></br>
      <span>{count}</span>
      <br></br>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
