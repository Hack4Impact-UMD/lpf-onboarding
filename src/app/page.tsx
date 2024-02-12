"use client";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const Decrement = () => {
    setCounter(counter - 1);
  };

  const Increment = () => {
    setCounter(counter + 1);
  };

  return (
    <main>
      <div className="container">
        <div className="description-top">
          <p>Simple Counter. Click the left button to decrement by 1.</p>
        </div>
        <div className="description-bottom">
          <p>Click the right button to increment by 1.</p>
        </div>

        <div className="counter-app">
          <div className="decrement">
            <button onClick={Decrement}></button>
          </div>
          <div className="middle">
            <div className="counter-text">
              <p>Counter</p>
            </div>
            <p className="counter-value">{counter}</p>
          </div>
          <div className="increment">
            <button onClick={Increment}></button>
          </div>
        </div>
      </div>
    </main>
  );
}