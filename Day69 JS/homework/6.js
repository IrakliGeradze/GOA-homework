// 7) შექმენით promise რომელიც 2 წამში შეამოწმებს weatherIsGood ცვლადს თუ true იყოს resolve გამოიტანს ტექსტს ამინდი კარგია გასეირნება შემიძლია თუ false იყოს reject ამინდი ცუდია ვერ გავდივარ კომენტარებით ახსენით რა არის pending მდგომარეობა


const promise = new Promise((resolve, reject) => {
    let weatherIsGood = true;
    setTimeout(() => {
        if(weatherIsGood === true){
            resolve("ამინდი კარგია გასეირნება შემიძლია")
        }else{
            reject("ამინდი ცუდია ვერ გავდივარ")
        }
    }, 2000);
})

console.log(promise);

promise
    .then((promise) => {
        console.log(promise);
    })