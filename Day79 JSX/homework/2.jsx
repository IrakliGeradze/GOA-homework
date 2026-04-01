// 4) შექმენით App კომპონენტი, სადაც state-ში იქნება ტექსტი.
//    შექმენით Input კომპონენტი, რომელსაც props-ით გადასცემთ:
//    - value
//    - onChange ფუნქციას
//    input-ში ჩაწერილი ტექსტი უნდა აისახოს ეკრანზე პარაგრაფში.

import { useState } from 'react';


function App(){
  const [text, setText] = useState("");

  function Input(props){
    return(
      <input value={props.value} onChange={props.onChange}/>
    )
  }

  function handleChange(e){
    setText(e.target.value);
  }

  return(
    <>
      <Input value={text} onChange={handleChange} />
      <p>{text}</p>
    </>
  )
}