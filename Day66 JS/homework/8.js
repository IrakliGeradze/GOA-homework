let userInfo = {
    firstName: "irakli",
    lastName: "geradze"
}
let userStats = {
    score: 0,
    level: 0
}

let fullUser = Object.assign(userInfo, userStats);

fullUser.score += 50;

console.log(fullUser)