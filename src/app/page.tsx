"use client";

import Image from "next/image";
import React, { useState } from 'react';
import "./page.css"

let count = 0

export default function Home() {
  const [localCount, setLocalCount] = useState(count)

  const deprecate = () =>  { 
    count -= 1;
    setLocalCount(count)
  };

  const increment = () => { 
    count += 1; 
    setLocalCount(count)
  }

  return (
  <div className="background">
    <button className='redButton' onClick={deprecate}></button>
  <div className="Center">
    <h1 className="center-text"> Counter </h1>
    <h2> {localCount} </h2> 
  </div>
  
  <button className='greenButton' onClick={increment}></button>
  </div>
  )
};
