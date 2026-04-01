const numbers = [10, 20, 25, 15, 50];
const [first, second, ...rest] = numbers;

console.log(first)
console.log(second)
console.log(rest)

const newArr = [1, 2, ...numbers, 3, 4];

console.log(newArr)