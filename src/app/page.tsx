import Image from "next/image";
"use client";
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f5cc74',
      flexDirection: 'column'
    }}>
      <h1 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 'bold' }}>
        Simple Counter. Hitting the left button decrements it by 1 
        and hitting the right button increments it by 1.
      </h1>
      <div style={{
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: 'white', 
        padding: '20px', 
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        position: 'relative',
        textAlign: 'center'
      }}>
        {/* Left Button */}
        <button onClick={decrement} style={{
          backgroundColor: '#f03e3e',
          width: '40px',
          height: '40px',
          borderRadius: '5px',
          border: 'none',
          marginRight: '20px',
          cursor: 'pointer'
        }} />

        {/* Counter display */}
        <div style={{
          padding: '10px 40px', 
          fontSize: '36px',
          color: '#333',
          fontWeight: 'bold'
        }}>
          {count}
        </div>

        {/* Right Button */}
        <button onClick={increment} style={{
          backgroundColor: '#4caf50',
          width: '40px',
          height: '40px',
          borderRadius: '5px',
          border: 'none',
          marginLeft: '20px',
          cursor: 'pointer'
        }} />
      </div>
    </div>
  );
}