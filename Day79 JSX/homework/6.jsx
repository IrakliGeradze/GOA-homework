// 7) შექმენით Product კომპონენტი, რომელიც მიიღებს props-ით productName და price მნიშვნელობებს. კომპონენტში გამოიტანეთ ორივე <p> ელემენტში. კომენტარებით ახსენით რატომ ვიყენებთ props-ს კომპონენტებს შორის მონაცემების გადასაცემად

function Product(props){
    return(
        <>
        <p>{props.productName}</p>
        <p>{props.price}</p>
        </>
    )
}