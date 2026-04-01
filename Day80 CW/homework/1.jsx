import { useState } from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick}>
            {props.label}
        </button>
    );
}

function App(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Current Count: {count}</p>
            <Button label="Add" onClick={() => setCount(count + 1)} />
        </div>
    );
}