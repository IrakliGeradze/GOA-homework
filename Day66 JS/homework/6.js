class bankAccount {
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
    deposit(){
        this.balance += 50;
    }
    withdraw(){
        this.balance -= 50;
    }
    getBalance(){
        return this.balance;
    }
}