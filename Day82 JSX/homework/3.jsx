import { useEffect, useState } from "react"

function CounterAlert(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  useEffect(() => {
    if(count === 7) {
      alert("Lucky Number")
    }
  }, [count])

  return(
    <>
      <button onClick={handleClick}>Add 1</button>
    </>
  )
}
