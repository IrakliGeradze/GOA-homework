function Toggle(){
  const [isOn, setIsOn] = useState(false);

  function toggle(){
    setIsOn(!isOn);
  }

  return(
    <>
    <button onClick={toggle}>Click</button>
    <p>{isOn ? "On" : "Off"}</p>
    </>
  )
}