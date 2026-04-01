// 3) შექმენით person ობიექტი firstName, lastName და age ველებით. გამოიყენეთ object destructuring და აიღეთ firstName და age ცალკე ცვლადებში. სცადეთ ისეთი ველის დესტრუქტურიზაცია რომელიც ობიექტში არ არსებობს და დააკვირდით მიღებულ მნიშვნელობას


let person = {
    firstName: "irakli",
    lastName: "geradze",
    age: 18
}

let {firstName, age} = person;

console.log(firstName)
console.log(age)