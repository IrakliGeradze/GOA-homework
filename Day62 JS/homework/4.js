let triala = document.getElementById("shida");
let direction = "right";
let positionX = 0;
let positionY = 0;

function animation(){
    if(direction === "right"){
        positionX++;
        if(positionX >= 150){
            direction = "down";
        }
    }
    if(direction === "down"){
        positionY++;
        if(positionY >= 150){
            direction = "left";
        }
    }
    if(direction === "left"){
        positionX--;
        if(positionX <= 0){
            direction = "up";
        }
    }
    if(direction === "up"){
        positionY--;
        if(positionY <= 0){
            direction = "right";
        }
    }
    triala.style.left = `${positionX}px`;
    triala.style.top = `${positionY}px`;
}
setInterval(animation, 10)