class Square {
    constructor(width){
        this.width = width;
        this.height = width;
    }
    get area(){
        return this.width * this.height;
    }
    set area(value){
        this.height = Math.sqrt(value);
        this.width = this.height;
    }
}
let square1 = new Square(5, 10);
console.log(square1.area)
square1.area = 36

// orive methodia
// set - sheudzlia nebismieri klassis kutvnileba shecvalos
// get - vigebt nebismieri klasis kutvnilebas 


// obieqtebshi gvaqvs daculi obieqtebi
// protected - daculi _ 
// private - dafaruli # - kutvnileba romelic ari dafaruli da klasis garet araa xelmisavwdomi wamogeba mxolod sheileba get metodis gamoyenebit da shecvla set metodit

class Bank{
    #balance
    constructor(username, email, password, balance){
        this.username = username,
        this.email = email,
        this._password = password,
        this.#balance = balance
    }
    get balance(){
        return `Balance is ${this.#balance}`;
    }
    set balance(newBalance){
        if(newBalance < 0){
            console.log("Balance must be positive");
        }else{
            this.#balance = newBalance;
        }
        return this.#balance;
    }
}

let account = new Bank("irakli", "ika@gmail.com", "12345678", 5000);
console.log(account.balance);
account.balance = -1000;
console.log(account.balance);
console.log(account);