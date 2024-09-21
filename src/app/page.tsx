"use client"

import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <div className="flex justify-center items-center h-screen screen">
      <button
        onClick={decrement}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        -
      </button>
      <div className="relative flex flex-col justify-center items-center w-72 h-48 bg-white rounded-lg mx-4">
        <span className={`absolute top-4 text-red-500 text-l font-bold ${inter.className}`}>Counter</span>
        <span className={`text-3xl text-black ${inter.className}`}>{counter}</span>
      </div>
      <button
        onClick={increment}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        +
      </button>
    </div>
  );
};