// 5) შექმენით List და ListItem კომპონენტები.
//    App კომპონენტში შექმენით სია (array) state-ის გამოყენებით.
//    List კომპონენტს props-ით გადასეცით სია,
//    ხოლო ListItem კომპონენტს თითო ელემენტი ცალ-ცალკე.
//    სია უნდა დარენდერდეს map-ის გამოყენებით.

import { useState } from "react";

function List(props){
  return(
    <>
    <ul>
      {props.items.map((item) => {
        return(
          <ListItem key={index} item={item}/>
        )
      })}
    </ul>
    </>
  )
}

function ListItem(props){
  return(
    <>
    <li>{props.item}</li>
    </>
  )
}

function App(){
  const [items, setItems] = useState(["HTML", "CSS", "JS"]);
  return(
    <>
    <List items={items}/>
    </>
  )
}