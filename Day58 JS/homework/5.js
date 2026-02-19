function employee(name, position, salary, active){
    this.name = name;
    this.position = position;
    this.salary = salary;
    this.active = active
    this.raiseSalary = function(){
        this.salary += 200;
    }
}

let employess = [
    new employee("irakli", "developer", 3000, true),
    new employee("luka", "manager", 5000, true),
    new employee("gio", "designer", 1500, true)
]

for(let i = 0; i < employess.lenght; i++){
    employess[i].raiseSalary();
}

console.log(employess)