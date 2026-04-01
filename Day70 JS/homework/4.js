// 4) შექმენით Account კლასი და გამოიყენეთ ყველა ნასწავლი კონცეფცია კლასებზე. კლასში უნდა გქონდეთ საჯარო ველები და პირადი ველი #password. გამოიყენეთ constructor სადაც მიიღებთ firstname lastname და password მნიშვნელობებს. შექმენით getter და setter მეთოდები password ველისთვის და ახსენით კომენტარებით როგორ მუშაობს მათი დანიშნულება. დაამატეთ static ველი count რომელიც დაითვლის რამდენი ობიექტი შეიქმნა და static მეთოდი objectCount რომელიც ზრდის ამ მნიშვნელობას ყოველ ახალ ობიექტზე. ასევე მოიყვანეთ მაგალითი პირადი მეთოდის გამოყენებაზე და კომენტარებით ახსენით განსხვავება ჩვეულებრივ მეთოდსა და static მეთოდს შორის

class Account {
    #password
    static count = 0;
    constructor(firstname, lastname, password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.#password = password;
        Account.objectCount()
    }
    get password(){
        return this.#password;
    }
    set password(value){
        this.#password = value;
    }
    showInfo(){
        console.log(`${this.firstname} ${this.lastname}`);
        this.#showSecret();
    }
    #showSecret(){
        console.log("This is private method");
    }
    static objectCount(){
        Account.count++
    }
    static showCount(){
        console.log(`There are ${Account.count} objects.`);
    }
}

let acc1 = new Account("Irakli", "Geradze", "1234");
let acc2 = new Account("Gio", "Beridze", "5678");

Account.showCount();

console.log(acc1)
console.log(acc2)