import React, { useMemo, useState } from "react";

function calculateFactorial(number) {
    console.log("Calculating factorial...");

    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
    }

    const Message = React.memo(function Message({ message }) {
    console.log("Message render");

    return <h3>{message}</h3>;
    });

    export default function CounterWithMemo() {
    const [count, setCount] = useState(1);
    const [message, setMessage] = useState("Hello!");

    const factorial = useMemo(() => {
        return calculateFactorial(count);
    }, [count]);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Counter With Memo</h2>
            <p>Counter value: {count}</p>
            <p>Factorial result: {factorial}</p>
            <Message message={message} />
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setMessage("New Message!")}>Change Message</button>
        </div>
    );
}