// addEventListener---------------------daamate movlenis msmeneli
// let input = document.querySelector("input");

// // function handle(e){
// //     if(e.key === "e" || e.key === "E"){
// //         console.log("Zurabis dinozavri" + "axta")
// //     }
// // }

// //click, resize, keydown
// //click - daklikeba
// //resize - zomis dapataraveba, gazrda
// //keydown rame gilakze dachera
// // btn.addEventListener("click", handle)

// let stat = document.querySelector("p");
// let characterLimit = 200

// function textLimit(){
//     let currentMessage = input.value;
//     let messageLenght = currentMessage.length;
//     if(messageLenght < characterLimit) {
//         stat.style.color = "green";
//     }else if(messageLenght >= characterLimit){
//         stat.style.color = "red";
//         stat.textContent = "stop typing..."
//     }
//     stat.textContent = "Character Limit is: " + messageLenght + "/" + characterLimit;
// }
// input.addEventListener("keydown", textLimit)

// //callback
// //bubbling - bubblingis principisas tu gviweria false jer movlenis msmeneli da zogadad kodis logika jer daiwyeba shvilisgan da gadava mshobeltan == ANU magalitadd
// //gvaqvs p -> div -> form jer daiwyeba p ti shemdeg div it da shemdeg form it
// // tu divs davachert gadava formze -- ESARI BUBBLING
// //capturing

// input.addEventListener("keydown", textLimit)

// let btn = document.querySelector("button");

// function press(){
//     console.log("pressed")
// }
// function up(){
//     console.log("up")
// }

// btn.addEventListener("mousedown", press)
// btn.addEventListener("mouseup", up)



//rodesac konkretuli movlena xdeba ramdenime elemenetzee ertdroulad radganac isi iarian ertmanettan dakavshirebuli
//ert erti mshobeli da meore shvili, aset shemtxvevasi romeli movlena unda gaeshvas pirveli?
// bubbling - false (default) 1.p -> 2.div
// capturing - true 1.div -> 2.p
// const div = document.querySelector("div");
// const p = document.querySelector("p");

// // div.addEventListener("click", function() {
// //     console.log("Div got clicked")
// // })
// // p.addEventListener("click", function() {
// //     console.log("P got clicked")
// // })

// function divClick(){
//     console.log("Div got clicked")
// }
// function pClick(){
//     console.log("P got clicked")
// }

// div.addEventListener("click", divClick, true)
// p.addEventListener("click", pClick, true)

// let images = [
//     "https://www.sololearn.com/uploads/slider/1.jpg",
//     "https://www.sololearn.com/uploads/slider/2.jpg",
//     "https://www.sololearn.com/uploads/slider/3.jpg",
// ]

// const nextBtn = document.getElementById("nextbtn");
// const prevBtn = document.getElementById("prevbtn");
// const image = document.getElementById("image");

// image.src = images[0];
// let currentImageIndex = 0;

// nextBtn.addEventListener("click", function(){
//     image.src = images[currentImageIndex];
//     currentImageIndex++;
//     if(currentImageIndex === images.length - 1){
//         currentImageIndex = 0;
//     }
// })

// prevBtn.onclick = function(){
//     if(currentImageIndex === 0){
//         currentImageIndex = images.length - 1;
//     }
//     image.src = images[currentImageIndex];
//     currentImageIndex--;
// }

//LocalStorage - is metodebi
//setItem - elementis chamateba
//getItem - elementis wamogeba
//removeItem - elementis washla 

localStorage.setItem("Name", "John")
localStorage.setItem("Age", 25)

let name = localStorage.getItem("Name") //LocalStorage - arwaishleba da imaxsovrebs
let age = localStorage.getItem("Age")

sessionStorage.setItem("Name", "John") //sessionStorage - waishleba ro gamortav saits anu arimaxsovrebs
sessionStorage.setItem("Age", 25)

let Sname = sessionStorage.getItem("Name")
let Sage = sessionStorage.getItem("Age")

localStorage.removeItem("Name")