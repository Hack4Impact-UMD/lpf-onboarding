"use client";

import "./display.css";
import { useState } from "react";
import CounterButton from "../Button/Button";

const Display = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="display">
      <CounterButton
        onClick={() => {
          setCount(count - 1);
        }}
        color={"red"}
      />
      <div className="inner-display">
        <p className="counter-text">Counter</p>
        <p className="count">{count}</p>
      </div>
      <CounterButton
        onClick={() => {
          setCount(count + 1);
        }}
        color={"green"}
      />
    </div>
  );
};

export default Display;
