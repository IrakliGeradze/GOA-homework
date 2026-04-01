// 9) შექმენით promise simulateLoading რომელიც setTimeout მეშვეობით 1500 მილიწამში დააბრუნებს resolve ტექსტით მონაცემები ჩაიტვირთა შემდეგ გამოიყენეთ then და catch და ახსენით რეალურ ცხოვრებაში როდის გვჭირდება დატვირთვის სიმულაცია

const simulateLoading = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("მონაცემები ჩაიტვირთა")
    }, 1500)
})

simulateLoading
    .then((simulateLoading) => {
        console.log(simulateLoading);
    })
    .catch((error) => {
        console.log(error);
    })