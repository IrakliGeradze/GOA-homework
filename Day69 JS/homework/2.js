// 3) შექმენით mySet Set რომელიც შეიცავს გამეორებულ რიცხვებს შემდეგ გამოიყენეთ size add და delete რომ დაამატოთ ახალი ელემენტი წაშალოთ ძველი და გამოიტანოთ საბოლოო ზომა size

let arr = [1, 2, 4, 5, 15, 15, 2, 4, 19, 50, 13];
console.log(arr)
const mySet = new Set(arr);

console.log(mySet.add(25));
console.log(mySet.delete(5));
console.log(mySet)