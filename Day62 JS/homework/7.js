let time = 10;
let ragaca = setInterval(function(){
    console.log(time);
    time--;
    if(time === 0){
        clearInterval(ragaca);
        console.log("morcha")
    }
}, 1000)