// 5) შექმენით users Map სადაც key იქნება userId ხოლო value იქნება userName დაამატეთ მინიმუმ 4 user map.keys და map.values მეთოდებით გამოიტანეთ მხოლოდ id ები და მხოლოდ სახელები საბოლოოდ map.entries გამოიყენეთ რომ ნახოთ წყვილები

const users = new Map (
    [
        [1, "irakli"],
        [2, "luka"],
        [3, "saba"],
        [4, "achi"]
    ]
)

console.log(users.keys());
console.log(users.values());
console.log(users.entries());
console.log(users)