let time = 0;
let ragaca = setInterval(function(){
    console.log("Current Minutes: " + time);
    time ++;
    if(time === 34){
        clearInterval(ragaca)
        console.log("morcha")
    }
}, 60000)