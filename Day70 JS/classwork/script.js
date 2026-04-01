//map, filter, forEach, reduce

//Map - yvela iterable elementze gamoidzaxebs funqcias da daabrunebs shedegs titoeul elementze,
//magalitad orze gavamravlot an gavyot da ase shemdeg


//iterable - iseti monacemta tipi romlitac shegvidzlia ciklit gadavuarot.
//iterable.map(...)



//            //array literal
// let arr = [1, 2, 3, 4, 5, 6];

// // function squareNums(element){
// //     return element ** 2;
// // }

// let newArr = arr.map((element) => {
//     return element ** 2;
// });
// // console.log(newArr);


// let newAr = arr.map(n => n * 2)
// console.log(newAr);


//filter - gafiltvra da axal sias daabrunebs dzvels ar shecvlis

// let newArr = [1, 2, 3, 4, 5, 6];

// function isEven(num){
//     return num % 2 === 0;
// }

// let filteredArr = newArr.filter(isEven);
// let filteredArr = newArr.filter(n => n % 2 === 0); // mokled dawera
// console.log(filteredArr);


//forEach - gamousadegari

// let arr = [1, 2, 3, 4, 5, 6];

// let highest = 0;

// arr.forEach((num) => {
//     if(num > highest){
//         highest = num;
//     }
// })
// console.log(highest);



//reduce - gebulobs parametrad or cvlads mag: acc, element;
//acc : jer 0 ia an ar arsebobs
//element : meore gameorebidan iwyebs ukve atvlas

// let myArr = [50, 100, 150, 200, 250];

// // function sum(accumulator, element){
// //     return accumulator + element;
// // }

// // let total = myArr.reduce(sum);
// // console.log(total);

// let total = myArr.reduce((accumulator, element) => {
//     return accumulator + element;
// }, 0);
// console.log(total);

//Manual Map

// function manualMap(iterable, callback){
//     let result = [];
//     for(let item of iterable){
//         result.push(callback(item));
//     }
//     return result;
// }

// console.log(manualMap([1, 2, 3, 4, 5], n => n * 2));

// //Manual filter

// function manualFilter(iterable, callback){
//     let result = [];
//     for(let item of iterable){
//         if(callback(item)){
//             result.push(item);
//         }
//     }
//     return result;
// }

// console.log(manualFilter([1, 2, 3, 4, 5, 6], n => n % 2 === 0));

//

// export class Account {
//     constructor(firstname, lastname, email, password){
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//         this.password = password;
//     }
// }

// function getAccountFullName(user){
//     return `${user.firstname} ${user.lastname}`;
// }

// function getAccountEmail(user){
//     return `${user.email}`
// }

// // export / import

// //default - mtavari rac gadis failidan// shegvidzlia nebismieri rame davarkvat
// //alias - zedmet saxeli

// export default Account;

//         //aliasi
// export {getAccountFullName};
// export {getAccountEmail as getEmail}

// sync vs async

// async await

async function data(){
    // const response = await new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("123123")
    //     }, 2000)
    // })
    // const dataa = await response.json();
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const dataa = await response.json();
    console.log(dataa);
}

data();
console.log("გამარჯობა სამყაროვ")

// try - catch

try {
    1500000000 / 0
} catch (error) {
    return `${error}`
}

async function dataBase(){
    try{
        const pirveli = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const dato = await response.json();
        dato.map((object) => {
            document.body.innerHTML += `
                <h2>${object.title}</h2>
            `
        })
    } catch(error){
        console.log(error);
    }
}
dataBase();