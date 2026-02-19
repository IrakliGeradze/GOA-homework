function manualSlice(arr, start, end){
    let result = []
    for(let i = start; i < end; i++){
        result.push(arr[i])
    }
    return result
}

let numbers = [1, 2, 3, 4, 5];

console.log(manualSlice(numbers, 1, 4));