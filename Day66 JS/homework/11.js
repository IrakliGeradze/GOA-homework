const username = "name";

const student = {
    [username]: "irakli",
    ["exam" + "score"]: 100,
    age: 18,
    city: "samtredia"
}

let ageAndExamScore = {age: student.age, ["exam" + "score"]: student["exam" + "score"]};

console.log(ageAndExamScore)