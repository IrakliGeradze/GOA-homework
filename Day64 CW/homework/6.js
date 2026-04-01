let textarea = document.querySelector("textarea");
let p = document.querySelector("p");

textarea.addEventListener("keydown", function(){
    let length = textarea.value.length;
    p.textContent = "Character Limit: " + length;
    if(length >= 200){
        p.style.color = "red";
        textarea.value = textarea.value.slice(0, 199);
    }
    else{
        p.style.color = "green";
    }
})