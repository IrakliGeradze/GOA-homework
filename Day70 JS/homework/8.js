// 8) გამოიყენეთ numbersArr მასივი და reduce მეთოდი რომ იპოვოთ ყველა რიცხვის ჯამი და ნამრავლი გამოიყენეთ საწყისი მნიშვნელობა მაგალითად 0 ან 1 შემდეგ იგივე ოპერაციები შეასრულეთ manualReduce ფუნქციით და თქვენი სიტყვებით ახსენით რას ცვლის საწყისი მნიშვნელობა ჯამისა და ნამრავლის დათვლის პროცესში

let numbersArr = [1, 5, 1, 50, 150, 20];
function sum(acc, element){
    return acc + element
}
let total = numbersArr.reduce(sum)
console.log(total)