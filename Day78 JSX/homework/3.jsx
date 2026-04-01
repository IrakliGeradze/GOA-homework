// 4) შექმენით Button კომპონენტი, რომელიც მიიღებს props-ით buttonText მნიშვნელობას და გამოიტანს <button> ელემენტში. App.jsx-ში გამოიყენეთ Button კომპონენტი ორჯერ სხვადასხვა ტექსტით ("Login", "Register")


function Button(props){
  return(
    <>
    <button>{props.buttonText}</button>
    </>
  )
}