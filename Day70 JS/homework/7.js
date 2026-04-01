// 7) შექმენით fruits მასივი ['apple','banana','orange'] გამოიყენეთ forEach რომ console.log ში დაბეჭდოთ თითოეული ხილი დიდი ასოებით შემდეგ იგივე შედეგის მისაღებად გამოიყენეთ manualForEach და კომენტარებით ახსენით რა მნიშვნელობები გადაეცემა callback ფუნქციას თითო იტერაციაზე

let fruits = ['apple','banana','orange'];
fruits.forEach(function(value){
    console.log(value.toUpperCase());
})
