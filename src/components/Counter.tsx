"use client";
import { useState } from "react";
import styles from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.decrement}`}
        onClick={() => setCount(count - 1)}
      />
      <div className={styles.display}>
        <h1 className={styles.header}>Counter</h1>
        <p className={styles.count}>{count}</p>
      </div>
      <button
        className={`${styles.button} ${styles.increment}`}
        onClick={() => setCount(count + 1)}
      />
    </div>
  );
}
