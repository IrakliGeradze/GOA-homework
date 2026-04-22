import { useState, useEffect } from "react";

function App() {

  //useState — ინახავს მონაცემს (state)
  //იძახება კომპონენტის render-ის დროს
  const [count, setCount] = useState(0); // number state
  const [name, setName] = useState(""); // string state

  //useEffect — side effects-სთვის
    useEffect(() => {
        console.log("Effect გაეშვა");
        //side effect მაგალითები:
        // - API call
        // - localStorage
        // - event listener
        localStorage.setItem("name", name);
        return () => {
            console.log("Cleanup შესრულდა");
    };

    }, [name]); 
        return (
        <div>
            <h1>useState & useEffect Demo</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <input
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
            />
            <p>Name: {name}</p>
        </div>
    );
}

export default App;