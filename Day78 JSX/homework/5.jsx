// 6) შექმენით Profile კომპონენტი, რომელიც მიიღებს props-ით username მნიშვნელობას და გამოიტანს ტექსტს: "Welcome, username". App.jsx-ში გამოიყენეთ Profile კომპონენტი და გადაეცით თქვენი სახელი

function Profile(props){
    return(
        <>
        <p>Welcome, {props.username}</p>
        </>
    )
}
