function Number(number){
    this.number = number;
    this.even = number % 2 == 0;
}
let numbers = []

for(let i = 0; i <= 10; i++){
    let ragac = new Number(i)
    numbers.push(ragac)
}
console.log(numbers)