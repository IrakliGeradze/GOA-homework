// //document ari mtliani html is mocemuloba- anu fesvebi body head footer da ase shemdeg
// //DOM - html is fesvebi risgan shedgeba
// //DOM - Document Object Model
// const myItem = document.getElementById("item")
// // chashenebulia ukve da viyenebt dot notation rom mivwvdet obieqts javascriptshi
// myItem.style.backgroundColor = "red"
// // DOM is nebismier obieqts aqvs kutvnileba metodi movlena
// //                                Property, Method, Event
// // metodi ari magalitad funqcias ro vqmnit
// // kutvnileba ari shignit funqciashi rasac chavwert magalitad vucvlit fers
// // da movlena ari magalitad  onclick

// const myItem = document.querySelector("div")
// // querySelector -> wamovigebt elementis saxelit
// const myItem = document.getElementsByClassName("item")
// // getElementByClassName -> wamovigebt klasis saxelit

// //NODE - magalitad gvaqvs button - am buttons aqvs totebi rogoricaa:
// //gilakshi xoa teqsti, stili, aidi, klasi da ase shemdeg

// //axali elementis sheqmna
// let myBtn = document.createElement("button");
// myBtn.textContent("Hello")
// myBtn.style.backgroundColor = "gray"
// myBtn.style.color = "white"
// myBtn.style.borderRadius = "8px"
// myBtn.style.fontSize = "25px"
// myBtn.style.padding = "5px 15px"
// document.body.appendChild(myBtn);

// //axali teqstis gamotana - createTextNode()
// //appendChild() - chamateba
// let textNode = document.createTextNode("Hello World")
// document.body.appendChild(textNode)

// //washla elementis daklikebaze - removeChild()
// let btn = document.getElementById("btn")
// btn.onclick = function(){
//     let btnParent = btn.parentNode
//     btnParent.removeChild(btn)
// }

// let div = document.querySelector("div");
// let btn = document.getElementById("btn");
// let p = document.getElementById("p");
// console.log(div.firstChild) // pirvelli child
// console.log(div.firstElementChild) // pirveli element
// console.log(div.lastChild) // bolo child
// console.log(div.childNodes)

// let div = document.querySelector("div");
// let btn = document.getElementById("btn");
// let p = document.getElementById("p");

// div.replaceChild(btn, document.createElement("hr"))

const products = [
    {name: 'Keyboard', price: 150, desc: "AJAZZ Keyboard"},
    {name: 'Mouse', price: 100, desc: "Lenovo Mouse"},
    {name: 'Mic', price: 130, desc: "Microphone"},
    {name: "Camera", price:170, desc: "Sony Camera"},
];

const productsContainer = document.getElementById("productsContainer");
const cartContainer = document.getElementById("cartContainer");

for(let i = 0; i < products.length; i++){
    let currentProduct = products[i];
    // const productDiv = document.createElement("div");

    // const productHeader = document.createElement("h1");
    // productHeader.textContent = currentProduct.name;

    // const priceP = document.createElement("p");
    // priceP.textContent = 'Price is: ' + currentProduct.price;

    // const descP = document.createElement("p");
    // descP.textContent = 'Description: ' + currentProduct.desc;

    // const btn = document.createElement("button");
    // btn.textContent = "Add to cart";

    // const productIcon = document.createElement("img");
    // productIcon.style.width = "100px";
    // productIcon.style.border = "1px solid black";
    // productIcon.style.height = "100px";


    // productDiv.appendChild(productHeader);
    // productDiv.appendChild(priceP);
    // productDiv.appendChild(descP);
    // productDiv.appendChild(btn);
    // productDiv.appendChild(productIcon);
    // productsContainer.appendChild(productDiv);

    // btn.onclick = function(){
    //     const cartDiv = document.createElement("div");
    //     const cartHeader = document.createElement("h1");
    //     const cartP = document.createElement("p");
    //     const cartDesc = document.createElement("p");
    //     const cartImg = document.createElement("img");
    //     cartHeader.textContent = currentProduct.name;
    //     cartImg.style.width = "100px";
    //     cartImg.style.height = "100px";
    //     cartImg.style.border = "1px solid black";
    //     cartDiv.appendChild(cartImg);

    //     cartDesc.textContent = 'Description: ' + currentProduct.desc;
    //     cartDiv.appendChild(cartDesc);


    //     cartP.textContent = 'Price is: ' + currentProduct.price;
    //     cartDiv.appendChild(cartP);


    //     cartContainer.appendChild(cartDiv);
    //     cartDiv.appendChild(cartHeader);
    // }

    productsContainer.innerHTML += `
        <div class='product'>
            <img width = '100px' height = '100px' border = '1px solid black' src = ${currentProduct.img}>
            <h1>${currentProduct.name}</h1>
            <p>Price is: ${currentProduct.price}</p>
            <p>Description: ${currentProduct.desc}</p>
            <button onclick="addToCart(${i})">Add to cart</button>
        </div>
    `

}

// const div = document.querySelector("div")


// //ecmascript
// `Hello ${name}`

// div.innerHTML = `
//     <h1>Hello</h1>
// `