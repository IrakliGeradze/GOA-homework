// 4) შექმენით toDo აპლიკაცია სადაც input-ით შეყვანილი task დაემატება DOM-ში list-ის სახით თითო task-ს ექნება delete ღილაკი გამოიყენეთ JSON.stringify მონაცემების localStorage-ში შესანახად და JSON.parse რომ რეფრეშის შემდეგ tasks გამოჩნდეს filter გამოიყენეთ წაშლილი task-ების ამოსაღებად
// Requirements

// 1. HTML input და add ღილაკი
// 2. JS ფუნქცია addTask რომელიც დაამატებს ახალ task DOM-ში
// 3. delete ღილაკი თითო task-ის წასაშლელად
// 4. task-ების შენახვა localStorage-ში JSON.stringify გამოყენებით
// 5. localStorage-ის ამოღება JSON.parse და არსებული task-ების რენდერი
// 6. filter რომ წაშლილი task-ები არ დარჩეს მასივში


let inputField = document.querySelector("input");
let button = document.querySelector("button");
let main = document.querySelector("main");

let count = inputField.length;

button.onclick = function addToDo(){
    let field = inputField.value;
    count++;
    main.innerHTML += `
        <h1>Task ${count}: ${field}</h1>
        <button id="Del" onclick="Remove()">Delete task</button>
    `
    localStorage.setItem("Tasks", JSON.stringify(field));
    console.log(JSON.parse(localStorage.getItem("Tasks")))
}

function Remove(){
    main.innerHTML = ``
}