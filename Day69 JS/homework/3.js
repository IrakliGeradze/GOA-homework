// 4) შექმენით productPrices Map პროდუქტების ფასებით გამოიყენეთ for of ლუპი რომ დაბეჭდოთ თითო key და value შემდეგ map.set ით გაზარდეთ ერთ-ერთი პროდუქტის ფასი 20 პროცენტით

const productPrices = new Map(
    [
        ["rice", 20],
        ["potato", 150],
        ["shawarma", 300]
    ]
)

for(let prices of productPrices){
    console.log(prices);
}
