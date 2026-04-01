// 7) შექმენით ორი ფუნქცია: 
// greet(name) ჩვეულებრივი function სინტაქსით აბრუნებს `Hello, ${name}`
// goodbye = (name) => `Goodbye, ${name}` arrow function-ის გამოყენებით
// ორივე გამოიძახეთ სხვადასხვა არგუმენტით და კომენტარებით ახსენით რა უპირატესობა აქვს arrow function-ს მოკლე, მარტივ ფუნქციებში და eventListener-ებში

function greet(name){
    return `Hello, ${name}`
}
function goodbye(name){
    return `Goodbye, ${name}`
}

greet("irakli");
goodbye("irakli");