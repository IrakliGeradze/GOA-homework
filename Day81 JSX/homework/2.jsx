function Component(){
  const [text, setText] = useState("");

  function ak (e){
    e.preventDefault();
    setText(e.target.value);
  }

  return(
    <>
      <input type="text" />
      <p>{text}</p>
    </>
  )
}