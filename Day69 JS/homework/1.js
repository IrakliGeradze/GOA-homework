// 2) შექმენით studentsMap Map სადაც key არის სტუდენტის სახელი ხოლო value მისი ქულა დაამატეთ 5 სტუდენტი შემდეგ გამოიყენეთ map.get და map.has რომ შეამოწმოთ კონკრეტული სტუდენტი ბოლოს map.delete ით წაშალეთ ერთი სტუდენტი და ჩაწერეთ რა დარჩა


const studentsMap = new Map(
    [
        ["irakli", 50],
        ["luka", 20],
        ["saba", 30],
        ["nugo", 65],
        ["zurab", 50]
    ]
)

console.log(studentsMap.get("irakli"));
console.log(studentsMap.has("luka"));
studentsMap.delete("zurab")
console.log(studentsMap)