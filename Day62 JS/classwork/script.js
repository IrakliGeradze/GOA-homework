// // scope - cvladebis mnishvnelobis xelmisawvmdoloba
// let x = 10
// function greet(){
//     console.log(x)
// }
// if(true){
//     let a = 10 // leqsikuri scope - araa xelmisawvdomi funcqiis garet
// }
// greet()
// console.log(a)

// //shadowing
// function outerScope(){
//     let username = "zurabi";

//     function innerScope(){
//         // let username = "meore vinme"
//         // console.log(username)
//         for(let i = 0; i < 10; i++){
//             username = username.toLowerCase()
//         }
//     }
//     console.log(username)
//     innerScope()
// }

// outerScope()

// //globaluri - localuri
// // globaluri - xelmisawvdomia yvelgan  = let
// // localuri - xelmisavwdomia mxolod tavis kodis blokshi da kvemot = var
// // const it sheqmnilis shecvla ar sheidzleba

// function scope(){
//     var x = 5
// }
// scope()
// console.log(x)

// function makeCounter(){
//     let count = 0;
//     return function(){
//         return count++;
//     };
// }
// const counter = makeCounter();
// console.log(counter())
// console.log(counter())
// console.log(counter())





//hoisting - javascriptis dzravi ro eshveba javascripti jer qmnis funqciebs mere cvladebs da bolos ushvebs for ciklebs da while ciklebs
// hoisting - Functions -> var variables declaration -> everything but from up to down
// hello()

// function hello(){
//     console.log("hello")
// } // HOISTING

// xdeba deklaracia
// deklaracia - tovebs mnishvnelobas qvemot
// console.log(x)
// var x = 12345678910;

// while(password !== "paroli"){
//     var password = prompt("enter a password: ")
// }

// -------------------------------------------------------------------------------

//TIMER FUNCTION - droiti funqcia
// setTimeout()
// setInterval() 
// //orive dakavshirebulia kodis gashvebis drostan
// //shegvidzlia vmartot ramden xanshi gaeshveba funqcia


// // 1ms = 1/1000s
// // setTimeout() - im drois shemdeg gamova ra drosac chven mivutitebt
// function salami(){
//     console.log("Hello World")
// }
// setTimeout(salami, 3000)  // gadavcemt funqcias da shemdeg dros

// function salami(username){
//     console.log(`Welcome ${username}`)
// }
// setTimeout(salami, 3000, "irakli")



// // setInterval() - yovel chvens micemul wamshi an wutshi ertxel gamoitans consoleshi
// function salami(){
//     console.log("Hello World")
// }
// setInterval(salami, 3000)

// let count = 0;

// function counter(){
//     count++;
//     console.log(count)
//     if(count === 10){
//         clearInterval(counterStrike)
//     }
// }
// const counterStrike = setInterval(counter, 500)

// const username = form.elements.username;
// const email = form.elements.email;
// const phoneNumber = form.elements.number
// const form = document.querySelector("form");
// const data = document.getElementById("tbody");

// function chamateba(evenObject){
//     const username = username.value;
//     const email = email.value;
//     const phoneNumber = phoneNumber.value;
//     data.innerHTML = `
//         <tr>
//             <td>${username}</td>
//             <td>${email}</td>
//             <td>${phoneNumber}</td>
//         </tr>
//     `
//     form.reset()
// }
// form.onsubmit = chamateba;

// let btn = document.getElementById("btn")
// function wrapper(){
//     setTimeout(welcome, 2000)
// }
// function welcome(){
//     alert("You have clicked on button")
// }
// btn.onclick = wrapper;


//ANIMATIONS
const box = document.getElementById("bavshvi");
let positionX = 0;
let positionY = 0;
let direction = "right";


function animate(){
    if(direction === "right"){
        positionX++;
        if(positionX >= 150){
            direction = "down";
        }
    }
    if(direction === "down"){
        positionY++;
        if(positionY >= 150){
            direction = "left";
        }
    }
    if(direction === "left"){
        positionX--;
        if(positionX <= 0){
            direction = "up";
        }
    }
    if(direction === "up"){
        positionY--;
        if(positionY <= 0){
            direction = "right";
        }
    }
    box.style.left = `${positionX}px`;
    box.style.top = `${positionY}px`;
}
setInterval(animate, 10)