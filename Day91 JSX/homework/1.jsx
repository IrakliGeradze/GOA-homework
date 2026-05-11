import { useState } from "react";

function App() {
    return (
        <div>
        <CounterContainer />
        </div>
    );
    }
    function CounterContainer() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    };
    return (
        <div>
        <h2>Counter Container</h2>
        <CounterView count={count} onIncrease={increase} />
        </div>
    );
    }
    function CounterView({ count, onIncrease }) {
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={onIncrease}>
            Increase
        </button>
        </div>
    );
}

export default App;