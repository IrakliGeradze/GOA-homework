// 4) გატესტეთ და გამოიყენეთ თითეული მოვლენა, ასევე აღწერეთ თუ როდის მოხდება ეს მოვლენები
// onclick
// onload
// onunload
// onchange
// onmouseover
// onmouseout
// onmousedown
// onmouseup
// onblur
// onfocus

let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("clicked")
})
btn.addEventListener("load", function(){
    console.log("loaded")
})
btn.addEventListener("unload", function(){
    console.log("unloaded")
})
btn.addEventListener("change", function(){
    console.log("changed")
})
btn.addEventListener("mouseover", function(){
    console.log("mouseover")
})
btn.addEventListener("mouseout", function(){
    console.log("mouseout")
})
btn.addEventListener("mousedown", function(){
    console.log("mousedown")
})
btn.addEventListener("mouseup", function(){
    console.log("mouseup")
})
btn.addEventListener("blur", function(){
    console.log("blured")
})
btn.addEventListener("focus", function(){
    console.log("focused")
})