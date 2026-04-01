// 4) შექმენით მასივი passwords სამი ელემენტით. გამოიყენეთ array destructuring თითოეულის მისაღებად. დაამატეთ მეოთხე ელემენტი და გამოიყენეთ rest operator დარჩენილი ელემენტებისთვის

const passwords = [
    "irakli1",
    "irakli2",
    "irakli3"
]

const [password1, password2, password3,] = passwords;

console.log(password1)
console.log(password2)
console.log(password3)