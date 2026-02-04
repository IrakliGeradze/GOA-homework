function numbersBetween(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

function calculateAverage(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum / arr.length;
}
const numbers = numbersBetween(3, 8);
const average = calculateAverage(numbers);

console.log(numbers);
console.log(average);
