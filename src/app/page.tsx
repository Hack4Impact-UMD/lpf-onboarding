"use client";
import Image from "next/image";
import { useState } from 'react';
import './page.css';
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [count, setCount] = useState(1);
  const increment = () => {setCount(count + 1);}
  const decrement = () => {setCount(count - 1);}

return(
  <div className="main">
    <div className="yellow">

      <div className="decrementbutton">          
        <button onClick={decrement}></button>
      </div>

      <div className="countermiddle">
        <div className={`${inter.className}`}>Counter
          <div id="counterval">{count}</div>
        </div>
      </div>

      <div className="incrementbutton">          
        <button onClick={increment}></button>
      </div>

    </div>
  </div>
)

}
