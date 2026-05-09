"use client";

import { useState, useEffect, useMemo } from "react";

const expensiveCalculation = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 10000000; i++) {};
    return num * 2;
}

const WithoutUseMemo = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const calculatedValue = expensiveCalculation(count);

    return (
        <div>
            <h2>Without useMemo</h2>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
                <p>Value is : {calculatedValue}</p>
            </div>
            <div>
                <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type here..."
                />
                <p>Input Value is : {inputValue}</p>
            </div>
            <hr />
        </div>
    );
};

const WithUseMemo = () => {
    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const calculatedValue = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div>
            <h2>With UseMemo</h2>
            <div>
                <button onClick={() => setCount(count + 1)}>Increment Count</button>
                <p>Calculated Value : {calculatedValue}</p>
            </div>
            <div>
                <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type here..."
                />
                <p>Input Value : {inputValue}</p>
            </div>
            <hr />
        </div>
    );
};


export default function InfoPage() {
    return (
        <div>
            <WithoutUseMemo />
            <WithUseMemo />
        </div>
    );
};