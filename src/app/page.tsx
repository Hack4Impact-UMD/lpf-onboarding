"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(1);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <button className={styles.decrement} onClick={() => setCounter(counter - 1)} />
        <div className={styles.countDisplay}>
          <h1 className={styles.displayHeader}>Counter</h1>
          <p className={styles.counter}>{counter}</p>
        </div>
        <button className={styles.increment} onClick={() => setCounter(counter + 1)} />
      </div>
    </div>
  );
}
