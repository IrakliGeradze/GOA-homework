// 11) შექმენით names მასივი ['John','Jane','Mike','Anna'] გამოიყენეთ map რომ მიიღოთ ახალი მასივი სადაც თითოეული ელემენტის მნიშვნელობა არის სახელის სიგრძე შემდეგ იგივე გააკეთეთ manualMap ფუნქციით ბოლოს გამოიყენეთ reduce ან manualReduce რომ იპოვოთ ყველა სიგრძის ჯამი და ახსენით როგორ იცვლება acc თითო იტერაციაზე

let names = ['John','Jane','Mike','Anna'];

let newArr = names.map(n => n.length)
console.log(newArr)



let namess = ["irakli", "ika"]
function manualMap(){
    let result = [];
    for(let index of namess){
        result.push(index.length)
    }
    let total = result.reduce((acc, element) => {
        return acc + element;
    })
    console.log(`total is ${total}`);
    return result;
}
console.log(manualMap())
