function task(title, desc, state, deadline){
    this.title = title;
    this.desc = desc;
    this.state = state;
    this.deadline = deadline;
    this.complete = function(){
        this.state = "completed";
    }
}

let task1 = new task("for loops", "explain for loops", "started", 10)
task1.complete()
console.log(task1)
let task2 = new task("while loops", "explain while loops", "started", 15)
task2.complete()
console.log(task2)
let task3 = new task("if statements", "explain if statements", "started", 20)
task3.complete()
console.log(task3)

console.log(task1)
console.log(task2)
console.log(task3)


