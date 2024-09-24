"use client";
import React, { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(1);

  const decrement = () => setCount(prev => prev - 1);
  const increment = () => setCount(prev => prev + 1);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-300">
      <div className="flex items-center justify-center w-full px-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white w-10 h-12"
        >
        </button>
        <div className="bg-white rounded-lg px-24 py-16 mx-4 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-red-500 mb-4">Counter</h2>
          <div className="text-4xl font-bold">{count}</div>
        </div>
        <button
          onClick={increment}
          className="bg-green-500 text-white w-10 h-12"
        >
        </button>
      </div>
    </div>
  );
}
