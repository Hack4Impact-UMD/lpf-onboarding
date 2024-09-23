"use client";
import React from 'react';

interface CounterButtonProps {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
    step: number;
}

const CounterButton: React.FC<CounterButtonProps> = ({ counter, setCounter, step }) => {

    const stepCounter = () => {
        setCounter(counter + step);
    }

    if (step < 0) {
        return (<button onClick={stepCounter} className="bg-red-500 w-12 h-12"></button>)
    } else {
        return (<button onClick={stepCounter} className="bg-green-500 w-12 h-12"></button>)
    }
}

export default CounterButton;