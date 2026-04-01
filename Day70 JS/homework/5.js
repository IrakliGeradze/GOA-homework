// 5) შექმენით myArr მასივი ["AB","CD","ED"] გამოიყენეთ map მეთოდი რომ დააბრუნოთ ახალი მასივი სადაც თითოეულ ელემენტს ბოლოში ემატება თავისი ინდექსი მაგალითად "AB#0" შემდეგ იგივე შედეგი მიიღეთ თქვენი manualMap ფუნქციის გამოყენებით და კომენტარებში ახსენით callback ის სამი პარამეტრი value index და arr

let myArr = ["AB", "CD", "ED"]
let newArr = myArr.map(function(value, index, arr){
    return value + "#" + index;
});

console.log(newArr)

function manualMap(arr, callback){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i], i, arr));
    }
    return newArr;
}

let result2 = manualMap(myArr, function(value, index, arr){
    return value + "#" + index;
});
console.log(result2);