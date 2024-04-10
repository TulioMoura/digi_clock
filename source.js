var dateField = document.getElementById("date")
var timeField = document.getElementById("time")

function setTime(){
    let currentDate = new Date();
    let hours = currentDate.getHours()
    let minutes =currentDate.getMinutes()
    let seconds = currentDate.getSeconds()

    if(hours.length<2){
        hours = "0"+hours;
    }
    if(minutes.length<2){
        minutes = "0"+minutes;
    }
    if(seconds.length<2){
        seconds = "0"+seconds;
    }
    timeField.innerText = `${hours}:${minutes}:${seconds}`
    dateField.innerText = `${currentDate.toLocaleDateString()}`
}

setInterval(setTime, 1000)
