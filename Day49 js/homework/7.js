function compareNumbers() {
    let first = prompt('first number: ')
    let second = prompt('second number: ')
    document.getElementById('compOut').textContent = Math.max(first, second);

}