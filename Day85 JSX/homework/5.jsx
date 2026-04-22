import { useEffect, useState } from "react"

function RandomDog(){
    const [dog, setDog] = useState("");
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                setDog(data.message);
            })
    }, []);
    return(
        <>
            <img src={dog} alt="" />
        </>
    )
}

export default RandomDog