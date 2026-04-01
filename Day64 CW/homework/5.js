let search = document.querySelector("input");
let searchButton = document.querySelector("button");
let ul = document.querySelector("ul");

searchButton.addEventListener("click", function(){
    for(let i = 0; i < ul.children.length; i++){
        let li = ul.children[i];
        if(li.textContent.includes(search.value)){
            li.style.display = "block";
        }else{
            li.style.display = "none";
        }
    }
})