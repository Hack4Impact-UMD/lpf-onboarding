
"use client";
import CounterButton from "./CounterButton";
import { useState } from "react";

export default function Home() {
    const [counter, setCounter] = useState<number>(1);

    return (
        <div className="flex items-center">
            <CounterButton counter={counter} setCounter={setCounter} step={-1} />
            <div className="bg-white rounded-lg p-8 mx-4 text-center w-64">
                <h1 className="text-red-500 text-lg font-bold mb-4">Counter</h1>
                <p className="text-black font-bold text-2xl">{counter}</p>
            </div>
            <CounterButton counter={counter} setCounter={setCounter} step={1} />
        </div>
    )
}
