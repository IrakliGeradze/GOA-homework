// class Car {
//     constructor(model){
//         this.model = model;
//     }
// }

// class horsePower extends Car{
//     constructor(model, exhaust){
//         super(model);
//         this.exhaust = exhaust;
//     }
//     speed(){
//         console.log(`Horsepower added to ${this.model}`);
//     }
// }

// let engine = new horsePower("BMW G82", "Diesel");
// console.log(engine);

// let car = new Car("BMW");
// console.log(car);
// engine.speed();

//-----------------------------------------------------------------------------------------


// set - წყობა, მასივი არ შეიძლება ელემენტების გამეორება 
//მაგალითად როცა რაიმე სიაში დუპლიკატები არგვინდა ვიყენებთ სეტს

// let arr = [1, 2, 3, 4, 5];
// let set = new Set(arr);
// console.log(set);


// set.add(6); // daamatebs siashi
// console.log(set);


// set.delete(2); // washlis 
// console.log(set);


// set.has(3); // sheamowmebs tu aris eg siashi
// console.log(set);


// set.clear(); // mtlianad asuftavebs arrays anu shlis yvelafers
// console.log(set);

//-----------------------------------------------------------------------------------------


// map - data type
//pirveli elementi aris gasagebi meore mnishvneloba

// const myMap = new Map(
//     [
//         ["username", "Irakli"],
//         ["password", "username.split().reverse().join()"],
//         ["active", true]
//     ]
// );

// myMap.set("streak", 2); //chamateba
// myMap.delete("active"); //washla
// console.log(myMap.has("password")) //shemowmeba tu aqvs gasagebi mnishvnelobaze ver getyvis
// console.log(myMap)
// myMap.entries()

//-----------------------------------------------------------------------------------------


// promise
// erterti tipis obieqti javascriptshi - dapireba
// pending
// ro elodeba sanam ar shesruldeba dapireba

// const promise = new Promise((resolve, reject) => {
//     let num = 10;
//     setTimeout(() => {

//     }, 4000)

//     if(num === 10){
//         resolve("Dapireba Shesrulebulia");
//     } else{
//         reject("Dapireba ver shesrulda izvini");
//     }
// })

// console.log(promise);
// promise.then((promise) => {
//     console.log(promise);
// })


//------------------------------------------------------------------------------------------


//thread - gamshvebi thread - 1 thread => erti konkretuli gamomtvleli xazi

//fetch - apis wamogeba

//json - javascript object notation

let main = document.querySelector("main");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", fetchInfo, input.value)

function renderInfo(info){
    main.innerHTML += `
        <div>
            <h2>${info.username}</h2>
            <img src="${info.avatar_url}"/>
            <p>Bio: ${info.honor}</p>
            <p>Followers: ${info.clan}</p>
            <p>Following: ${info.ranks}</p>
            <p>Repositories: ${info.languages}</p>
        </div>
    `
}

function fetchInfo(){
    let username = input.value;
    let promise = fetch(`https://www.codewars.com/api/v1/users/${username}`);

    promise
        .then(result => result.json())
        .then(data => renderInfo(data))
}