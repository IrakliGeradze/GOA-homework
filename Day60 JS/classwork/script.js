function fibbonaci(n) {
    let arr = [0, 1];
    for(let i = 2; i < n; i ++) {
        let newNum = arr[i - 1] + arr[i - 2];
        arr.push(newNum)
    };
    return arr
};

console.log(fibbonaci(5))