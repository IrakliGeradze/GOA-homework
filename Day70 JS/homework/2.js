// 2) შექმენით ობიექტი user ველებით name და age და მეორე ობიექტი details ველებით city და country გამოიყენეთ spread ოპერატორი რომ ეს ორი ობიექტი გააერთიანოთ ახალ ობიექტში fullUser და კონსოლში გამოიტანეთ საბოლოო შედეგი კომენტარებით ახსენით როგორ მუშაობს ... ოპერატორი ობიექტების გაერთიანებისას

let user = {
    name: "irakli",
    age: 18,
    details
}
let details = {
    city: "Samtredia",
    country: "Georgia"
}
let fullUser = {
    ...user,
    ...details
}
console.log(fullUser)