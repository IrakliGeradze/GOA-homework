// 1. function
// 2. function name
// 3. ()
// 4. {}
// let btn = document.getElementById("welcomeBtn");

// function greeting() { // gamotana
//     console.log("Hello Javascript")
//     btn.textContent = "You Clicked"
//     btn.style.backgroundColor = "red"
//     btn.style.color = "white"
// }
// btn.onclick = greeting


// function add(num1, num2) {  //shekreba
//     return num1 + num2
// }

// console.log(add(5, 5))

// let person = { // saxeli
//     username : "irakli geradze",
// }

// console.log("Hello " + person.username)



// let person = {
//     username : "irakli geradze",
//     city : "samtredia",
//     id : 515150594,
//     getCity : function() {
//         console.log(this.city)
//     }
// }

// console.log(person.getCity())

// let person = {
//     getCity: function() {
//         alert("do something")
//     }
// }

// sami tipis funqcia
// 1. asrulebs davalebas
// 2. tvlis shedegs

// let saidYes = confirm('are you sure bout that? ')
// let movie = prompt("Favourite awkakwasd? : ")



// let btn = document.getElementById("sendBtn");
// let userField = document.getElementById("username");
// let welcomeHeader = document.getElementById("welcomeMsg");

// btn.onclick = function () {
//     welcomeHeader.textContent = "Hello" + " " + userField.value
//     userField.value = " "
// }


const andOperant1 = document.getElementById("and1")
const andOperant2 = document.getElementById("and2")
const andBtn = document.getElementById("andSend")
const andResult = document.getElementById("andResult")

andBtn.onclick = function () {
    let val1 = andOperant1.checked
    let val2 = andOperant2.checked
    let logicalResult = val1 && val2
    andResult.textContent = ' Result of operation: ' + String(val1) + ' && ' + String(val2) + ' = ' + logicalResult
}
