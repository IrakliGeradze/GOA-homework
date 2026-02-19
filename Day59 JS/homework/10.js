function randomInRange(min, max){
    return Math.floor(Math.random() * (max - min + 1))
}

console.log(randomInRange(1, 10))