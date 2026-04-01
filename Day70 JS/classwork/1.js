import Account, {getAccountFullName, getEmail} from './script.js'

let user1 = new Account("irakli", "geradze", "ika@gmail.com", "12345678");
console.log(user1.firstname)

console.log(getAccountFullName(user1));
console.log(user1);

console.log(getEmail(user1));
console.log(user1);