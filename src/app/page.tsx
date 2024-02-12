"use client";
import Image from "next/image";
import Button from "./button/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <div className="page">
        <div className="desc"><p>Simple Counter. Hitting the left button decrements it by 1 and hitting the left button increments it by 1.</p></div>
        <div className="main">
          <div className="decrement">
            <Button onClick={() => setCount(count-1)}></Button>
          </div>
          <div className="middle">
            <div className="counter"><p>Counter</p></div>
            <p className="count">{count}</p>
          </div>
          <div className="increment">
            <Button onClick={() => setCount(count+1)}></Button>
          </div>
        </div>
      </div>
    </main>
  );
}
