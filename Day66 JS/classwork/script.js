let nameField = "Username"
let me = {
    [nameField]: "irakli",
    ["pass" + "word"]: "12345678",
    height: 195,
    girls: "yes",
    balance: 150000000,
    deposit: function(){
        this.balance += 150;
    },
}
console.log(me.balance)
me.deposit()
console.log(me.balance)
console.log(me[nameField])


function fullName (fname, lname) {
    return fname + " " + lname;
}

const fullName = (fname, lname) => {
    return fname + " " + lname;
}

console.log(fullName("irakli", "ilkari"))


let account1 = {
    user: "irakli"
}
let account2 = {
    lastname: "geradze"
}
let account3 = Object.assign(account1, account2);//shegvidzlia shevqmnat mesame obieqti da shignit mocemuli yvelaferi gaavaertianot
console.log(account3)

//reference - misamarti



let pirveli = {
    username: "irakli",
    password: "12345678"
}
// let meore = {
//     location: "georgia",
//     number: 555555555
// }
// let mesame = Object.assign(pirveli, meore, {location: "turkey"});

// console.log(mesame);


//es6 desctructing

// const arr = ["asdad", "iki9c", "asooc"];

// let [ar, ar1, ar2] = arr;

// console.log(ar)
// console.log(ar1)
// console.log(ar2)

// const arro = ["asdad", "iki9c", "asooc"];
// console.log(arro[0])


// let ragaca = {
//     username: "irakli",
//     password: "12345678"
// }

//Desctructuring - sashualebas gvadzlevs masividan an obieqtidan elementebi cvladebshi gavxsnat

// let ragaca = {
//     username: "irakli",
//     password: "12345678"
// }

// {username, password, location="georgia"}
// ({username: firstName, password, location="georgia", dinosaur="zurabi"} = ragaca);

// console.log(location)
// console.log(username)
// console.log(password)



// //rest, spread
// //spread - gamoiyeneba masivis elementis gasashlelad
// //magalitad gvaqvs didi masivi da shuashi vamatebt values
// const nums = [1, 2, 3, 4, 510000];
// const otherNums = [15, 20, ...nums ,67];

// const[num1, num2, ...others] = otherNums;

// console.log(num1)
// console.log(num2)
// console.log(others)


// //rest - sashualebas gvadzlevs funcqsiashi mivigot usasrulo raodenobis argumentebi
// function anything(argument, ...rest){
//     console.log(`First argument: ${argument}`)
//     console.log(`Rest arguments: ${rest}`)
// }

// anything("bevri", "sxvadasxva", "tipis", "monacemebi");




// function magic(...nums) {
//     let sum = 0;
//     nums.filter(n => n % 2 == 0).map(el => sum+= el);
//     return sum;
// }
// console.log(magic(1, 2, 3, 4, 5, 6));


//CCCCLLLLLAAASSSEEESSSS

// class Account {
//     static accounts = 0;

//     constructor(firstName, lastName, balance, password){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.balance = balance;
//         this._password = password;
//         Account.accounts += 1;
//     }
//     //static || method
//     static logAccounts(){
//         console.log(`Currently there are ${Account.accounts} accounts`)
//     }
//     deposit(){
//         this.balance += 150;
//     }
//     withdraw(){
//         this.balance -= 100;
//     }
//     getBalance(){
//         return this.balance;
//     }
//     get password (){
//         return this.password;
//     }
// }

// let obj1 = new Account("Irakli", "Geradze", 5000);
// let obj2 = new Account("John", "Doe", 1500);

// Account.logAccounts();

// obj1.deposit();
// obj1.withdraw();
// obj2.deposit();
// obj2.withdraw();

// obj1.password("12345678");
// obj2.password("87654321");

// console.log(obj1.getBalance())
// console.log(obj2.getBalance())
// console.log(obj1)
// console.log(obj2)