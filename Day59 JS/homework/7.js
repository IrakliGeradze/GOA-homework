let button = document.getElementById("btn")

button.onclick = function(){
    let p = document.createElement("p");
    p.textContent = Math.floor(Math.random() * 1001);
    document.body.appendChild(p);
}