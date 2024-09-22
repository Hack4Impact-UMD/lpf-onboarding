"use client"

import { useState } from "react";
import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1);
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-red-500 px-6 py-8" onClick={decrement}></button>

      <div className="flex flex-col justify-between items-center w-1/5 h-80 bg-white rounded-lg mx-8">
        <h2 className={`text-red-500 text-3xl font-bold pt-4 ${merriweather.className}`}> Counter </h2>
        
        <div className="flex-grow flex items-center justify-center">
          <h2 className={`text-black text-3xl font-bold -mt-8 ${merriweather.className}`}> {count} </h2>
        </div>
      </div>
      
      <button className="bg-green-500 px-6 py-8" onClick={increment}></button>
    </div>
  );
};
