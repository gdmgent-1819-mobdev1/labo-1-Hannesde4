let clockElement = document.querySelector('.clock');
let clockElement2 = document.querySelector('.clock2');
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
clockElement.innerHTML = date.toString();
function updateClock(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let seconds = "";
    let hours = "";
    let hours2 = "";
    let minutes = "";
    let hourNY = date.getHours()-6;
    if(hourNY == -5){
        hourNY = 19;
    }else if(hourNY == -4){
        hourNY = 20;
    }else if(hourNY == -3){
        hourNY = 21;
    }else if(hourNY == -2){
        hourNY = 22;
    }else if(hourNY == -1){
        hourNY = 23;
    };
    
    if(second < 10){
        seconds = "0";
    };
    if(minute < 10){
        minutes = "0";
    };
    if(hour < 10){
        hours = "0";
    };
    if(hourNY < 10){
        hours2 = "0";
    };
    let timeTotal = hours + hour + ":" + minutes + minute + ":" + seconds + second;
    let timeTotal2 = hours2 + hourNY + ":" + minutes + minute + ":" + seconds + second;
    clockElement.innerHTML = timeTotal.toString();
    clockElement2.innerHTML = timeTotal2.toString();
    window.setTimeout(function() {
    updateClock();
    }, 500)
}
updateClock();