import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    function upp(){
        setCount(count + 1)
    }

    function down(){
        setCount(count - 1)
    }
    return(
        <>
        <p>{count}</p>
        <button onClick={upp}>+</button>
        <button onClick={down}>-</button>
        </>
    )
}