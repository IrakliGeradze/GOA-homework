function car(brand, model, year, mileage){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.drive = function(){
        this.mileage += 100;
    }
}

let bmw = new car("bmw", "m4", 2018, 1000)
let mercedes = new car("mercedes", "c63s", 2019, 1500)
let audi = new car("audi", "rs7", 2020, 500)

bmw.drive()
mercedes.drive()
audi.drive()

console.log(bmw)
console.log(mercedes)
console.log(audi)