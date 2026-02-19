let products = document.getElementById("products")
let carts = document.getElementById("cart")

const productsList = [
    {name: 'Mausi', price: 150, desc: "Gaming mouse"},
    {name: 'Keyboard', price: 100, desc: "Gaming keyboard"},
    {name: 'Mic', price: 130, desc: "Microphone"},
    {name: "Camera", price:170, desc: "Sony Camera"},
];

const cartList = [];

for(let i = 0; i < productsList.length; i++){
    let currentProduct = productsList[i];
    products.innerHTML += `
    <div class="products">
        <h1>${currentProduct.name}</h1>
        <p>Price is: ${currentProduct.price}</p>
        <p>Description: ${currentProduct.desc}</p>
        <button id="btn" onclick="addToCart(${i})">Add to cart</button>
    </div>
    `
}

function addToCart(index){
    let product = productsList[index];
    cartList.push(product);
    renderCart()
}
function renderCart(){
    carts.innerHTML = "";
    for(let i = 0; i < cartList.length; i++){
        let item = cartList[i];
        carts.innerHTML += `
            <div class="cart-item">
                <h1>${item.name}</h1>
                <p>Price is: ${item.price}</p>
                <p>Description: ${item.desc}</p>
            </div>
        `
    }
}
