import { useEffect, useState } from "react"

function backgroundColor(){
  const [color, setColor] = useState("white");
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return(
    <>
    <button onClick={() => setColor("red")}>Red</button>
    <button onClick={() => setColor("blue")}>Blue</button>
    <button onClick={() => setColor("pink")}>Pink</button>
    <button onClick={() => setColor("green")}>Green</button>
    <button onClick={() => setColor("yellow")}>Yellow</button>
    </>
  )
}

export default backgroundColor