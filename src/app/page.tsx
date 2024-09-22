"use client";
import { useState } from 'react';
import './page.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    let temp = counter;
    setCounter(temp - 1);
  }

  const incrementCounter = () => {
    let temp = counter;
    setCounter(temp + 1);
  }

  return (
    <div className='body-section'>
      <div className='app-section'>
        <div className='decrement-section'>
          <button onClick={decrementCounter}></button>
        </div>
        <div className='counter-section'>
          <h1 className={`${inter.className} counter-title`}>Counter</h1>
          <h2 className={`${inter.className} counter`}>{ counter }</h2>
        </div>
        <div className='increment-section'>
          <button onClick={incrementCounter}></button>
        </div>
      </div>
    </div>
  )
}
