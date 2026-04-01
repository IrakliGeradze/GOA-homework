// 9) შექმენით manualMap ფუნქცია რომელიც იღებს მასივს და callback ფუნქციას და აბრუნებს ახალ მასივს გამოიყენეთ ეს manualMap numbersArr მასივზე რომ შექმნათ ახალი მასივი სადაც ყველა რიცხვი გაორმაგებულია შემდეგ იგივე გააკეთეთ ჩაშენებული map მეთოდით და შეადარეთ მიღებული შედეგები

let numbersArr = [5, 15, 20]

function manualMap(arr, callback){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr;
}

let doubledManual = manualMap(numbersArr, function(value){
    return value * 2;
});
console.log(doubledManual);

let doubledMap = numbersArr.map(function(value){
    return value * 2;
});

console.log(doubledMap);

let newArr = numbersArr.map(n => n * 2);
console.log(newArr)