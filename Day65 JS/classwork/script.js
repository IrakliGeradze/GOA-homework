// let form = document.querySelector("form");
// let userField = form.elements.username;
// let emailField = form.elements.email;
// let passwordField = form.elements.password;
// let loggedUser = "";

// function loadData(){
//     let savedUser = localStorage.getItem("username");
//     if(savedUser){
//         loggedUser;
//     }
// }

// loadData();
// checkLoggedIn();

// function saveData(user, email, pass){
//     localStorage.setItem("username", user);
//     localStorage.setItem("email", email);
//     localStorage.setItem("password", pass);
// }

// function logout(){
//     localStorage.removeItem("username");
// }

// function checkLoggedIn(){
//     if(loggedUser){
//         document.body.innerHTML = `
//             <h2>Username: ${loggedUser}</h2>
//             <h2>Email: ${localStorage.getItem("email")}</h2>
//             <button onclick="${logout()}">Logout</button>
//         `
//     }
// }

// function handleSubmit(eventObject){
//     eventObject.preventDefault();
//     let username = userField.value;
//     let email = emailField.value;
//     let password = passwordField.value;
//     if(username.length <= 8){
//         alert("Username must be at least 8 characters long")
//         return;
//     }
//     if(username.includes(" ")){
//         alert("Username cannot contain spaces")
//         return;
//     }
//     if(password.length < 8) {
//         alert("Password must be at least 8 characters long")
//         return;
//     }
//     loggedUser = username;
//     saveData(username, email, password);
//     alert("Account created successfully");
// }

// form.addEventListener("submit", handleSubmit)

// //ECMASCRIPT --- JAVASCRIPT
// //ganaxlebuli varianti


//EEECCCCCMMMMMMAAAAASSSSSCCCCRRRRIIIIPPPPTTTTT
// let balance = 200;
// // console.log("Balance " + balance + "$");
// console.log(`Balance ${balance}$`) //ECMASCRIPT

// const religions = ["Christianity", "Islam", "Buddhism", "Hinduism", "Judaism"];

// for(let i = 0; i < religions.length; i++){
//     console.log(religions[i])
// }



// for(let index in religions){
//     console.log(religions[index])
// }

// for(let char of religions){
//      console.log(religions[char])
//}

//for ciklis iterator rezervirebuli sityvebi
//of - pirdapir siis elements
//in - gvadzlevs siis yvela indexs




// //ECMASCRIPT --- JAVASCRIPT
// //ganaxlebuli varianti
// const raimeCvladi = "cvladiRaime";
// console.log("Cvladi Raime " + raimeCvladi);

// const raimeCvladii = "cvladiRaime";
// console.log(`Cvladi Raime ${raimeCvladi}`)

// const raimeArr = ["roao", "adkop", "asdoko"];

// for(let i = 0; i < raimeArr.length; i++){
//     console.log(raimeArr[i])
// }

// for(let index in raimeArr){
//     console.log(raimeArr[index])
// }

// if(true){
//     var username = "ika"
//     //let it ro shegveqmna marto kvebis blokshi gamoviyenebt
//     // var - s yvelgan gamoviyenebt
// }
// console.log(username)


//Arrow Function

// const add = (num, num1) => {
//     return num + num1;
// }

// console.log(add(2, 3))

// let p = document.querySelector("p");
// p.addEventListener("click", (e) => {
//     console.log(e + "clicked")
// })