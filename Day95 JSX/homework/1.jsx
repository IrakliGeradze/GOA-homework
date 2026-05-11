import React, { useState, useMemo } from "react";

function expensiveCalculation(num) {
    console.log("🔥 Expensive calculation running...");

    for (let i = 0; i < 100000000; i++) {
    }
    return num * num;
}

    export default function ExpensiveCalculator() {
    const [counter, setCounter] = useState(0);
    const [inputNumber, setInputNumber] = useState(1);
    const [result, setResult] = useState(0);

    const cachedValue = useMemo(() => {
        return expensiveCalculation(inputNumber);
    }, [inputNumber]);

    return (
        <div style={{ padding: "20px" }}>
        <h2>Expensive Calculator</h2>

        <p>Counter value: {counter}</p>
        <p>Input number: {inputNumber}</p>
        <p>Cached calculated value: {cachedValue}</p>
        <p>Final result: {result}</p>

        <input
            type="number" value={inputNumber} onChange={(e) => setInputNumber(Number(e.target.value))} />
        <button onClick={() => setCounter(counter + 1)}>
            Increase Counter
        </button>

        <button onClick={() => setResult(cachedValue)}>
            Calculate
        </button>
        </div>
    );
    }