// 2) შექმენით HTML ღილაკი <button id="nameBtn">Enter Name</button> და პარაგრაფი <p id="output"></p>. გამოიყენეთ external JS და ფუნქცია showName(), რომ ღილაკზე დაჭერისას გამოვიდეს prompt "Enter your name". მიღებული სახელი ჩაიწეროს პარაგრაფში

let Btn = document.getElementById('nameBtn')
let Out = document.getElementById('output')
let username = prompt("your name?: ")
function showName() {
    Out.textContent = "Hello " + username
}

Btn.onclick = showName