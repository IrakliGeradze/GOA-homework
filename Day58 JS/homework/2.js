// 3) შექმენით student ობიექტის კონსტრუქტორი რომელსაც ექნება 5 კუთვნილება: name, age, grade, active, promote (მეთოდი), შექმენით მინიმუმ 3 ობიექტი და თითოეულზე გამოიძახეთ promote მეთოდი, საბოლოოდ გამოიტანეთ ყველა ობიექტი, კომენტარით ახსენით რა არის მეთოდი და რა განსხვავებაა property-სა და method-ს შორის

function Student(name, age, grade, active){
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.active = active;
    this.promote = function(){
        this.grade += 10;
    }
}
let student1 = new Student("irakli", 18, 90, true)
let student2 = new Student("luka", 19, 100, true)
let student3 = new Student("giorgi", 21, 80, true)

student1.promote()
student2.promote()
student3.promote()

console.log(student1)
console.log(student2)
console.log(student3)