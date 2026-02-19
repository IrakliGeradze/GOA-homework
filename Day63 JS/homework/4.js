let form = document.getElementById("taskForm");
let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let taskText = input.value; 
    let li = document.createElement("li");
    li.textContent = taskText;

    let btn = document.createElement("button");
    btn.textContent = "Done";

    btn.addEventListener("click", function() {
        li.style.textDecoration = "line-through";
    });
    li.appendChild(btn);
    list.appendChild(li);
    input.value = "";
});